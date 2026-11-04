import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQList = [
  {
    question: "Is the Kryo API drop-in compatible with existing SDKs?",
    answer:
      "Yes. The Kryo API is wire-protocol compatible with OpenAI, Anthropic, and vLLM clients. Change your base_url to https://api.kryolabs.ai/v1 and set your API key. Streaming SSE, structured JSON outputs, and tool calls work with zero code modifications.",
    value: "item-1",
  },
  {
    question: "How do you achieve 0.038 Kelvin in commercial datacenters?",
    answer:
      "Kryo-Pods use closed-cycle Helium-3/Helium-4 dilution refrigerators that operate without consumable liquid helium refills. Standard 42U rack units install directly into existing datacenter bays with ordinary chilled-water loop connections.",
    value: "item-2",
  },
  {
    question: "How does sparse attention achieve 16M context without latency spikes?",
    answer:
      "By executing dynamic state-space projection in superconducting hardware registers, 98.4% of low-entropy token interactions are pruned without memory round-trips. This preserves linear O(N) context scaling with sub-1.2ms TTFT.",
    value: "item-3",
  },
  {
    question: "Can enterprises deploy dedicated on-premises cryostats?",
    answer:
      "Yes. Turnkey 64-socket or 512-socket Kryo-Pod units are available for sovereign defense, biotech, and high-frequency trading institutions with 24/7 automated telemetry monitoring and on-site hardware SLAs.",
    value: "item-4",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container max-w-5xl px-4 py-20 sm:px-8 border-t border-border/50">
      <div className="space-y-2 mb-10">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
          FAQ
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Frequently asked questions.
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value} className="border-border/60">
            <AccordionTrigger className="text-left text-sm font-medium hover:no-underline hover:text-foreground">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground leading-relaxed">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
