import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "7 Proven Benefits of Ghee for Skin You Need to Know",
  description:
    "Discover 7 science-backed and Ayurvedic benefits of applying ghee on skin including moisturization, anti-aging, dark circles, and more. Learn how Shat Dhaut Ghrit amplifies each benefit.",
  keywords: [
    "ghee for skin",
    "benefits of ghee on face",
    "natural moisturizer",
    "ayurvedic skincare",
    "ghee under eyes",
    "ghee lip balm",
    "winter skin care india",
    "cow ghee moisturizer",
  ],
  alternates: {
    canonical: "https://shatdhautghrit.com/blog/benefits-of-ghee-for-skin",
  },
  openGraph: {
    title: "7 Proven Benefits of Ghee for Skin You Need to Know",
    description:
      "7 science-backed reasons to apply ghee on skin — moisturization, anti-aging, dark circles, sensitive skin & more.",
    url: "https://shatdhautghrit.com/blog/benefits-of-ghee-for-skin",
    type: "article",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Benefits of ghee for skin — Ayurvedic skincare guide",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "7 Proven Benefits of Ghee for Skin You Didn't Know About",
  description:
    "Discover 7 science-backed and Ayurvedic benefits of applying ghee on skin including moisturization, anti-aging, dark circles, and more.",
  author: {
    "@type": "Organization",
    name: "Shat Dhaut Ghrit",
    url: "https://shatdhautghrit.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Shat Dhaut Ghrit",
    logo: {
      "@type": "ImageObject",
      url: "https://shatdhautghrit.com/logo.png",
    },
  },
  datePublished: "2025-02-02",
  dateModified: "2025-02-02",
  image: "https://shatdhautghrit.com/og-image.jpg",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://shatdhautghrit.com/blog/benefits-of-ghee-for-skin",
  },
  keywords:
    "ghee for skin, benefits of ghee on face, natural moisturizer, ayurvedic skincare",
};

