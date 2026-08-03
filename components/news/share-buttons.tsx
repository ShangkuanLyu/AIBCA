"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Link2 } from "lucide-react";
import {
  FacebookIcon,
  LinkedinIcon,
} from "@/components/decor/social-icons";
import { cn } from "@/lib/utils";

interface ShareButtonsProps {
  /** 文章完整 URL（由服务端以 site.url 拼接后传入，保证 SSR 一致） */
  url: string;
  /** 文章标题，用于分享文案 */
  title: string;
  className?: string;
}

const iconButtonClass =
  "inline-flex h-9 w-9 items-center justify-center rounded-[2px] border border-ink/15 text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:text-pine-800";

/**
 * 新闻详情页 · 分享按钮组：复制链接 / LinkedIn / Facebook。
 * 复制成功后在按钮上方短暂显示「已复制」提示（aria-live 通知读屏）。
 */
export function ShareButtons({ url, title, className }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // 剪贴板 API 不可用（如非 HTTPS 环境）时的回退方案
      const textarea = document.createElement("textarea");
      textarea.value = url;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setCopied(false), 2000);
  }

  const encodedUrl = encodeURIComponent(url);
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodeURIComponent(title)}`;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <button
          type="button"
          onClick={handleCopy}
          aria-label="复制文章链接"
          className={iconButtonClass}
        >
          {copied ? (
            <Check className="h-4 w-4 text-gold-dark" aria-hidden="true" />
          ) : (
            <Link2 className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
        <span
          role="status"
          className={cn(
            "pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-pine-800 px-2.5 py-1 text-[11px] tracking-wide text-cream transition-opacity duration-300",
            copied ? "opacity-100" : "opacity-0",
          )}
        >
          {copied ? "已复制" : ""}
        </span>
      </div>
      <a
        href={linkedinShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="分享到 LinkedIn（新窗口打开）"
        className={iconButtonClass}
      >
        <LinkedinIcon className="h-4 w-4" />
      </a>
      <a
        href={facebookShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="分享到 Facebook（新窗口打开）"
        className={iconButtonClass}
      >
        <FacebookIcon className="h-4 w-4" />
      </a>
    </div>
  );
}
