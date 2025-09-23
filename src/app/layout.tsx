import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abanoub Abdelmessih | Frontend Developer Portfolio",
  description:
    "I’m Abanoub Abdelmessih, a passionate Frontend Developer skilled in JavaScript, React, Next.js, and modern web technologies. Explore my projects, skills, and contact info.",
  keywords: [
    "Abanoub Abdelmessih",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Portfolio",
    "Web Developer Egypt",
  ],
  authors: [{ name: "Abanoub Abdelmessih" }],
  openGraph: {
    title: "Abanoub Abdelmessih | Frontend Developer Portfolio",
    description:
      "Portfolio of Abanoub Abdelmessih, showcasing projects and skills in React, Next.js, and modern web development.",
    url: "https://abanoub-abdelmessih.vercel.app",
    siteName: "Abanoub Abdelmessih Portfolio",
    images: [
      {
        url: "https://abanoub-abdelmessih.vercel.app/abanoub-abdelmessih-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Abanoub Abdelmessih Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased max-w-4xl mx-auto px-5 py-10 md:py-28 space-y-16`}
      >
        {children}
      </body>
    </html>
  );
}
