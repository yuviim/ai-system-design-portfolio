"use client";

import { useState } from "react";

const contentTypes = [
  { label: "YouTube Video", value: "youtube" },
  { label: "Medium Article", value: "medium" },
  { label: "LinkedIn Post", value: "linkedin" },
  { label: "Architecture Diagram", value: "architecture" },
  { label: "NexusIQ Demo", value: "nexusiq" },
];

const paths = [
  { label: "Know Exasol", value: "know-exasol" },
  { label: "Modern AI Data Platform", value: "modern-ai-data-platform" },
  { label: "Engineering Sovereign AI Systems", value: "engineering-sovereign-ai-systems" },
  { label: "Engineering Agentic Enterprise Systems", value: "engineering-agentic-enterprise-systems" },
  { label: "NexusIQ", value: "nexusiq" },
  { label: "Architecture Notes", value: "architecture-notes" },
];

export default function ContentStudioPage() {
  const [type, setType] = useState("youtube");
  const [url, setUrl] = useState("");
  const [series, setSeries] = useState("Know Exasol");
  const [path, setPath] = useState("know-exasol");
  const [episode, setEpisode] = useState("");
  const [slug, setSlug] = useState("");
  const [order, setOrder] = useState("");
  const [duration, setDuration] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  async function saveContent() {
    setStatus("Saving...");

    const res = await fetch("/api/content/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type,
        url,
        series,
        path,
        episode,
        slug,
        order,
        duration,
        tags,
        description,
      }),
    });

    if (!res.ok) {
      setStatus("Failed to save");
      return;
    }

    setUrl("");
    setEpisode("");
    setSlug("");
    setOrder("");
    setDuration("");
    setTags("");
    setDescription("");
    setStatus("Saved successfully");
  }

  return (
    <main className="min-h-screen bg-[#f6f8fb] p-10 text-slate-950">
      <div className="mx-auto max-w-4xl rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-blue-600">
          Content Studio
        </p>

        <h1 className="text-4xl font-medium tracking-[-0.04em]">
          Publish to Architecture Library
        </h1>

        <div className="mt-8 grid gap-5">
          <select value={type} onChange={(e) => setType(e.target.value)} className="rounded-xl border border-slate-200 px-4 py-3 text-sm">
            {contentTypes.map((item) => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>

          <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Paste URL" className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />

          <select value={path} onChange={(e) => setPath(e.target.value)} className="rounded-xl border border-slate-200 px-4 py-3 text-sm">
            {paths.map((item) => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>

          <input value={series} onChange={(e) => setSeries(e.target.value)} placeholder="Series name, example: Know Exasol" className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />

          <input value={episode} onChange={(e) => setEpisode(e.target.value)} placeholder="Episode number, example: 5" className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />

          <input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="Slug, example: execution-engine" className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />

          <input value={order} onChange={(e) => setOrder(e.target.value)} placeholder="Order, example: 5" className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />

          <input value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Duration, example: 8:45" className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />

          <input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Tags, comma separated" className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />

          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Optional description" rows={4} className="rounded-xl border border-slate-200 px-4 py-3 text-sm" />

          <button onClick={saveContent} className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white">
            Publish Content
          </button>

          {status && <p className="text-sm font-medium text-slate-600">{status}</p>}
        </div>
      </div>
    </main>
  );
}