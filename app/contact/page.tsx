import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch",
  description:
    "Have questions about Shat Dhaut Ghrit? Contact us via WhatsApp or our contact form. We are happy to help with orders, product queries, and skincare advice.",
  alternates: {
    canonical: "https://shatdhautghrit.com/contact",
  },
  openGraph: {
    title: "Contact Us | Get in Touch",
    description:
      "Reach us on WhatsApp or send a message. We respond personally to every query.",
    url: "https://shatdhautghrit.com/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Shat Dhaut Ghrit",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
