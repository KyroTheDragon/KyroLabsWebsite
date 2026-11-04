import { ArrowUpRightIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Guides } from "@/components/ui/guides";

interface Project {
  art: "haulverse" | "rovex" | "accordian" | "foundation";
  domain: string;
  id: string;
  name: string;
  description: string;
  tags: string[];
  year: number;
}

const PROJECTS: Project[] = [
  {
    art: "haulverse",
    domain: "Logistics & Fleet Operations",
    id: "haulverse",
    name: "Haulverse",
    description: "Intelligent transport coordination, real-time driver tracking, automated load reconciliation, and dispatch pipelines.",
    tags: ["Logistics", "Real-Time Tracking", "Fastify", "PostgreSQL"],
    year: 2026,
  },
  {
    art: "rovex",
    domain: "Telemetry & Operations Console",
    id: "rovex",
    name: "Rovex Dashboard",
    description: "Low-latency streaming console visualizing high-frequency sensor readings, hardware health metrics, and network throughput.",
    tags: ["Telemetry", "WebSockets", "Data Viz", "TypeScript"],
    year: 2025,
  },
  {
    art: "accordian",
    domain: "Personal Knowledge Workspace",
    id: "accordian",
    name: "Accordian",
    description: "Distraction-free, local-first workspace for engineering notes, architectural decisions, and instant fuzzy search.",
    tags: ["Productivity", "Vite", "React 19", "Local-First"],
    year: 2025,
  },
  {
    art: "foundation",
    domain: "Internal Tooling & Libraries",
    id: "foundation",
    name: "Kryo Foundation",
    description: "Shared microservices, authentication libraries, deployment scripts, and reusable components across all projects.",
    tags: ["Developer Tools", "CLI", "Shared Libraries", "Docker"],
    year: 2024,
  },
];

const FIRST = "haulverse";

const HaulverseArt = () => (
  <div className="absolute inset-0 flex flex-col justify-between p-6">
    <div className="flex items-center justify-between border-b border-border/60 pb-3">
      <span className="text-xs font-semibold text-foreground">Fleet Route Telemetry</span>
      <span className="text-xs text-muted-foreground">Active Loads: 14</span>
    </div>
    <div className="relative flex-1 py-4 flex items-center justify-center">
      <svg className="size-full max-h-48 text-foreground" viewBox="0 0 320 160" fill="none" stroke="currentColor">
        <path d="M 30 130 Q 110 30, 200 80 T 290 40" strokeWidth="2" strokeDasharray="4 4" className="text-muted-foreground/60" />
        <path d="M 30 130 Q 110 30, 160 65" strokeWidth="2.5" className="text-foreground" />
        <rect x="24" y="124" width="12" height="12" className="fill-background stroke-foreground stroke-2" />
        <rect x="154" y="59" width="14" height="14" className="fill-foreground stroke-background stroke-2" />
        <rect x="284" y="34" width="12" height="12" className="fill-background stroke-muted-foreground stroke-2" />
        <text x="30" y="152" className="text-[10px] fill-muted-foreground">Depot A</text>
        <text x="160" y="52" className="text-[10px] fill-foreground font-semibold">Truck #08 (En Route)</text>
        <text x="260" y="26" className="text-[10px] fill-muted-foreground">Destination</text>
      </svg>
    </div>
    <div className="grid grid-cols-3 gap-2 border-t border-border/60 pt-3 text-xs">
      <div>
        <span className="text-muted-foreground block text-[11px]">Speed</span>
        <span className="text-foreground font-medium">62 mph</span>
      </div>
      <div>
        <span className="text-muted-foreground block text-[11px]">ETA</span>
        <span className="text-foreground font-medium">1h 14m</span>
      </div>
      <div>
        <span className="text-muted-foreground block text-[11px]">Status</span>
        <span className="text-foreground font-medium">On Schedule</span>
      </div>
    </div>
  </div>
);

