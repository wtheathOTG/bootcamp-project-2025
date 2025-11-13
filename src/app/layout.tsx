import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/server/nav";
import GlobalAnimations from "@/components/client/GlobalAnimations";
import PageTransitionAnimations from "@/components/client/PageTransitionAnimations";
import localFont from "next/font/local";

const neueMontrealMono = localFont({
    src: [
        { path: "./fonts/neue-montreal-mono/PPNeueMontrealMono-Thin.otf", weight: "200", style: "normal" },
        { path: "./fonts/neue-montreal-mono/PPNeueMontrealMono-Book.otf", weight: "400", style: "normal" },
        { path: "./fonts/neue-montreal-mono/PPNeueMontrealMono-RegularItalic.otf", weight: "400", style: "italic" },
        { path: "./fonts/neue-montreal-mono/PPNeueMontrealMono-Medium.otf", weight: "500", style: "normal" },
        { path: "./fonts/neue-montreal-mono/PPNeueMontrealMono-Bold.otf", weight: "700", style: "normal" },
    ],
    display: "swap",
    variable: "--font-right-grotesk-mono",
});

export const metadata: Metadata = {
  title: "Will Heath Personal Website",
  description: "A personal website for Will Heath.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${neueMontrealMono.className} antialiased`}
      >
          <div className="flex justify-center min-h-screen">
              <div
                  id="site-border"
                  className="w-full max-w-320 px-8 pt-16 space-y-16 md:pt-24 md:grid md:grid-cols-2 md:space-y-0 lg:px-16
                  border-x-2 border-dashed border-transparent"
              >
                  <Nav />
                  <div id="page-content">
                      {children}
                  </div>
              </div>
          </div>
          <GlobalAnimations />
          <PageTransitionAnimations />
      </body>
    </html>
  );
}
