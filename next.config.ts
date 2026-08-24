import type { NextConfig } from "next";

/**
 * GITHUB_PAGES=true 时进行静态导出（GitHub Pages 部署用）：
 * - output: "export" 生成纯静态站点到 out/
 * - basePath 对应仓库名（https://<user>.github.io/AIBCA/）
 * - 静态托管无图片优化服务，需 unoptimized
 * 正式上线到自有域名（如 Vercel / 自建服务器）时无需该环境变量。
 */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/AIBCA" : "";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: basePath || undefined,
  trailingSlash: isGithubPages,
  // next/image 的 src 不会自动套用 basePath，需通过 lib/asset.ts 的
  // assetPath() 手动拼接，故把前缀暴露给客户端代码。
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    unoptimized: isGithubPages,
    // 占位图来自 Unsplash。正式上线时替换为自有图库/CMS 资源后，
    // 请把对应的图片域名加入（或移除）remotePatterns。
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
