import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marbella Delice | Yaourts fruites premium",
  description:
    "Marbella Delice — yaourts fruites artisanaux, ingredients frais, livraison rapide. Une experience gourmande et premium.",
  keywords: [
    "yaourt",
    "fruits",
    "premium",
    "Marbella Delice",
    "artisanal",
    "livraison",
  ],
  openGraph: {
    title: "Marbella Delice",
    description: "Le plaisir fruite reinvente.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${outfit.variable} scroll-smooth`}>
      <body className="min-h-[100dvh] antialiased">
        <div className="grain-overlay" aria-hidden />
        {children}
      </body>
    </html>
  );
}
