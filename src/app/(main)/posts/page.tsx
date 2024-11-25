import { Metadata } from "next";

import PostList from "@/components/posts/post-list";
import { siteName } from "@/lib/metadata";

export const dynamicParams = false;

export const generateMetadata = async (): Promise<Metadata> => {
  const title = `Posts | ${siteName}`;
  return {
    title,
    openGraph: {
      title,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      images: ["/og-image.png"],
    },
  };
};

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
