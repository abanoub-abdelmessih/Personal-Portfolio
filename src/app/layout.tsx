import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FooterSection } from "@/components/sections/Footer";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abanoub Portfolio",
  description:
    "The professional portfolio of Abanoub Abdelmessih, a front-end developer focused on building performant, accessible, and scalable web interfaces using React, Next.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-inter`}>
        <main className="max-w-screen-lg mx-auto md:py-28 py-10 space-y-16 px-5">
          {children}
        </main>
        <FooterSection />
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
