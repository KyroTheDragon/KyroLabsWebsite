import { MenuIcon, Layers, XIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Guides } from "@/components/ui/guides";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShineButton } from "@/components/ui/shine-button";

interface Page {
  href: string;
  label: string;
}

const PAGES: Page[] = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const LINK =
  "relative inline-flex h-9 items-center rounded-md px-3 text-muted-foreground text-sm outline-none transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 after:pointer-events-none after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-right after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100 focus-visible:after:origin-left focus-visible:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none rtl:after:origin-left rtl:hover:after:origin-right rtl:focus-visible:after:origin-right";

const SHEET_ROW =
  "flex min-h-11 items-center gap-3 rounded-md px-3 py-2 font-medium text-base outline-none hover:bg-muted/60 focus-visible:ring-[3px] focus-visible:ring-ring/50";

const Brand = () => (
  <span className="flex items-center gap-2" dir="ltr">
    <span className="flex size-7 items-center justify-center rounded border border-border bg-muted/60 text-foreground" aria-hidden="true">
      <Layers className="size-4 shrink-0" />
    </span>
    <span className="whitespace-nowrap font-semibold text-base tracking-tight text-foreground">
      Kryo Labs
    </span>
  </span>
);

export const NavbarAnimatedUnderline = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const closeSheet = () => setSheetOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 relative overflow-x-clip px-4 sm:px-6">
      <div className="relative mx-auto flex h-14 w-full max-w-6xl items-center gap-6 px-6 sm:px-8">
        <Guides bleed marks="top" rules="top" />

        <a
          className="-mx-1.5 rounded-md px-1.5 py-1 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          href="#"
          aria-label="Kryo Labs Home"
        >
          <Brand />
        </a>

        <nav aria-label="Main Navigation" className="max-md:hidden">
          <ul className="flex items-center gap-1">
            {PAGES.map((page) => (
              <li key={page.label}>
                <a className={LINK} href={page.href}>
                  {page.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ms-auto flex items-center gap-2">
          <ModeToggle />
          <ShineButton asChild size="sm">
            <a href="#contact">Get in touch</a>
          </ShineButton>
          <Sheet onOpenChange={setSheetOpen} open={sheetOpen}>
            <SheetTrigger asChild>
              <Button
                aria-label="Menu"
                className="-me-1.5 md:hidden"
                size="icon"
                variant="ghost"
              >
                <MenuIcon aria-hidden="true" className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              className="max-h-svh gap-0 overflow-y-auto px-4 motion-reduce:animate-none motion-reduce:transition-none sm:px-6"
              side="top"
            >
              <div className="px-6 sm:px-8">
                <SheetHeader className="h-14 flex-row items-center justify-between gap-6 border-b p-0">
                  <Brand />
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <SheetClose asChild>
                    <Button
                      aria-label="Close menu"
                      className="-me-1.5"
                      size="icon"
                      variant="ghost"
                    >
                      <XIcon aria-hidden="true" className="size-5" />
                    </Button>
                  </SheetClose>
                </SheetHeader>

                <nav aria-label="Main" className="py-4">
                  <ul className="flex flex-col">
                    {PAGES.map((page) => (
                      <li key={page.label}>
                        <a
                          className={SHEET_ROW}
                          href={page.href}
                          onClick={closeSheet}
                        >
                          {page.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="border-t py-4">
                  <ShineButton asChild className="w-full" size="lg">
                    <a href="#contact" onClick={closeSheet}>
                      Get in touch
                    </a>
                  </ShineButton>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
