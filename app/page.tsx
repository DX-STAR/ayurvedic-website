import type { Metadata } from "next";
import Script from "next/script";
import HeroSection from "@/components/HeroSection";
import AboutProductSection from "@/components/AboutProductSection";
import BenefitsSection from "@/components/BenefitsSection";
import IngredientsSection from "@/components/IngredientsSection";
import HowToUseSection from "@/components/HowToUseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BuySection from "@/components/BuySection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Shat Dhaut Ghrit | 100-Times Washed Ayurvedic Ghee for Skin",
  description:
    "Discover Shat Dhaut Ghrit — pure A2 cow ghee washed 100 times in rose water using a copper vessel. Ancient Ayurvedic face moisturizer, under-eye cream & lip balm. 100% natural, no preservatives.",
  alternates: {
    canonical: "https://shatdhautghrit.com",
  },
  openGraph: {
    title: "Shat Dhaut Ghrit | 100-Times Washed Ayurvedic Ghee for Skin",
    description:
      "Pure A2 cow ghee washed 100 times in rose water. Ancient Ayurvedic skincare for face, eyes, and lips. Starting at ₹599.",
    url: "https://shatdhautghrit.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shat Dhaut Ghrit 50g jar — Ayurvedic face moisturizer",
      },
    ],
  },
};

/* ── Product JSON-LD ── */
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Shat Dhaut Ghrit",
  description:
    "Pure A2 cow ghee washed 100 times in rose water using a copper vessel. Traditional Ayurvedic skincare for face, under-eyes, and lips. No preservatives, no chemicals.",
  brand: {
    "@type": "Brand",
    name: "Shat Dhaut Ghrit",
  },
  image: "https://shatdhautghrit.com/og-image.jpg",
  sku: "SDG-50G",
  category: "Skincare",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "599",
    highPrice: "999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Shat Dhaut Ghrit",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Priya S." },
      reviewBody:
        "My skin has never felt this soft! I use it every night before bed.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Anjali R." },
      reviewBody:
        "Dark circles reduced in just 3 weeks. Completely natural and it works!",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Meera K." },
      reviewBody:
        "Best winter skincare product I have ever used. My lips and face stay moisturized all day.",
    },
  ],
};

/* ── FAQ JSON-LD (boosts FAQ rich snippets in Google) ── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Shat Dhaut Ghrit suitable for oily skin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The 100-time washing process transforms the heavy ghee into an ultra-light cream that absorbs quickly without leaving any greasy residue, making it suitable for all skin types including oily skin.",
      },
    },
    {
      "@type": "Question",
      name: "How long does one jar of Shat Dhaut Ghrit last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 50ml jar typically lasts 2-3 months when used for face, under-eyes, and lips twice daily. For single application, it lasts up to 4 months.",
      },
    },
    {
      "@type": "Question",
      name: "What is Shat Dhaut Ghrit used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shat Dhaut Ghrit is used as a face moisturizer, under-eye cream for dark circles, and lip balm. It is a traditional Ayurvedic preparation made by washing pure A2 cow ghee 100 times in rose water using a copper vessel.",
      },
    },
    {
      "@type": "Question",
      name: "Does Shat Dhaut Ghrit contain any chemicals or preservatives?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Shat Dhaut Ghrit contains exactly three ingredients: pure A2 cow ghee, rose water, and the therapeutic influence of the copper vessel used in processing. There are no preservatives, synthetic fragrances, parabens, or any other additives.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />

      <HeroSection />
      <AboutProductSection />
      <BenefitsSection />
      <IngredientsSection />
      <HowToUseSection />
      <TestimonialsSection />
      <BuySection />
      <FAQSection />
    </>
  );
}
