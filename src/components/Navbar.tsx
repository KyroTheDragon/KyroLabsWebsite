import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { GetInTouchDialog } from "./GetInTouchDialog";

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "#projects", label: "Projects" },
  { href: "#quality", label: "Quality" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/95 text-white backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
          {/* Brand Logo - Just the image */}
          <a
            href="/"
            className="flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 py-1"
            aria-label="Kyro Labs"
          >
            <img
              src="/kyro-labs-logo.png"
              alt="Kyro Labs"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions: Clean & Minimal */}
          <div className="hidden md:flex items-center gap-2">
            <ModeToggle className="flex size-9 items-center justify-center rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" />

            <Button
              size="sm"
              onClick={() => setContactDialogOpen(true)}
              className="rounded-lg font-medium text-xs h-9 px-4 bg-blue-600 hover:bg-blue-500 text-white shadow-xs transition-colors border-0 cursor-pointer"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-1.5">
            <ModeToggle className="flex size-9 items-center justify-center rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex size-9 items-center justify-center rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="size-4" aria-hidden="true" />
              ) : (
                <Menu className="size-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-zinc-800 bg-zinc-950 px-6 py-6 md:hidden">
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-zinc-800">
                <Button
                  size="sm"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setContactDialogOpen(true);
                  }}
                  className="w-full rounded-xl font-medium text-xs h-9 bg-blue-600 hover:bg-blue-500 text-white shadow-xs"
                >
                  Get in Touch
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Interactive Get in Touch Dialog */}
      <GetInTouchDialog
        open={contactDialogOpen}
        onOpenChange={setContactDialogOpen}
      />
    </>
  );
};
