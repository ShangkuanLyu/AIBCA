/**
 * 站内静态资源路径。
 *
 * next/link 会自动应用 basePath，但 next/image 的 src 不会
 * （见 Next.js basePath 文档：使用 next/image 时需自行在 src 前加 basePath）。
 * 部署到 GitHub Pages 这类子路径环境时，本站图片必须经过本函数处理。
 *
 * 外部绝对地址（如 Unsplash 占位图）原样返回。
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(src: string): string {
  if (!src.startsWith("/")) return src;
  return `${BASE_PATH}${src}`;
}