const RovexArt = () => (
  <div className="absolute inset-0 flex flex-col justify-between p-6">
    <div className="flex items-center justify-between border-b border-border/60 pb-3">
      <span className="text-xs font-semibold text-foreground">Stream Telemetry</span>
      <span className="text-xs text-muted-foreground">Latency: 12ms</span>
    </div>
    <div className="relative flex-1 py-4 flex items-center justify-center">
      <svg className="size-full max-h-48 text-foreground" viewBox="0 0 320 140" fill="none" stroke="currentColor">
        <line x1="20" y1="120" x2="300" y2="120" strokeWidth="1" className="text-border" />
        <line x1="20" y1="70" x2="300" y2="70" strokeWidth="1" strokeDasharray="2 2" className="text-border" />
        <line x1="20" y1="20" x2="300" y2="20" strokeWidth="1" strokeDasharray="2 2" className="text-border" />
        <polyline
          points="20,100 50,85 80,110 110,60 140,75 170,40 200,65 230,30 260,50 290,25"
          strokeWidth="2"
          className="text-foreground"
        />
        <circle cx="290" cy="25" r="4" className="fill-foreground stroke-background stroke-2" />
      </svg>
    </div>
    <div className="grid grid-cols-3 gap-2 border-t border-border/60 pt-3 text-xs">
      <div>
        <span className="text-muted-foreground block text-[11px]">Frequency</span>
        <span className="text-foreground font-medium">2.4 GHz</span>
      </div>
      <div>
        <span className="text-muted-foreground block text-[11px]">Throughput</span>
        <span className="text-foreground font-medium">18.4k/s</span>
      </div>
      <div>
        <span className="text-muted-foreground block text-[11px]">Packet Loss</span>
        <span className="text-foreground font-medium">0.00%</span>
      </div>
    </div>
  </div>
);

const AccordianArt = () => (
  <div className="absolute inset-0 flex flex-col justify-between p-6">
    <div className="flex items-center justify-between border-b border-border/60 pb-3">
      <span className="text-xs font-semibold text-foreground">Workspace Notes</span>
      <span className="text-xs text-muted-foreground">Markdown • Local-First</span>
    </div>
    <div className="space-y-2 py-4">
      <div className="border border-border/80 rounded bg-muted/20 p-2.5">
        <span className="text-xs font-semibold text-foreground">Architecture Blueprint</span>
        <p className="text-xs text-muted-foreground mt-1">Decentralized synchronization protocol with conflict-free replicated data types.</p>
      </div>
      <div className="border border-border/50 rounded bg-muted/10 p-2.5">
        <span className="text-xs font-medium text-foreground">Deployment Checklist</span>
        <p className="text-xs text-muted-foreground mt-1">Verify zero-downtime database migrations on staging cluster.</p>
      </div>
    </div>
    <div className="flex items-center justify-between border-t border-border/60 pt-3 text-xs text-muted-foreground">
      <span>Indexed: 428 documents</span>
      <span>Search time: 1.2ms</span>
    </div>
  </div>
);

const FoundationArt = () => (
  <div className="absolute inset-0 flex flex-col justify-between p-6">
    <div className="flex items-center justify-between border-b border-border/60 pb-3">
      <span className="text-xs font-semibold text-foreground">Shared Tooling &amp; SDKs</span>
      <span className="text-xs text-muted-foreground">Monorepo Engine</span>
    </div>
    <div className="grid grid-cols-2 gap-2.5 py-4">
      <div className="border border-border rounded p-2.5">
        <span className="text-xs font-semibold text-foreground">@kryo/ui</span>
        <span className="block text-xs text-muted-foreground mt-0.5">Design primitives</span>
      </div>
      <div className="border border-border rounded p-2.5">
        <span className="text-xs font-semibold text-foreground">@kryo/auth</span>
        <span className="block text-xs text-muted-foreground mt-0.5">RBAC &amp; JWT service</span>
      </div>
      <div className="border border-border rounded p-2.5">
        <span className="text-xs font-semibold text-foreground">@kryo/events</span>
        <span className="block text-xs text-muted-foreground mt-0.5">Pub/sub event bus</span>
      </div>
      <div className="border border-border rounded p-2.5">
        <span className="text-xs font-semibold text-foreground">@kryo/cli</span>
        <span className="block text-xs text-muted-foreground mt-0.5">Local dev &amp; build</span>
      </div>
    </div>
    <div className="flex items-center justify-between border-t border-border/60 pt-3 text-xs text-muted-foreground">
      <span>Dockerized services</span>
      <span>99.98% coverage</span>
    </div>
  </div>
);

