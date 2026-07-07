import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SITE_URL } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PT. Visi Berkat Internasional | Indonesian Snack Exporter",
    template: "%s | Visi Berkat Internasional",
  },
  description:
    "We are not just exporting snacks, we are sharing Indonesia's culture with the world. Explore VBI's full catalog of authentic Indonesian snacks across 4 brands, ready for bulk export and retail distribution.",
  openGraph: {
    type: "website",
    siteName: "PT. Visi Berkat Internasional",
    images: ["/images/brand/hero-flatlay.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
