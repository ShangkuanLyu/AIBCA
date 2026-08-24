import Image from "next/image";
import type { Partner } from "@/lib/types";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/asset";

interface PartnerTileProps {
  partner: Partner;
  className?: string;
}

/**
 * 合作机构 Logo 格：默认灰度 / 降低透明度，悬停恢复。
 * 目前多数机构暂无 Logo 图片，用统一排版的文字标识占位；
 * TODO(上线前)：在 data/partners.ts 中补充各机构正式 Logo。
 */
export function PartnerTile({ partner, className }: PartnerTileProps) {
  const inner = partner.logo ? (
    <Image
      src={assetPath(partner.logo)}
      alt={partner.name}
      width={140}
      height={48}
      className="max-h-12 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
    />
  ) : (
    <span className="text-center">
      <span className="block font-serif text-[15px] leading-snug text-ink-soft transition-colors duration-300 group-hover:text-pine-800">
        {partner.name}
      </span>
      {partner.nameEn && (
        <span className="mt-1 block text-[9px] uppercase tracking-[0.14em] text-ink-soft/60 transition-colors duration-300 group-hover:text-gold-dark">
          {partner.nameEn}
        </span>
      )}
    </span>
  );

  const cls = cn(
    "group flex h-24 items-center justify-center border border-ink/10 bg-white px-5 opacity-75 transition-all duration-300 hover:border-gold/50 hover:opacity-100",
    className,
  );

  if (partner.website) {
    return (
      <a
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        aria-label={partner.name}
      >
        {inner}
      </a>
    );
  }
  return <div className={cls}>{inner}</div>;
}
