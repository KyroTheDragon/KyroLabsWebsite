import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { CheckCircle2, Sparkles } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto border-border/50" />

      <div className="container py-20 sm:py-28">
        <div className="text-center space-y-3 mb-6">
          <Badge variant="outline" className="font-mono text-xs border-primary/30 text-primary">
            ACADEMIC PREPRINTS & DISPATCH
          </Badge>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
            Join the{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-400 text-transparent bg-clip-text">
              Cryo Research Dispatch
            </span>
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Receive monthly deep dives into Josephson circuit physics, sparse attention preprints, and hardware cluster benchmark updates.
          </p>
        </div>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 max-w-md mx-auto text-emerald-400 font-mono text-sm">
            <CheckCircle2 className="size-4 shrink-0" />
            <span>Subscribed! Access token dispatched to {email}.</span>
          </div>
        ) : (
          <form
            className="flex flex-col w-full sm:flex-row sm:w-8/12 md:w-6/12 lg:w-5/12 mx-auto gap-2"
            onSubmit={handleSubmit}
          >
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="researcher@university.edu"
              className="bg-muted/40 font-mono text-xs sm:text-sm h-11"
              aria-label="email"
              required
            />
            <Button className="h-11 px-6 shadow-sm font-semibold shrink-0">
              <Sparkles className="mr-2 size-4" />
              Subscribe
            </Button>
          </form>
        )}

        <p className="text-center font-mono text-[11px] text-muted-foreground mt-4">
          No marketing noise. Pure peer-reviewed preprints and cluster changelogs.
        </p>
      </div>

      <hr className="w-11/12 mx-auto border-border/50" />
    </section>
  );
};
