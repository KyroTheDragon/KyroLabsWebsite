import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Snowflake, Zap, Layers, Terminal } from "lucide-react";
import { Badge } from "./ui/badge";

interface StepProps {
  step: string;
  icon: JSX.Element;
  title: string;
  description: string;
}

const steps: StepProps[] = [
  {
    step: "01",
    icon: <Snowflake className="size-8 text-primary" />,
    title: "Dilution Refrigeration",
    description:
      "Closed-cycle He3/He4 pulse tube cryostats maintain a perpetual 0.038 Kelvin base chamber with zero consumable helium refills.",
  },
  {
    step: "02",
    icon: <Zap className="size-8 text-primary" />,
    title: "120 GHz RSFQ Logic",
    description:
      "Rapid Single-Flux-Quantum superconducting circuits execute neural weight transformations with zero resistive Joule heating.",
  },
  {
    step: "03",
    icon: <Layers className="size-8 text-primary" />,
    title: "Sparse Attention Matrix",
    description:
      "Dynamic state-space attention prunes 98.4% of low-entropy connections in L2 hardware registers, scaling context to 16M tokens linearly.",
  },
  {
    step: "04",
    icon: <Terminal className="size-8 text-primary" />,
    title: "Drop-in API Gateway",
    description:
      "Full wire protocol compatibility with OpenAI and Anthropic SDKs. Switch your base_url to Kryo and gain immediate sub-millisecond TTFT.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-20 sm:py-28"
    >
      <div className="flex justify-center mb-3">
        <Badge variant="outline" className="font-mono text-xs border-primary/30 text-primary">
          PHYSICAL ENGINEERING PIPELINE
        </Badge>
      </div>

      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        How Cryogenic{" "}
        <span className="bg-gradient-to-r from-primary to-cyan-400 text-transparent bg-clip-text">
          Supercomputing
        </span>{" "}
        Operates
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-12 text-base sm:text-lg text-muted-foreground leading-relaxed">
        From sub-atomic quantum flux to REST API responses: how Kryo Labs bypasses Moore's Law and the thermodynamic wall.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map(({ step, icon, title, description }: StepProps) => (
          <Card
            key={title}
            className="bg-card/50 border-border/80 hover:border-primary/40 transition-all text-left relative group overflow-hidden"
          >
            <div className="absolute top-3 right-4 font-mono text-3xl font-extrabold text-muted/40 group-hover:text-primary/20 transition-colors">
              {step}
            </div>
            <CardHeader className="pt-6">
              <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                {icon}
              </div>
              <CardTitle className="text-lg font-semibold tracking-tight">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
