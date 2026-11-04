import { Gauge, Radio, Truck, CheckCircle2, Navigation } from "lucide-react";
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

        {/* Mileora Showcase Article */}
        <article className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 sm:p-10 lg:p-12 shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            {/* Details Column */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Euro Truck Simulator 2 Tracker
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Mileora
                </h3>
                <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400 font-medium">
                  Real-time telemetry, trip analytics, and job progression tracker for ETS2.
                </p>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Mileora is a high-fidelity tracking platform engineered for Euro Truck Simulator 2 operators and virtual transport companies. Built on low-overhead telemetry memory polling and WebSocket streaming, it logs vehicle dynamics, speed telemetry, fuel efficiency, road progression, and job contract completion with zero framerate impact.
              </p>

              {/* Performance / Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div>
                  <span className="block text-2xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
                    60 Hz
                  </span>
                  <span className="text-xs font-medium text-zinc-500">
                    Telemetry Rate
                  </span>
                </div>
                <div>
                  <span className="block text-2xl font-extrabold tracking-tight text-emerald-600 dark:text-emerald-400">
                    &lt; 0.2%
                  </span>
                  <span className="text-xs font-medium text-zinc-500">
                    CPU Overhead
                  </span>
                </div>
                <div>
                  <span className="block text-2xl font-extrabold tracking-tight text-purple-600 dark:text-purple-400">
                    Instant
                  </span>
                  <span className="text-xs font-medium text-zinc-500">
                    Trip Dispatch Sync
                  </span>
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <span className="text-xs font-semibold text-zinc-500 block mb-2">Engineered With</span>
                <div className="flex flex-wrap gap-2">
                  <TechBadge name="TypeScript" />
                  <TechBadge name="React" />
                  <TechBadge name="WebSockets" />
                  <TechBadge name="Node.js" />
                  <TechBadge name="Tailwind CSS" />
                </div>
              </div>
            </div>

            {/* Visual Media & Live Simulation Column */}
            <div className="space-y-4">
              {/* Official Mileora Banner Art */}
              <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 shadow-lg group">
                <img
                  src="/mileora.jpg"
                  alt="Mileora — ETS2 Tracker by Kyro Labs"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-102"
                />
              </div>

              {/* Live Telemetry HUD Mockup */}
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/80 p-4 sm:p-5 shadow-xs text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800/80 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">ETS2 Live Telemetry</span>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="size-3.5" />
                    SDK Connected
                  </span>
                </div>

                {/* Telemetry Metrics */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 p-2">
                    <span className="text-[10px] text-zinc-500 block">Current Speed</span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">82 km/h</span>
                  </div>
                  <div className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 p-2">
                    <span className="text-[10px] text-zinc-500 block">Gear Ratio</span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">D12 / Auto</span>
                  </div>
                  <div className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 p-2">
                    <span className="text-[10px] text-zinc-500 block">Truck Damage</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">0.0%</span>
                  </div>
                </div>

                {/* Job Route Strip */}
                <div className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 p-2.5 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2">
                    <Truck className="size-4 text-blue-500" />
                    <div>
                      <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">Berlin &rarr; Rotterdam</span>
                      <span className="text-[10px] text-zinc-500">Heavy Machinery • 24.5t</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">348 km</span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">On Schedule</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
