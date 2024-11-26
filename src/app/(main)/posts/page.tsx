import { Metadata } from "next";

import PostList from "@/components/posts/post-list";
import { baseUrl, siteMetadata, siteName } from "@/lib/metadata";

export const dynamicParams = false;

export async function generateMetadata(): Promise<Metadata> {
  const title = `Posts | ${siteName}`;
  const url = `${baseUrl}/posts`;

  return {
    title: `Posts | ${siteName}`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...siteMetadata.openGraph,
      title,
      url,
    },
    twitter: {
      ...siteMetadata.twitter,
      title,
    },
  };
}

export async function generateStaticParams() {
  return [{}];
}

export default async function PostsPage() {
  return (
    <div className="container mx-auto max-w-[900px] mt-32 mb-16 flex flex-col p-2 px-6">
      <PostList />
    </div>
  );
}
