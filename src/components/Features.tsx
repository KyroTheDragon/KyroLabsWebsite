import { Snowflake, Zap, Layers } from "lucide-react";

export const Features = () => {
  const items = [
    {
      icon: <Snowflake className="size-5 text-foreground" />,
      title: "Closed-Cycle Dilution (0.038 K)",
      description:
        "Continuous multi-stage Helium-3/4 pulse-tube dilution refrigerator eliminates phonon scattering with zero liquid helium replenishment requirements.",
      tag: "Hardware Substrate",
    },
    {
      icon: <Zap className="size-5 text-foreground" />,
      title: "120 GHz RSFQ Logic",
      description:
        "Rapid Single-Flux-Quantum superconducting circuits execute neural weight projections in picoseconds with virtually zero Joule heat dissipation.",
      tag: "Superconducting Core",
    },
    {
      icon: <Layers className="size-5 text-foreground" />,
      title: "Linear Sparse Attention",
      description:
        "State-space recurrent projection prunes 98.4% of low-entropy connections in hardware registers, enabling 16M token contexts without quadratic memory penalties.",
      tag: "Algorithmic Matrix",
    },
  ];

  return (
    <section id="architecture" className="container max-w-5xl px-4 py-20 sm:px-8">
      <div className="space-y-2 mb-12">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
          Architecture
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Engineered for the thermodynamic limit.
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Standard semiconductor chips hit a thermal wall at 1,000 watts per socket. Kryo Labs redesigns neural processors around zero-resistance superconductivity.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-between rounded-xl border border-border/70 bg-card p-6 transition-colors hover:border-foreground/20"
          >
            <div>
              <div className="flex size-9 items-center justify-center rounded-lg border border-border bg-muted/40 mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-base text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/40 font-mono text-[11px] text-muted-foreground">
              {item.tag}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
