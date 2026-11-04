import { Github, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-16 px-6 sm:px-8 text-zinc-300">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-zinc-800">
          {/* Brand Column - Logo image only, no extra text or icons */}
          <div className="space-y-4">
            <a href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm" aria-label="Kyro Labs">
              <img
                src="/kyro-labs-logo.png"
                alt="Kyro Labs"
                className="h-8 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
              Conceiving, engineering, and operating digital platforms and technical infrastructure.
            </p>
          </div>

          {/* Projects Column */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-normal mb-4">
              Projects
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#projects" className="text-zinc-400 hover:text-white transition-colors font-medium">
                  Mileora (ETS2 Tracker)
                </a>
              </li>
            </ul>
          </div>

          {/* Organization Column */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-normal mb-4">
              Organization
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#quality" className="text-zinc-400 hover:text-white transition-colors font-medium">
                  Quality &amp; Standards
                </a>
              </li>
              <li>
                <a href="#approach" className="text-zinc-400 hover:text-white transition-colors font-medium">
                  Approach
                </a>
              </li>
              <li>
                <a href="#about" className="text-zinc-400 hover:text-white transition-colors font-medium">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-400 hover:text-white transition-colors font-medium">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-normal mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors font-medium"
                >
                  <Github className="size-3.5" aria-hidden="true" />
                  <span>GitHub</span>
                  <ArrowUpRight className="size-3 text-zinc-500" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@kryolabs.com"
                  className="text-zinc-400 hover:text-white transition-colors font-medium"
                >
                  contact@kryolabs.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Kyro Labs.</p>
        </div>
      </div>
    </footer>
  );
};
