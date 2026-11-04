import { Atom, Cpu, Network, Shield, Binary, Sparkles } from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Cpu className="size-6 text-primary" />,
    name: "Stanford AI Lab",
  },
  {
    icon: <Atom className="size-6 text-primary" />,
    name: "MIT CSAIL",
  },
  {
    icon: <Binary className="size-6 text-primary" />,
    name: "CERN OpenLab",
  },
  {
    icon: <Network className="size-6 text-primary" />,
    name: "Berkeley BAIR",
  },
  {
    icon: <Sparkles className="size-6 text-primary" />,
    name: "Max Planck Institute",
  },
  {
    icon: <Shield className="size-6 text-primary" />,
    name: "Oak Ridge Exascale",
  },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-16 sm:py-24 border-y border-border/40 my-10 bg-muted/20"
    >
      <p className="text-center text-xs font-mono uppercase tracking-widest mb-8 text-muted-foreground">
        Research Co-Development & Cryogenic Benchmarking Deployments
      </p>

      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-2.5 text-foreground/80 hover:text-foreground transition-colors group"
          >
            <span className="p-2 rounded-lg bg-background border border-border group-hover:border-primary/40 transition-colors shadow-sm">
              {icon}
            </span>
            <h3 className="text-base font-semibold font-mono tracking-tight">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
