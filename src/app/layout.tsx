import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import LenisProvider from "./Components/LenisProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio - [ Jack Waghan ]",
  description:
    "This is the Portfolio site of me , built on top of Next js and Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.variable} antialiased`}>
        <Navbar />
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}
