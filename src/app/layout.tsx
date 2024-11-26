import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteMetadata } from "@/lib/metadata";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full scroll-smooth overflow-y-scroll">
      <body className="font-pretendard flex min-h-screen flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
