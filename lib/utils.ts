import type { Locale } from "@/lib/types";

/** 合并 className，过滤空值 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const MONTHS_EN = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** 将 ISO 日期格式化为 "2024年12月19日" 或 "19 December 2024" */
export function formatDate(iso: string, locale: Locale = "zh") {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return locale === "zh"
    ? `${y}年${m}月${d}日`
    : `${d} ${MONTHS_EN[m - 1]} ${y}`;
}
