"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, MessageCircle, Home, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ThankYouContent() {
  const whatsappUrl =
    "https://wa.me/919595073539?text=Hi! I just placed an order for Shat Dhaut Ghrit. Please confirm my order details.";

  useEffect(() => {
    const timer = setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-4 pt-20">
      <div className="max-w-lg w-full text-center">
        {/* Success animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 15, stiffness: 200 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border-2 border-green-300"
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 2 + i * 0.5, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4, ease: "easeOut" }}
              />
            ))}
            <div className="relative w-24 h-24 bg-green-100 rounded-full flex items-center justify-center border-4 border-green-200">
              <CheckCircle size={44} className="text-green-500" fill="#dcfce7" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-playfair text-4xl sm:text-5xl font-700 text-forest mb-4"
        >
          Thank You! 🙏
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-lato text-forest/70 text-base leading-relaxed mb-2"
        >
          Your message has been received. We&apos;re redirecting you to WhatsApp to confirm your order.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-lato text-sm text-forest/40 mb-10"
        >
          You&apos;ll be redirected automatically in a few seconds…
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open WhatsApp to confirm order"
            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-lato font-700 text-base text-white shadow-lg transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle size={22} aria-hidden="true" />
            Open WhatsApp to Confirm Order
          </a>

          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 py-3 rounded-2xl font-lato font-700 text-sm text-forest border-2 border-forest/20 hover:border-forest transition-all"
              aria-label="Go to homepage"
            >
              <Home size={16} aria-hidden="true" />
              Go Home
            </Link>
            <Link
              href="/blog"
              className="flex items-center justify-center gap-2 py-3 rounded-2xl font-lato font-700 text-sm text-saffron border-2 border-saffron/30 hover:border-saffron transition-all"
              aria-label="Read blog"
            >
              Read Blog
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 p-6 bg-white rounded-2xl border border-gold/15 text-left"
        >
          <h2 className="font-playfair text-lg font-600 text-forest mb-3">What Happens Next?</h2>
          <ul className="space-y-2">
            {[
              "You'll be redirected to WhatsApp to confirm your order",
              "Our team will respond within a few hours with order confirmation",
              "Payment and delivery details will be shared on WhatsApp",
              "Your Shat Dhaut Ghrit will be dispatched within 2-3 business days",
            ].map((step, i) => (
              <li key={i} className="flex gap-3 font-lato text-sm text-forest/70">
                <span className="w-5 h-5 rounded-full bg-saffron/15 text-saffron flex items-center justify-center shrink-0 text-[11px] font-700 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
