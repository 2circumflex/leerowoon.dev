import { Metadata } from "next";

import { baseUrl, siteMetadata, siteName } from "@/lib/metadata";
import TagList from "@/components/tags/tag-list";

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = "Tags";
  const url = `${baseUrl}/tags`;

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

export default async function TagsPage() {
  return (
    <div className="container mx-auto max-w-[750px] mt-12 mb-16 flex flex-col p-2 px-6">
      <TagList />
    </div>
  );
}
