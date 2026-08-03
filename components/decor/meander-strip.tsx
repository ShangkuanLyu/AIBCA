import { cn } from "@/lib/utils";

/**
 * 极细蒙古回纹装饰条（抽象化的连续几何纹样）。
 * 颜色跟随 currentColor，通过外层 text-* 控制；仅作装饰，对读屏隐藏。
 *
 * 页面中多个实例共用同一 pattern id：内容完全相同，重复定义无副作用，
 * 且避免了随机 id 带来的 SSR/CSR 不一致问题。
 */
export function MeanderStrip({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("block w-full", className)}
      height="10"
      role="presentation"
    >
      <defs>
        <pattern
          id="aimcc-meander"
          width="28"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M2 9 V1 H16 V6 H8 V4 H12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="10" fill="url(#aimcc-meander)" />
    </svg>
  );
}
