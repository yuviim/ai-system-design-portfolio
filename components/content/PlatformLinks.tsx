import { SiGithub, SiLinkedin, SiMedium, SiYoutube } from "react-icons/si";
import { FileText, Presentation } from "lucide-react";

type Props = {
  websiteSlug?: string;
  mediumUrl?: string;
  linkedinUrl?: string;
  youtubeUrl?: string;
  githubUrl?: string;
  slidesUrl?: string;
};

const chip =
  "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-white hover:shadow-sm";

export function PlatformLinks({
  websiteSlug,
  mediumUrl,
  linkedinUrl,
  youtubeUrl,
  githubUrl,
  slidesUrl,
}: Props) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      {mediumUrl && (
        <a href={mediumUrl} target="_blank" className={chip}>
          <SiMedium className="h-4 w-4 text-black" />
          Medium
        </a>
      )}

      {linkedinUrl && (
        <a href={linkedinUrl} target="_blank" className={chip}>
          <SiLinkedin className="h-4 w-4 text-[#0A66C2]" />
          LinkedIn
        </a>
      )}

      {youtubeUrl && (
        <a href={youtubeUrl} target="_blank" className={chip}>
          <SiYoutube className="h-4 w-4 text-red-600" />
          YouTube
        </a>
      )}

      {githubUrl && (
        <a href={githubUrl} target="_blank" className={chip}>
          <SiGithub className="h-4 w-4 text-black" />
          GitHub
        </a>
      )}

      {slidesUrl && (
        <a href={slidesUrl} target="_blank" className={chip}>
          <Presentation className="h-4 w-4 text-orange-600" />
          Slides
        </a>
      )}

      {websiteSlug && (
        <a href={websiteSlug} className={chip}>
          <FileText className="h-4 w-4 text-blue-600" />
          Website
        </a>
      )}
    </div>
  );
}

export function PrimaryPlatformIcon({
  mediumUrl,
  linkedinUrl,
  youtubeUrl,
  githubUrl,
  websiteSlug,
}: Props) {
  if (mediumUrl) {
    return <SiMedium className="h-7 w-7 text-black" />;
  }

  if (linkedinUrl) {
    return <SiLinkedin className="h-7 w-7 text-[#0A66C2]" />;
  }

  if (youtubeUrl) {
    return <SiYoutube className="h-7 w-7 text-red-600" />;
  }

  if (githubUrl) {
    return <SiGithub className="h-7 w-7 text-black" />;
  }

  return <FileText className="h-7 w-7 text-blue-600" />;
}