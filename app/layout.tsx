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
 * Root layout component that applies the project's Geist fonts and wraps page content.
 *
 * Renders an html element with lang="en" and a body that sets the Geist sans and mono font CSS variables,
 * includes a literal text node "HELOL" before the page content, and then renders the provided children.
 *
 * @param children - The page content to be rendered inside the body; rendered after the literal "HELOL" text node.
 * @returns A JSX element representing the root HTML structure (html > body) with fonts applied and the children inserted.
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
      > HELOL
        {children}
      </body>
    </html>
  );
}