const benefits = [
  {
    num: "1",
    title: "Unmatched Deep Moisturization",
    body: `Ghee is composed of short, medium, and long-chain fatty acids — most notably butyric acid, oleic acid, and linoleic acid. When applied topically, these fatty acids penetrate the skin's lipid barrier rather than merely sitting on the surface like water-based moisturizers. The result is moisturization that lasts 12 hours or more, versus the 2–3 hours typical of most synthetic creams.

This is especially powerful in Shat Dhaut Ghrit, where 100 washes in rose water have made the fatty acids more bioavailable and the texture feather-light, allowing faster and deeper absorption without any greasiness.`,
  },
  {
    num: "2",
    title: "Reduces Dark Circles Naturally",
    body: `The under-eye area has the thinnest skin on the body — just 0.5mm thick — making it uniquely vulnerable to capillary leakage, pigmentation, and fluid retention. Dark circles are most often caused by a combination of these factors.

Ghee's Vitamin K content is key here. Vitamin K plays a documented role in reducing purple-toned hyperpigmentation by improving blood coagulation in leaky capillaries. Used nightly with gentle tapping (never rubbing), Shat Dhaut Ghrit can visibly reduce dark circles in 3–4 weeks, without the harsh chemicals found in commercial eye creams.`,
  },
  {
    num: "3",
    title: "Powerful Anti-Aging Properties",
    body: `Aging skin is characterized by reduced collagen production, slower cell turnover, and accumulated oxidative damage from UV radiation and environmental pollutants. Ghee addresses all three mechanisms.

Vitamin A (retinol precursors) in ghee stimulates collagen synthesis and accelerates epidermal cell renewal. Vitamin E is one of the most potent fat-soluble antioxidants, neutralizing free radicals before they can degrade collagen and elastin. Vitamin D supports the skin barrier's structural integrity. Together, these vitamins make consistent Shat Dhaut Ghrit use one of the most effective natural anti-aging regimens available.`,
  },
  {
    num: "4",
    title: "Heals Dry, Cracked, and Damaged Skin",
    body: `Butyric acid — present in significant quantities in A2 cow ghee — is a short-chain fatty acid with well-documented skin-healing properties. It has been shown to support the proliferation of epidermal cells and reduce inflammatory cytokines in damaged skin.

This makes Shat Dhaut Ghrit particularly effective for healing cracked heels, severely dry elbows, chapped lips, and rough patches. Applied to affected areas and left overnight, it creates an occlusive, nourishing environment that allows skin to heal itself without harsh chemicals or prescription creams.`,
  },
  {
    num: "5",
    title: "Safe for the Most Sensitive Skin",
    body: `The modern skincare industry is built on synthetic preservatives, emulsifiers, surfactants, and fragrances — all common triggers for sensitive skin reactions, contact dermatitis, and long-term skin barrier disruption.

Shat Dhaut Ghrit contains exactly three ingredients: A2 cow ghee, rose water, and the therapeutic influence of copper. No parabens. No synthetic fragrances. No emulsifiers. No alcohol. For people with reactive, eczema-prone, or allergy-sensitive skin, this purity is transformative. Many users who cannot tolerate any commercial moisturizer find Shat Dhaut Ghrit to be the only product their skin accepts completely.`,
  },
  {
    num: "6",
    title: "The Ultimate Natural Lip Balm",
    body: `Lips are uniquely vulnerable to dryness because they lack sebaceous (oil-producing) glands. They rely entirely on environmental moisture and whatever topical products you apply. Most commercial lip balms create a dependency cycle — the waxy compounds seal moisture out as often as in, causing lips to become drier without regular reapplication.

Ghee, by contrast, penetrates the lip tissue and genuinely nourishes it. Shat Dhaut Ghrit's ultra-light texture absorbs completely, healing cracks from the inside out. Applied at bedtime, even the most severely chapped lips are transformed overnight.`,
  },
  {
    num: "7",
    title: "Perfect for Winter Skincare",
    body: `Indian winters — particularly in North and Central India — are characterized by low humidity, cold winds, and central heating that strips ambient moisture from the air. The skin's natural sebum production decreases in cold temperatures, leading to flaking, tightness, redness, and cracking.

Shat Dhaut Ghrit's occlusive fatty acid profile creates a protective barrier that locks in whatever moisture the skin retains, while its vitamin content actively repairs winter-damaged skin overnight. Unlike mineral oil or petroleum-based products that merely sit on the surface, it works from within the skin layers — a true winter skincare solution.`,
  },
];

