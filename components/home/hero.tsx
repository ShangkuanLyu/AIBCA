"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";
import { HorizonLines } from "@/components/decor/horizon-lines";
import { site } from "@/lib/site";

/**
 * 首屏 Hero：全宽城市天际线背景 + 深色遮罩 + 克制的文字淡入。
 * TODO(上线前)：将背景占位图替换为商会自有的高质量活动 / 城市摄影图。
 */
export function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduce ? undefined : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  });

  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-pine-900 text-cream">
      {/* 背景图：轻微缩放进入 */}
      <motion.div
        className="absolute inset-0"
        initial={reduce ? undefined : { scale: 1.07 }}
        animate={{ scale: 1 }}
        transition={{ duration: 9, ease: "easeOut" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2400&q=80"
          alt="暮色中的城市天际线与海平线"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* 深色半透明遮罩：保证文字可读性 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-pine-950/90 via-pine-950/65 to-pine-950/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-pine-950/80 to-transparent"
      />

      {/* 抽象草原地平线 */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-6 text-gold">
        <HorizonLines className="h-24 opacity-50" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-36 md:px-8 md:pt-40">
        <div className="max-w-3xl">
          <motion.p
            {...fadeUp(0.1)}
            className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-gold-light"
          >
            <span aria-hidden="true" className="h-px w-10 bg-gold/80" />
            Est. 2014 · Melbourne, Australia
          </motion.p>

          <motion.h1
            {...fadeUp(0.25)}
            className="mt-6 font-serif text-4xl leading-[1.18] text-balance md:text-5xl lg:text-[3.3rem]"
          >
            连接澳大利亚与内蒙古的
            <br />
            商业、文化与机遇
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            className="mt-5 max-w-2xl font-serif text-lg italic leading-relaxed text-cream/65 md:text-xl"
          >
            {site.taglineEn}
          </motion.p>

          <motion.p
            {...fadeUp(0.5)}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-cream/80"
          >
            致力于促进澳大利亚与内蒙古之间的经贸合作、企业交流、文化传播与会员发展。
          </motion.p>

          <motion.div {...fadeUp(0.65)} className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/about" variant="dark">
              了解商会
            </ButtonLink>
            <ButtonLink href="/news" variant="dark">
              最新资讯
            </ButtonLink>
            <ButtonLink href="/membership" variant="gold" withArrow>
              加入商会
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
