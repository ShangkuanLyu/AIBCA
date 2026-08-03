import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "dark" | "gold" | "link";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  /**
   * primary — 深墨绿实底（浅色背景上）
   * outline — 细边框（浅色背景上）
   * dark    — 奶白描边（深色背景上）
   * gold    — 金色描边（深色背景上的强调）
   * link    — 纯文字 + 箭头
   */
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  external?: boolean;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-pine-800 text-cream hover:bg-pine-700 px-7 py-3 border border-pine-800 hover:border-pine-700",
  outline:
    "border border-ink/25 text-ink hover:border-gold-dark hover:text-pine-800 px-7 py-3",
  dark: "border border-cream/40 text-cream hover:border-cream hover:bg-cream/10 px-7 py-3",
  gold: "border border-gold/80 text-gold-light hover:bg-gold/15 hover:border-gold px-7 py-3",
  link: "text-pine-800 hover:text-gold-dark px-0 py-0",
};

/** 全站统一按钮 / 链接组件（<Link> 封装，克制的方角样式） */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className,
  external = false,
}: ButtonLinkProps) {
  const cls = cn(
    "group inline-flex items-center justify-center gap-2 rounded-[2px] text-sm font-medium tracking-wide transition-all duration-300",
    styles[variant],
    className,
  );
  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
