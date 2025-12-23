import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Yahwenissi Elias | Portfolio",
    template: "%s | Yahwenissi Elias",
  },
  description:
    "Portfolio of Yahwenissi Elias — developer, writer, and tech enthusiast. Projects, blog, and professional journey.",
  keywords: [
    "Yahwenissi Elias",
    "portfolio",
    "web developer",
    "Next.js",
    "React",
    "software engineer",
  ],
  authors: [{ name: "Yahwenissi Elias" }],
  creator: "Yahwenissi Elias",

  metadataBase: new URL("https://your-domain.com"), // change later

  openGraph: {
    title: "Yahwenissi Elias | Portfolio",
    description:
      "Developer portfolio showcasing projects, blog posts, and experience.",
    url: "https://your-domain.com",
    siteName: "Yahwenissi Elias Portfolio",
    images: [
      {
        url: "/og-image.png", // optional later
        width: 1200,
        height: 630,
        alt: "Yahwenissi Elias Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yahwenissi Elias | Portfolio",
    description:
      "Developer portfolio showcasing projects, blog posts, and experience.",
    creator: "@yourhandle", // optional
  },
};


export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
