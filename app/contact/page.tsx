import type { Metadata } from "next";
import {
  Clock,
  Handshake,
  Mail,
  MapPin,
  MessageCircle,
  Newspaper,
  Phone,
  Users,
} from "lucide-react";
import { MeanderStrip } from "@/components/decor/meander-strip";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "欢迎与澳大利亚内蒙古商会取得联系。您可以通过在线表单、邮箱或电话咨询商务合作、媒体合作及入会事宜，商会秘书处将尽快回复。",
};

/** 分类联系方式（占位邮箱，上线前替换） */
const DEPARTMENT_CONTACTS = [
  {
    Icon: Handshake,
    title: "商务合作",
    titleEn: "Business Partnership",
    description: "经贸合作、项目对接与代表团考察等事宜，请联系商务合作组。",
    // TODO(上线前)：替换为真实商务合作邮箱
    email: "business@aibca.com.au",
  },
  {
    Icon: Newspaper,
    title: "媒体合作",
    titleEn: "Media Enquiries",
    description: "媒体采访、新闻发布与宣传合作等事宜，请联系媒体联络组。",
    // TODO(上线前)：替换为真实媒体合作邮箱
    email: "media@aibca.com.au",
  },
  {
    Icon: Users,
    title: "入会咨询",
    titleEn: "Membership Enquiries",
    description: "会员权益、申请流程与会费标准等事宜，请联系会员服务组。",
    // TODO(上线前)：替换为真实入会咨询邮箱
    email: "membership@aibca.com.au",
  },
] as const;

/** 联系我们 */
export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT US"
        title="联系我们"
        titleEn="Contact Us"
        description="无论是商务合作、媒体咨询还是入会申请，欢迎通过以下方式与商会秘书处取得联系，我们将尽快回复。"
      />

      {/* 在线留言 + 联系信息 */}
      <section id="form" className="scroll-mt-24 bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            {/* 左：联系表单 */}
            <Reveal className="lg:col-span-7">
              <SectionHeading
                eyebrow="Send a Message"
                title="在线留言"
                description="请填写以下信息，商会秘书处将在 2–3 个工作日内通过邮件回复您。"
              />
              <div className="mt-10 border border-ink/10 bg-white p-6 md:p-10">
                <ContactForm />
              </div>
            </Reveal>

            {/* 右：联系信息面板（深墨绿卡片） */}
            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="relative h-full overflow-hidden bg-pine-800 text-cream">
                <div
                  aria-hidden="true"
                  className="bg-meander-faint absolute inset-0 opacity-40"
                />
                <div className="relative flex h-full flex-col p-8 md:p-10">
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold-light">
                    Chamber Office
                  </p>
                  <h2 className="mt-4 font-serif text-2xl">商会办公室</h2>

                  <ul className="mt-8 space-y-7 text-sm leading-relaxed">
                    <li className="flex gap-4">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-gold/40 text-gold-light">
                        <MapPin className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-medium text-cream">地址</p>
                        <p className="mt-1 text-cream/75">{site.contact.addressZh}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-gold/40 text-gold-light">
                        <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-medium text-cream">邮箱</p>
                        <a
                          href={`mailto:${site.contact.email}`}
                          className="mt-1 inline-block text-cream/75 underline-offset-4 transition-colors duration-300 hover:text-gold-light hover:underline"
                        >
                          {site.contact.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-gold/40 text-gold-light">
                        <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-medium text-cream">电话</p>
                        <p className="mt-1">
                          <a
                            href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                            className="text-cream/75 underline-offset-4 transition-colors duration-300 hover:text-gold-light hover:underline"
                          >
                            {site.contact.phone}
                          </a>
                        </p>
                        <p className="mt-1">
                          <a
                            href={`tel:${site.contact.phoneSecondary.replace(/\s/g, "")}`}
                            className="text-cream/75 underline-offset-4 transition-colors duration-300 hover:text-gold-light hover:underline"
                          >
                            {site.contact.phoneSecondary}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-gold/40 text-gold-light">
                        <Clock className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-medium text-cream">办公时间</p>
                        {/* TODO(上线前)：核实商会办公时间 */}
                        <p className="mt-1 text-cream/75">周一至周五 9:30–17:30</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-gold/40 text-gold-light">
                        <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-medium text-cream">微信公众号</p>
                        <p className="mt-1 text-cream/75">{site.contact.wechat}</p>
                      </div>
                    </li>
                  </ul>

                  <div aria-hidden="true" className="mt-auto pt-10 text-gold/50">
                    <MeanderStrip />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 分类联系方式 */}
      <section id="departments" className="scroll-mt-24 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Direct Contacts"
            title="分类联系方式"
            titleEn="Reach the Right Team"
            description="为便于高效对接，请根据咨询事项选择相应联络邮箱。"
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {DEPARTMENT_CONTACTS.map(({ Icon, title, titleEn, description, email }, i) => (
              <Reveal key={title} delay={i * 0.08} className="h-full">
                <article className="group flex h-full flex-col border border-ink/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60">
                  <span className="flex h-12 w-12 items-center justify-center border border-gold/40 text-gold-dark transition-colors duration-300 group-hover:bg-gold/10">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-serif text-xl">{title}</h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gold-dark">
                    {titleEn}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    {description}
                  </p>
                  <a
                    href={`mailto:${email}`}
                    className="mt-6 inline-flex items-center gap-2 pt-2 text-sm font-medium text-pine-800 underline-offset-4 transition-colors duration-300 hover:text-gold-dark hover:underline"
                  >
                    <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    {email}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 地图占位 */}
      <section id="map" className="scroll-mt-24 bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Find Us"
            title="到访商会"
            titleEn="Visit the Chamber"
            align="center"
          />
          <Reveal className="mt-14">
            {/* TODO(上线前)：嵌入 Google Maps iframe 或静态地图，替换以下占位区块 */}
            <div className="flex aspect-[4/3] flex-col items-center justify-center gap-4 border border-ink/15 bg-white px-6 text-center sm:aspect-[16/9] lg:aspect-[21/9]">
              <span className="flex h-12 w-12 items-center justify-center border border-gold/40 text-gold-dark">
                <MapPin className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-medium text-ink">{site.contact.addressZh}</p>
                <p className="mt-1 text-sm text-ink-soft">{site.contact.addressEn}</p>
              </div>
              <p className="text-xs tracking-wide text-ink-soft/70">
                地图加载区域 —— 上线前嵌入 Google Maps
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
