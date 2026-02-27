import type { Metadata } from "next";
import ThankYouContent from "@/components/ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You for Your Order",
  description:
    "Your Shat Dhaut Ghrit order is being processed. We will confirm via WhatsApp shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
