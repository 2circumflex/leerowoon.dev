import { Metadata } from "next";

import { baseUrl, siteMetadata, siteName } from "@/lib/metadata";
import HomeCover from "@/components/home/home-cover";

export async function generateMetadata(): Promise<Metadata> {
  const url = `${baseUrl}`;

  return {
    title: `${siteName}`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...siteMetadata.openGraph,
      title: `${siteName}`,
      url,
    },
    twitter: {
      ...siteMetadata.twitter,
      title: `${siteName}`,
    },
  };
}

export default async function Home() {
  return (
    <div className="container mx-auto max-w-[900px] mt-32 mb-16 flex flex-col p-2 px-6">
      <HomeCover />
      {/* 최근 포스트 */}
    </div>
  );
}
