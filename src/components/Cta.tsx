import { Button, buttonVariants } from "./ui/button";
import { Sparkles, Terminal, ShieldCheck } from "lucide-react";
import { Badge } from "./ui/badge";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/40 py-16 my-20 sm:my-28 border-y border-border/40"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center gap-8">
        <div className="lg:col-start-1">
          <Badge variant="outline" className="font-mono text-xs border-primary/30 text-primary mb-2">
            CRYO-3 CLUSTER PROVISIONING
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ready to Break the{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-400 text-transparent bg-clip-text">
              Thermal Wall
            </span>
            ?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-4 mb-8 lg:mb-0 leading-relaxed">
            Join the developers and research laboratories migrating high-scale inference to sub-40mK superconducting clusters. Instant token generation, drop-in OpenAI SDK wire compatibility, and guaranteed 99.99% uptime.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 lg:col-start-2 w-full lg:w-auto lg:justify-end">
          <a
            href="#pricing"
            className={`${buttonVariants({
              size: "lg",
            })} shadow-md`}
          >
            <Sparkles className="mr-2 size-4" />
            Provision API Key
          </a>
          <a
            href="#faq"
            className={`${buttonVariants({
              variant: "outline",
              size: "lg",
            })}`}
          >
            <Terminal className="mr-2 size-4 text-primary" />
            Read Architecture FAQ
          </a>
        </div>
      </div>
    </section>
  );
};
