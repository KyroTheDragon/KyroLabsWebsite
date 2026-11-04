import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Terminal, Shield, Snowflake, Activity, Zap, CheckCircle2 } from "lucide-react";
import { Badge } from "./ui/badge";

interface ServiceProps {
  title: string;
  description: string;
  metric: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Kryo-Cloud Foundation API",
    description:
      "Serverless inference streaming over 1,850 tokens/sec with sub-millisecond TTFT. Fully wire-compatible with OpenAI and Anthropic SDKs.",
    metric: "1,850 tok/s · < 1.2ms TTFT",
    icon: <Terminal className="size-5 text-primary" />,
  },
  {
    title: "Dedicated On-Premises Cryo-Pods",
    description:
      "Self-contained 42U closed-cycle dilution refrigerators deployed directly to sovereign enterprise or defense datacenters with automated cooling maintenance.",
    metric: "0.038 K Chamber · 400 Sockets",
    icon: <Snowflake className="size-5 text-primary" />,
  },
  {
    title: "Custom Sparse Kernel Co-Design",
    description:
      "Direct compilation of proprietary enterprise architectures onto Rapid Single-Flux-Quantum (RSFQ) superconducting instruction sets.",
    metric: "98.4% Zero-Skip Efficiency",
    icon: <Zap className="size-5 text-primary" />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-20 sm:py-28">
      <div className="grid lg:grid-cols-[1fr,1.1fr] gap-12 items-center">
        <div>
          <div className="mb-2">
            <Badge variant="outline" className="font-mono text-xs border-primary/30 text-primary">
              ENTERPRISE SERVICES & TELEMETRY
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Cryogenic{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-400 text-transparent bg-clip-text">
              Compute Deployments
            </span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg mt-4 mb-8 leading-relaxed">
            From single-line API integration to private on-prem dilution refrigerator pods, Kryo Labs provides flexible infrastructure for mission-critical intelligence.
          </p>

          <div className="flex flex-col gap-4">
            {serviceList.map(({ icon, title, description, metric }: ServiceProps) => (
              <Card key={title} className="border-border/80 bg-card/60 hover:border-primary/40 transition-colors">
                <CardHeader className="space-y-1 p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                        {icon}
                      </div>
                      <CardTitle className="text-base font-semibold">{title}</CardTitle>
                    </div>
                    <Badge variant="secondary" className="font-mono text-[10px]">
                      {metric}
                    </Badge>
                  </div>
                  <CardDescription className="text-xs sm:text-sm text-muted-foreground pt-2 leading-relaxed">
                    {description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Real-time Sub-Kelvin Telemetry Visualizer Card */}
        <div className="rounded-2xl border border-primary/30 bg-card/90 p-6 sm:p-8 shadow-xl relative overflow-hidden backdrop-blur-sm">
          <div className="flex items-center justify-between pb-4 border-b border-border/50">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary animate-ping" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                LIVE CRYO-POD TELEMETRY: BAY-04
              </span>
            </div>
            <Badge variant="outline" className="font-mono text-[11px] text-emerald-500 border-emerald-500/30">
              OPTIMAL
            </Badge>
          </div>

          {/* SVG Waveform Telemetry */}
          <div className="my-6 p-4 rounded-xl border border-border/60 bg-background/90">
            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-2">
              <span>Josephson Phase Coherence at 120 GHz</span>
              <span className="text-primary font-bold">99.98% Coherent</span>
            </div>
            <svg
              className="w-full h-28 rounded bg-muted/20"
              viewBox="0 0 300 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 45 Q 25 15, 50 45 T 100 45 T 150 45 T 200 45 T 250 45 T 300 45"
                stroke="currentColor"
                className="text-primary/40"
                strokeWidth="1.5"
              />
              <path
                d="M0 45 Q 15 20, 30 45 T 60 45 T 90 45 T 120 45 T 150 45 T 180 45 T 210 45 T 240 45 T 270 45 T 300 45"
                stroke="currentColor"
                className="text-primary"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Sensor Matrix Readings */}
          <div className="grid grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-3 rounded-lg border border-border/60 bg-background/60">
              <span className="text-muted-foreground block text-[10px] uppercase">Base Temperature</span>
              <span className="text-lg font-bold text-foreground">0.0382 Kelvin</span>
            </div>
            <div className="p-3 rounded-lg border border-border/60 bg-background/60">
              <span className="text-muted-foreground block text-[10px] uppercase">Supercurrent Density</span>
              <span className="text-lg font-bold text-emerald-400">1.42 mA / µm²</span>
            </div>
            <div className="p-3 rounded-lg border border-border/60 bg-background/60">
              <span className="text-muted-foreground block text-[10px] uppercase">Optical I/O Bandwidth</span>
              <span className="text-lg font-bold text-foreground">128 Tbps Line</span>
            </div>
            <div className="p-3 rounded-lg border border-border/60 bg-background/60">
              <span className="text-muted-foreground block text-[10px] uppercase">Thermal Resistance</span>
              <span className="text-lg font-bold text-primary font-semibold">0.000 Ω (Zero Loss)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
