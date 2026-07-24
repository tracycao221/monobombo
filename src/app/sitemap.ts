import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "daily", priority: 1 },
  { path: "/codes", changeFrequency: "daily", priority: 0.95 },
  { path: "/tier-list", changeFrequency: "weekly", priority: 0.62 },
  { path: "/trello", changeFrequency: "weekly", priority: 0.72 },
  { path: "/guide", changeFrequency: "weekly", priority: 0.86 },
  { path: "/guides", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/beginner", changeFrequency: "weekly", priority: 0.78 },
  { path: "/guides/progression", changeFrequency: "weekly", priority: 0.76 },
  { path: "/guides/farming", changeFrequency: "weekly", priority: 0.76 },
  { path: "/wiki", changeFrequency: "weekly", priority: 0.8 },
  { path: "/wiki/items-and-rewards", changeFrequency: "weekly", priority: 0.74 },
  { path: "/wiki/maps-and-systems", changeFrequency: "weekly", priority: 0.74 },
  { path: "/wiki/builds-and-entities", changeFrequency: "weekly", priority: 0.74 },
  { path: "/updates", changeFrequency: "daily", priority: 0.74 },
  { path: "/squad-planner", changeFrequency: "weekly", priority: 0.72 },
  { path: "/resource-calculator", changeFrequency: "weekly", priority: 0.72 },
  { path: "/sources", changeFrequency: "monthly", priority: 0.5 },
];

function canonicalUrl(path: string) {
  const normalizedPath = path === "" || path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  return `${siteConfig.domain}${normalizedPath}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const seen = new Set<string>();
  return routes
    .map((route) => ({
      url: canonicalUrl(route.path),
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority
    }))
    .filter((entry) => {
      if (seen.has(entry.url)) return false;
      seen.add(entry.url);
      return true;
    });
}
