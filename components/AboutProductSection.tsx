"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutProductSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about-product" className="py-24 bg-forest text-offwhite relative overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`,
          backgroundSize: "38px 38px",
        }}
      />
      {/* Ambient blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/8 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-saffron/6 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Explanation */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="font-lato text-gold text-[11px] tracking-[0.18em] uppercase font-700 mb-4">
              The Ancient Secret
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-700 text-offwhite leading-tight mb-7">
              What is Shat Dhaut Ghrit?
            </h2>

            <div className="space-y-5 font-lato text-offwhite/72 text-base leading-loose">
              <p>
                Deep within the sacred texts of <em>Charaka Samhita</em> and{" "}
                <em>Ashtanga Hridayam</em>, Ayurvedic scholars described a unique preparation
                called <strong className="text-offwhite">Shat Dhaut Ghrit</strong> — ghee washed
                exactly one hundred times. This ancient Vedic process was considered among the
                most powerful skincare formulations ever conceived.
              </p>
              <p>
                The preparation begins with pure A2 cow ghee, sourced from desi breeds like Gir
                and Sahiwal. This ghee is combined with fresh rose water inside a{" "}
                <strong className="text-offwhite">pure copper vessel</strong> — the copper
                itself lending antimicrobial and purifying properties to every batch.
              </p>
              <p>
                The ghee is then vigorously churned with the rose water, the water drained, and
                fresh rose water added again. This is repeated exactly{" "}
                <strong className="text-offwhite">one hundred times</strong>. With each wash, the
                heavy golden ghee sheds its weight, absorbs the floral healing of rose water, and
                is transformed into something remarkable.
              </p>
              <p>
                The result: a silky, feather-light white cream that absorbs in seconds, leaving
                no grease — only deep, lasting nourishment. Deeply effective for all skin types,
                it is the only skincare product Ayurveda describes as simultaneously a
                moisturizer, under-eye treatment, and lip balm.
              </p>
            </div>

            {/* Key facts */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { num: "100×", label: "Times Washed" },
                { num: "A2", label: "Cow Ghee" },
                { num: "0", label: "Chemicals" },
              ].map((fact) => (
                <div key={fact.label} className="bg-offwhite/8 rounded-2xl p-4 text-center border border-offwhite/10">
                  <p className="font-playfair text-2xl font-700 text-gold">{fact.num}</p>
                  <p className="font-lato text-xs text-offwhite/60 mt-0.5">{fact.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Product image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >

            {/* Product image container */}
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]">
              <Image
                src="/assets/about-product.jpg"
                alt="Vasu Ayurvedics Shat Dhaut Ghrit ayurvedic face cream – A2 cow ghee washed 100 times in rose water"
                height={370}
                width={450}
                priority
                sizes="(max-width: 640px) 280px, 360px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
