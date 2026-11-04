export const Statistics = () => {
  const stats = [
    { value: "420", unit: "TFLOPS/W", label: "Energy Efficiency", desc: "48× density vs standard CMOS silicon" },
    { value: "1.18", unit: "ms", label: "Time-to-First-Token", desc: "Zero superconducting resistance delay" },
    { value: "16.4M", unit: "tokens", label: "Active Context", desc: "Linear state-space attention matrix" },
    { value: "0.038", unit: "K", label: "Cryostat Base", desc: "Continuous closed-cycle He3/4 dilution" },
  ];

  return (
    <section id="benchmarks" className="border-y border-border/50 bg-muted/20">
      <div className="container max-w-5xl px-4 py-12 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="space-y-1">
              <div className="flex items-baseline gap-1 font-mono">
                <span className="text-3xl font-bold tracking-tight text-foreground">{s.value}</span>
                <span className="text-xs text-muted-foreground">{s.unit}</span>
              </div>
              <p className="text-xs font-medium text-foreground">{s.label}</p>
              <p className="text-[11px] text-muted-foreground leading-normal">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
