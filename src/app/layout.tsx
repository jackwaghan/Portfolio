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
    images: [
      {
        url: "https://res.cloudinary.com/dqswovyzi/image/upload/v1738251548/Portfolio/wfz9ph5xnzoyfz6svshu.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Image Preview",
      },
    ],
  },
  icons: {
    icon: "https://res.cloudinary.com/dqswovyzi/image/upload/v1738251548/Portfolio/wfz9ph5xnzoyfz6svshu.jpg",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
