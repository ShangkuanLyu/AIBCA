import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

interface OrgBoxProps {
  title: string;
  titleEn: string;
  items?: string[];
  dark?: boolean;
}

/** 组织架构节点框 */
function OrgBox({ title, titleEn, items, dark = false }: OrgBoxProps) {
  return (
    <div
      className={cn(
        "w-full px-6 py-4 text-center",
        dark
          ? "border border-pine-800 bg-pine-800 text-cream"
          : "border border-ink/15 bg-white",
      )}
    >
      <p className={cn("font-serif text-lg", dark ? "text-cream" : "text-ink")}>
        {title}
      </p>
      <p
        className={cn(
          "mt-1 text-[10px] uppercase tracking-[0.2em]",
          dark ? "text-gold-light" : "text-gold-dark",
        )}
      >
        {titleEn}
      </p>
      {items && (
        <ul className="mt-3 flex flex-wrap justify-center gap-2">
          {items.map((item) => (
            <li
              key={item}
              className="border border-gold/30 bg-gold/5 px-2.5 py-1 text-xs text-ink-soft"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** 竖向连接线 */
function VLine() {
  return <div aria-hidden="true" className="mx-auto h-8 w-px bg-gold/50" />;
}

/** 关于页 · 组织架构（纯 div 层级框图） */
export function OrgStructure() {
  return (
    <section id="structure" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Governance"
          title="组织架构"
          titleEn="Organisational Structure"
          align="center"
        />
        <Reveal className="mx-auto mt-14 max-w-2xl">
          <div className="mx-auto max-w-xs">
            <OrgBox title="会员大会" titleEn="General Meeting of Members" dark />
          </div>
          <VLine />
          <div className="mx-auto max-w-xs">
            <OrgBox title="理事会" titleEn="Board of Directors" />
          </div>
          <VLine />
          <div className="mx-auto max-w-xs">
            <OrgBox title="会长 · 执行会长" titleEn="President & Executive Presidents" />
          </div>
          <VLine />
          {/* 横向分支线（移动端隐藏，改为纵向堆叠） */}
          <div
            aria-hidden="true"
            className="mx-auto hidden w-1/2 border-t border-gold/50 sm:block"
          />
          <div className="grid gap-0 sm:grid-cols-2">
            <div className="flex flex-col items-center sm:px-4">
              <VLine />
              <OrgBox title="秘书处" titleEn="Secretariat" />
            </div>
            <div className="flex flex-col items-center sm:px-4">
              <VLine />
              <OrgBox
                title="专业委员会"
                titleEn="Specialised Committees"
                items={["经贸", "文化", "会员服务"]}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
