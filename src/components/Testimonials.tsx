import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";

interface TestimonialProps {
  image: string;
  name: string;
  role: string;
  company: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    name: "Dr. Aris Thorne",
    role: "Chief AI Architect",
    company: "Aether Dynamics",
    comment:
      "We transitioned our 400B-parameter autonomous agent swarm to Kryo-3 Core. Inference latency dropped from 48ms down to 1.18ms while our datacenter cooling draw fell by 84%.",
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    name: "Dr. Linnea Wu",
    role: "Director of HPC",
    company: "Brackenridge Quantum",
    comment:
      "Kryo's zero-resistance Josephson attention matrices dissolved the thermal ceiling that choked our continuous context windows. 16M token states are fully persistent.",
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    name: "Marcus Sterling",
    role: "VP Autonomous Systems",
    company: "Vortex Robotics",
    comment:
      "Sub-millisecond TTFT enabled our planetary exploration drones to perform closed-loop trajectory planning with zero sensor latency.",
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    name: "Elena Rostova",
    role: "Lead Computational Biologist",
    company: "BioFold Therapeutics",
    comment:
      "Simulating protein conformational dynamics at 0.038 K accuracy shaved 14 months off our oncology preclinical trials.",
  },
  {
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    name: "David Chen",
    role: "VP Cloud Infrastructure",
    company: "Hyperion Systems",
    comment:
      "Drop-in OpenAI SDK compatibility meant our 120-person engineering department migrated all production pipelines within a single morning.",
  },
  {
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
    name: "Dr. Soren Lindqvist",
    role: "Principal Scientist",
    company: "Nordic AI Lab",
    comment:
      "The thermodynamic efficiency of 420 TFLOPS/Watt fundamentally redefines the economics of foundational reasoning clusters.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-20 sm:py-28"
    >
      <div className="text-center space-y-3 mb-12">
        <Badge variant="outline" className="font-mono text-xs border-primary/30 text-primary">
          PRODUCTION VALIDATION
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Validated in{" "}
          <span className="bg-gradient-to-r from-primary to-cyan-400 text-transparent bg-clip-text">
            Frontier Labs
          </span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          What engineering leaders and research directors say after deploying on Kryo superconducting compute.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {testimonials.map(
          ({ image, name, role, company, comment }: TestimonialProps) => (
            <Card
              key={name}
              className="flex flex-col justify-between border-border/80 bg-card/60 hover:border-primary/40 transition-colors shadow-sm"
            >
              <CardContent className="pt-6 text-sm text-foreground/90 leading-relaxed italic">
                “{comment}”
              </CardContent>

              <CardHeader className="flex flex-row items-center gap-3 pt-4 border-t border-border/40">
                <Avatar className="size-10 border border-primary/20">
                  <AvatarImage alt={name} src={image} />
                  <AvatarFallback className="font-mono text-xs">{name.slice(0, 2)}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-sm font-semibold">{name}</CardTitle>
                  <CardDescription className="text-xs font-mono text-primary">
                    {role}, <span className="text-muted-foreground">{company}</span>
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
