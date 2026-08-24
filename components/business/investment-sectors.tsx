import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { assetPath } from "@/lib/asset";

/** 内蒙古重点产业（示例文案，接入 CMS 后可由后台内容替换） */
const SECTORS = [
  {
    title: "新能源与绿色经济",
    titleEn: "New Energy & Green Economy",
    description:
      "内蒙古风能、太阳能资源富集，是中国重要的清洁能源基地。围绕风光发电、储能配套与绿色氢能，两地企业在技术、装备与投资层面均有合作空间。",
    // TODO(上线前)：替换为正式产业配图
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80",
    alt: "草原上的风力发电机组",
  },
  {
    title: "农牧业与食品加工",
    titleEn: "Agriculture & Food Processing",
    description:
      "内蒙古是中国重要的农畜产品生产加工基地，乳业、肉类与草业规模居前。澳大利亚在畜牧种业、草场管理与食品加工技术方面经验成熟，双方互补性突出。",
    // TODO(上线前)：替换为正式产业配图
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=80",
    alt: "牧场上放牧的马群",
  },
  {
    title: "矿产资源与装备制造",
    titleEn: "Mining & Equipment Manufacturing",
    description:
      "内蒙古矿产资源储量丰富，能源与冶金产业体系完整。澳大利亚矿业技术、装备与专业服务全球领先，可在勘探开发、智能矿山与安全环保等环节开展合作。",
    // TODO(上线前)：替换为正式产业配图
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80",
    alt: "现代化工业制造车间",
  },
  {
    title: "文化旅游与现代服务业",
    titleEn: "Culture, Tourism & Modern Services",
    description:
      "草原文化与自然景观赋予内蒙古独特的文旅资源，产业升级持续带动服务业需求增长。教育培训、康养旅游与专业服务等领域欢迎澳大利亚机构参与。",
    // TODO(上线前)：替换为正式产业配图
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80",
    alt: "旅行途中的辽阔自然景观",
  },
] as const;

/** 商务合作 · 投资机会（内蒙古重点产业四张图文卡） */
export function InvestmentSectors() {
  return (
    <section id="opportunities" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Investment Opportunities"
          title="投资机会"
          titleEn="Key Industries in Inner Mongolia"
          description="内蒙古地处中国向北开放前沿，资源禀赋与产业结构同澳大利亚具有较强互补性。以下为商会重点关注的四大产业方向，供有意开展两地合作的企业参考。"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {SECTORS.map((sector, i) => (
            <Reveal key={sector.title} delay={i * 0.08} className="h-full">
              <article className="group h-full border border-ink/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold/60">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={assetPath(sector.image)}
                    alt={sector.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7 md:p-8">
                  <h3 className="font-serif text-xl">{sector.title}</h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gold-dark">
                    {sector.titleEn}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    {sector.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
