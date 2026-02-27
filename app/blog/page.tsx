import type { Metadata } from "next";
import BlogListingContent from "@/components/BlogListingContent";

export const metadata: Metadata = {
  title: "Ayurvedic Skincare Blog | Tips, Guides & Ingredients",
  description:
    "Read our blog for Ayurvedic skincare tips, ingredient breakdowns, and traditional beauty wisdom. Explore the science and tradition behind Shat Dhaut Ghrit.",
  alternates: {
    canonical: "https://shatdhautghrit.com/blog",
  },
  openGraph: {
    title: "Ayurvedic Skincare Blog | Tips, Guides & Ingredients",
    description:
      "Explore Ayurvedic skincare wisdom — ingredient science, ancient beauty rituals, and the tradition behind Shat Dhaut Ghrit.",
    url: "https://shatdhautghrit.com/blog",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shat Dhaut Ghrit Ayurvedic Skincare Blog",
      },
    ],
  },
};

export default function BlogPage() {
  return <BlogListingContent />;
}
