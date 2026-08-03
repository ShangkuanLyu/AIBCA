import { cn } from "@/lib/utils";

export type BadgeTone = "pine" | "gold" | "oxblood" | "neutral" | "cream";

const tones: Record<BadgeTone, string> = {
  pine: "bg-pine-50 text-pine-800 border-pine-800/15",
  gold: "bg-gold/10 text-gold-dark border-gold/30",
  /* 暗红仅用于重要活动 / 公告 / 文化栏目 */
  oxblood: "bg-oxblood/8 text-oxblood border-oxblood/25",
  neutral: "bg-ink/5 text-ink-soft border-ink/10",
  cream: "bg-cream/10 text-cream border-cream/30",
};

/* 叠加在图片上时统一使用白色衬底，只保留 tone 的文字色 */
const tonesOnImage: Record<BadgeTone, string> = {
  pine: "bg-white/95 text-pine-800 border-white/60",
  gold: "bg-white/95 text-gold-dark border-white/60",
  oxblood: "bg-white/95 text-oxblood border-white/60",
  neutral: "bg-white/95 text-ink-soft border-white/60",
  cream: "bg-white/95 text-ink border-white/60",
};

interface BadgeProps {
  children: React.ReactNode;
  tone?: BadgeTone;
  /** 置于图片上层时使用白色衬底，避免与 tone 背景类冲突 */
  onImage?: boolean;
  className?: string;
}

/** 分类 / 状态标签 */
export function Badge({
  children,
  tone = "pine",
  onImage = false,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border px-2.5 py-1 text-[11px] font-medium tracking-[0.08em]",
        onImage ? tonesOnImage[tone] : tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
