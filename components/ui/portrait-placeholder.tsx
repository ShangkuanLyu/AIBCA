import { cn } from "@/lib/utils";

interface PortraitPlaceholderProps {
  /** 占位说明文字 */
  label?: string;
  className?: string;
}

/**
 * 肖像空白占位块：正式肖像照提供前的统一呈现（不使用真人示例图）。
 * 外框沿用 ImageFrame 的金色细线偏移边框，保持版面节奏一致。
 */
export function PortraitPlaceholder({
  label = "肖像照待提供",
  className,
}: PortraitPlaceholderProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden="true"
        className="absolute inset-0 -translate-x-3 -translate-y-3 border border-gold/50"
      />
      <div className="relative flex aspect-[3/4] items-center justify-center border border-ink/10 bg-pine-50">
        <span className="text-[11px] uppercase tracking-[0.3em] text-ink-soft/60">
          {label}
        </span>
      </div>
    </div>
  );
}
