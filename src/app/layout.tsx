import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "./metadata";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <body className={`${inter.variable} font-sans`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
