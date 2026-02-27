import type { MetadataRoute } from "next";

const BASE_URL = "https://shatdhautghrit.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/what-is-shat-dhaut-ghrit`,
      lastModified: "2025-01-15T00:00:00.000Z",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blog/benefits-of-ghee-for-skin`,
      lastModified: "2025-02-02T00:00:00.000Z",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
