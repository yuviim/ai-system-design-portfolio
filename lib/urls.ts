export type UrlContentItem = {
  id?: string;
  slug?: string;
  path?: string;
};

export function getContentHref(item: UrlContentItem) {
  const slug = item.slug || item.path || item.id || "";
  return `/library/${slug}`;
}
