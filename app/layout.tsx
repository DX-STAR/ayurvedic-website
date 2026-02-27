import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

/* ── Google Fonts (loaded via next/font — zero layout shift, no external request at runtime) ── */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

/* ── Root Metadata ── */
export const metadata: Metadata = {
  metadataBase: new URL("https://shatdhautghrit.com"),
  title: {
    default: "Shat Dhaut Ghrit | 100-Times Washed Ayurvedic Ghee for Skin",
    template: "%s | Shat Dhaut Ghrit",
  },
  description:
    "Discover Shat Dhaut Ghrit — pure A2 cow ghee washed 100 times in rose water. Ancient Ayurvedic skincare for deep moisturization, dark circle reduction, and anti-aging. 100% natural, no preservatives, cruelty free.",
  keywords: [
    "shat dhaut ghrit",
    "ayurvedic face cream",
    "ghee for skin",
    "cow ghee moisturizer",
    "natural skincare india",
    "traditional ayurvedic skincare",
    "a2 cow ghee for face",
    "under eye cream natural",
    "ayurvedic lip balm",
    "shat dhauta ghrita",
    "ghee face moisturizer",
  ],
  authors: [{ name: "Shat Dhaut Ghrit" }],
  creator: "Shat Dhaut Ghrit",
  publisher: "Shat Dhaut Ghrit",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shatdhautghrit.com",
    siteName: "Shat Dhaut Ghrit",
    title: "Shat Dhaut Ghrit | Ancient Ayurvedic Skincare",
    description:
      "Pure A2 cow ghee washed 100 times. Timelessly effective skincare.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shat Dhaut Ghrit — Ayurvedic Skincare Product",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shat Dhaut Ghrit | Ayurvedic Skincare",
    description: "Pure cow ghee washed 100 times for radiant skin.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://shatdhautghrit.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    // google: 'your-google-site-verification-code', // add when available
  },
};

/* ── Organization JSON-LD ── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shat Dhaut Ghrit",
  url: "https://shatdhautghrit.com",
  logo: "https://shatdhautghrit.com/logo.png",
  sameAs: [
    "https://www.instagram.com/shatdhautghrit",
    "https://www.facebook.com/shatdhautghrit",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9595073539",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
    areaServed: "IN",
  },
};

/* ── WebSite JSON-LD (enables Sitelinks Search Box) ── */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Shat Dhaut Ghrit",
  url: "https://shatdhautghrit.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://shatdhautghrit.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        {/* Preconnect for performance — fonts are via next/font so no external calls needed,
            but we keep these for any third-party assets */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* DNS prefetch for WhatsApp */}
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body className="font-lato bg-ivory antialiased">
        {/* Organization JSON-LD */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="afterInteractive"
        />
        {/* WebSite JSON-LD */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          strategy="afterInteractive"
        />

        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
