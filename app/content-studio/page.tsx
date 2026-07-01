"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ContentItem = {
  id: string;
  type: "youtube" | "medium" | "linkedin" | "article" | "note";
  title: string;
  description: string;
  summary?: string;

  url: string;
  mediumUrl?: string;
  linkedinUrl?: string;
  youtubeUrl?: string;
  githubUrl?: string;
  slidesUrl?: string;
  websiteSlug?: string;

  videoId?: string;
  thumbnail: string;
  series: string;
  path?: string;
  slug?: string;
  episode?: number | null;
  order?: number | null;
  duration?: string;
  readingTime?: string;
  tags: string[];
  featured: boolean;
  published: string;
};

const emptyForm: ContentItem = {
  id: "",
  type: "medium",
  title: "",
  description: "",
  summary: "",

  url: "",
  mediumUrl: "",
  linkedinUrl: "",
  youtubeUrl: "",
  githubUrl: "",
  slidesUrl: "",
  websiteSlug: "",

  videoId: "",
  thumbnail: "",
  series: "",
  path: "",
  slug: "",
  episode: null,
  order: null,
  duration: "",
  readingTime: "",
  tags: [],
  featured: false,
  published: new Date().toISOString(),
};

export default function ContentStudioPage() {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [form, setForm] = useState<ContentItem>(emptyForm);
  const [tagInput, setTagInput] = useState("");

  async function loadContent() {
    const res = await fetch("/api/content", { cache: "no-store" });
    const data = await res.json();
    setItems(Array.isArray(data) ? data : []);
  }

  useEffect(() => {
    loadContent();
  }, []);

  function updateField(field: keyof ContentItem, value: any) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function saveContent() {
    const payload = {
      ...form,
      id: form.id || crypto.randomUUID(),
      url:
        form.url ||
        form.mediumUrl ||
        form.linkedinUrl ||
        form.youtubeUrl ||
        form.websiteSlug ||
        "",
      published: form.published || new Date().toISOString(),
      tags: tagInput
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    };

    const res = await fetch("/api/content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      alert("Save failed. Check terminal logs.");
      return;
    }

    alert("Content saved successfully");

    setForm(emptyForm);
    setTagInput("");
    await loadContent();
  }

  async function deleteItem(id: string) {
    await fetch(`/api/content?id=${id}`, {
      method: "DELETE",
    });

    await loadContent();
  }

  function editItem(item: ContentItem) {
    setForm(item);
    setTagInput(item.tags?.join(", ") || "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <div className="mx-auto max-w-[1400px] px-8 py-10">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
              Content Studio
            </p>
            <h1 className="mt-3 text-5xl font-semibold tracking-[-0.06em]">
              Manage videos, articles, and notes.
            </h1>
          </div>

          <Link
            href="/"
            className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold shadow-sm"
          >
            Back to site →
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <section className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold tracking-[-0.04em]">
              {form.id ? "Edit content" : "Add new content"}
            </h2>

            <div className="mt-6 space-y-5">
              <Field label="Content Type">
                <select
                  value={form.type}
                  onChange={(e) => updateField("type", e.target.value)}
                  className="input"
                >
                  <option value="medium">Medium Article</option>
                  <option value="linkedin">LinkedIn Article</option>
                  <option value="youtube">YouTube Video</option>
                  <option value="article">Website Article</option>
                  <option value="note">Architecture Note</option>
                </select>
              </Field>

              <Field label="Title">
                <input
                  value={form.title}
                  onChange={(e) => updateField("title", e.target.value)}
                  className="input"
                  placeholder="Running AI Inside SQL..."
                />
              </Field>

              <Field label="Short Description">
                <textarea
                  value={form.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  className="input min-h-24 resize-none"
                  placeholder="Short summary for cards..."
                />
              </Field>

              <Field label="Long Summary">
                <textarea
                  value={form.summary || ""}
                  onChange={(e) => updateField("summary", e.target.value)}
                  className="input min-h-28 resize-none"
                  placeholder="Optional longer summary..."
                />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Series">
                  <input
                    value={form.series}
                    onChange={(e) => updateField("series", e.target.value)}
                    className="input"
                    placeholder="Know Exasol / NexusIQ / Architecture Notes"
                  />
                </Field>

                <Field label="Reading Time">
                  <input
                    value={form.readingTime || ""}
                    onChange={(e) => updateField("readingTime", e.target.value)}
                    className="input"
                    placeholder="8 min read"
                  />
                </Field>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-5">
                <p className="mb-4 text-sm font-bold text-slate-900">
                  Platform Links
                </p>

                <div className="space-y-4">
                  <Field label="Website Slug">
                    <input
                      value={form.websiteSlug || ""}
                      onChange={(e) =>
                        updateField("websiteSlug", e.target.value)
                      }
                      className="input"
                      placeholder="/articles/running-ai-inside-sql"
                    />
                  </Field>

                  <Field label="Medium URL">
                    <input
                      value={form.mediumUrl || ""}
                      onChange={(e) => updateField("mediumUrl", e.target.value)}
                      className="input"
                      placeholder="https://medium.com/..."
                    />
                  </Field>

                  <Field label="LinkedIn URL">
                    <input
                      value={form.linkedinUrl || ""}
                      onChange={(e) =>
                        updateField("linkedinUrl", e.target.value)
                      }
                      className="input"
                      placeholder="https://www.linkedin.com/..."
                    />
                  </Field>

                  <Field label="YouTube URL">
                    <input
                      value={form.youtubeUrl || ""}
                      onChange={(e) =>
                        updateField("youtubeUrl", e.target.value)
                      }
                      className="input"
                      placeholder="https://youtu.be/..."
                    />
                  </Field>

                  <Field label="GitHub URL">
                    <input
                      value={form.githubUrl || ""}
                      onChange={(e) => updateField("githubUrl", e.target.value)}
                      className="input"
                      placeholder="https://github.com/..."
                    />
                  </Field>

                  <Field label="Slides URL">
                    <input
                      value={form.slidesUrl || ""}
                      onChange={(e) => updateField("slidesUrl", e.target.value)}
                      className="input"
                      placeholder="Slides / PDF / SpeakerDeck URL"
                    />
                  </Field>
                </div>
              </div>

              <Field label="Legacy / Primary URL">
                <input
                  value={form.url}
                  onChange={(e) => updateField("url", e.target.value)}
                  className="input"
                  placeholder="Fallback external URL"
                />
              </Field>

              <Field label="Thumbnail">
                <input
                  value={form.thumbnail}
                  onChange={(e) => updateField("thumbnail", e.target.value)}
                  className="input"
                  placeholder="/images/articles/article-cover.png"
                />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Path">
                  <input
                    value={form.path || ""}
                    onChange={(e) => updateField("path", e.target.value)}
                    className="input"
                    placeholder="know-exasol"
                  />
                </Field>

                <Field label="Slug">
                  <input
                    value={form.slug || ""}
                    onChange={(e) => updateField("slug", e.target.value)}
                    className="input"
                    placeholder="execution-engine"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Episode">
                  <input
                    type="number"
                    value={form.episode ?? ""}
                    onChange={(e) =>
                      updateField(
                        "episode",
                        e.target.value ? Number(e.target.value) : null
                      )
                    }
                    className="input"
                    placeholder="5"
                  />
                </Field>

                <Field label="Order">
                  <input
                    type="number"
                    value={form.order ?? ""}
                    onChange={(e) =>
                      updateField(
                        "order",
                        e.target.value ? Number(e.target.value) : null
                      )
                    }
                    className="input"
                    placeholder="5"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Video ID">
                  <input
                    value={form.videoId || ""}
                    onChange={(e) => updateField("videoId", e.target.value)}
                    className="input"
                    placeholder="YouTube video id"
                  />
                </Field>

                <Field label="Duration">
                  <input
                    value={form.duration || ""}
                    onChange={(e) => updateField("duration", e.target.value)}
                    className="input"
                    placeholder="6:30"
                  />
                </Field>
              </div>

              <Field label="Tags">
                <input
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  className="input"
                  placeholder="AI, SQL, RAG, Federation"
                />
              </Field>

              <label className="flex items-center gap-3 text-sm font-bold text-slate-700">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(e) => updateField("featured", e.target.checked)}
                />
                Show as featured
              </label>

              <button
                onClick={saveContent}
                className="w-full rounded-2xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20"
              >
                {form.id ? "Update Content →" : "Save Content →"}
              </button>

              {form.id && (
                <button
                  onClick={() => {
                    setForm(emptyForm);
                    setTagInput("");
                  }}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-800"
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </section>

          <section className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm">
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-[-0.04em]">
                Published Content
              </h2>
              <p className="mt-1 text-sm font-medium text-slate-500">
                {items.length} items
              </p>
            </div>

            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                        {item.type} · {item.series}
                      </p>

                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-sm font-medium leading-6 text-slate-600">
                        {item.description || item.url}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.websiteSlug && <Pill>Website</Pill>}
                        {item.mediumUrl && <Pill>Medium</Pill>}
                        {item.linkedinUrl && <Pill>LinkedIn</Pill>}
                        {item.youtubeUrl && <Pill>YouTube</Pill>}
                        {item.githubUrl && <Pill>GitHub</Pill>}
                        {item.slidesUrl && <Pill>Slides</Pill>}
                        {item.featured && <Pill>Featured</Pill>}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => editItem(item)}
                        className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteItem(item.id)}
                        className="rounded-xl border border-red-200 bg-white px-3 py-2 text-xs font-bold text-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <p className="mb-2 text-sm font-bold text-slate-700">{label}</p>
      {children}
    </label>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
      {children}
    </span>
  );
}