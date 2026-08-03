import { cn } from "@/lib/utils";

/**
 * Logo 占位组件。
 * TODO(上线前)：替换为商会正式 Logo（建议提供 SVG 深浅两版）。
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative flex h-10 w-10 shrink-0 items-center justify-center border border-gold/80",
        className,
      )}
      aria-hidden="true"
    >
      {/* 内层细金线，形成双线印章式边框 */}
      <span className="absolute inset-[3px] border border-gold/40" />
      <span className="font-serif text-lg leading-none">蒙</span>
    </span>
  );
}
