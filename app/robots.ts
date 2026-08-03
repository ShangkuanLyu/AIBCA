import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/* 静态导出（GitHub Pages）需要显式声明该路由为静态 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
