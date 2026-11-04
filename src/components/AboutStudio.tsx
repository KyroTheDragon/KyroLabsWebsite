import { TechBadge } from "./TechLogos";

export const AboutStudio = () => {
  const stack = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Fastify",
    "Go",
    "PostgreSQL",
    "Redis",
    "TimescaleDB",
    "Docker",
    "WebSockets",
    "Tailwind CSS",
  ];

  return (
    <section id="about" className="relative px-6 py-20 sm:px-8 sm:py-28 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[1fr,1.3fr] gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
              About Kryo Labs
            </h2>
            <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              An independent home for focused software ventures and technical craft.
            </p>
          </div>

          <div className="space-y-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              <strong className="text-zinc-900 dark:text-zinc-100 font-bold">Kryo Labs</strong> exists to conceive, develop, and operate high-utility digital platforms. Rather than building generic software or chasing hype cycles, we focus on real operational challenges: logistics coordination, low-latency telemetry streaming, and personal productivity tools.
            </p>
            <p>
              We operate as a lean, independent engineering organization. This allows us to prioritize architectural durability, privacy, and ergonomics above all else.
            </p>

            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40 p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
