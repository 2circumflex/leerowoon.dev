import { MdxComponents } from "@/components/mdx";

// @ts-expect-error no types
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

import { Post } from "@/lib/types";

export default function PostBody({ post }: { post: Post }) {
  return (
    <MDXRemote
      source={post.content}
      components={MdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkA11yEmoji, remarkBreaks],
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: { dark: "github-dark-dimmed", light: "github-light" },
              },
            ],
            rehypeSlug,
          ],
        },
      }}
    />
  );
}
