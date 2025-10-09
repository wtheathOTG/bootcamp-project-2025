import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/server/nav";
import GlobalAnimations from "@/components/client/GlobalAnimations";
import PageTransitionAnimations from "@/components/client/PageTransitionAnimations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Will Heath Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <div className="flex justify-center min-h-screen">
              <div
                  id="site-border"
                  className="w-full max-w-296 px-8 pt-16 pb-16 space-y-16 md:pt-32 md:grid md:grid-cols-2 md:space-y-0 lg:px-16
                  border-x-2 border-dashed border-transparent text-white"
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
