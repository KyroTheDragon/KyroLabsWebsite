import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Cpu, Zap, Activity, ShieldCheck } from "lucide-react";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/5 border-primary/20 bg-background/95 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar className="size-10 border border-primary/30">
            <AvatarImage
              alt="Dr. Aris Thorne"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
            />
            <AvatarFallback>AT</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-base font-semibold">Dr. Aris Thorne</CardTitle>
            <CardDescription className="text-xs font-mono text-primary">Chief AI Architect · Aether</CardDescription>
          </div>
        </CardHeader>

        <CardContent className="text-xs text-muted-foreground leading-relaxed">
          “Inference latency dropped from 48ms to <strong className="text-foreground font-mono">1.18ms</strong>. Cryogenic superconducting silicon is the single biggest architectural leap since GPUs.”
        </CardContent>
      </Card>

      {/* Team / Scientist */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/5 border-primary/20 bg-background/95 backdrop-blur-sm">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80"
            alt="Dr. Evelyn Vance"
            className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover border-2 border-primary shadow-md"
          />
          <CardTitle className="text-center text-lg">Dr. Evelyn Vance</CardTitle>
          <CardDescription className="font-normal text-xs text-primary font-mono">
            VP Quantum Supercomputing · Kryo Labs
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-3 text-xs text-muted-foreground leading-relaxed">
          Pioneering sub-Kelvin Josephson junction transformers and thermodynamic sparse attention matrices.
        </CardContent>

        <CardFooter className="pt-0">
          <Badge variant="outline" className="text-[11px] font-mono border-primary/30 text-primary">
            MIT CSAIL · ex-IBM Quantum
          </Badge>
        </CardFooter>
      </Card>

      {/* Pricing / Access */}
      <Card className="absolute top-[160px] left-[40px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/5 border-primary/30 bg-background/95 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between text-base">
            Kryo-3 Core
            <Badge
              variant="secondary"
              className="text-xs text-primary font-mono font-normal"
            >
              Recommended
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold font-mono">$0.10</span>
            <span className="text-muted-foreground text-xs font-mono"> / 1M tokens</span>
          </div>

          <CardDescription className="text-xs pt-1">
            Sub-millisecond inference on dedicated sub-40mK cryostats.
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-3">
          <a
            href="#pricing"
            className={`w-full ${buttonVariants({ size: "sm" })} text-xs shadow-sm`}
          >
            Provision API Key
          </a>
        </CardContent>

        <hr className="w-5/6 m-auto mb-3 border-border/50" />

        <CardFooter className="flex pb-4">
          <div className="space-y-2 text-xs">
            {[
              "0.038 K Dilution Nodes",
              "1.18ms TTFT Latency",
              "16M Sparse Context",
              "OpenAI Drop-in Wire",
            ].map((benefit: string) => (
              <span key={benefit} className="flex items-center">
                <Check className="text-primary size-3.5 shrink-0" />
                <span className="ml-2 text-foreground font-mono text-[11px]">{benefit}</span>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

      {/* Cryo Telemetry / Innovation Card */}
      <Card className="absolute w-[360px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/5 border-primary/20 bg-background/95 backdrop-blur-sm">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4 p-5">
          <div className="mt-1 bg-primary/10 border border-primary/20 p-2 rounded-xl text-primary">
            <Zap className="size-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <CardTitle className="text-sm font-semibold">120 GHz RSFQ Supercurrent</CardTitle>
              <Badge variant="outline" className="text-[10px] font-mono text-emerald-500 border-emerald-500/30">
                0.038 K
              </Badge>
            </div>
            <CardDescription className="text-xs mt-1.5 leading-relaxed">
              Zero resistive Joule heating. Single-flux-quantum pulses evaluate sparse neural gates with zero dissipation lag.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
