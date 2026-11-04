import {
  type ComponentProps,
  type CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

export interface SyntaxTextProps
  extends Omit<ComponentProps<"div">, "children"> {
  /** How long one token takes to fade in, in milliseconds. @default 400 */
  duration?: number;
  /**
   * The words coloured as keywords, for another language than JavaScript
   * or TypeScript.
   *
   * @default JavaScript and TypeScript's keywords
   */
  keywords?: string[];
  /**
   * What screen readers call the code, such as its file name. The code
   * takes focus, so a keyboard can scroll a line wider than the box; with
   * a label it's a named region.
   */
  label?: string;
  /**
   * Whether each line shows its number in a gutter. The numbers are
   * neither selected nor copied with the code, nor read out.
   *
   * @default false
   */
  lineNumbers?: boolean;
  /**
   * The time between one token and the next, in milliseconds. A long
   * snippet goes faster, so it never takes more than two seconds in all.
   *
   * @default 30
   */
  stagger?: number;
  /** The code. Its lines and indentation are kept. */
  text: string;
  /**
   * When it plays: as soon as it's on the page, or once it scrolls into
   * view.
   *
   * @default "view"
   */
  trigger?: "mount" | "view";
}

const KEYWORD =
  /^(?:as|async|await|break|case|catch|class|const|continue|default|delete|do|else|enum|export|extends|false|finally|for|from|function|if|implements|import|in|instanceof|interface|let|new|null|of|return|static|super|switch|this|throw|true|try|type|typeof|undefined|var|void|while|yield)$/;

const TOKEN =
  /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)|(\d[\w.]*%?)|([A-Za-z_$][\w$]*)|(\s+)|([^\s\w$"'`/]+|\S)/g;

const PASCAL = /^[A-Z][\w$]*[a-z]/;

const TAG_END = /^}?>$/;

const LINE = /[^\n]+|\n/g;

const MOST = 2000;

const GROUPS = [
  "comment",
  "string",
  "number",
  "plain",
  "space",
  "punctuation",
] as const;

type Kind = (typeof GROUPS)[number] | "function" | "keyword";

const wordKind = (
  matches: RegExpMatchArray[],
  index: number,
  keywords: string[] | undefined,
  prose: boolean
): Kind => {
  const word = matches[index]?.[0] ?? "";
  if (keywords ? keywords.includes(word) : KEYWORD.test(word)) {
    return "keyword";
  }
  const before = matches[index - 1]?.[0] ?? "";
  const opener = before === "/";
  const prevWord = opener ? matches[index - 2]?.[0] : before;
  const tag =
    prevWord?.endsWith("<") && !(before === "<" && Boolean(matches[index - 2]?.[4]));
  const call = Boolean(matches[index + 1]?.[0]?.startsWith("("));
  return tag || call || (PASCAL.test(word) && !prose) ? "function" : "plain";
};

interface Token {
  inline: boolean;
  key: number;
  kind: Kind;
  order: number;
  text: string;
}

const tokenize = (
  code: string,
  keywords: string[] | undefined,
  stagger: number
) => {
  const matches = Array.from(code.matchAll(TOKEN));
  const lines: Token[][] = [[]];
  let order = 0;
  let prose = false;
  matches.forEach((match, key) => {
    const group = GROUPS[match.slice(1).findIndex(Boolean)] ?? "punctuation";
    const kind =
      group === "plain" ? wordKind(matches, key, keywords, prose) : group;
    const inline = match[0].includes("\n");
    for (const [text] of match[0].matchAll(LINE)) {
      if (text === "\n") {
        lines.push([]);
      } else {
        lines.at(-1)?.push({ inline, key, kind, order, text });
      }
    }
    if (kind !== "space") {
      prose =
        kind === "plain" || (kind === "punctuation" && TAG_END.test(match[0]));
      order += 1;
    }
  });
  return {
    digits: String(lines.length).length,
    lines: lines.map((tokens, key) => ({ key, tokens })),
    step: Math.min(stagger, MOST / Math.max(order, 1)),
  };
};

const COLOR: Record<Kind, string> = {
  comment: "text-muted-foreground italic",
  function: "text-violet-400 dark:text-violet-300 font-medium",
  keyword: "text-amber-500 dark:text-amber-300 font-medium",
  number: "text-blue-500 dark:text-blue-300",
  plain: "text-foreground",
  punctuation: "text-muted-foreground",
  space: "",
  string: "text-emerald-500 dark:text-emerald-300",
};

export const SyntaxText = (props: SyntaxTextProps) => {
  const {
    duration = 400,
    keywords,
    label,
    lineNumbers = false,
    stagger = 30,
    text,
    trigger = "view",
    className,
    ...rest
  } = props;
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(trigger === "mount");
  const code = tokenize(text, keywords, stagger);

  useEffect(() => {
    const node = root.current;
    if (trigger !== "view" || !node) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          setVisible(true);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [trigger]);

  return (
    <div
      className={cn(
        "group/syntax-text rounded-lg border bg-card p-4 font-mono text-card-foreground text-sm has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50",
        className
      )}
      data-slot="syntax-text"
      data-view={visible ? "in" : "out"}
      dir="ltr"
      ref={root}
      {...rest}
    >
      <pre
        aria-label={label}
        className="overflow-x-auto overflow-y-hidden leading-relaxed outline-none"
        role={label ? "region" : undefined}
        style={
          {
            "--syntax-text-digits": lineNumbers ? code.digits : undefined,
            "--syntax-text-duration":
              duration === undefined ? undefined : `${duration}ms`,
            "--syntax-text-stagger": `${code.step}ms`,
          } as CSSProperties
        }
        tabIndex={0}
      >
        <code className={cn(lineNumbers && "[counter-reset:syntax-text-line]")}>
          {code.lines.map((line) => (
            <span
              className={cn(
                lineNumbers &&
                  "[counter-increment:syntax-text-line] before:me-4 before:inline-block before:w-[calc(var(--syntax-text-digits)*1ch)] before:select-none before:text-end before:text-muted-foreground before:tabular-nums before:content-[counter(syntax-text-line)_/_'']"
              )}
              data-slot="syntax-text-line"
              key={line.key}
            >
              {line.tokens.map((token) =>
                token.kind === "space" ? (
                  token.text
                ) : (
                  <span
                    className={cn(
                      "transition-opacity duration-300",
                      token.inline ? "" : "inline-block",
                      COLOR[token.kind]
                    )}
                    data-kind={token.kind}
                    key={token.key}
                  >
                    {token.text}
                  </span>
                )
              )}
              {line.key === code.lines.length - 1 ? null : "\n"}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
};
