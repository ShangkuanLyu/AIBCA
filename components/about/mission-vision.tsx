import { MeanderStrip } from "@/components/decor/meander-strip";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const ITEMS = [
  {
    eyebrow: "Our Mission",
    title: "使命",
    titleEn: "Mission",
    body: "连接中澳，合作共赢。搭建澳大利亚与内蒙古之间的经贸、文化及社会交流平台，服务会员企业，促进两地共同发展。",
  },
  {
    eyebrow: "Our Vision",
    title: "愿景",
    titleEn: "Vision",
    body: "立足澳大利亚，连接内蒙古，服务会员，共创未来。",
  },
] as const;

/** 关于页 · 使命与愿景（两张并排深墨绿卡片） */
export function MissionVision() {
  return (
    <section id="mission" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Mission & Vision"
          title="使命与愿景"
          titleEn="Our Mission and Vision"
          align="center"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {ITEMS.map(({ eyebrow, title, titleEn, body }, i) => (
            <Reveal key={title} delay={i * 0.12} className="h-full">
              <article className="relative h-full overflow-hidden bg-pine-800 p-10 text-cream md:p-12">
                <div
                  aria-hidden="true"
                  className="bg-meander-faint absolute inset-0 opacity-40"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 bg-gold/70"
                />
                <div className="relative">
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold-light">
                    {eyebrow}
                  </p>
                  <h3 className="mt-5 font-serif text-3xl">
                    {title}
                    <span className="ml-3 font-serif text-lg italic text-cream/50">
                      {titleEn}
                    </span>
                  </h3>
                  <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-cream/75">
                    {body}
                  </p>
                  <div className="mt-10 w-24 text-gold/40">
                    <MeanderStrip />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
