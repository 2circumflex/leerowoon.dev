import { Metadata } from "next";

import { baseUrl, siteMetadata, siteName } from "@/lib/metadata";
import PostListByTag from "@/components/tag-detail/post-list-by-tag";
import { getAllTags } from "@/lib/post";

export async function generateMetadata({
  params: { slug },
}: TagDetailPageProps): Promise<Metadata> {
  const pageTitle = `#${slug}`;
  const url = `${baseUrl}/tags/${slug}`;

  return {
    title: `${pageTitle} | ${siteName}`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...siteMetadata.openGraph,
      title: pageTitle,
      url,
    },
    twitter: {
      ...siteMetadata.twitter,
      title: pageTitle,
    },
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map((tag) => ({ slug: tag }));
}

type TagDetailPageProps = {
  params: { slug: string };
};

export default async function TagDetailPage({
  params: { slug },
}: TagDetailPageProps) {
  const tag = slug;

  return (
    <div className="container mx-auto max-w-[900px] mt-32 mb-16 flex flex-col p-2 px-6">
      <PostListByTag tag={tag} />
    </div>
  );
}
