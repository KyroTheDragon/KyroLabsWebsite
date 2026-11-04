import { CheckCircle2 } from "lucide-react";

export const QualityAssurance = () => {
  const standards = [
    {
      title: "ISO/IEC 25010:2023",
      role: "Software Quality Framework",
      description:
        "International standard guiding our product quality evaluation across reliability, performance efficiency, security, maintainability, and fault recovery.",
      points: [
        "Reliability & fault-tolerance modeling",
        "Maintainable, modular architecture",
        "Performance under sustained workload",
      ],
    },
    {
      title: "OWASP ASVS",
      role: "Security Verification Standard",
      description:
        "Recognised application security verification standard defining our checklists for authentication, session handling, access controls, and data sanitisation.",
      points: [
        "Input validation & boundary sanitisation",
        "Role-based access control (RBAC)",
        "Automated dependency vulnerability audits",
      ],
    },
    {
      title: "Grafana k6",
      role: "Performance & Stress Testing",
      description:
        "Developer-centric performance framework used to evaluate latency, memory stability, and throughput limits under load, spike, and endurance scenarios.",
      points: [
        "High-concurrency traffic simulation",
        "WebSocket connection durability",
        "Early bottleneck identification",
      ],
    },
    {
      title: "Google Lighthouse",
      role: "Web Standards & Accessibility",
      description:
        "Automated auditing for real-world client performance, WCAG 2.1 accessibility adherence, Core Web Vitals, and technical best practices.",
      points: [
        "Core Web Vitals diagnostic auditing",
        "WCAG 2.1 AA/AAA accessibility compliance",
        "Render-path and payload optimisation",
      ],
    },
  ];

  return (
    <section id="quality" className="relative px-4 py-16 sm:px-8 sm:py-28 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl">
        {/* Clean Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Engineering Quality &amp; Assurance
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            At Kryo Labs, quality isn&apos;t an afterthought. We engineer for performance, test for resilience, and build for reliability through our internal Software Quality Assurance Standard (KL-SQAS).
          </p>
        </div>

        {/* 4 Clean Cards (Single-layer Antigravity containers, no nested boxes) */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
          {standards.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-5 sm:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-zinc-500 mb-3">
                  {item.role}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 space-y-1.5">
                {item.points.map((pt) => (
                  <div key={pt} className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                    <CheckCircle2 className="size-3.5 text-blue-600 dark:text-blue-400 shrink-0" aria-hidden="true" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Compliance Footnote */}
        <p className="mt-8 text-[11px] text-zinc-400 dark:text-zinc-500 leading-relaxed">
          KL-SQAS is an internal engineering framework. References to ISO/IEC 25010:2023 and OWASP ASVS define our technical standards and do not represent third-party certification or external audit endorsements.
        </p>
      </div>
    </section>
  );
};