export default function BlogPost2() {
  return (
    <>
      <Script
        id="article-schema-2"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        strategy="afterInteractive"
      />
      <div className="pt-20 bg-ivory">
        {/* Hero banner */}
        <section className="bg-gradient-to-br from-amber-50 to-ivory py-20 border-b border-gold/15">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-forest/50 hover:text-forest font-lato text-sm mb-8 transition-colors"
              aria-label="Back to blog"
            >
              <ArrowLeft size={13} />
              Back to Blog
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="bg-saffron/15 text-saffron text-[10px] font-lato font-700 tracking-widest uppercase px-3 py-1 rounded-full">
                Skin Science
              </span>
              <span className="flex items-center gap-1.5 text-forest/40 text-xs font-lato">
                <Clock size={11} aria-hidden="true" />
                6 min read
              </span>
              <time dateTime="2025-02-02" className="text-forest/40 text-xs font-lato">
                February 2, 2025
              </time>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-[2.75rem] font-700 text-forest leading-tight">
              7 Proven Benefits of Ghee for Skin You Didn&apos;t Know About
            </h1>
          </div>
        </section>

        {/* Article */}
        <article className="py-16" itemScope itemType="https://schema.org/Article">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="font-lato text-forest/75 text-base leading-loose">

              <p className="text-lg text-forest font-400 leading-relaxed mb-8">
                For five thousand years, Ayurvedic physicians prescribed ghee for skin health with complete
                confidence. Today, researchers in dermatology, nutrition science, and biochemistry are
                catching up — validating what ancient healers observed through careful empirical study.
                Here are seven benefits of ghee for skin, grounded in both traditional wisdom and modern
                evidence. And as you&apos;ll see, <strong className="text-forest">Shat Dhaut Ghrit</strong> takes
                every one of these benefits several steps further.
              </p>

              {/* Benefits list */}
              <div className="space-y-10">
                {benefits.map((b) => (
                  <div key={b.num}>
                    <div className="flex items-start gap-4 mb-3">
                      <span className="w-9 h-9 rounded-full bg-saffron flex items-center justify-center font-playfair text-white font-800 text-sm shrink-0 mt-0.5 shadow-md shadow-saffron/25">
                        {b.num}
                      </span>
                      <h2 className="font-playfair text-2xl font-700 text-forest leading-tight">
                        {b.title}
                      </h2>
                    </div>
                    <div className="ml-[52px]">
                      {b.body.split("\n\n").map((para, pi) => (
                        <p key={pi} className="mb-3 text-forest/70 leading-relaxed text-sm">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* How to Use Shat Dhaut Ghrit section */}
              <div className="mt-14 p-8 bg-forest/5 border border-gold/20 rounded-3xl">
                <h2 className="font-playfair text-2xl sm:text-3xl font-700 text-forest mb-6">
                  How to Use Shat Dhaut Ghrit
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      use: "As a Face Moisturizer",
                      how: "Take a pea-sized amount, warm between fingertips for a few seconds until it melts, then apply in gentle upward circular motions. Best used at night before bed. In the morning, skin will feel soft, plump, and glowing.",
                    },
                    {
                      use: "As an Under-Eye Cream",
                      how: "Use a very tiny amount — smaller than a grain of rice per eye. Dot under each eye and pat gently with your ring finger. Never rub. Apply nightly and leave overnight. Results for dark circles appear in 3–4 weeks.",
                    },
                    {
                      use: "As a Natural Lip Balm",
                      how: "Apply a tiny smear to clean lips. Reapply throughout the day or exclusively at night. For severely chapped lips, apply a slightly thicker layer at bedtime and wake up to soft, smooth lips.",
                    },
                    {
                      use: "For Dry Patches & Cracked Heels",
                      how: "Apply generously to the affected area. For heels, apply and wear socks overnight for deep penetration. Repeat nightly until healed, then weekly for maintenance.",
                    },
                  ].map((item) => (
                    <div key={item.use} className="flex gap-4">
                      <div className="w-1.5 rounded-full bg-saffron/40 shrink-0 mt-1" />
                      <div>
                        <h3 className="font-playfair text-lg font-700 text-forest mb-1">{item.use}</h3>
                        <p className="font-lato text-sm text-forest/65 leading-relaxed">{item.how}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conclusion */}
              <div className="mt-10 space-y-4 text-forest/70 text-sm leading-relaxed">
                <h2 className="font-playfair text-2xl font-700 text-forest">The Bottom Line</h2>
                <p>
                  Whether you are looking for a natural moisturizer, ayurvedic skincare that actually works,
                  a solution for dark circles, or just a ghee for skin that delivers on its ancient promises —
                  Shat Dhaut Ghrit stands alone. It is not a trend. It is not a novelty. It is a 5,000-year-old
                  preparation that survived because it works.
                </p>
                <p>
                  Use it for 4 weeks with consistency, and your skin will tell you the rest.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12 p-8 bg-forest rounded-3xl text-center">
                <p className="font-playfair text-2xl font-600 text-offwhite mb-2">
                  Experience These Benefits Yourself
                </p>
                <p className="font-lato text-offwhite/60 text-sm mb-6">
                  Your skin deserves ancient wisdom and modern purity.
                </p>
                <Link
                  href="/#buy"
                  className="inline-block bg-saffron hover:bg-amber-600 text-white font-lato font-700 px-8 py-3.5 rounded-full shadow-lg transition-all"
                >
                  Buy Shat Dhaut Ghrit — ₹599
                </Link>
              </div>

              <div className="mt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-saffron font-lato font-700 hover:gap-3 transition-all"
                >
                  <ArrowLeft size={15} />
                  Back to all articles
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
