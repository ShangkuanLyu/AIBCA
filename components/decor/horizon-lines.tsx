import { cn } from "@/lib/utils";

/**
 * 抽象的草原地平线装饰（层叠细曲线）。
 * 颜色跟随 currentColor，一般以极低不透明度置于区块底部。
 */
export function HorizonLines({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      className={cn("pointer-events-none block h-40 w-full", className)}
    >
      <path
        d="M0 150 C 320 100, 720 175, 1080 130 S 1440 120, 1440 120"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <path
        d="M0 175 C 420 135, 860 195, 1200 155 S 1440 150, 1440 150"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeWidth="1"
      />
      <path
        d="M0 195 C 480 170, 980 205, 1440 180"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.14"
        strokeWidth="1"
      />
    </svg>
  );
}
