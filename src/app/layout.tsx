import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { business } from "@/lib/site-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://chilledasairconditioning.com.au";
const title = "Chilled As Air Conditioning | Nanango & South Burnett";
const description =
  "Air conditioning installation, servicing, repairs and cleaning across Nanango, Wondai, Crows Nest and the South Burnett region. Call Jon for a free quote.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "air conditioning Nanango",
    "air con installation South Burnett",
    "split system installation Nanango",
    "air conditioning servicing Wondai",
    "air conditioning repairs Crows Nest",
    "aircon technician South Burnett",
  ],
  authors: [{ name: business.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: business.name,
    title,
    description,
    images: [
      {
        url: "/images/logo/chilled-as-logo-white-text.png",
        width: 622,
        height: 621,
        alt: business.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/images/logo/chilled-as-logo-white-text.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: business.name,
  image: `${siteUrl}/images/logo/chilled-as-logo-white-text.png`,
  url: siteUrl,
  telephone: business.phoneHref.replace("tel:", "+61"),
  email: business.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nanango",
    addressRegion: "QLD",
    postalCode: "4615",
    addressCountry: "AU",
  },
  areaServed: [
    { "@type": "City", name: "Nanango" },
    { "@type": "City", name: "Wondai" },
    { "@type": "City", name: "Crows Nest" },
    { "@type": "AdministrativeArea", name: "South Burnett" },
  ],
  sameAs: [],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
