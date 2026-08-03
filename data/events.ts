/**
 * 活动示例数据。
 *
 * 注意：本文件内容为示例填充数据，其中往期活动部分基于商会老官网
 * （aibca.com.au）公开发布的内容改写，未来活动均为占位示例。
 * 上线前应逐条替换或核实（日期、场地、票价、名额、报名链接等），
 * 并预留接入 CMS 后由后台统一管理。
 *
 * 图片均为 Unsplash 占位图，接入 CMS 后替换为商会真实活动照片。
 */

import type { ChamberEvent } from "@/lib/types";

export const events: ChamberEvent[] = [
  /* ---------------------------------------------------------------- */
  /* 未来活动                                                          */
  /* ---------------------------------------------------------------- */
  {
    slug: "2026-china-australia-trade-forum",
    title: "2026 中澳经贸合作论坛",
    titleEn: "2026 Australia–China Trade & Investment Forum",
    category: "forum",
    status: "open",
    date: "2026-08-28",
    time: "13:30 – 17:30",
    location: "澳大利亚墨尔本",
    venue: "RACV City Club, 501 Bourke Street, Melbourne",
    coverImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "论坛会场（占位图）",
    summary:
      "商会联合中澳双方合作机构举办年度经贸论坛，围绕贸易往来、项目投资与行业合作等议题进行交流研讨。",
    summaryEn:
      "An annual forum on Australia–China trade, investment and industry cooperation, hosted with partner organisations from both countries.",
    body: [
      "澳大利亚内蒙古商会将于 2026 年 8 月 28 日在墨尔本举办中澳经贸合作论坛。论坛旨在为中澳两地企业搭建务实的交流平台，围绕双边贸易、项目投资与融资、行业合作机会等议题展开研讨。",
      "论坛拟邀请中澳双方经贸主管部门代表、行业协会负责人、企业家及专业服务机构人士出席，并设主旨发言、专题讨论与自由交流环节。内蒙古自治区贸促会驻澳代表处亦将介绍内蒙古地区的重点产业与投资环境。",
      "议程安排（拟定）：13:30 签到；14:00 开幕致辞；14:20 主旨发言；15:30 专题讨论——农牧产品贸易、矿产与能源合作、教育与文化交流；16:45 自由交流；17:30 结束。最终议程以会前通知为准。",
      "论坛面向商会会员及关注中澳经贸合作的各界人士开放。会员免费出席，非会员酌收场地费用。名额有限，请提前报名，商会秘书处将在报名确认后发送参会通知。",
    ],
    capacity: "120 人",
    price: "会员免费 / 非会员 $30",
    // TODO: 上线前替换为报名系统链接
    registrationUrl: "/contact",
  },
  {
    slug: "2026-mid-autumn-networking",
    title: "2026 中秋会员酒会",
    titleEn: "2026 Mid-Autumn Members' Reception",
    category: "networking",
    status: "open",
    date: "2026-09-25",
    time: "18:00 – 21:00",
    location: "澳大利亚墨尔本",
    venue: "The Langham Melbourne, Southbank",
    coverImage:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "酒会现场（占位图）",
    summary:
      "商会中秋传统活动，邀请会员企业及各界友好人士共聚一堂，增进联谊、交流信息。",
    summaryEn:
      "The Chamber's traditional Mid-Autumn reception, bringing members and friends together for an evening of networking.",
    body: [
      "值中秋佳节来临之际，澳大利亚内蒙古商会将于 2026 年 9 月 25 日晚在墨尔本举办中秋会员酒会。酒会是商会的年度传统活动，旨在为会员企业及各界友好人士提供轻松的联谊与交流场合。",
      "酒会将设自助餐点与酒水，并安排简短的商会工作通报及新会员介绍环节。会员可借此机会结识同业伙伴、交流经营信息，商会亦欢迎有意了解商会工作的各界人士到场。",
      "参与方式：请通过商会秘书处报名并完成缴费确认，报名截止日期为 2026 年 9 月 18 日。名额有限，先到先得；着装要求为商务便装（Smart Casual）。",
    ],
    capacity: "80 人",
    price: "会员 $65 / 非会员 $85",
    // TODO: 上线前替换为报名系统链接
    registrationUrl: "/contact",
  },
  {
    slug: "2026-inner-mongolia-delegation",
    title: "内蒙古投资考察代表团",
    titleEn: "Investment Delegation to Inner Mongolia",
    category: "delegation",
    status: "upcoming",
    date: "2026-10-19",
    endDate: "2026-10-26",
    location: "中国·呼和浩特 / 包头 / 鄂尔多斯",
    coverImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "草原地平线（占位图）",
    summary:
      "商会拟组织会员企业赴内蒙古开展为期一周的投资考察，走访重点园区与龙头企业，对接当地经贸合作资源。",
    summaryEn:
      "A one-week delegation to Inner Mongolia visiting key industrial parks and leading enterprises to explore trade and investment opportunities.",
    body: [
      "澳大利亚内蒙古商会拟于 2026 年 10 月组织会员企业赴内蒙古自治区开展投资考察，行程涵盖呼和浩特、包头、鄂尔多斯等地，为期约一周。",
      "考察内容包括：走访当地重点产业园区与龙头企业，与各地贸促会及相关部门座谈，围绕农牧产品加工、矿产与能源、教育与文旅等领域对接合作资源。呼和浩特市、包头市、鄂尔多斯市贸促会代表处均设于本商会，将协助安排相关对接活动。",
      "本次考察面向商会会员企业开放，名额有限。具体行程、费用及报名办法将由秘书处另行通知，有意参加的会员可先行与秘书处联系登记意向。",
      "商会自成立以来持续组织会员参与内蒙古与澳大利亚之间的双向考察与经贸活动，包括 2023 年组织 15 名会员参加在呼和浩特举办的世界蒙商大会。欢迎会员企业把握机会，实地了解家乡产业发展。",
    ],
    capacity: "20 家会员企业",
    price: "费用及报名办法另行通知",
  },
  {
    slug: "2026-annual-gala",
    title: "2026 年度晚宴",
    titleEn: "2026 Annual Gala Dinner",
    category: "gala",
    status: "full",
    date: "2026-11-28",
    time: "18:30 – 22:00",
    location: "澳大利亚墨尔本",
    venue: "Sofitel Melbourne on Collins, 25 Collins Street",
    coverImage:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "晚宴宴会厅（占位图）",
    summary:
      "商会年度重要活动，回顾全年工作、致谢会员与合作机构，并邀请中澳各界嘉宾共叙情谊。",
    summaryEn:
      "The Chamber's flagship annual dinner, reviewing the year's work and thanking members, partners and guests from both countries.",
    body: [
      "澳大利亚内蒙古商会 2026 年度晚宴将于 11 月 28 日晚在墨尔本 Sofitel Melbourne on Collins 举行。年度晚宴是商会全年最重要的活动之一，届时将邀请中澳各界嘉宾、会员企业代表及友好社团出席。",
      "晚宴将回顾商会本年度各项工作，向长期支持商会发展的会员与合作机构致谢，并安排具有民族特色的文艺演出及慈善抽奖环节。",
      "议程安排（拟定）：18:30 迎宾酒会；19:00 开幕致辞及嘉宾讲话；19:40 晚宴及文艺演出；21:00 慈善抽奖；22:00 活动结束。",
      "本届晚宴报名名额现已满额。如需候补登记或了解赞助合作事宜，请与商会秘书处联系（info@aibca.com.au）。",
    ],
    capacity: "300 人（名额已满）",
    price: "会员 $95 / 非会员 $130",
  },

  /* ---------------------------------------------------------------- */
  /* 往期活动                                                          */
  /* ---------------------------------------------------------------- */
  {
    slug: "2024-10th-anniversary-gala",
    title: "商会成立十周年庆典晚宴",
    titleEn: "10th Anniversary Gala Dinner",
    category: "gala",
    status: "past",
    date: "2024-11-28",
    time: "18:00 – 22:30",
    location: "澳大利亚墨尔本",
    coverImage:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "庆典晚宴现场（占位图）",
    summary:
      "近 400 位澳中各界嘉宾出席商会十周年庆典晚宴，同场举行新一届理事会就职仪式。",
    summaryEn:
      "Nearly 400 guests from Australia and China attended the Chamber's 10th anniversary gala, which also saw the inauguration of the new council.",
    body: [
      "2024 年 11 月 28 日晚，澳大利亚内蒙古商会成立十周年庆典晚宴在墨尔本举行，近 400 位澳中各界嘉宾、会员企业代表及乡亲出席，同场举行了新一届理事会就职仪式。",
      "中国驻墨尔本总领馆总领事房新文、文化领事王亚妮，维多利亚州议员 John Mullahy MP，维州多元文化专员 Mohomed Mohideen OAM JP，维州前议长、大洋洲工商业委员会主席 Hon Ken Smith AM 及 Hon Bruce Atkinson 等嘉宾出席晚宴并致辞。",
      "创会会长孙国照在致辞中回顾了商会十年来的发展历程；新任会长郝建才表示，新一届理事会将继续加强商会自身建设，广泛联系中澳各界，切实做好会员服务。大会向新一届理事会成员颁发了证书。",
      "晚宴现场，国家二级演员哈斯琪琪格演奏马头琴名曲《万马奔腾》，并有歌曲演出、慈善拍卖与抽奖等环节，气氛热烈而隆重。",
      "十年来，商会始终秉持“连接中澳、合作共赢”的宗旨，服务会员企业，促进中澳经贸与人文交流。商会谨向长期支持商会发展的各界友好人士致以诚挚感谢。",
    ],
  },
  {
    slug: "2023-world-mongolian-business-delegation",
    title: "世界蒙商大会代表团",
    titleEn: "Delegation to the World Mongolian Business Conference",
    category: "delegation",
    status: "past",
    date: "2023-06-18",
    endDate: "2023-06-22",
    location: "中国·呼和浩特",
    coverImage:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "内蒙古草原风光（占位图）",
    summary:
      "商会组织 15 名会员赴呼和浩特参加世界蒙商大会，创会会长孙国照获授“澳大利亚招商大使”称号。",
    summaryEn:
      "The Chamber led 15 members to the World Mongolian Business Conference in Hohhot, where founding president Sun Guozhao was named Investment Ambassador for Australia.",
    body: [
      "2023 年，澳大利亚内蒙古商会组织 15 名会员组成代表团，赴内蒙古呼和浩特参加世界蒙商大会，与来自世界各地的蒙商代表及内蒙古自治区有关方面进行了广泛交流。",
      "大会期间，代表团出席了主论坛及多场专题对接活动，围绕经贸合作、项目投资、文化交流等议题与各方深入交换意见，并实地了解了内蒙古地区的产业发展情况。",
      "会上，商会创会会长孙国照被内蒙古自治区人民政府授予“澳大利亚招商大使”称号，这是对商会多年来推动内蒙古与澳大利亚经贸往来工作的肯定。",
      "此次参会进一步密切了商会与内蒙古自治区各级贸促机构的联系，为会员企业后续开展对接合作奠定了基础。",
    ],
  },
  {
    slug: "2022-annual-cocktail",
    title: "2022 年度鸡尾酒会",
    titleEn: "2022 Annual Cocktail Reception",
    category: "networking",
    status: "past",
    date: "2022-09-18",
    time: "17:30 – 20:30",
    location: "澳大利亚墨尔本",
    coverImage:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "酒会活动现场（占位图）",
    summary:
      "近 60 位中澳企业家及社会活动家出席商会年度鸡尾酒会，共庆中秋佳节。",
    summaryEn:
      "Nearly 60 entrepreneurs and community leaders joined the Chamber's annual cocktail reception to celebrate the Mid-Autumn Festival.",
    body: [
      "2022 年 9 月 18 日，澳大利亚内蒙古商会年度鸡尾酒会在墨尔本举行，近 60 位中澳企业家、社会活动家出席，共庆中秋佳节。这是疫情之后商会举办的第二次线下活动。",
      "名誉会长郝建才、会长孙国照、顾问田丰、副会长廛洪武先后致辞，感谢各界对商会工作的支持，并表达了对疫情后恢复中澳经贸与人文交流的期待。维省华联会主席钱恒裕、澳华联合商会会长朱联人、澳大利亚广东总商会会长郭子宁等嘉宾出席活动。",
      "酒会现场安排了呼麦表演与抽奖环节，来宾在轻松的氛围中交流联谊。商会谨向 Panorama Investment Group、ZINZINO、ZANK & CO 基金、普亚文化、豆豆莜面村、美宁顿澳大利亚有限公司等赞助机构致以感谢。",
    ],
  },
];

/** 按 slug 查找活动 */
export function getEventBySlug(slug: string): ChamberEvent | undefined {
  return events.find((event) => event.slug === slug);
}

/** 未过期活动（status !== "past"），按日期升序 */
export function getUpcomingEvents(): ChamberEvent[] {
  return events
    .filter((event) => event.status !== "past")
    .sort((a, b) => a.date.localeCompare(b.date));
}

/** 往期活动（status === "past"），按日期降序 */
export function getPastEvents(): ChamberEvent[] {
  return events
    .filter((event) => event.status === "past")
    .sort((a, b) => b.date.localeCompare(a.date));
}
