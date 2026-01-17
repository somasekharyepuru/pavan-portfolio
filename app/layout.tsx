import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pavan Karumuri | Full Stack Developer",
  description: "9+ years experienced Full Stack Web Developer specializing in Node.js, React.js, Golang, TypeScript. Building scalable solutions and modern web applications.",
  keywords: ["Full Stack Developer", "Node.js", "React.js", "Golang", "TypeScript", "Web Developer"],
  authors: [{ name: "Pavan Karumuri" }],
  openGraph: {
    title: "Pavan Karumuri | Full Stack Developer",
    description: "9+ years experienced Full Stack Web Developer",
    url: "https://pavan1.com",
    siteName: "Pavan Karumuri Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth dark ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
