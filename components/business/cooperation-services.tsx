import { CalendarCheck, FileSearch, Handshake, Landmark } from "lucide-react";
import { ImageFrame } from "@/components/ui/image-frame";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/** 商会提供的合作促成服务 */
const SERVICES = [
  {
    Icon: Handshake,
    title: "企业对接",
    description: "根据会员及合作方需求，定向对接两地行业企业与潜在合作伙伴。",
  },
  {
    Icon: FileSearch,
    title: "尽调支持",
    description: "协助引荐法律、财务等专业机构，为合作决策提供尽职调查支持。",
  },
  {
    Icon: CalendarCheck,
    title: "考察安排",
    description: "组织安排赴内蒙古或澳大利亚的商务考察、参访与洽谈行程。",
  },
  {
    Icon: Landmark,
    title: "政企沟通",
    description: "依托两地政府机构与贸促系统资源，协助企业开展政企沟通。",
  },
] as const;

/** 商务合作 · 企业合作（左右分栏：服务说明 + 配图） */
export function CooperationServices() {
  return (
    <section id="cooperation" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="Corporate Cooperation"
            title="企业合作"
            titleEn="How the Chamber Facilitates Cooperation"
          />
          <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-ink-soft">
            <p>
              商会依托覆盖教育、地产、金融、矿产、医疗与大健康等行业的会员网络，以及内蒙古自治区贸促会及国际商会澳大利亚代表处的机构资源，为两地企业提供合作促成服务。
            </p>
            <p>
              无论是澳大利亚企业希望进入内蒙古市场，还是内蒙古企业寻求在澳合作伙伴，商会均可在信息、渠道与对接安排上提供支持。
            </p>
          </div>

          <dl className="mt-9 grid gap-x-8 gap-y-7 border-t border-ink/10 pt-8 sm:grid-cols-2">
            {SERVICES.map(({ Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/40 text-gold-dark">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <dt className="font-serif text-lg leading-snug">{title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15}>
          {/* TODO(上线前)：替换为商会商务对接活动照片 */}
          <ImageFrame
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80"
            alt="两地企业代表商务洽谈场景"
            aspect="aspect-[4/3]"
            offset="tl"
          />
        </Reveal>
      </div>
    </section>
  );
}
