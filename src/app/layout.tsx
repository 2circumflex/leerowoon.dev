import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteMetadata } from "@/lib/metadata";

export const metadata = siteMetadata;

const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string;
const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER as string;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className="h-full scroll-smooth overflow-y-scroll"
      suppressHydrationWarning
    >
      <body className="font-pretendard flex min-h-screen flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <GoogleAnalytics gaId={GA_ID} />
          <GoogleTagManager gtmId={GTM_ID} />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
