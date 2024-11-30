import { Metadata } from "next";

import PostList from "@/components/posts/post-list";
import { baseUrl, siteMetadata, siteName } from "@/lib/metadata";

export const dynamicParams = false;

interface PostsPageProps {
  searchParams: {
    tag?: string;
  };
}

export async function generateMetadata({
  searchParams,
}: PostsPageProps): Promise<Metadata> {
  const tag = searchParams.tag;
  const pageTitle = tag ? `#${tag}` : "Posts";
  const url = tag ? `${baseUrl}/posts?tag=${tag}` : `${baseUrl}/posts`;

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

export async function generateStaticParams() {
  return [{}];
}

export default async function PostsPage({ searchParams }: PostsPageProps) {
  return (
    <div className="container mx-auto max-w-[900px] mt-32 mb-16 flex flex-col p-2 px-6">
      <PostList selectedTag={searchParams.tag} />
    </div>
  );
}
