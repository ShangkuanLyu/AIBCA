import Image from "next/image";
import { MeanderStrip } from "@/components/decor/meander-strip";
import { Reveal } from "@/components/ui/reveal";

/** 首页 · 商会愿景（宽幅草原地平线 + 品牌宣言） */
export function Vision() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      {/* 背景：草原地平线（占位图，上线前可替换为内蒙古实景摄影） */}
      <Image
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80"
        alt=""
        role="presentation"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-pine-950/90 via-pine-900/80 to-pine-950/90"
      />

      <Reveal className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold-light">
          Our Vision
        </p>
        <p className="mt-7 font-serif text-3xl leading-relaxed text-cream text-balance md:text-4xl">
          立足澳大利亚，连接内蒙古，
          <br className="hidden md:block" />
          服务会员，共创未来。
        </p>
        <p className="mt-6 font-serif text-lg italic text-cream/60 md:text-xl">
          Based in Australia. Connected with Inner Mongolia. Creating lasting
          value together.
        </p>
        <div className="mx-auto mt-10 w-40 text-gold/60">
          <MeanderStrip />
        </div>
      </Reveal>
    </section>
  );
}
