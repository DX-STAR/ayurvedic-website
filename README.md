# Shat Dhaut Ghrit — Ayurvedic E-Commerce Website v3

A complete, SEO-optimised Next.js 14 e-commerce website for **Vasu Ayurvedics**.

## Quick Start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve production build
```

---

## Tech Stack

| Technology | Usage |
|-----------|-------|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| next/font | Google Fonts (zero layout shift) |

---

## Pages & Routes

| Route | Title | Robots |
|-------|-------|--------|
| `/` | Shat Dhaut Ghrit \| 100-Times Washed Ayurvedic Ghee for Skin | index, follow |
| `/about` | About Us \| Our Ayurvedic Story | index, follow |
| `/blog` | Ayurvedic Skincare Blog \| Tips, Guides & Ingredients | index, follow |
| `/blog/what-is-shat-dhaut-ghrit` | What is Shat Dhaut Ghrit? Ancient Ayurvedic Secret Explained | index, follow |
| `/blog/benefits-of-ghee-for-skin` | 7 Proven Benefits of Ghee for Skin You Need to Know | index, follow |
| `/contact` | Contact Us \| Get in Touch | index, follow |
| `/thank-you` | Thank You for Your Order | **noindex, nofollow** |

---

## SEO Implementation

### ✅ Metadata
- Root layout: `title.template` for consistent `%s | Shat Dhaut Ghrit` pattern
- Every page has unique `<title>` and `<meta description>`
- Full keyword arrays per page
- Canonical URLs on every page via `alternates.canonical`
- `metadataBase` set to production URL

### ✅ Open Graph & Twitter Cards
- OG image at `/public/og-image.jpg` (1200×630)
- All pages have `og:title`, `og:description`, `og:url`, `og:image`
- Twitter card set to `summary_large_image`

### ✅ Structured Data (JSON-LD)
| Schema | Location |
|--------|----------|
| Organization | Root layout (all pages) |
| WebSite + SearchAction | Root layout (all pages) |
| Product + AggregateRating + Reviews | Homepage (`/`) |
| FAQPage | Homepage (`/`) |
| Article | `/blog/what-is-shat-dhaut-ghrit` |
| Article | `/blog/benefits-of-ghee-for-skin` |

### ✅ Technical SEO
- `app/sitemap.ts` → auto-generates `/sitemap.xml`
- `app/robots.ts` → auto-generates `/robots.txt`
- Security headers in `next.config.mjs`
- Image optimization (AVIF/WebP) configured
- `compress: true` in next.config
- `display: "swap"` on all fonts (no FOIT)
- `poweredByHeader: false`
- Static assets cached for 1 year

### ✅ Accessibility & Core Web Vitals
- All interactive elements have `aria-label`
- Decorative elements have `aria-hidden="true"`
- Icons have `aria-hidden="true"`
- Form labels linked to inputs via `htmlFor`/`id`
- `<time>` elements with `dateTime` attributes
- `<article>` elements with itemScope/itemType for blog posts

### ✅ Architecture: Server vs Client Components
Pages are split to maximize RSC (React Server Components):

| Component | Type | Reason |
|-----------|------|--------|
| `app/page.tsx` | Server | metadata export + JSON-LD |
| `app/about/page.tsx` | Server | metadata export |
| `app/blog/page.tsx` | Server | metadata export |
| `app/blog/*/page.tsx` | Server | metadata + Article JSON-LD |
| `app/contact/page.tsx` | Server | metadata export |
| `components/AboutContent.tsx` | Client | Framer Motion |
| `components/BlogListingContent.tsx` | Client | Framer Motion |
| `components/ContactContent.tsx` | Client | form state + router |
| `components/ThankYouContent.tsx` | Client | useEffect + motion |
| All homepage sections | Client | Framer Motion animations |
| `components/Navbar.tsx` | Client | scroll state, menu |
| `components/WhatsAppButton.tsx` | Client | hover state |
| `components/Footer.tsx` | **Server** | static content |

---

### Add Google Analytics
Add to `app/layout.tsx`:
```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Google Search Console
Uncomment and add your verification code in `app/layout.tsx`:
```tsx
verification: {
  google: 'your-verification-code-here',
},
```

---

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Warm Ivory | `#FDF6EC` | Background |
| Deep Saffron | `#E8871E` | Primary CTA buttons |
| Muted Gold | `#C9A84C` | Accent, icons |
| Forest Green | `#3A5A40` | Dark sections, headings |
| Off-white | `#FAF7F0` | Text on dark backgrounds |

---

© 2025 Shat Dhaut Ghrit · Made in India 🇮🇳
