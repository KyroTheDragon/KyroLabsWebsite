import { Button, buttonVariants } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Badge } from "./ui/badge";

export const Pricing = () => {
  const plans = [
    {
      name: "Developer",
      price: "$0",
      cadence: "/ month",
      desc: "5 million free tokens per month for testing and evaluation.",
      features: [
        "Kryo-3 Flash (8B parameter model)",
        "Shared 0.04K cryostat cluster",
        "2M active context window",
        "Standard OpenAI SDK drop-in",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Production",
      price: "$0.10",
      cadence: "/ 1M tokens",
      desc: "Sub-millisecond inference for autonomous reasoning swarms.",
      features: [
        "Kryo-3 Core (70B model)",
        "Guaranteed < 1.2ms TTFT latency",
        "16.4M sparse context window",
        "Dedicated sub-40mK priority queue",
        "50% discount on async batch jobs",
        "99.99% uptime SLA",
      ],
      cta: "Get API Key",
      popular: true,
    },
    {
      name: "Dedicated Pod",
      price: "Custom",
      cadence: "/ sovereign rack",
      desc: "Private on-premises closed-cycle dilution refrigerators.",
      features: [
        "400 superconducting sockets",
        "128 Tbps optical backplane",
        "On-site cryostat maintenance SLA",
        "Post-quantum Kyber-1024 encryption",
      ],
      cta: "Contact Hardware Team",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="container max-w-5xl px-4 py-20 sm:px-8 border-t border-border/50">
      <div className="space-y-2 mb-12">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
          Pricing
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Predictable token economics.
        </h2>
        <p className="text-sm text-muted-foreground max-w-xl">
          Zero thermodynamic waste translates into the lowest per-token rates in the frontier class.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`flex flex-col justify-between rounded-xl border p-6 transition-all ${
              p.popular
                ? "border-foreground/40 bg-card shadow-sm ring-1 ring-foreground/10"
                : "border-border/70 bg-card/50"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-sm text-foreground">{p.name}</h3>
                {p.popular && (
                  <Badge variant="secondary" className="text-[10px] font-mono">
                    Popular
                  </Badge>
                )}
              </div>

              <div className="flex items-baseline gap-1 my-3 font-mono">
                <span className="text-3xl font-bold text-foreground">{p.price}</span>
                <span className="text-xs text-muted-foreground">{p.cadence}</span>
              </div>

              <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                {p.desc}
              </p>

              <div className="space-y-2.5 border-t border-border/40 pt-4 mb-6 text-xs">
                {p.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <Check className="size-3.5 text-foreground shrink-0" />
                    <span className="text-muted-foreground text-[11px]">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#faq"
              className={`${buttonVariants({
                variant: p.popular ? "default" : "outline",
                size: "sm",
              })} w-full text-xs font-medium`}
            >
              {p.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
