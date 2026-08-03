import type {
  EventCategory,
  EventStatus,
  NewsCategory,
  PartnerCategory,
} from "@/lib/types";

/** 新闻分类标签（中 / 英） */
export const NEWS_CATEGORIES: Record<NewsCategory, { zh: string; en: string }> =
  {
    chamber: { zh: "商会动态", en: "Chamber News" },
    policy: { zh: "政策资讯", en: "Policy" },
    business: { zh: "商务资讯", en: "Business" },
    exchange: { zh: "中澳交流", en: "Australia–China" },
    member: { zh: "会员新闻", en: "Members" },
    "event-recap": { zh: "活动回顾", en: "Event Recap" },
  };

/** 活动状态标签 */
export const EVENT_STATUS: Record<EventStatus, { zh: string; en: string }> = {
  upcoming: { zh: "即将举行", en: "Upcoming" },
  open: { zh: "开放报名", en: "Registration Open" },
  full: { zh: "名额已满", en: "Fully Booked" },
  past: { zh: "活动回顾", en: "Past Event" },
};

/** 活动类型标签 */
export const EVENT_CATEGORIES: Record<EventCategory, { zh: string; en: string }> =
  {
    forum: { zh: "商务论坛", en: "Business Forum" },
    networking: { zh: "商务社交", en: "Networking" },
    gala: { zh: "庆典晚宴", en: "Gala Dinner" },
    delegation: { zh: "代表团考察", en: "Delegation" },
    culture: { zh: "文化交流", en: "Cultural Exchange" },
  };

/** 合作机构分类标签 */
export const PARTNER_CATEGORIES: Record<
  PartnerCategory,
  { zh: string; en: string }
> = {
  strategic: { zh: "战略合作机构", en: "Strategic Partners" },
  government: { zh: "政府及社区合作单位", en: "Government & Community" },
  member: { zh: "商会会员企业", en: "Member Enterprises" },
  sponsor: { zh: "赞助机构", en: "Sponsors" },
};
