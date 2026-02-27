"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Leaf, Heart, Shield, Users } from "lucide-react";

export default function AboutContent() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="bg-forest text-offwhite py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/8 blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gold/15 text-gold text-[11px] font-lato font-700 tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-6"
          >
            <Leaf size={13} />
            Our Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-5xl sm:text-6xl font-700 text-offwhite mb-6 leading-tight"
          >
            Rooted in Ayurveda.
            <br />
            <span className="shimmer-text">Made for Modern Skin.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-lato text-offwhite/65 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            We didn&apos;t invent Shat Dhaut Ghrit. Ayurveda did, five thousand years ago.
            We simply committed to making it exactly as the ancient texts describe — no shortcuts,
            no compromises, no exceptions.
          </motion.p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <h2 className="font-playfair text-3xl sm:text-4xl font-700 text-forest mb-6 leading-tight">
                How It All Began
              </h2>
              <div className="space-y-5 font-lato text-forest/70 text-base leading-relaxed">
                <p>
                  It started with a notebook. My grandmother&apos;s handwritten notebook, to be precise — filled
                  with careful notes she had kept over decades from her family Ayurvedic physician. Among
                  recipes for herbal tonics and seasonal cleansing rituals, there was one entry that caught
                  my eye: a preparation called Shat Dhaut Ghrit, described as &quot;the finest cream for the face,
                  eyes, and lips.&quot;
                </p>
                <p>
                  I was working in Mumbai at the time, surrounded by the beauty industry — synthetic creams,
                  marketing claims, ingredient lists longer than paragraphs. I spent hours each week reading
                  labels, trying to find something genuinely clean for my chronically dry skin. Nothing worked
                  as well as the notebook had promised its recipe would.
                </p>
                <p>
                  I went back to the village. I learned the process from an elder who still practiced Ayurvedic
                  medicine. It took time — 100 washes is not a quick recipe — but the result was immediate
                  and undeniable. My skin responded within days in a way it never had to any commercial product.
                </p>
                <p>
                  That was the beginning. We started sharing small batches with friends. Then with strangers.
                  Then with 2,000 customers across India who now consider it the only skincare product they
                  truly need.
                </p>
              </div>
            </motion.div>

            {/* Info cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="space-y-4"
            >
              {[
                {
                  emoji: "📜",
                  title: "Ancient Texts",
                  text: "Our formula follows descriptions from the Charaka Samhita and Ashtanga Hridayam — the oldest and most authoritative Ayurvedic medical texts.",
                },
                {
                  emoji: "🐄",
                  title: "Ethical Dairy Sourcing",
                  text: "We source exclusively from Gir and Sahiwal breed desi cows, ethically raised on natural pasture. Their A2 milk produces ghee of unmatched quality.",
                },
                {
                  emoji: "🌹",
                  title: "Fresh Rose Water",
                  text: "Our rose water is distilled from real Damask roses — never synthetic. Fresh batches are prepared for every production run.",
                },
                {
                  emoji: "🫙",
                  title: "Hand-Made in Small Batches",
                  text: "Each jar is hand-prepared in small batches by trained artisans using pure copper vessels. We never automate the 100-wash process.",
                },
                {
                  emoji: "✅",
                  title: "Zero Compromises",
                  text: "No preservatives. No synthetic fragrances. No fillers. No shortcuts. The formula has not changed since the day we first made it from the notebook.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 bg-white rounded-2xl border border-gold/15 hover:border-gold/30 transition-colors"
                >
                  <span className="text-2xl shrink-0">{item.emoji}</span>
                  <div>
                    <h3 className="font-playfair font-700 text-forest text-base mb-1">{item.title}</h3>
                    <p className="font-lato text-xs text-forest/60 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It's Made */}
      <section className="py-20 bg-forest text-offwhite relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`,
            backgroundSize: "38px 38px",
          }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-3xl sm:text-4xl font-700 text-offwhite mb-4"
            >
              How Every Jar is Made
            </motion.h2>
            <p className="font-lato text-offwhite/55 text-base max-w-xl mx-auto">
              No machines. No shortcuts. Every jar takes hours of careful, patient work.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Source the Ghee", desc: "Pure A2 ghee is sourced from ethically raised desi cows and verified for quality before use.", emoji: "🐄" },
              { num: "02", title: "Prepare Rose Water", desc: "Fresh rose water is distilled from Damask roses the day of production. No stockpiling.", emoji: "🌹" },
              { num: "03", title: "100-Wash Process", desc: "In a pure copper vessel, the ghee is churned with rose water, drained, and repeated. One hundred times.", emoji: "🫙" },
              { num: "04", title: "Jar and Seal", desc: "The finished cream is hand-poured into premium glass jars, sealed, and labeled. Ready for your skin.", emoji: "✨" },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-offwhite/6 border border-offwhite/10 rounded-3xl p-6 hover:bg-offwhite/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-playfair text-3xl font-800 text-gold/30">{step.num}</span>
                  <span className="text-2xl">{step.emoji}</span>
                </div>
                <h3 className="font-playfair text-lg font-600 text-offwhite mb-2">{step.title}</h3>
                <p className="font-lato text-sm text-offwhite/55 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-amber-50/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl font-700 text-forest mb-4">
              Our Mission
            </h2>
            <p className="font-lato text-forest/55 text-base max-w-xl mx-auto">
              To bring the most effective, most honest Ayurvedic skincare preparation to every home in India —
              made exactly as the ancient texts describe, with zero compromises.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Leaf, title: "Authenticity", text: "We follow ancient texts. No modern shortcuts." },
              { icon: Shield, title: "Purity", text: "Three ingredients only. Tested every batch." },
              { icon: Heart, title: "Kindness", text: "Cruelty free. Ethical dairy. Artisan made." },
              { icon: Users, title: "Community", text: "Supporting local farmers and traditional artisans." },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gold/15 text-center">
                <div className="w-11 h-11 rounded-full bg-forest/8 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={20} className="text-forest" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair font-700 text-forest text-base mb-2">{v.title}</h3>
                <p className="font-lato text-xs text-forest/55 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest text-offwhite text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-4"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl font-700 mb-4">
            Experience It for Yourself
          </h2>
          <p className="font-lato text-offwhite/65 mb-8 leading-relaxed">
            Words and stories can only take you so far. Order your first jar and let your skin
            tell you the rest within the first week.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/#buy"
              className="bg-saffron hover:bg-amber-600 text-white font-lato font-700 px-8 py-4 rounded-full shadow-lg transition-all hover:-translate-y-0.5"
            >
              Buy Now — ₹599
            </Link>
            <Link
              href="/contact"
              className="border-2 border-offwhite/25 hover:border-offwhite text-offwhite font-lato font-700 px-8 py-4 rounded-full transition-all"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
