import Link from "next/link";
import fs from "fs";
import path from "path";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Mail,
  Network,
  PlayCircle,
  UserRound,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Header } from "../../components/layout/Header";

type ContentItem = {
  type?: string;
  thumbnail?: string;
  diagram?: string;
};

function getContent(): ContentItem[] {
  const filePath = path.join(process.cwd(), "data", "content.json");
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export default function AboutPage() {
  const content = getContent();

  const architectureCount = content.filter(
    (item) => item.type === "architecture" || item.diagram
  ).length;

  const videoCount = content.filter((item) => item.type === "youtube").length;

  const stats = [
    ["18+", "Years of Experience", BookOpen],
    [`${Math.max(architectureCount, 1)}+`, "Architecture Diagrams", Network],
    [`${Math.max(videoCount, 1)}+`, "YouTube Videos", PlayCircle],
    ["1", "Mission: Engineering clarity for Enterprise AI", Code2],
  ];

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_45%,#eef5ff_100%)] text-slate-950">
      <Header />

      <section className="mx-auto max-w-[1500px] px-8 py-16">
        <section className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.34em] text-blue-600">
              About
            </p>

            <h1 className="text-7xl font-bold leading-[0.92] tracking-[-0.075em] md:text-8xl">
              Hi, I&apos;m Yuvaraj.
            </h1>

            <h2 className="mt-8 max-w-3xl text-4xl font-bold leading-tight tracking-[-0.05em] text-blue-600">
              I build systems that help enterprises trust AI.
            </h2>

            <p className="mt-8 max-w-2xl text-xl font-medium leading-9 text-slate-700">
              Enterprise AI needs more than models. It needs data platforms,
              distributed systems, governance, and architectures that
              organizations can trust.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/yuvim"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm"
              >
                <FaLinkedin className="h-4 w-4 text-[#0A66C2]" />
                LinkedIn
              </a>

              <a
                href="https://github.com/yuviim"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>

              <a
                href="mailto:hello@yuvarajai.com"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>

              <Link
                href="/library"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-blue-600/25"
              >
                Explore Library
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-14 grid max-w-4xl gap-8 md:grid-cols-[1.25fr_1fr]">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                  Previous Experience
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    ["Exasol", "Product Evangelist"],
                    ["Accenture", "Enterprise Data & AI"],
                    ["Maveric Systems", "AI & Platform Engineering"],
                  ].map(([name, role]) => (
                    <div
                      key={name}
                      className="min-h-[82px] rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                      <p className="text-sm font-bold text-slate-950">{name}</p>
                      <p className="mt-1 text-[11px] font-medium leading-4 text-slate-500">
                        {role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                  Multi Cloud
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {["AWS", "Azure", "Google Cloud"].map((item) => (
                    <div
                      key={item}
                      className="flex h-[72px] items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-800 shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[56px] bg-blue-300/30 blur-[90px]" />

            <div className="relative overflow-hidden rounded-[46px] border border-blue-100 bg-[radial-gradient(circle_at_50%_35%,#dbeafe_0%,#93c5fd_58%,#60a5fa_100%)] shadow-[0_50px_140px_rgba(37,99,235,0.22)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.5),transparent_45%)]" />

              <img
                src="/images/library/yuvaraj-profile.png"
                alt="Yuvaraj"
                className="relative z-10 h-[690px] w-full object-cover object-top mix-blend-multiply"
              />

              <div className="absolute bottom-8 left-8 right-8 z-20 rounded-[28px] border border-white/80 bg-white/90 p-7 shadow-[0_25px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl">
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white">
                    <UserRound className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-lg font-bold tracking-[-0.03em] text-slate-900">
                      Enterprise AI • Data Platforms • Distributed Systems
                    </p>
                    <p className="mt-2 text-base font-medium text-slate-500">
                      Building Enterprise AI in public.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map(([value, label, Icon]) => {
              const IconComponent = Icon as typeof BookOpen;

              return (
                <div
                  key={label as string}
                  className="flex items-center gap-5 border-slate-200 md:border-r md:last:border-r-0"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <IconComponent className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-3xl font-bold tracking-[-0.06em] text-blue-600">
                      {value as string}
                    </p>
                    <p className="mt-1 max-w-[190px] text-sm font-medium leading-5 text-slate-600">
                      {label as string}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-20 rounded-[46px] bg-slate-950 p-12 text-white shadow-[0_40px_120px_rgba(15,23,42,0.22)]">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.32em] text-blue-300">
            Why This Exists
          </p>

          <h2 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.06em]">
            Enterprise AI needs better system-level explanations.
          </h2>

          <div className="mt-10 grid gap-8 text-lg font-medium leading-9 text-slate-300 md:grid-cols-3">
            <p>
              Enterprise AI has no shortage of content. But much of it focuses
              on models, prompts, tools, and frameworks.
            </p>
            <p>
              Very little explains the engineering underneath: retrieval,
              policy engines, AI gateways, governance, distributed execution,
              and platform architecture.
            </p>
            <p>
              This site is my public engineering notebook for architecture
              notes, diagrams, implementation patterns, and lessons from
              building enterprise AI systems.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}