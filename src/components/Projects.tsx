import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { TechBadge } from "./TechLogos";

export const Projects = () => {
  return (
    <section id="projects" className="relative px-6 py-20 sm:px-8 sm:py-28 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <Badge variant="outline" className="text-blue-500 border-blue-500/30 bg-blue-500/10 mb-4 px-3 py-1 font-semibold text-xs rounded-full">
            Featured Platform
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Software built by Kyro Labs.
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Conceived, engineered, and operated in-house with zero bloat, high precision, and dedicated operational focus.
          </p>
        </div>

        {/* Mileora Showcase Card using Shadcn UI Components */}
        <Card className="overflow-hidden border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700 transition-all rounded-3xl">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12">
            {/* Details Side */}
            <div className="space-y-6">
              <CardHeader className="p-0 space-y-2">
                <CardTitle className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Mileora (Coming Soon)
                </CardTitle>
                <CardDescription className="text-base text-zinc-600 dark:text-zinc-400 font-medium">
                  Real-time telemetry, trip analytics, and job progression tracker for ETS2.
                </CardDescription>
              </CardHeader>

              <CardContent className="p-0 space-y-6">
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Mileora is a high-fidelity tracking platform engineered for Euro Truck Simulator 2 operators and virtual transport companies. Built on low-overhead telemetry memory polling and WebSocket streaming, it logs vehicle dynamics, speed telemetry, fuel efficiency, road progression, and job contract completion with zero framerate impact.
                </p>

                {/* Key Metrics in Minimal Sub-Cards */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 p-3 text-center sm:text-left">
                    <span className="block text-2xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
                      60 Hz
                    </span>
                    <span className="text-[11px] text-zinc-500 font-medium">
                      Telemetry Rate
                    </span>
                  </div>

                  <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 p-3 text-center sm:text-left">
                    <span className="block text-2xl font-extrabold tracking-tight text-emerald-600 dark:text-emerald-400">
                      &lt; 0.2%
                    </span>
                    <span className="text-[11px] text-zinc-500 font-medium">
                      CPU Overhead
                    </span>
                  </div>

                  <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 p-3 text-center sm:text-left">
                    <span className="block text-2xl font-extrabold tracking-tight text-purple-600 dark:text-purple-400">
                      Instant
                    </span>
                    <span className="text-[11px] text-zinc-500 font-medium">
                      State Sync
                    </span>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <span className="text-xs font-semibold text-zinc-500 block mb-2.5">Engineered With</span>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge name="TypeScript" />
                    <TechBadge name="React" />
                    <TechBadge name="WebSockets" />
                    <TechBadge name="Node.js" />
                    <TechBadge name="Tailwind CSS" />
                  </div>
                </div>
              </CardContent>
            </div>

            {/* Visual Media Side: Pure Clean Artwork */}
            <div>
              <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 shadow-md">
                <img
                  src="/mileora.jpg"
                  alt="Mileora by Kyro Labs"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
