import { HorizonLines } from "@/components/decor/horizon-lines";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  /** 英文眉题，例如 "ABOUT THE CHAMBER" */
  eyebrow: string;
  /** 中文页面标题（h1） */
  title: string;
  titleEn?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * 内页统一页头：深墨绿背景 + 极淡回纹 + 地平线装饰。
 * 顶部预留导航栏高度（导航在顶部时为透明覆盖）。
 */
export function PageHeader({
  eyebrow,
  title,
  titleEn,
  description,
  children,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-pine-800 text-cream",
        className,
      )}
    >
      <div aria-hidden="true" className="bg-meander-faint absolute inset-0 opacity-50" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 text-gold">
        <HorizonLines className="h-28 opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-44">
        <span className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-gold-light">
          <span aria-hidden="true" className="h-px w-8 bg-gold/70" />
          {eyebrow}
        </span>
        <h1 className="mt-5 font-serif text-4xl leading-tight text-balance md:text-5xl">
          {title}
        </h1>
        {titleEn && (
          <p className="mt-3 font-serif text-xl italic text-cream/60">
            {titleEn}
          </p>
        )}
        {description && (
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-cream/75">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