const ArtFor = ({ art }: { art: Project["art"] }) => {
  if (art === "haulverse") return <HaulverseArt />;
  if (art === "rovex") return <RovexArt />;
  if (art === "accordian") return <AccordianArt />;
  return <FoundationArt />;
};

export const GalleryPortfolio = () => {
  const [active, setActive] = useState(FIRST);
  const shown = PROJECTS.find((project) => project.id === active);

  return (
    <section id="projects" className="relative overflow-x-clip px-4 sm:px-6">
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 lg:grid-cols-[minmax(0,5.5fr)_minmax(0,6.5fr)] lg:grid-rows-[auto_1fr]">
        <Guides bleed marks="top" rules="top" />

        <header className="flex flex-col gap-2 px-6 pt-12 pb-8 sm:px-8 md:pt-16 lg:col-start-1 lg:row-start-1 lg:pe-8">
          <h2 className="font-bold text-2xl tracking-tight sm:text-3xl text-foreground">
            Projects &amp; Platforms
          </h2>
          <p className="max-w-md text-sm text-muted-foreground">
            Software designed, architected, and maintained under Kryo Labs. Hover or focus any item to preview technical specs.
          </p>
        </header>

        <div className="relative max-lg:row-start-3 lg:col-start-1 lg:row-start-2">
          <Guides marks="top" rules="top" sides={false} />
          <ol className="divide-y divide-border">
            {PROJECTS.map((project, index) => (
              <li key={project.id}>
                <a
                  className={cn(
                    "group grid grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-x-3 px-6 py-4 outline-none transition-colors hover:bg-muted/40 focus-visible:bg-muted/40 focus-visible:ring-[2px] focus-visible:ring-ring sm:px-8",
                    project.id === active && "bg-muted/50"
                  )}
                  href={`#${project.id}`}
                  onFocus={() => setActive(project.id)}
                  onPointerEnter={() => setActive(project.id)}
                >
                  <span className="text-muted-foreground text-xs font-medium tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="truncate font-semibold text-base text-foreground">
                      {project.name}
                    </span>
                    <span className="truncate text-muted-foreground text-xs">
                      {project.domain}
                    </span>
                  </span>
                  <span className="flex items-center gap-2 text-muted-foreground text-xs tabular-nums">
                    <time dateTime={`${project.year}`}>{project.year}</time>
                    <ArrowUpRightIcon
                      aria-hidden="true"
                      className={cn(
                        "size-4 text-foreground transition-opacity",
                        project.id === active ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div
          aria-hidden="true"
          className="relative px-6 pb-8 max-lg:row-start-2 sm:px-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:border-s lg:px-10 lg:py-16"
        >
          <Guides className="lg:hidden" marks="top" rules="top" sides={false} />
          <Guides
            className="max-lg:hidden"
            marks="start"
            rules="none"
            sides={false}
          />
          <div className="max-lg:pt-6 lg:sticky lg:top-20">
            <div className="relative">
              <Guides extend="sm" marks="corners" />
              <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-border bg-card shadow-md">
                {PROJECTS.map((project) => (
                  <div
                    className={cn(
                      "absolute inset-0 transition-opacity duration-300",
                      project.id === active ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                    )}
                    key={project.id}
                  >
                    <ArtFor art={project.art} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 space-y-2 max-lg:hidden">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground text-sm">{shown?.name}</span>
                <span className="text-xs text-muted-foreground">{shown?.domain}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {shown?.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {shown?.tags.map((tag) => (
                  <span key={tag} className="border border-border bg-muted/30 px-2 py-0.5 text-xs text-foreground/90 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
