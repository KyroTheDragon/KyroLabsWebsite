import { Layers, ArrowUpRight, Github } from "lucide-react";
import { Guides } from "@/components/ui/guides";

interface FooterLink {
  href: string;
  label: string;
}

interface LinkGroup {
  links: FooterLink[];
  title: string;
}

const GROUPS: LinkGroup[] = [
  {
    title: "Platforms",
    links: [
      { href: "#projects", label: "Haulverse" },
      { href: "#projects", label: "Rovex Dashboard" },
      { href: "#projects", label: "Accordian" },
      { href: "#projects", label: "Foundation SDKs" },
    ],
  },
  {
    title: "Organization",
    links: [
      { href: "#about", label: "About Kryo Labs" },
      { href: "#projects", label: "Project Portfolio" },
      { href: "#contact", label: "Contact & Inquiries" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "https://github.com", label: "GitHub" },
      { href: "mailto:contact@kryolabs.com", label: "Email" },
    ],
  },
];

export const FooterColumns = () => (
  <footer className="relative overflow-x-clip px-4 sm:px-6 border-t border-border mt-12 bg-background">
    <div className="relative mx-auto w-full max-w-6xl">
      <Guides bleed marks="top" rules="top" />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)]">
        <div className="flex flex-col items-start gap-4 px-6 pt-12 pb-10 sm:px-8 md:pt-16 lg:pb-14">
          <a
            className="flex items-center gap-2 rounded outline-none focus-visible:ring-2 focus-visible:ring-ring"
            dir="ltr"
            href="#"
            aria-label="Kryo Labs Home"
          >
            <span
              aria-hidden="true"
              className="flex size-7 shrink-0 items-center justify-center rounded border border-border bg-muted/60 text-foreground"
            >
              <Layers className="size-4" />
            </span>
            <span className="whitespace-nowrap font-bold text-lg tracking-tight text-foreground">
              Kryo Labs
            </span>
          </a>
          <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
            Software projects, platforms, and technical tools. Designed, built, and operated with high craft.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="size-3.5" aria-hidden="true" />
              <span>github.com/kryolabs</span>
              <ArrowUpRight className="size-3" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav
          aria-label="Footer Navigation"
          className="relative grid grid-cols-2 gap-x-6 gap-y-10 px-6 pt-10 pb-12 sm:px-8 sm:grid-cols-3 lg:border-s lg:pt-16 lg:pb-14"
        >
          <Guides className="lg:hidden" marks="top" rules="top" sides={false} />
          <Guides
            className="max-lg:hidden"
            marks="start"
            rules="none"
            sides={false}
          />
          {GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold text-foreground tracking-normal">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-col items-start gap-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      className="text-muted-foreground hover:text-foreground transition-colors outline-none focus-visible:underline"
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="relative border-t border-border/60 py-6 px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>&copy; {new Date().getFullYear()} Kryo Labs. All rights reserved.</span>
        <span>Built with shadcn.io components &amp; modern web standards.</span>
      </div>
    </div>
  </footer>
);
