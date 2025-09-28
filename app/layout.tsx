import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cornerstone",
  description: "Your rock in the turbulent seas of stock trading!",
};

/**
 * Root layout component that applies global fonts and renders page content.
 *
 * @param children - The React nodes to render inside the root body element.
 * @returns The top-level HTML structure (`<html lang="en">` with a `<body>` that applies the Geist fonts and `antialiased` class) containing `children`.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
