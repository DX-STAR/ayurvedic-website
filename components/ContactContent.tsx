"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Send, MessageCircle, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ContactContent() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/thank-you");
    }, 900);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-forest text-offwhite py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-5xl font-700 text-offwhite mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-lato text-offwhite/65 text-lg"
          >
            Questions about the product, your order, or just want to say hello — we&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="font-playfair text-3xl font-700 text-forest mb-5 leading-tight">
                We&apos;re Here for You
              </h2>
              <p className="font-lato text-forest/65 text-base leading-relaxed mb-10">
                Whether you want to place an order, ask about ingredients, need advice on the right
                way to use Shat Dhaut Ghrit for your skin type, or simply have a question — our team
                responds personally to every message, usually within a few hours.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  {
                    icon: Phone,
                    title: "Phone / WhatsApp",
                    primary: "+91 95950 73539",
                    secondary: "Mon–Sat · 9am–7pm IST",
                    href: "tel:+919595073539",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    primary: "hello@shatdhautghrit.com",
                    secondary: "We reply within 24 hours",
                    href: "mailto:hello@shatdhautghrit.com",
                  },
                  {
                    icon: MapPin,
                    title: "Ships From",
                    primary: "Made in India 🇮🇳",
                    secondary: "Pan India delivery · 3–5 business days",
                    href: undefined,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-5 bg-white rounded-2xl border border-gold/15 hover:border-gold/30 transition-colors"
                    onClick={() => item.href && window.open(item.href)}
                    style={{ cursor: item.href ? "pointer" : "default" }}
                    role={item.href ? "link" : undefined}
                    aria-label={item.href ? `${item.title}: ${item.primary}` : undefined}
                  >
                    <div className="w-11 h-11 rounded-xl bg-forest/6 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-forest" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-lato text-[10px] text-forest/40 uppercase tracking-wider mb-0.5">
                        {item.title}
                      </p>
                      <p className="font-lato font-700 text-forest text-sm">{item.primary}</p>
                      <p className="font-lato text-xs text-forest/45">{item.secondary}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/919595073539?text=Hi! I have a question about Shat Dhaut Ghrit."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-lato font-700 text-base text-white shadow-lg transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle size={20} aria-hidden="true" />
                Chat on WhatsApp — Fastest Response
              </a>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.18 }}
              className="bg-white rounded-3xl p-8 border border-gold/15 shadow-sm"
            >
              <h2 className="font-playfair text-2xl font-700 text-forest mb-7">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label
                    htmlFor="name"
                    className="font-lato text-xs text-forest/45 uppercase tracking-wider block mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full border border-gold/20 rounded-xl px-4 py-3.5 font-lato text-sm text-forest bg-ivory/50 focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/15 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="font-lato text-xs text-forest/45 uppercase tracking-wider block mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full border border-gold/20 rounded-xl px-4 py-3.5 font-lato text-sm text-forest bg-ivory/50 focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/15 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-lato text-xs text-forest/45 uppercase tracking-wider block mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us how we can help you..."
                    className="w-full border border-gold/20 rounded-xl px-4 py-3.5 font-lato text-sm text-forest bg-ivory/50 focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/15 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2.5 bg-saffron hover:bg-amber-600 disabled:opacity-70 text-white font-lato font-700 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  aria-label="Send message"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" aria-hidden="true" />
                  ) : (
                    <Send size={16} aria-hidden="true" />
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
