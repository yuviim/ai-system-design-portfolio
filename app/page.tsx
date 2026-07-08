import Link from "next/link";
import { Header } from "../components/layout/Header";
import { Hero } from "../components/home/Hero";
import { FeaturedArticle } from "../components/home/FeaturedWork";
import { ArchitectureLibrary } from "../components/home/ArchitectureSection";
import { LatestKnowledge } from "../components/home/LatestKnowledge";
import { NexusIQSection } from "../components/home/NexusIQSection";
import { Footer } from "../components/layout/Footer";
import {
  getContent,
  getFeaturedArticle,
  getLatestKnowledge,
} from "../lib/content";

export default function HomePage() {
  const content = getContent();
  const featuredArticle = getFeaturedArticle(content);
  const latestKnowledge = getLatestKnowledge(content, featuredArticle?.id);

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.08),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(15,23,42,0.06),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fafc_45%,#f1f5f9_100%)] text-slate-950">
      <Header />

      <Hero />

      <FeaturedArticle item={featuredArticle} />

      <ArchitectureLibrary />

      <LatestKnowledge items={latestKnowledge} />

      <NexusIQSection />

      <section className="mx-auto max-w-[1500px] px-8 pb-20 pt-8">
        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/90 p-10 shadow-sm backdrop-blur">
          <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-300/20 blur-[120px]" />

          <div className="relative grid gap-8 md:grid-cols-[0.8fr_1fr_0.4fr] md:items-center">
            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">
              Continue exploring the Enterprise AI Architecture Library.
            </h2>

            <p className="text-lg font-medium leading-8 text-slate-700">
              A growing library of reference architectures, diagrams, videos,
              and implementation notes for practical enterprise AI systems.
            </p>

            <Link
              href="/library"
              className="rounded-2xl bg-blue-600 px-6 py-4 text-center text-sm font-bold text-white"
            >
              Open Library →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}