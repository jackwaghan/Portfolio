import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio - [ Jack Waghan ]",
  description:
    "This is the Portfolio site of me, built on top of Next.js and TypeScript",
  openGraph: {
    title: "Portfolio - [ Jack Waghan ]",
    description:
      "This is the Portfolio site of me, built on top of Next.js and TypeScript",
    url: "https://jackwaghan.com",
    siteName: "Jack Waghan",
    images: [
      {
        url: "https://res.cloudinary.com/dqswovyzi/image/upload/f_auto,q_auto/v1/Portfolio/wfz9ph5xnzoyfz6svshu",
        width: 1200,
        height: 630,
        alt: "Jack Waghan Portfolio Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - [ Jack Waghan ]",
    description:
      "This is the Portfolio site of me, built on top of Next.js and TypeScript",
    images: [
      "https://res.cloudinary.com/dqswovyzi/image/upload/f_auto,q_auto/v1/Portfolio/wfz9ph5xnzoyfz6svshu",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../../public/favicon-32x32.png" sizes="32x32" />

        <link
          rel="apple-touch-icon"
          href="../../public/apple-touch-icon.png"
          type="image/png"
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
