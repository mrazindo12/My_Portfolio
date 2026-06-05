import React from "react";
import { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  title: "Azindo Abdul Razak | Software Engineer & AI Developer",
  description:
    "Developer portfolio of Azindo Abdul Razak, a Telecommunication Engineering student and Software Engineer building smart, scalable solutions with code.",
  keywords: [
    "Azindo Abdul Razak",
    "Developer Portfolio",
    "Software Engineer",
    "AI Developer",
    "Software Engineer Accra",
    "AI Developer Ghana",
    "Next.js Portfolio",
    "Python AI systems",
  ],
  authors: [{ name: "Azindo Abdul Razak" }],
  creator: "Azindo Abdul Razak",
  robots: "index, follow",
};

const themeInitScript = `
(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){document.documentElement.classList.add('dark');}})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 font-sans transition-colors duration-300">
        <div className="flex flex-col flex-1 relative w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
