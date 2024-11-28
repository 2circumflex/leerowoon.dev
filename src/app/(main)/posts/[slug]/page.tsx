import { Metadata } from "next";

import PostHeader from "@/components/post-detail/post-header";
import PostBody from "@/components/post-detail/post-body";
import { getPost, getPostPaths, parsePostFileName } from "@/lib/post";
import { baseUrl, siteMetadata, siteName } from "@/lib/metadata";
import Giscus from "@/components/post-detail/giscus";

export async function generateMetadata({
  params: { slug },
}: PostDetailPageProps): Promise<Metadata> {
  const post = await getPost(slug);
  const pageTitle = post.title;
  const description = post.desc;
  const imageURL = `${baseUrl}${post.thumbnail}`;

  return {
    title: `${pageTitle} | ${siteName}`,
    description,
    alternates: {
      canonical: `${baseUrl}/posts/${post.slug}`,
    },
    openGraph: {
      ...siteMetadata.openGraph,
      title: pageTitle,
      description,
      type: "article",
      publishedTime: post.date.toISOString(),
      url: `${baseUrl}/posts/${post.slug}`,
      images: [imageURL],
    },
    twitter: {
      ...siteMetadata.twitter,
      title: pageTitle,
      description,
      images: [imageURL],
    },
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  const postPaths = getPostPaths();
  return postPaths.map((postPath) => ({ slug: parsePostFileName(postPath) }));
}

type PostDetailPageProps = {
  params: { slug: string };
};

export default async function PostDetailPage({
  params: { slug },
}: PostDetailPageProps) {
  const post = await getPost(slug);

  return (
    <div className="prose dark:prose-invert container mx-auto max-w-[750px] mt-36 mb-16 flex flex-col p-2 px-6">
      <PostHeader post={post} />
      <PostBody post={post} />
      <hr />
      <Giscus />
    </div>
  );
}
