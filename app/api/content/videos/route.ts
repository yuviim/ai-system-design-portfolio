import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const FILE_PATH = path.join(process.cwd(), "data", "videos.json");

function getYoutubeId(url: string) {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
  );
  return match?.[1] ?? "";
}

export async function GET() {
  if (!fs.existsSync(FILE_PATH)) {
    return NextResponse.json([]);
  }

  const data = JSON.parse(fs.readFileSync(FILE_PATH, "utf8"));
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const youtubeUrl = body.youtubeUrl;

  const videoId = getYoutubeId(youtubeUrl);

  const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(
    youtubeUrl
  )}&format=json`;

  const res = await fetch(oembedUrl);
  const meta = await res.json();

  const item = {
    id: videoId,
    title: meta.title,
    description: meta.title,
    series: body.series || "Videos",
    youtube: youtubeUrl,
    thumbnail: meta.thumbnail_url,
    duration: body.duration || "",
    published: new Date().toISOString(),
    type: "video",
  };

  const existing = fs.existsSync(FILE_PATH)
    ? JSON.parse(fs.readFileSync(FILE_PATH, "utf8"))
    : [];

  const updated = [item, ...existing];

  fs.writeFileSync(FILE_PATH, JSON.stringify(updated, null, 2));

  return NextResponse.json(item);
}