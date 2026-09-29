import type { MetadataRoute } from "next";

export const dynamic = "force-static";

/**
 * Robots.txt configuration.
 * Replace "https://BIMATECH.example.com" with the actual domain.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://BIMATECH.example.com/sitemap.xml",
  };
}
