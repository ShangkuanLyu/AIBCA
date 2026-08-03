"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface StatCounterProps {
  value: number;
  /** 数字后缀，默认 "+" */
  suffix?: string;
  label: string;
  labelEn?: string;
}

/** 进入视口后轻微递增的数据展示（深色背景使用） */
export function StatCounter({
  value,
  suffix = "+",
  label,
  labelEn,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    /* 减少动态效果时直接在渲染中显示最终值，无需动画 */
    if (!inView || reduce) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-serif text-5xl text-cream md:text-6xl">
        {reduce ? value : display}
        <span className="ml-1 text-3xl text-gold-light md:text-4xl">
          {suffix}
        </span>
      </p>
      <p className="mt-3 text-sm tracking-wide text-cream/75">{label}</p>
      {labelEn && (
        <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-cream/60">
          {labelEn}
        </p>
      )}
    </div>
  );
}
