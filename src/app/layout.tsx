import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Job Pack | Professional Resume, Cover Letter & LinkedIn Optimization",
  description:
    "Get a professionally crafted resume, cover letter, and LinkedIn profile tailored to your target role — delivered in 48 hours.",
  keywords: [
    "resume writing",
    "cover letter",
    "LinkedIn optimization",
    "job search",
    "career services",
    "ATS resume",
  ],
  openGraph: {
    title: "Job Pack | Land Your Dream Job Faster",
    description:
      "Professional resume, cover letter, and LinkedIn profile — delivered in 48 hours.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
