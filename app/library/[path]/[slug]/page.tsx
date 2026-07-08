import { redirect } from "next/navigation";

type PageProps = {
  params: Promise<{ path: string; slug: string }>;
};

export default async function LegacyArticleRedirect({ params }: PageProps) {
  const { slug } = await params;
  redirect(`/library/${slug}`);
}
