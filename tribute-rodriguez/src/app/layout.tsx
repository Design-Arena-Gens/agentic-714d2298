import type { Metadata } from "next";
import { Inter, Special_Elite } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const specialElite = Special_Elite({
  variable: "--font-typewriter",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Searching for Rodríguez",
  description:
    "A tribute to the grassroots hunt for singer Sixto Rodríguez, celebrating the community that chased rumors and clues across the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${specialElite.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
