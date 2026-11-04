import { Radio, Activity, Cpu, Zap } from "lucide-react";
import { TechBadge } from "./TechLogos";

export const Projects = () => {
  return (
    <section id="projects" className="relative px-6 py-20 sm:px-8 sm:py-28 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-semibold mb-4">
            <Radio className="size-3.5 animate-pulse text-blue-400" />
            <span>Featured Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Software built by Kyro Labs.
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Conceived, engineered, and operated in-house with zero bloat, high precision, and dedicated operational focus.
          </p>
        </div>

        {/* Mileora Elevated Showcase Card */}
        <article className="relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-white via-zinc-50/50 to-zinc-100/30 dark:from-zinc-900/90 dark:via-zinc-900/50 dark:to-zinc-950 p-6 sm:p-10 lg:p-12 shadow-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent blur-3xl dark:from-purple-500/15 dark:via-cyan-500/10"
            aria-hidden="true"
          />

          <div className="relative grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-12 items-center">
            {/* Details Column */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                    Mileora
                  </h3>
                  <span className="text-xs sm:text-sm font-semibold px-2.5 py-0.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 font-mono tracking-tight">
                    (Coming Soon)
                  </span>
                </div>
                <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400 font-medium">
                  Real-time telemetry, trip analytics, and job progression tracker for ETS2.
                </p>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Mileora is a high-fidelity tracking platform engineered for Euro Truck Simulator 2 operators and virtual transport companies. Built on low-overhead telemetry memory polling and WebSocket streaming, it logs vehicle dynamics, speed telemetry, fuel efficiency, road progression, and job contract completion with zero framerate impact.
              </p>

              {/* Elevated Metric Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-200/80 dark:border-zinc-800">
                <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-950/60 p-3.5">
                  <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 mb-1">
                    <Activity className="size-3.5" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Sync</span>
                  </div>
                  <span className="block text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                    60 Hz
                  </span>
                  <span className="text-[11px] text-zinc-500 font-medium">
                    Telemetry Rate
                  </span>
                </div>

                <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-950/60 p-3.5">
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 mb-1">
                    <Cpu className="size-3.5" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Impact</span>
                  </div>
                  <span className="block text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                    &lt; 0.2%
                  </span>
                  <span className="text-[11px] text-zinc-500 font-medium">
                    CPU Overhead
                  </span>
                </div>

                <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-950/60 p-3.5">
                  <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400 mb-1">
                    <Zap className="size-3.5" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Dispatch</span>
                  </div>
                  <span className="block text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                    0 ms
                  </span>
                  <span className="text-[11px] text-zinc-500 font-medium">
                    State Latency
                  </span>
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800">
                <span className="text-xs font-semibold text-zinc-500 block mb-2.5">Engineered With</span>
                <div className="flex flex-wrap gap-2">
                  <TechBadge name="TypeScript" />
                  <TechBadge name="React" />
                  <TechBadge name="WebSockets" />
                  <TechBadge name="Node.js" />
                  <TechBadge name="Tailwind CSS" />
                </div>
              </div>
            </div>

            {/* Visual Media Showcase Column */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 p-2 shadow-2xl group">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/mileora.jpg"
                    alt="Mileora by Kyro Labs"
                    className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                </div>
                {/* Subtle caption bar below the artwork */}
                <div className="pt-3 pb-1 px-2 flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-2 font-medium">
                    <span className="size-2 rounded-full bg-purple-500 animate-pulse" />
                    <span>ETS2 Companion System</span>
                  </span>
                  <span className="font-mono text-[11px] text-zinc-500">v1.0 in development</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
