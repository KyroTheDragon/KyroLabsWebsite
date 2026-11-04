import { ShieldCheck, Cpu, Sparkles } from "lucide-react";

export const Approach = () => {
  const principles = [
    {
      icon: <ShieldCheck className="size-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
      title: "Reliability & Resilient State",
      description:
        "We build systems that gracefully handle offline states, network turbulence, and high concurrency. Critical events are persisted locally before transit so data is never lost.",
    },
    {
      icon: <Cpu className="size-5 text-purple-600 dark:text-purple-400" aria-hidden="true" />,
      title: "End-to-End Type Safety",
      description:
        "From database schemas and API contracts to front-end stores, strict type safety ensures predictable runtime behavior and zero unexpected production regressions.",
    },
    {
      icon: <Sparkles className="size-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />,
      title: "Ergonomics & Zero Bloat",
      description:
        "We refuse dark patterns and bloated dependencies. Software should be fast, quiet, and intuitive — giving operators exactly what they need with zero cognitive clutter.",
    },
  ];

  return (
    <section id="approach" className="relative px-6 py-20 sm:px-8 sm:py-28 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            How we engineer software.
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Our technical choices are guided by durability, clarity, and respect for user time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200"
            >
              <div>
                <div className="flex size-11 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 mb-5 shadow-2xs">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
