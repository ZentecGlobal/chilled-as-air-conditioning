import type { MetadataRoute } from "next";

const baseUrl = "https://chilledasairconditioning.com.au";

const routes = [
  { path: "/", priority: 1, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services/split-systems", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/installations", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/ducted-air-conditioning", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/servicing-cleaning", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/service-areas", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/service-areas/nanango", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/service-areas/wondai", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/service-areas/crows-nest", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
