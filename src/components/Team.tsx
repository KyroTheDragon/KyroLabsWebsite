import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Linkedin, Globe } from "lucide-react";
import { Badge } from "./ui/badge";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  bio: string;
  credential: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
    name: "Dr. Evelyn Vance",
    position: "Chief Scientist & Co-Founder",
    bio: "Pioneered Josephson SQUID logic transformers. Former principal investigator at IBM Quantum.",
    credential: "Ph.D. Harvard Applied Physics",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    name: "Kai Thorne, Ph.D.",
    position: "VP Hardware & Cryogenics",
    bio: "Architected multi-stage dilution cryostats for particle accelerators at CERN.",
    credential: "Ph.D. Stanford Cryogenics",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    name: "Dr. Marcus Sterling",
    position: "Head of Sparse Neural Architecture",
    bio: "Developed O(N) linear state-space models and sub-Kelvin attention compilation algorithms.",
    credential: "ex-DeepMind Staff Researcher",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
    name: "Dr. Linnea Lindqvist",
    position: "Director of Thermodynamic Computing",
    bio: "Specialist in Landauer thermodynamic constraints and zero-dissipation non-von Neumann substrates.",
    credential: "MIT CSAIL Postdoctoral Fellow",
  },
];

export const Team = () => {
  return (
    <section
      id="team"
      className="container py-20 sm:py-28"
    >
      <div className="text-center space-y-3 mb-12">
        <Badge variant="outline" className="font-mono text-xs border-primary/30 text-primary">
          RESEARCH LEADERSHIP
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Scientific{" "}
          <span className="bg-gradient-to-r from-primary to-cyan-400 text-transparent bg-clip-text">
            Architects
          </span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Led by cryogenic physicists, quantum computer architects, and foundational deep learning researchers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12">
        {teamList.map(
          ({ imageUrl, name, position, bio, credential }: TeamProps) => (
            <Card
              key={name}
              className="bg-card/60 border-border/80 relative mt-8 flex flex-col justify-between items-center text-center hover:border-primary/40 transition-colors shadow-sm"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-10 rounded-full w-20 h-20 aspect-square object-cover border-2 border-primary shadow-md"
                />
                <CardTitle className="text-center text-base font-semibold mt-2">{name}</CardTitle>
                <CardDescription className="text-primary font-mono text-xs">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center text-xs text-muted-foreground leading-relaxed px-4">
                <p>{bio}</p>
              </CardContent>

              <CardFooter className="pt-2 pb-4">
                <Badge variant="secondary" className="font-mono text-[10px]">
                  {credential}
                </Badge>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
