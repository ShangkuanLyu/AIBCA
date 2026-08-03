import { StatCounter } from "@/components/ui/stat-counter";
import { Reveal } from "@/components/ui/reveal";

/**
 * 首页 · 商会数据（深墨绿数据带）。
 * ⚠️ 以下均为示例数据，上线前必须替换为商会真实统计数字。
 */
const STATS = [
  { value: 100, label: "会员及合作企业", labelEn: "Members & Partners" },
  { value: 30, label: "年度商务与文化活动", labelEn: "Events Each Year" },
  { value: 15, label: "重点合作行业", labelEn: "Key Industries" },
  { value: 20, label: "合作机构", labelEn: "Partner Organisations" },
] as const;

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-pine-800">
      <div aria-hidden="true" className="bg-meander-faint absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
            {STATS.map((s) => (
              <StatCounter
                key={s.label}
                value={s.value}
                label={s.label}
                labelEn={s.labelEn}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
