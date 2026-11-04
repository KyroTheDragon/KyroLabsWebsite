import { CheckIcon, ArrowRight, FolderGit2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";
import { Guides } from "@/components/ui/guides";
import { ShineButton } from "@/components/ui/shine-button";
import { SyntaxText } from "@/components/ui/syntax-text";

const HIGHLIGHTS = [
  "Production platforms: Haulverse & Rovex",
  "Real-time event streams, WebSockets & telemetry",
  "Clean architecture, type-safe full stack systems",
];

const FILE = "kryo.config.ts";

const CODE = `import { defineProject } from "@kryo/foundation";

export default defineProject({
  organization: "Kryo Labs",
  platforms: [
    { name: "Haulverse", domain: "Logistics & Fleet" },
    { name: "Rovex", domain: "Telemetry & Monitoring" },
    { name: "Accordian", domain: "Focused Notes" }
  ],
  stack: ["TypeScript", "React", "Fastify", "PostgreSQL"]
});`;

export const HeroCodePreview = () => (
  <section aria-labelledby="hero-title" className="relative overflow-x-clip px-4 sm:px-6">
    <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
      <Guides bleed marks="top" rules="top" />

      <div className="relative flex flex-col items-start justify-center px-6 py-16 sm:px-12 sm:py-20 lg:border-s lg:py-24">
        <Guides
          className="max-lg:hidden"
          marks="start"
          rules="none"
          sides={false}
        />
        <h1
          id="hero-title"
          className="font-bold text-4xl tracking-tight sm:text-5xl text-foreground leading-[1.15]"
        >
          We build software projects, platforms, and technical tools.
        </h1>

        <p className="mt-5 max-w-md text-base text-muted-foreground leading-relaxed sm:text-lg">
          Kryo Labs develops modern production software. We create focused, reliable systems designed to solve real operational problems.
        </p>

        <ul className="mt-6 flex flex-col gap-2.5 text-sm">
          {HIGHLIGHTS.map((item) => (
            <li className="flex items-center gap-3 text-foreground" key={item}>
              <CheckIcon
                aria-hidden="true"
                className="size-4 shrink-0 stroke-[2.5] text-foreground"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <ShineButton asChild size="default">
            <a href="#projects" className="flex items-center gap-2">
              <FolderGit2 className="size-4" aria-hidden="true" />
              View Projects
            </a>
          </ShineButton>
          <Button asChild size="default" variant="outline">
            <a href="#contact" className="flex items-center gap-1.5">
              Contact Us
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>

      <div className="relative flex min-w-0 items-center p-6 max-lg:border-t sm:p-8 lg:order-first lg:py-16">
        <div className="relative w-full min-w-0 p-3 sm:p-5">
          <Guides extend="sm" marks="corners" />
          <div className="relative w-full min-w-0 overflow-hidden rounded-lg border border-border bg-card text-foreground shadow-xl">
            <div className="flex items-center justify-between border-b border-border py-2 px-4 bg-muted/30">
              <div aria-hidden="true" className="flex items-center gap-2">
                <span className="size-2 rounded-sm bg-muted-foreground/40" />
                <span className="size-2 rounded-sm bg-muted-foreground/40" />
                <span className="size-2 rounded-sm bg-muted-foreground/40" />
                <span className="font-mono text-muted-foreground text-xs ml-1">
                  {FILE}
                </span>
              </div>
              <CopyButton
                className="text-muted-foreground"
                content={CODE}
                size="sm"
                variant="ghost"
              >
                Copy<span className="sr-only"> snippet</span>
              </CopyButton>
            </div>

            <section
              aria-label={FILE}
              className="overflow-x-auto p-4 outline-none focus-visible:ring-[2px] focus-visible:ring-ring sm:p-5"
              tabIndex={0}
            >
              <SyntaxText
                className="w-max rounded-none border-0 bg-transparent p-0 text-xs leading-relaxed sm:text-sm"
                text={CODE}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
);
