import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * 发展历程大事记。
 * TODO(上线前)：以下条目为示例内容，年份与事件须逐条与商会核实后替换。
 */
const MILESTONES = [
  {
    year: "2014",
    title: "商会成立",
    description:
      "澳大利亚内蒙古商会在墨尔本正式成立，成为连接澳大利亚与内蒙古的侨界商会组织。",
  },
  {
    year: "2018",
    title: "规范化运营",
    description: "建立定期发布工作年报的制度，持续深化会员服务体系。",
  },
  {
    year: "2022",
    title: "重启线下交流",
    description: "疫情后有序重启线下活动，会员交流与商务合作逐步恢复。",
  },
  {
    year: "2023",
    title: "深化两地合作",
    description:
      "组织会员代表赴呼和浩特出席世界蒙商大会；内蒙古自治区贸促会澳大利亚代表处落户本会。",
  },
  {
    year: "2024",
    title: "十周年新起点",
    description: "举办成立十周年庆典，第二届理事会宣誓就职。",
  },
  {
    year: "2026",
    title: "面向未来",
    description: "持续拓展中澳经贸与文化交流，为会员创造更多合作机遇。",
  },
] as const;

/** 关于页 · 发展历程（竖向时间线：金色细线 + 衬线年份） */
export function Timeline() {
  return (
    <section id="history" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Our Journey"
          title="发展历程"
          titleEn="Milestones"
          align="center"
        />
        <ol className="relative mx-auto mt-16 max-w-3xl border-l border-gold/40 pl-8 md:pl-12">
          {MILESTONES.map(({ year, title, description }, i) => (
            <li key={year} className="relative pb-12 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[37px] top-3 h-2.5 w-2.5 border border-gold bg-white md:-left-[53px]"
              />
              <Reveal delay={i * 0.06}>
                <p className="font-serif text-3xl text-pine-800">{year}</p>
                <h3 className="mt-2 font-serif text-xl text-ink">{title}</h3>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                  {description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
