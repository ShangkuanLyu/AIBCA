import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** 英文小标签，例如 "ABOUT THE CHAMBER" */
  eyebrow: string;
  /** 中文主标题 */
  title: string;
  /** 英文副标题（衬线斜体） */
  titleEn?: string;
  /** 补充描述 */
  description?: string;
  align?: "left" | "center";
  /** 深色背景上使用 */
  dark?: boolean;
  className?: string;
}

/** 统一的区块标题：金色 hairline + 英文眉题 + 中文衬线大标题 */
export function SectionHeading({
  eyebrow,
  title,
  titleEn,
  description,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div
      className={cn(
        "max-w-3xl",
        center && "mx-auto flex flex-col items-center text-center",
        className,
      )}
    >
      <span
        className={cn(
          "flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em]",
          dark ? "text-gold-light" : "text-gold-dark",
        )}
      >
        <span aria-hidden="true" className="h-px w-8 bg-gold/70" />
        {eyebrow}
        {center && <span aria-hidden="true" className="h-px w-8 bg-gold/70" />}
      </span>
      <h2
        className={cn(
          "mt-4 font-serif text-3xl leading-snug text-balance md:text-4xl",
          dark ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {titleEn && (
        <p
          className={cn(
            "mt-3 font-serif text-lg italic",
            dark ? "text-cream/60" : "text-ink-soft",
          )}
        >
          {titleEn}
        </p>
      )}
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-[15px] leading-relaxed",
            dark ? "text-cream/70" : "text-ink-soft",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
