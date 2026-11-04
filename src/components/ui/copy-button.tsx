import { CheckIcon, CopyIcon, XIcon } from "lucide-react";
import {
  type MouseEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";

export interface CopyButtonProps extends Omit<ButtonProps, "children"> {
  /** The label beside the icon; leave it out for an icon-only button. */
  children?: ReactNode;
  /** The text to copy. Without it, pressing the button does nothing. */
  content?: string;
  /**
   * Whether the check shows, to hold that state yourself. Pair it with
   * `onCopiedChange`.
   */
  copied?: boolean;
  /**
   * What screen readers hear once the text is on the clipboard.
   *
   * @default "Copied"
   */
  copiedLabel?: string;
  /**
   * What screen readers hear when the clipboard refuses the text.
   *
   * @default "Couldn't copy"
   */
  failedLabel?: string;
  /** Called when the check shows (`true`) and when it goes (`false`). */
  onCopiedChange?: (copied: boolean) => void;
  /**
   * Called when the clipboard refuses the text: no permission, or a page
   * not served over HTTPS.
   */
  onCopyError?: (error: unknown) => void;
  /**
   * Called with the text when a press asks to copy it. Return `false` to
   * cancel the copy, after validating it or to copy it some other way.
   */
  onCopyRequest?: (content: string) => boolean | undefined;
  /**
   * How long the check (or the cross, after a failed copy) stays before
   * the copy icon comes back, in milliseconds.
   *
   * @default 3000
   */
  resetDelay?: number;
}

type Status = "idle" | "copied" | "failed";

const ICON =
  "col-start-1 row-start-1 scale-50 opacity-0 transition-[opacity,scale] duration-150 ease-out motion-reduce:scale-100 motion-reduce:transition-opacity";

const shownStatus = (status: Status, copied?: boolean): Status => {
  if (status === "failed" || copied === undefined) {
    return status;
  }
  return copied ? "copied" : "idle";
};

export const CopyButton = (props: CopyButtonProps) => {
  const {
    content,
    copied,
    copiedLabel = "Copied",
    failedLabel = "Couldn't copy",
    onCopyRequest,
    onCopiedChange,
    onCopyError,
    resetDelay = 3000,
    onClick,
    children,
    size,
    ...rest
  } = props;
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const settle = (next: Exclude<Status, "idle">) => {
    window.clearTimeout(timer.current);
    if ((next === "copied") !== (status === "copied")) {
      onCopiedChange?.(next === "copied");
    }
    setStatus(next);
    timer.current = window.setTimeout(() => {
      setStatus("idle");
      if (next === "copied") {
        onCopiedChange?.(false);
      }
    }, resetDelay);
  };

  const click = async (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (!content || onCopyRequest?.(content) === false) {
      return;
    }
    try {
      await navigator.clipboard.writeText(content);
      settle("copied");
    } catch (error) {
      settle("failed");
      onCopyError?.(error);
    }
  };

  const shown = shownStatus(status, copied);

  return (
    <Button
      onClick={click}
      size={size ?? (children ? "default" : "icon")}
      {...rest}
    >
      <span
        aria-hidden="true"
        className="group/copy grid place-items-center"
        data-slot="copy-button-icon"
        data-state={shown}
      >
        <CopyIcon
          className={cn(
            ICON,
            "group-data-[state=idle]/copy:scale-100 group-data-[state=idle]/copy:opacity-100"
          )}
        />
        <CheckIcon
          className={cn(
            ICON,
            "group-data-[state=copied]/copy:scale-100 group-data-[state=copied]/copy:opacity-100"
          )}
        />
        <XIcon
          className={cn(
            ICON,
            "group-data-[state=failed]/copy:scale-100 group-data-[state=failed]/copy:opacity-100"
          )}
        />
      </span>
      {children}
      <span className="sr-only" data-slot="copy-button-status" role="status">
        {shown === "copied" ? copiedLabel : null}
        {shown === "failed" ? failedLabel : null}
      </span>
    </Button>
  );
};
