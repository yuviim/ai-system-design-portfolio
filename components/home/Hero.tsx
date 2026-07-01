import {
  BookOpen,
  Bot,
  BrainCircuit,
  Boxes,
  Database,
  Layers3,
  PlayCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const architectureSteps = [
  {
    title: "User",
    text: "Applications • APIs • Humans",
    icon: Sparkles,
  },
  {
    title: "AI Gateway",
    text: "Routing • Authentication • Guardrails",
    icon: BrainCircuit,
  },
  {
    title: "Policy Engine",
    text: "Governance • Audit • Compliance",
    icon: ShieldCheck,
  },
  {
    title: "AI Agent Runtime",
    text: "Planning • Tools • Orchestration",
    icon: Bot,
  },
  {
    title: "Knowledge & Skills",
    text: "MCP • Enterprise APIs • RAG",
    icon: BookOpen,
  },
  {
    title: "Federated Query Engine",
    text: "Unified Access • Optimization • Pushdown",
    icon: Database,
  },
];

const platforms = [
  ["Exasol", "Analytical Engine"],
  ["Snowflake", "Cloud Warehouse"],
  ["Iceberg", "Open Table Format"],
  ["BigQuery", "Serverless Analytics"],
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.12),transparent_32%),radial-gradient(circle_at_86%_14%,rgba(100,116,139,0.12),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f7faff_100%)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-70" />

      <div className="relative mx-auto grid max-w-[1500px] gap-16 px-8 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center">
          <p className="mb-5 w-fit rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-600 ring-1 ring-blue-100">
            Enterprise AI Architecture
          </p>

          <h1 className="max-w-3xl text-[4.4rem] font-medium leading-[0.95] tracking-[-0.065em] text-slate-950">
            Engineering Enterprise AI Systems.
          </h1>

          <p className="mt-8 max-w-2xl text-xl font-normal leading-9 text-slate-600">
            I build working reference implementations, explain complex systems
            through architecture notes, and publish structured learning paths
            for enterprise AI and modern data platforms.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/library"
              className="rounded-2xl bg-blue-600 px-7 py-4 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Explore Architecture Library →
            </a>

            <a
              href="/library/nexusiq"
              className="rounded-2xl border border-slate-200 bg-white/80 px-7 py-4 text-[15px] font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:border-blue-200"
            >
              View NexusIQ
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-4 gap-8">
            {[
              ["18+", "Years Experience"],
              ["AI", "Platform Architect"],
              ["NexusIQ", "Reference Platform"],
              ["EU", "Career Target"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                  {value}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-[44px] bg-[radial-gradient(circle,rgba(37,99,235,0.14)_1px,transparent_1px)] [background-size:22px_22px]" />

          <div className="relative w-full max-w-[620px] rounded-[34px] border border-slate-200/80 bg-white/75 p-8 shadow-2xl shadow-slate-200/70 backdrop-blur">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Reference Architecture
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                Enterprise AI Execution Flow
              </h2>
            </div>

            <div className="flex flex-col items-center">
              {architectureSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="flex w-full flex-col items-center"
                  >
                    <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60">
                      <div className="flex items-center gap-5">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div>
                          <p className="text-[18px] font-bold tracking-[-0.02em] text-slate-900">
                            {step.title}
                          </p>
                          <p className="mt-1 text-[14px] font-medium leading-6 text-slate-600">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </div>

                    {index < architectureSteps.length - 1 && (
                      <div className="h-6 w-[2px] bg-gradient-to-b from-blue-400 to-blue-100" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Connected Data Platforms
              </p>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {platforms.map(([name, label]) => (
                  <div
                    key={name}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-center shadow-sm"
                  >
                    <p className="text-[15px] font-bold text-slate-900">
                      {name}
                    </p>
                    <p className="mt-1 text-[12px] font-medium leading-4 text-slate-600">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}