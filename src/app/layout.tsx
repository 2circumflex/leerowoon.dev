import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "개발 블로그",
  description: "Next.js로 만든 개발 블로그입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full scroll-my-20 scroll-smooth">
      <body className="font-pretendard">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="mt-[64px] flex flex-1 flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
