"use client";

import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/decor/social-icons";
import { LogoMark } from "@/components/layout/logo-mark";
import { MeanderStrip } from "@/components/decor/meander-strip";
import { HorizonLines } from "@/components/decor/horizon-lines";
import { useLanguage } from "@/components/providers/language-provider";
import { navItems, site } from "@/lib/site";

/** 全站页脚：深墨绿背景 + 金色细纹装饰 */
export function Footer() {
  const { t, locale } = useLanguage();
  const year = new Date().getFullYear();

  const socials = [
    { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedinIcon },
    { label: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
    { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  ];

  return (
    <footer className="relative overflow-hidden bg-pine-900 text-cream/75">
      {/* 顶部金色回纹细条 */}
      <div className="text-gold/45">
        <MeanderStrip />
      </div>
      {/* 底部地平线装饰 */}
      <div className="absolute inset-x-0 bottom-0 text-gold">
        <HorizonLines className="h-32 opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-14 md:px-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* 品牌 */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 text-cream">
              <LogoMark className="border-gold/60" />
              <div className="leading-tight">
                <p className="text-base font-semibold tracking-[0.06em]">
                  {site.nameZh}
                </p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-cream/60">
                  {site.nameEn}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
              {site.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center border border-cream/20 text-cream/70 transition-colors hover:border-gold hover:text-gold-light"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
              {/* 微信公众号：正式上线时可替换为二维码弹层 */}
              <span
                className="flex h-9 items-center gap-2 border border-cream/20 px-3 text-xs text-cream/70"
                title={`微信公众号：${site.contact.wechat}`}
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {locale === "zh" ? "微信公众号" : "WeChat"}
              </span>
            </div>
          </div>

          {/* 快速链接 */}
          <nav aria-label={t.footer.quickLinks} className="lg:col-span-2">
            <h2 className="text-xs uppercase tracking-[0.25em] text-gold-light/80">
              {t.footer.quickLinks}
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navItems
                .filter((i) => i.key !== "home")
                .map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-gold-light"
                    >
                      {t.nav[item.key]}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>

          {/* 服务与政策 */}
          <nav aria-label={t.footer.services} className="lg:col-span-3">
            <h2 className="text-xs uppercase tracking-[0.25em] text-gold-light/80">
              {t.footer.services}
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/membership#apply" className="transition-colors hover:text-gold-light">
                  {t.footer.membershipApply}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-gold-light">
                  {t.footer.contact}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition-colors hover:text-gold-light">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-gold-light">
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </nav>

          {/* 联系方式 */}
          <div className="lg:col-span-3">
            <h2 className="text-xs uppercase tracking-[0.25em] text-gold-light/80">
              {t.footer.contactUs}
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" aria-hidden="true" />
                {/* TODO(上线前)：核实办公地址 */}
                <span>{site.contact.addressEn}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" aria-hidden="true" />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="transition-colors hover:text-gold-light"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" aria-hidden="true" />
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-gold-light"
                >
                  {site.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 底栏：法律信息 + 版权（年份自动生成） */}
        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.nameZh} · {site.nameEn}. {t.footer.rights}.
          </p>
          <p className="tracking-wide">
            ABN: {site.legal.abn} · Incorporated Association No.:{" "}
            {site.legal.incorporationNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}
