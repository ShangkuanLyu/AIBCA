import Image from "next/image";
import Link from "next/link";
import { ArrowRight, UserRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { assetPath } from "@/lib/asset";
import type { Enterprise } from "@/lib/types";
import { cn } from "@/lib/utils";

interface EnterpriseCardProps {
  enterprise: Enterprise;
  className?: string;
}

/**
 * 商会企业卡片：Logo（暂缺时以文字标识占位）+ 行业标签 + 简介 +
 * 负责人信息。有详情正文的企业整卡可点击进入详情页。
 */
export function EnterpriseCard({ enterprise, className }: EnterpriseCardProps) {
  const hasDetail = enterprise.body.length > 0;

  const leaderLine = enterprise.leader && (
    <p className="flex items-center gap-2 text-sm text-ink">
      <UserRound className="h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
      <span className="font-medium">{enterprise.leader.name}</span>
      {enterprise.leader.chamberRole && (
        <span className="text-ink-soft">
          商会{enterprise.leader.chamberRole}
        </span>
      )}
    </p>
  );

  const inner = (
    <>
      {/* Logo 行：暂缺 Logo 时显示企业名首字标识，保持卡片节奏一致 */}
      <div className="mb-6 flex h-16 items-center border-b border-ink/10 pb-6">
        {enterprise.logo ? (
          <Image
            src={assetPath(enterprise.logo)}
            alt={`${enterprise.name} Logo`}
            width={200}
            height={64}
            className="max-h-10 w-auto object-contain object-left"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center border border-gold/50 font-serif text-lg text-pine-800"
          >
            {enterprise.name.charAt(0)}
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="pine">{enterprise.industry}</Badge>
        {!hasDetail && <Badge tone="neutral">资料整理中</Badge>}
      </div>

      <h3
        className={cn(
          "mt-5 font-serif text-xl leading-snug text-ink",
          hasDetail &&
            "transition-colors duration-300 group-hover:text-pine-700",
        )}
      >
        {enterprise.name}
      </h3>
      {enterprise.nameEn && enterprise.nameEn !== enterprise.name && (
        <p className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-gold-dark">
          {enterprise.nameEn}
        </p>
      )}

      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
        {enterprise.summary}
      </p>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
        {leaderLine ?? <span />}
        {hasDetail && (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-pine-800 transition-colors duration-300 group-hover:text-gold-dark">
            查看详情
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        )}
      </div>
    </>
  );

  const cardClass = cn(
    "group flex h-full flex-col border border-ink/10 bg-white p-7 transition-all duration-300 md:p-8",
    hasDetail && "hover:-translate-y-0.5 hover:border-gold/60",
    className,
  );

  if (!hasDetail) {
    return <article className={cardClass}>{inner}</article>;
  }

  return (
    <article className={cardClass}>
      <Link
        href={`/enterprises/${enterprise.slug}`}
        className="flex h-full flex-col"
        aria-label={`${enterprise.name} — 查看详情`}
      >
        {inner}
      </Link>
    </article>
  );
}
