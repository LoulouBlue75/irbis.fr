import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { GlobalNav } from "@/components/global-nav";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Irbis - High Standards. Shared Ambition.",
    template: "%s | Irbis"
  },
  description: "Irbis: Executive Search with Adaptive Precision. A multi-product platform combining human intuition and algorithmic precision for talent alignment.",
  keywords: ["Executive Search", "Chasse de Têtes", "Recrutement", "Talent Alignment", "8D Methodology", "Matrice Hunting", "Tailor Shift", "Paris"],
  authors: [{ name: "Irbis" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://irbis.fr",
    siteName: "Irbis",
    title: "Irbis - High Standards. Shared Ambition.",
    description: "Executive Search with Adaptive Precision. The alliance of human intuition and algorithmic precision.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Irbis - High Standards. Shared Ambition.",
    description: "Executive Search with Adaptive Precision.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased`}
      >
        <GlobalNav />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
