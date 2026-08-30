"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LogoMark } from "@/components/layout/logo-mark";
import { useLanguage } from "@/components/providers/language-provider";
import { dictionary } from "@/lib/dictionary";
import { navItems, site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * 全站固定导航栏。
 * 页面顶部为透明背景（覆盖在深色 Hero 上），下滑后切换为
 * 暖米白 + 轻模糊 + 细边框。
 */
function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

export function Navbar() {
  /* 滚动位置来自浏览器外部状态，用 useSyncExternalStore 订阅 */
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 24,
    () => false,
  );
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { locale, t, toggle } = useLanguage();

  /* 路由变化时关闭移动端菜单（渲染期间调整派生状态的官方推荐写法） */
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  /* 移动端菜单打开时锁定背景滚动 */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        // 注意：菜单展开时不能使用 backdrop-blur——backdrop-filter 会成为
        // fixed 定位子元素（全屏菜单）的包含块，导致菜单高度塌陷。
        open
          ? "border-b border-cream/10 bg-pine-900 text-cream"
          : scrolled
            ? "border-b border-ink/10 bg-ivory/90 text-ink backdrop-blur-md"
            : "border-b border-transparent bg-linear-to-b from-pine-950/70 via-pine-950/25 to-transparent text-cream",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        {/* 品牌区：Logo 占位 + 中英文名称 */}
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          aria-label={`${site.nameZh} ${site.nameEn} — ${t.nav.home}`}
        >
          <LogoMark />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-[15px] font-semibold tracking-[0.06em]">
              {site.nameZh}
            </span>
            <span className="hidden truncate text-[9.5px] uppercase tracking-[0.12em] opacity-70 sm:block">
              {site.nameEn}
            </span>
          </span>
        </Link>

        {/* 桌面端菜单 */}
        {/* 8 个栏目在 lg（1024px）下空间紧张：收紧间距并禁止条目内折行 */}
        <nav aria-label="主导航" className="hidden items-center gap-4 xl:gap-7 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.key}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative whitespace-nowrap py-1 text-[13.5px] tracking-wide transition-colors",
                  active
                    ? solid
                      ? "text-pine-800 font-medium"
                      : "text-cream font-medium"
                    : "opacity-80 hover:opacity-100",
                )}
              >
                {t.nav[item.key]}
                {/* 金色细线：当前栏目 / 悬停展开 */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300",
                    active ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </Link>
            );
          })}
          <button
            type="button"
            onClick={toggle}
            aria-label={t.common.languageSwitch}
            className={cn(
              "cursor-pointer border px-2.5 py-1 text-xs tracking-[0.18em] transition-colors",
              solid
                ? "border-ink/25 hover:border-gold hover:text-gold-dark"
                : "border-cream/40 hover:border-gold-light hover:text-gold-light",
            )}
          >
            {locale === "zh" ? "EN" : "中"}
          </button>
        </nav>

        {/* 移动端汉堡按钮 */}
        <button
          type="button"
          className="-mr-1 flex h-10 w-10 cursor-pointer items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.common.menuClose : t.common.menuOpen}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* 移动端全屏菜单 */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="移动端导航"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 flex flex-col overflow-y-auto bg-pine-900 text-cream lg:hidden"
          >
            <div className="flex-1 px-6 py-10">
              <ul className="space-y-1">
                {navItems.map((item, i) => {
                  const active = isActive(item.href);
                  return (
                    <motion.li
                      key={item.key}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.04, duration: 0.35 }}
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex items-baseline justify-between border-b border-cream/10 py-4",
                          active && "text-gold-light",
                        )}
                      >
                        <span className="font-serif text-2xl">
                          {t.nav[item.key]}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">
                          {/* 另一种语言的栏目名，统一取自 lib/dictionary */}
                          {dictionary[locale === "zh" ? "en" : "zh"].nav[item.key]}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <button
                type="button"
                onClick={toggle}
                aria-label={t.common.languageSwitch}
                className="mt-10 cursor-pointer border border-cream/40 px-4 py-2 text-sm tracking-[0.18em]"
              >
                {locale === "zh" ? "English" : "中文"}
              </button>

              <div className="mt-10 space-y-1 text-sm text-cream/60">
                <p>{site.contact.email}</p>
                <p>{site.contact.phone}</p>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

