import Link from "next/link";
import {
  BookOpen,
  BrainCircuit,
  Database,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export function NexusIQSection() {
  return (
    <section className="mx-auto max-w-[1500px] px-8 pb-24">
      <div className="grid gap-12 rounded-[36px] border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur lg:grid-cols-[0.85fr_1.15fr]">
        <div className="p-4">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
            Reference Implementation
          </p>

          <h2 className="text-5xl font-semibold tracking-[-0.06em] text-slate-950">
            NexusIQ turns architecture into working software.
          </h2>

          <p className="mt-6 text-[18px] font-medium leading-8 text-slate-700">
            NexusIQ is the reference platform where enterprise AI architecture
            patterns become working software — AI SQL, RAG, federation,
            governance, research intelligence, and product strategy workflows.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              "Text-to-SQL",
              "Enterprise RAG",
              "Federated Query",
              "Research Studio",
              "Governance",
              "Architecture Demos",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-[#f8fafc]/90 px-4 py-3 text-sm font-bold text-slate-800"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-4">
            <Link
              href="/library/nexusiq"
              className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white"
            >
              Open NexusIQ →
            </Link>

            <Link
              href="/library"
              className="rounded-2xl border border-slate-200 bg-white/90 px-5 py-3 text-sm font-bold text-slate-900"
            >
              Explore patterns
            </Link>
          </div>
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-slate-50/80 p-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-lg font-bold text-slate-950">
                Enterprise AI Execution Flow
              </p>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                Reference Architecture
              </span>
            </div>

            {[
              ["User", "Applications • APIs • Humans", Sparkles],
              ["AI Gateway", "Routing • Authentication • Guardrails", BrainCircuit],
              ["Policy Engine", "Governance • Audit • Compliance", ShieldCheck],
              ["Knowledge & Skills", "MCP • Enterprise APIs • RAG", BookOpen],
              ["Data Platform", "Federation • Optimization • Analytics", Database],
            ].map(([title, text, Icon]) => {
              const StepIcon = Icon as typeof Sparkles;

              return (
                <div
                  key={title as string}
                  className="mb-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <StepIcon className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-base font-bold text-slate-950">
                        {title as string}
                      </p>
                      <p className="text-sm font-medium text-slate-700">
                        {text as string}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="mt-5 grid grid-cols-4 gap-3">
              {["Exasol", "Snowflake", "Iceberg", "BigQuery"].map((name) => (
                <div
                  key={name}
                  className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-center text-sm font-bold text-slate-900"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}