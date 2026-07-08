import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { Header } from "../../../components/layout/Header";

type PageProps = {
  params: Promise<{ path: string }>;
};

export default async function ArticlePage({ params }: PageProps) {
  const { path: slug } = await params;

  const articleDir = path.join(process.cwd(), "content", "articles", slug);
  const metadataPath = path.join(articleDir, "metadata.json");
  const contentPath = path.join(articleDir, "index.mdx");

  if (!fs.existsSync(metadataPath) || !fs.existsSync(contentPath)) {
    notFound();
  }

  const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
  const content = fs.readFileSync(contentPath, "utf8");

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <article className="mx-auto max-w-[1100px] px-8 py-16">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-blue-600">
          {metadata.series || metadata.category || "Architecture"}
        </p>

        <h1 className="text-6xl font-semibold leading-[0.95] tracking-[-0.07em] md:text-7xl">
          {metadata.title}
        </h1>

        {metadata.description && (
          <p className="mt-8 max-w-3xl text-xl font-medium leading-9 text-slate-700">
            {metadata.description}
          </p>
        )}

        <div className="mt-6 text-sm font-bold text-slate-500">
          {metadata.published} · {metadata.readingTime} · {metadata.type || "Article"}
        </div>

        {metadata.thumbnail && (
          <div className="mt-12 overflow-hidden rounded-[36px] border border-slate-200 bg-slate-50">
            <img
              src={metadata.thumbnail}
              alt={metadata.title}
              className="w-full object-cover"
            />
          </div>
        )}

        <div
          className="prose prose-slate mt-14 max-w-none prose-headings:tracking-[-0.04em] prose-p:text-lg prose-p:leading-9"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </main>
  );
}
