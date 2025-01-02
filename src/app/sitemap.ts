import type { MetadataRoute } from "next";

import { getPostPaths, parsePostFileName } from "@/lib/post";
import { baseUrl } from "@/lib/metadata";

const getSitemapForPostList = async () => {
  const sitemapPostList = getPostPaths()
    .map((path) => parsePostFileName(path))
    .map((slug: string) => ({
      lastModified: new Date(),
      url: `${baseUrl}/posts/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  return sitemapPostList;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const sitemapForPostList = await getSitemapForPostList();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tags`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...sitemapForPostList,
  ];
}
