"use client";

import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import LinkExtension from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import {
  Bold,
  Code,
  Eye,
  Heading1,
  Heading2,
  ImageIcon,
  Italic,
  Link,
  List,
  ListOrdered,
  Quote,
  Save,
  Sparkles,
  Upload,
} from "lucide-react";

const navItems = [
  "Content Studio",
  "New Article",
  "Articles",
  "Series",
  "Videos",
  "Notes",
  "Media Library",
  "SEO",
  "Settings",
];

export default function ContentStudioPage() {
  const [activeNav, setActiveNav] = useState("Content Studio");
  const [activeTab, setActiveTab] = useState("Publish");

  const [title, setTitle] = useState("Building Enterprise Agentic AI Systems");
  const [slug, setSlug] = useState("building-enterprise-agentic-ai-systems");
  const [description, setDescription] = useState(
    "A complete guide to building production-ready agentic AI systems in enterprise environments."
  );
  const [series, setSeries] = useState("Building Enterprise Agentic AI Systems");
  const [category, setCategory] = useState("Enterprise AI");
  const [tags, setTags] = useState("enterprise-ai, architecture, agentic-ai");
  const [difficulty, setDifficulty] = useState("Intermediate");
  const [readingTime, setReadingTime] = useState("5 min read");
  const [thumbnail, setThumbnail] = useState(
    "/images/series/enterprise-agentic-ai.png"
  );
  const [featured, setFeatured] = useState(false);
  const [status, setStatus] = useState("Draft");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
      LinkExtension.configure({ openOnClick: false }),
      Placeholder.configure({
        placeholder: "Start writing your architecture article...",
      }),
    ],
    content: `
      <h2>1. Introduction</h2>
      <p>Large Language Models changed how machines generate information.</p>
      <p>Agentic AI is changing how enterprise software gets work done.</p>
      <h2>2. Core Architecture Layers</h2>
      <p>Every enterprise agentic system consists of planning, memory, tools, execution, governance, and observability.</p>
    `,
    editorProps: {
      attributes: {
        class:
          "prose prose-slate max-w-none min-h-[780px] px-12 py-10 text-lg leading-8 outline-none",
      },
    },
  });

  function createNewArticle() {
    setTitle("");
    setSlug("");
    setDescription("");
    setSeries("Building Enterprise Agentic AI Systems");
    setCategory("Enterprise AI");
    setTags("");
    setDifficulty("Intermediate");
    setReadingTime("5 min read");
    setThumbnail("/images/series/enterprise-agentic-ai.png");
    setFeatured(false);
    setStatus("Draft");
    editor?.commands.setContent("");
  }

  async function uploadImage(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data.url as string;
  }

  async function handleCoverUpload(file: File) {
    const url = await uploadImage(file);
    setThumbnail(url);
  }

  async function insertImage(file: File) {
    const url = await uploadImage(file);
    editor?.chain().focus().setImage({ src: url }).run();
  }

  function insertLink() {
    const url = window.prompt("Paste URL");
    if (!url) return;
    editor?.chain().focus().setLink({ href: url }).run();
  }

  function insertYouTube() {
    const url = window.prompt("Paste YouTube URL");
    if (!url) return;

    let embedUrl = url;

    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1]?.split("?")[0];
      embedUrl = `https://www.youtube.com/embed/${id}`;
    }

    if (url.includes("watch?v=")) {
      const id = url.split("watch?v=")[1]?.split("&")[0];
      embedUrl = `https://www.youtube.com/embed/${id}`;
    }

    editor
      ?.chain()
      .focus()
      .insertContent(`
        <div class="my-8 aspect-video overflow-hidden rounded-2xl border border-slate-200">
          <iframe src="${embedUrl}" class="h-full w-full" allowfullscreen></iframe>
        </div>
      `)
      .run();
  }

  function insertArchitectureBlock() {
    editor
      ?.chain()
      .focus()
      .insertContent(`
        <h2>Architecture</h2>
        <p>Explain the architecture flow, major components, control points, and execution path.</p>
        <blockquote>Architecture note: describe how this layer behaves in production systems.</blockquote>
      `)
      .run();
  }

  function insertCallout() {
    editor
      ?.chain()
      .focus()
      .insertContent(
        `<blockquote>Key idea: add your important architecture insight here.</blockquote>`
      )
      .run();
  }

  async function publishArticle() {
    setStatus("Saving...");

    const html = editor?.getHTML() || "";

    const res = await fetch("/api/content/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        slug,
        description,
        series,
        category,
        difficulty,
        readingTime,
        thumbnail,
        featured,
        tags: tags
          .split(",")
          .map((x) => x.trim())
          .filter(Boolean),
        content: html,
      }),
    });

    const data = await res.json();
    setStatus(data.success ? `Saved: ${data.path}` : "Save failed");
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-950">
      <div className="grid min-h-screen grid-cols-[260px_1fr_360px]">
        <aside className="border-r border-slate-200 bg-white px-5 py-6">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white">
              Y
            </div>
            <div>
              <p className="text-lg font-bold tracking-[-0.04em]">
                YuvarajAI CMS
              </p>
              <p className="text-xs font-semibold text-slate-500">
                Architecture Publishing
              </p>
            </div>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveNav(item);

                  if (item === "New Article") {
                    createNewArticle();
                    return;
                  }

                  if (item !== "Content Studio") {
                    setStatus(`${item} section coming next`);
                  }
                }}
                className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${
                  activeNav === item
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="mt-10 rounded-[24px] bg-gradient-to-br from-blue-50 to-violet-50 p-5">
            <p className="text-sm font-bold text-slate-950">AI Assistant</p>
            <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
              Improve writing, generate summaries, and optimize architecture
              explanations.
            </p>
            <button
              onClick={() => {
                setActiveTab("AI Assistant");
                setStatus("AI Assistant section coming next");
              }}
              className="mt-5 w-full rounded-2xl bg-blue-600 px-4 py-3 text-sm font-bold text-white"
            >
              Open Assistant
            </button>
          </div>
        </aside>

        <section className="flex min-w-0 flex-col">
          <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
            <div className="text-sm font-bold text-slate-500">
              {activeNav} / <span className="text-slate-950">New Article</span>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`text-sm font-bold ${
                  status.startsWith("Saved") ? "text-green-600" : "text-blue-600"
                }`}
              >
                {status}
              </span>

              <button
                onClick={() => setActiveTab("SEO")}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700"
              >
                <Eye className="h-4 w-4" /> Preview
              </button>

              <button
                onClick={publishArticle}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20"
              >
                <Save className="h-4 w-4" />
                Publish Article
              </button>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="mb-5 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Untitled Article"
                className="w-full border-none bg-transparent text-3xl font-bold tracking-[-0.05em] outline-none"
              />

              <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-semibold text-slate-500">
                <span>Slug:</span>
                <input
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="auto-generated-slug"
                  className="flex-1 bg-transparent outline-none"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
              <div className="flex flex-wrap gap-2 border-b border-slate-200 bg-white p-4">
                <Tool onClick={() => editor?.chain().focus().toggleBold().run()}>
                  <Bold className="h-4 w-4" /> Bold
                </Tool>
                <Tool
                  onClick={() => editor?.chain().focus().toggleItalic().run()}
                >
                  <Italic className="h-4 w-4" /> Italic
                </Tool>
                <Tool
                  onClick={() =>
                    editor?.chain().focus().toggleHeading({ level: 1 }).run()
                  }
                >
                  <Heading1 className="h-4 w-4" /> H1
                </Tool>
                <Tool
                  onClick={() =>
                    editor?.chain().focus().toggleHeading({ level: 2 }).run()
                  }
                >
                  <Heading2 className="h-4 w-4" /> H2
                </Tool>
                <Tool
                  onClick={() =>
                    editor?.chain().focus().toggleBulletList().run()
                  }
                >
                  <List className="h-4 w-4" /> Bullets
                </Tool>
                <Tool
                  onClick={() =>
                    editor?.chain().focus().toggleOrderedList().run()
                  }
                >
                  <ListOrdered className="h-4 w-4" /> Numbered
                </Tool>
                <Tool
                  onClick={() =>
                    editor?.chain().focus().toggleCodeBlock().run()
                  }
                >
                  <Code className="h-4 w-4" /> Code
                </Tool>
                <Tool
                  onClick={() =>
                    editor?.chain().focus().toggleBlockquote().run()
                  }
                >
                  <Quote className="h-4 w-4" /> Quote
                </Tool>
                <Tool onClick={insertLink}>
                  <Link className="h-4 w-4" /> Link
                </Tool>

                <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-700 hover:border-blue-200 hover:text-blue-600">
                  <ImageIcon className="h-4 w-4" />
                  Image
                  <input
                    hidden
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) insertImage(file);
                    }}
                  />
                </label>

                <Tool onClick={insertYouTube}>YouTube</Tool>

                <Tool onClick={insertArchitectureBlock}>
                  <Sparkles className="h-4 w-4" /> Architecture
                </Tool>

                <Tool onClick={insertCallout}>Callout</Tool>
              </div>

              <EditorContent editor={editor} />

              <div className="flex justify-between border-t border-slate-200 px-6 py-3 text-xs font-bold text-slate-400">
                <span>Words: dynamic later</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </section>

        <aside className="border-l border-slate-200 bg-white">
          <div className="flex border-b border-slate-200">
            {["Publish", "SEO", "AI Assistant"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-4 text-sm font-bold ${
                  activeTab === tab
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-slate-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "Publish" && (
            <div className="space-y-6 p-6">
              <Select label="Status" value="Draft" options={["Draft", "Published"]} />
              <Select
                label="Series"
                value={series}
                setValue={setSeries}
                options={[
                  "Building Enterprise Agentic AI Systems",
                  "Modern AI Data Platforms",
                  "Sovereign AI Systems",
                  "Know Exasol",
                ]}
              />
              <Select
                label="Category"
                value={category}
                setValue={setCategory}
                options={[
                  "Enterprise AI",
                  "Agentic AI",
                  "Modern Data Platforms",
                  "Sovereign AI",
                  "Know Exasol",
                ]}
              />

              <Field label="Tags" value={tags} setValue={setTags} />
              <Select
                label="Difficulty"
                value={difficulty}
                setValue={setDifficulty}
                options={["Beginner", "Intermediate", "Advanced"]}
              />
              <Field
                label="Reading Time"
                value={readingTime}
                setValue={setReadingTime}
              />

              <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-bold text-slate-700">
                <input
                  type="checkbox"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                />
                Featured Article
              </label>

              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Cover Image
                </p>

                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <img
                    src={thumbnail}
                    alt="Cover"
                    className="h-44 w-full object-cover"
                  />
                </div>

                <label className="mt-3 inline-flex cursor-pointer items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 hover:border-blue-200 hover:text-blue-600">
                  <Upload className="h-4 w-4" />
                  Change Image
                  <input
                    hidden
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleCoverUpload(file);
                    }}
                  />
                </label>
              </div>

              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Excerpt
                </p>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="h-32 w-full rounded-2xl border border-slate-200 p-4 text-sm font-medium outline-none focus:border-blue-300"
                />
              </div>
            </div>
          )}

          {activeTab === "SEO" && (
            <div className="space-y-6 p-6">
              <Field label="SEO Title" value={title} setValue={setTitle} />
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  SEO Description
                </p>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="h-32 w-full rounded-2xl border border-slate-200 p-4 text-sm font-medium outline-none focus:border-blue-300"
                />
              </div>

              <Field label="Slug" value={slug} setValue={setSlug} />

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-900">
                  Google Preview
                </p>
                <p className="mt-3 text-base font-bold text-blue-700">
                  {title || "Untitled Article"}
                </p>
                <p className="mt-1 text-xs text-green-700">
                  yuvarajai.com/library/{slug || "untitled-article"}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  {description || "Article description will appear here."}
                </p>
              </div>
            </div>
          )}

          {activeTab === "AI Assistant" && (
            <div className="space-y-4 p-6">
              {[
                "Improve introduction",
                "Generate SEO description",
                "Create LinkedIn post",
                "Suggest architecture diagram",
                "Rewrite in human tone",
                "Generate YouTube description",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => setStatus(`${item} coming next`)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-left text-sm font-bold text-slate-700 hover:border-blue-200 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}

function Tool({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-700 hover:border-blue-200 hover:text-blue-600"
    >
      {children}
    </button>
  );
}

function Field({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
        {label}
      </span>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold outline-none focus:border-blue-300"
      />
    </label>
  );
}

function Select({
  label,
  value,
  setValue,
  options,
}: {
  label: string;
  value: string;
  setValue?: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => setValue?.(e.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold outline-none focus:border-blue-300"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}