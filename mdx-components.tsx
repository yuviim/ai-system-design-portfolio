import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => (
      <h2
        className="mt-14 border-t border-slate-200 pt-10 text-3xl font-black tracking-[-0.05em] text-slate-950"
        {...props}
      />
    ),
    p: (props) => (
      <p className="mt-5 text-lg leading-9 text-slate-700" {...props} />
    ),
    ul: (props) => (
      <ul
        className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700"
        {...props}
      />
    ),
    li: (props) => <li {...props} />,
    ...components,
  };
}