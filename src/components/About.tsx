import { Statistics } from "./Statistics";
import { Badge } from "./ui/badge";
import { ShieldCheck, Snowflake, Zap, Cpu } from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-16 sm:py-24"
    >
      <div className="bg-muted/30 border border-border/80 rounded-2xl py-12 px-6 sm:px-12 shadow-sm">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-border/50">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="font-mono text-xs border-primary/30 text-primary">
                  FOUNDATIONAL LABORATORY
                </Badge>
                <span className="text-xs font-mono text-muted-foreground">CRYO-ISO 17025 ACCREDITED</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Breaking the{" "}
                <span className="bg-gradient-to-r from-primary to-cyan-400 text-transparent bg-clip-text">
                  Thermal Boundary
                </span>{" "}
                of AI
              </h2>
            </div>

            <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Modern frontier models are suffocated by the heat of CMOS silicon. Kryo Labs re-architects neural compute around sub-40mK superconductors, eliminating electrical resistance and joule heating to unlock non-linear scaling for autonomous planetary systems.
            </p>
          </div>

          <Statistics />
        </div>
      </div>
    </section>
  );
};
