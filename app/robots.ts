import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/* 静态导出（GitHub Pages）需要显式声明该路由为静态 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // 未开放收录时也保持 allow：爬虫要能抓到页面才读得到 noindex
    rules: { userAgent: "*", allow: "/" },
    sitemap: site.indexable ? `${site.url}/sitemap.xml` : undefined,
  };
}
