import { Mail, ArrowUpRight } from "lucide-react";
import { DiscordLogo } from "./TechLogos";

export const Contact = () => {
  return (
    <section id="contact" className="relative px-4 py-16 sm:px-8 sm:py-28 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 sm:p-12 lg:p-14 shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200">
          <div className="max-w-2xl mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
              Let&apos;s talk software.
            </h2>
            <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Reach out directly for platform inquiries, partnerships, or engineering discussions.
            </p>
          </div>

          {/* Unified Clean Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-[#5865F2] text-white shadow-xs shrink-0">
                  <DiscordLogo className="size-5" />
                </div>
                <div>
                  <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100 block">Discord</span>
                  <span className="text-xs text-zinc-500 block">Community &amp; Support</span>
                </div>
              </div>
              <ArrowUpRight className="size-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors shrink-0" />
            </a>

            <a
              href="mailto:contact@kyrolabs.com"
              className="flex items-center justify-between p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs shrink-0">
                  <Mail className="size-5" />
                </div>
                <div>
                  <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100 block">Email</span>
                  <span className="text-xs text-zinc-500 block">contact@kyrolabs.com</span>
                </div>
              </div>
              <ArrowUpRight className="size-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
