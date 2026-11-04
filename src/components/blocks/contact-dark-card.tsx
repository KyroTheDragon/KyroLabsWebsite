import { CheckIcon, CircleAlertIcon, Mail, Github, ClockIcon } from "lucide-react";
import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { CopyButton } from "@/components/ui/copy-button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Guides } from "@/components/ui/guides";
import { Input } from "@/components/ui/input";
import { ShineButton } from "@/components/ui/shine-button";
import { Textarea } from "@/components/ui/textarea";

type Phase = "idle" | "sending" | "sent";

interface Details {
  message: string;
  email: string;
  name: string;
}

interface Row {
  copy: string;
  copyLabel: string;
  href: string | undefined;
  label: string;
  value: string;
}

const EMAIL = "contact@kryolabs.com";

const ROWS: Row[] = [
  {
    copy: EMAIL,
    copyLabel: "Copy email address",
    href: `mailto:${EMAIL}`,
    label: "Email",
    value: EMAIL,
  },
  {
    copy: "https://github.com",
    copyLabel: "Copy GitHub URL",
    href: "https://github.com",
    label: "GitHub",
    value: "github.com/kryolabs",
  },
];

const EMPTY: Details = { message: "", email: "", name: "" };
const EMAIL_SHAPE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactRow = ({ row }: { row: Row }) => (
  <div className="relative flex flex-col gap-1 px-6 py-5 sm:px-8">
    <Guides marks="top" rules="top" sides={false} />
    <dt className="text-xs font-medium text-muted-foreground">{row.label}</dt>
    <dd className="flex items-center justify-between gap-3">
      <span className="font-medium text-base sm:text-lg text-foreground tracking-tight">
        {row.href ? (
          <a
            className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            href={row.href}
            target={row.href.startsWith("http") ? "_blank" : undefined}
            rel={row.href.startsWith("http") ? "noreferrer" : undefined}
          >
            {row.value}
          </a>
        ) : (
          row.value
        )}
      </span>
      <CopyButton
        aria-label={row.copyLabel}
        className="shrink-0"
        content={row.copy}
        size="icon"
        variant="ghost"
      />
    </dd>
  </div>
);

export const ContactDarkCard = () => {
  const id = useId();
  const [details, setDetails] = useState<Details>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [phase, setPhase] = useState<Phase>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const update = (name: string, value: string) => {
    setDetails((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (phase !== "idle") return;

    const found: Record<string, string> = {};
    if (!details.name.trim()) found.name = "Enter your name.";
    if (!details.email.trim()) {
      found.email = "Enter your email.";
    } else if (!EMAIL_SHAPE.test(details.email.trim())) {
      found.email = "Enter a valid email address.";
    }
    if (!details.message.trim()) found.message = "Please include a brief message.";

    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }

    setPhase("sending");
    timer.current = setTimeout(() => {
      setPhase("sent");
    }, 700);
  };

  const reset = () => {
    setDetails(EMPTY);
    setErrors({});
    setPhase("idle");
  };

  return (
    <section id="contact" className="relative overflow-x-clip px-4 sm:px-6">
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <Guides bleed marks="top" rules="top" />

        <div className="flex flex-col bg-muted/30 lg:border-e border-border">
          <div className="px-6 pt-12 pb-8 sm:px-8 md:pt-16">
            <h2 className="font-bold text-2xl tracking-tight sm:text-3xl text-foreground">
              Contact &amp; Inquiries
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Have questions about Haulverse, Rovex, or collaborating with Kryo Labs? Reach out directly.
            </p>
          </div>

          <address className="not-italic">
            <dl className="flex flex-col">
              {ROWS.map((row) => (
                <ContactRow key={row.label} row={row} />
              ))}
            </dl>
          </address>

          <div className="relative mt-auto px-6 py-6 sm:px-8 border-t border-border">
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <ClockIcon className="size-3.5" aria-hidden="true" />
              <span>Response turnaround: usually within 24 hours</span>
            </p>
          </div>
        </div>

        <div className="relative px-6 py-12 sm:px-10 lg:py-16">
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8 shadow-sm">
            {phase !== "sent" ? (
              <form onSubmit={submit} noValidate className="flex flex-col gap-5">
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg tracking-tight text-foreground">
                    Send a Message
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Direct communication with the engineering team.
                  </p>
                </div>

                <FieldGroup>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field invalid={Boolean(errors.name)}>
                      <FieldLabel htmlFor={`${id}-name`}>Your Name</FieldLabel>
                      <Input
                        id={`${id}-name`}
                        name="name"
                        value={details.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="Alex Doe"
                        disabled={phase === "sending"}
                        className="rounded"
                      />
                      {errors.name && <FieldError>{errors.name}</FieldError>}
                    </Field>

                    <Field invalid={Boolean(errors.email)}>
                      <FieldLabel htmlFor={`${id}-email`}>Your Email</FieldLabel>
                      <Input
                        id={`${id}-email`}
                        name="email"
                        type="email"
                        value={details.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="alex@domain.com"
                        disabled={phase === "sending"}
                        className="rounded"
                      />
                      {errors.email && <FieldError>{errors.email}</FieldError>}
                    </Field>
                  </div>

                  <Field invalid={Boolean(errors.message)}>
                    <FieldLabel htmlFor={`${id}-msg`}>Message / Inquiry</FieldLabel>
                    <Textarea
                      id={`${id}-msg`}
                      name="message"
                      rows={4}
                      value={details.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Tell us what you're working on or what you'd like to discuss..."
                      disabled={phase === "sending"}
                      className="rounded"
                    />
                    {errors.message && <FieldError>{errors.message}</FieldError>}
                  </Field>
                </FieldGroup>

                <div className="pt-2">
                  <ShineButton type="submit" size="default" disabled={phase === "sending"}>
                    {phase === "sending" ? "Sending..." : "Send Message"}
                  </ShineButton>
                </div>
              </form>
            ) : (
              <div className="flex flex-col items-start gap-3 py-6" role="status">
                <span className="flex size-9 items-center justify-center rounded border border-border bg-muted/60 text-foreground">
                  <CheckIcon className="size-4" aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-xl tracking-tight text-foreground">
                  Message Sent
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                  Thank you, <strong className="text-foreground">{details.name}</strong>. We've received your inquiry and will follow up at <strong className="text-foreground">{details.email}</strong> shortly.
                </p>
                <Button onClick={reset} variant="outline" size="sm" className="mt-2 rounded">
                  Send another message
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
