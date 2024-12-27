import { Metadata } from "next";

import PostList from "@/components/posts/post-list";
import { baseUrl, siteMetadata, siteName } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = "Posts";
  const url = `${baseUrl}/posts`;

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

export default async function PostsPage() {
  return (
    <div className="container mx-auto max-w-[900px] mt-32 mb-16 flex flex-col p-2 px-6">
      <PostList />
    </div>
  );
}
