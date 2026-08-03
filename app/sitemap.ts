import type { MetadataRoute } from "next";
import { newsArticles } from "@/data/news";
import { events } from "@/data/events";
import { site } from "@/lib/site";

/* 静态导出（GitHub Pages）需要显式声明该路由为静态 */
export const dynamic = "force-static";

/** 站点地图（SEO）：静态页面 + 新闻/活动详情页 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/news",
    "/events",
    "/membership",
    "/business",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path === "/privacy" || path === "/terms" ? 0.3 : 0.7,
  }));

  const newsPages = newsArticles.map((a) => ({
    url: `${site.url}/news/${a.slug}`,
    lastModified: a.date,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const eventPages = events.map((e) => ({
    url: `${site.url}/events/${e.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...newsPages, ...eventPages];
}
