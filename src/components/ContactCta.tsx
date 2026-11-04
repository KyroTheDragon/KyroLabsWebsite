import { buttonVariants } from "@/components/ui/button";
import { Mail, Github } from "lucide-react";

export const ContactCta = () => {
  return (
    <section id="contact" className="container max-w-4xl px-4 py-16 sm:px-6 border-t border-border">
      <div className="max-w-2xl space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          Contact
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          For questions, collaboration, or inquiries regarding our software projects:
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href="mailto:contact@kryolabs.com"
            className={`${buttonVariants({ size: "default" })} text-xs h-9 px-4 font-medium rounded`}
          >
            <Mail className="size-3.5 mr-2" aria-hidden="true" />
            contact@kryolabs.com
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className={`${buttonVariants({ variant: "outline", size: "default" })} text-xs h-9 px-4 rounded`}
          >
            <Github className="size-3.5 mr-2" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
