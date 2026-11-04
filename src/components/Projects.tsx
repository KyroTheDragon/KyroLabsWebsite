import { Activity, FileText, Wrench, CheckCircle2 } from "lucide-react";
import { TechBadge } from "./TechLogos";

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  stats: { label: string; value: string; colorClass?: string }[];
  uiPreview: React.ReactNode;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      id: "haulverse",
      name: "Haulverse",
      tagline: "Logistics & Fleet Operations Platform",
      description:
        "An end-to-end transport coordination and dispatch platform. Designed to handle high-frequency driver routing, automated bill-of-lading reconciliation, geofenced load tracking, and live driver communication without third-party middleware bottlenecks.",
      stack: ["TypeScript", "Fastify", "PostgreSQL", "Redis", "WebSockets"],
      stats: [
        { label: "Active Loads", value: "240+", colorClass: "text-emerald-600 dark:text-emerald-400" },
        { label: "On-Time Dispatch", value: "99.4%", colorClass: "text-emerald-600 dark:text-emerald-400" },
        { label: "Routing Latency", value: "< 80ms", colorClass: "text-blue-600 dark:text-blue-400" },
      ],
      uiPreview: (
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)] text-xs">
          {/* Dispatch Bar */}
          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-zinc-900 dark:text-zinc-100">Route #HV-9142</span>
              <span className="text-zinc-500">• Chicago, IL &rarr; Nashville, TN</span>
            </div>
            <span className="border border-emerald-200 bg-emerald-50 dark:bg-emerald-950/40 dark:border-emerald-800 px-2 py-0.5 rounded-lg text-[11px] font-semibold text-emerald-800 dark:text-emerald-300">
              In Transit
            </span>
          </div>

          {/* Mini Table */}
          <div className="space-y-2">
            <div className="grid grid-cols-4 text-zinc-400 text-[11px] pb-1 border-b border-zinc-100 dark:border-zinc-800 font-medium">
              <span>Carrier</span>
              <span>Cargo Type</span>
              <span>ETA</span>
              <span className="text-right">Status</span>
            </div>
            <div className="grid grid-cols-4 items-center text-zinc-800 dark:text-zinc-200 py-1">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">Apex Freight 04</span>
              <span className="text-zinc-500">Cold Storage</span>
              <span>Today 18:30</span>
              <span className="text-right text-emerald-600 dark:text-emerald-400 font-bold">On Schedule</span>
            </div>
            <div className="grid grid-cols-4 items-center text-zinc-800 dark:text-zinc-200 py-1">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">Midwest Transport</span>
              <span className="text-zinc-500">Dry Bulk</span>
              <span>Tomorrow 06:00</span>
              <span className="text-right text-blue-600 dark:text-blue-400 font-semibold">En Route</span>
            </div>
          </div>

          {/* Telemetry Progress */}
          <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500">
            <span className="font-medium text-zinc-700 dark:text-zinc-300">Route Completion: 78%</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">Speed: 64 mph • GPS Lock: Verified</span>
          </div>
        </div>
      ),
    },
    {
      id: "rovex",
      name: "Rovex Dashboard",
      tagline: "Real-Time Telemetry & Operations Console",
      description:
        "A low-latency operations console engineered to ingest, process, and stream high-volume sensor data, network throughput telemetry, and cluster health metrics in real time. Built with resilient WebSocket connections and automatic reconnection backoff.",
      stack: ["React", "TypeScript", "TimescaleDB", "Tailwind CSS", "WebSockets"],
      stats: [
        { label: "Streaming Latency", value: "14ms", colorClass: "text-blue-600 dark:text-blue-400" },
        { label: "Data Ingestion", value: "45k ev/s", colorClass: "text-indigo-600 dark:text-indigo-400" },
        { label: "Cluster Uptime", value: "99.99%", colorClass: "text-emerald-600 dark:text-emerald-400" },
      ],
      uiPreview: (
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)] text-xs">
          {/* Node Health Header */}
          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <Activity className="size-3.5 text-blue-600 dark:text-blue-400" />
              <span className="font-bold text-zinc-900 dark:text-zinc-100">Cluster Node us-east-1</span>
            </div>
            <span className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded-lg text-[11px] font-semibold border border-blue-200 dark:border-blue-800">
              Sync Rate: 60Hz
            </span>
          </div>

          {/* Metric Tiles */}
          <div className="grid grid-cols-3 gap-2.5 mb-3">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 p-2.5">
              <span className="text-zinc-500 text-[11px] block">Network In</span>
              <span className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">1.82 Gbps</span>
            </div>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 p-2.5">
              <span className="text-zinc-500 text-[11px] block">Avg Latency</span>
              <span className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">12.4 ms</span>
            </div>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 p-2.5">
              <span className="text-zinc-500 text-[11px] block">Error Rate</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">0.000%</span>
            </div>
          </div>

          {/* Pulse Bar */}
          <div className="h-1.5 w-full rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full w-4/5" />
          </div>
        </div>
      ),
    },
    {
      id: "accordian",
      name: "Accordian",
      tagline: "Focused Notes & Knowledge Workspace",
      description:
        "A distraction-free, local-first personal knowledge workspace for engineering notes, architectural decisions, and structured documentation. Features instantaneous fuzzy search, offline persistence, and seamless Markdown syncing.",
      stack: ["React", "Vite", "Tailwind CSS", "TypeScript"],
      stats: [
        { label: "Search Speed", value: "< 2ms", colorClass: "text-purple-600 dark:text-purple-400" },
        { label: "Offline Storage", value: "IndexedDB", colorClass: "text-indigo-600 dark:text-indigo-400" },
        { label: "Bundle Size", value: "38 kB", colorClass: "text-emerald-600 dark:text-emerald-400" },
      ],
      uiPreview: (
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)] text-xs">
          {/* Document Header */}
          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <FileText className="size-3.5 text-purple-600 dark:text-purple-400" />
              <span className="font-bold text-zinc-900 dark:text-zinc-100">Architecture_RFC_014.md</span>
            </div>
            <span className="text-purple-800 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 px-2 py-0.5 rounded-lg text-[11px] font-semibold border border-purple-200 dark:border-purple-800">
              Saved Locally
            </span>
          </div>

          {/* Clean Markdown Snippet */}
          <div className="space-y-2 text-zinc-600 dark:text-zinc-400">
            <p className="font-bold text-zinc-900 dark:text-zinc-100 text-xs">## Event Ingestion Strategy</p>
            <p className="text-[11px] leading-relaxed">
              To guarantee zero packet loss during network degradation, state transitions are committed to local IndexedDB before dispatching over the WebSocket stream.
            </p>
          </div>

          {/* Footer Bar */}
          <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500">
            <span>2,410 words • 14 min read</span>
            <span className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded-md text-[10px] font-medium">⌘K Search</span>
          </div>
        </div>
      ),
    },
    {
      id: "foundation",
      name: "Kryo Foundation",
      tagline: "Shared Architecture, Tooling & SDKs",
      description:
        "The foundational libraries, authentication services, automated deployment recipes, and shared UI primitives that serve as the technical backbone across all Kryo Labs software products.",
      stack: ["Go", "Node.js", "Docker", "GitHub Actions", "Tailwind CSS"],
      stats: [
        { label: "Shared Packages", value: "8 modules", colorClass: "text-indigo-600 dark:text-indigo-400" },
        { label: "Test Coverage", value: "98.6%", colorClass: "text-emerald-600 dark:text-emerald-400" },
        { label: "Deploy Time", value: "< 45s", colorClass: "text-blue-600 dark:text-blue-400" },
      ],
      uiPreview: (
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)] text-xs">
          {/* Tooling Header */}
          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <Wrench className="size-3.5 text-indigo-600 dark:text-indigo-400" />
              <span className="font-bold text-zinc-900 dark:text-zinc-100">@kryo/monorepo-core</span>
            </div>
            <span className="text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 px-2 py-0.5 rounded-lg font-semibold text-[11px]">
              All Tests Passing
            </span>
          </div>

          {/* Module Grid */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 p-2.5">
              <span className="font-bold text-zinc-900 dark:text-zinc-100 block">@kryo/auth</span>
              <span className="text-zinc-500 text-[10px]">Session &amp; Token Engine</span>
            </div>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 p-2.5">
              <span className="font-bold text-zinc-900 dark:text-zinc-100 block">@kryo/stream</span>
              <span className="text-zinc-500 text-[10px]">Low-Latency PubSub</span>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500">
            <span className="font-medium text-zinc-700 dark:text-zinc-300">Unified Architecture</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Zero Dependencies</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="relative px-6 py-20 sm:px-8 sm:py-28 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Software built by Kryo Labs.
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Every product in our portfolio is conceived, designed, and operated under our organization. We build platforms that solve genuine operational bottlenecks.
          </p>
        </div>

        {/* Projects Grid (Gemini Antigravity container style) */}
        <div className="grid gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 sm:p-8 lg:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200"
            >
              <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-start">
                {/* Details Column */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Performance / Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                    {project.stats.map((stat) => (
                      <div key={stat.label}>
                        <span className={`block text-xl font-extrabold tracking-tight ${stat.colorClass || "text-zinc-900 dark:text-zinc-100"}`}>
                          {stat.value}
                        </span>
                        <span className="text-xs font-medium text-zinc-500">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack - Using Official Colored SVG Logos in rounded-xl badges */}
                  <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* UI Preview Card Container (Gemini Antigravity nested container) */}
                <div className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40 p-4 sm:p-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <div className="mb-3 flex items-center justify-between text-xs text-zinc-500">
                    <span className="font-semibold text-zinc-700 dark:text-zinc-300">Live System Mockup</span>
                    <span className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                      <CheckCircle2 className="size-3.5" />
                      Production State
                    </span>
                  </div>
                  {project.uiPreview}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
