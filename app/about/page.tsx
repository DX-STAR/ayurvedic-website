import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us | Our Ayurvedic Story",
  description:
    "Learn about the ancient tradition behind Shat Dhaut Ghrit and our commitment to pure, natural Ayurvedic skincare made exactly as described in the ancient texts.",
  alternates: {
    canonical: "https://shatdhautghrit.com/about",
  },
  openGraph: {
    title: "About Us | Our Ayurvedic Story",
    description:
      "The story behind Shat Dhaut Ghrit — pure Ayurvedic skincare rooted in 5,000 years of tradition.",
    url: "https://shatdhautghrit.com/about",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shat Dhaut Ghrit — Ancient Ayurvedic Skincare Story",
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
