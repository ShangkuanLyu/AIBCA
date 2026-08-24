/**
 * 活动数据。
 *
 * 本文件包含两类内容，请勿混淆：
 *
 * 1) 老站迁移的真实活动（status: "past"，带真实图片 /images/news/...）
 *    —— 内容整理自商会老官网 aibca.com.au 公开发布的活动报道，
 *       文字仅作分段、精简与错别字修正，未添加任何原文之外的事实；
 *       图片为老站原图，已下载至 public/images/news/。
 *    —— 含：2024 十周年庆典晚宴、2022 年度鸡尾酒会、
 *       2018 鄂尔多斯友好商会签约、2016 中国包头—澳大利亚经贸合作洽谈会、
 *       2018 年度理事会。
 *
 * 2) 示例活动（example content）
 *    —— 全部 2026 年未来活动，以及「世界蒙商大会代表团」一条，
 *       日期、场地、票价、名额、报名链接与配图（Unsplash 占位图）均为示例，
 *       上线前须逐条替换或核实。
 *
 * 数据结构与 `@/lib/types` 中的 ChamberEvent 保持一致，便于未来接入 CMS。
 */

import type { ChamberEvent } from "@/lib/types";

export const events: ChamberEvent[] = [
  /* ---------------------------------------------------------------- */
  /* 未来活动 —— 以下 4 条均为示例数据（example content）              */
  /* 日期、场地、票价、名额、报名链接与配图均为占位内容，上线前须替换 */
  /* ---------------------------------------------------------------- */
  {
    // 示例活动（example content）
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
    // 示例活动（example content）
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
    // 示例活动（example content）
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
    // 示例活动（example content）
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
    /* 真实活动 —— 内容与图片整理自老站文章 1339（活动回顾）
       及 1225（活动邀请函，仅采用其中的公开活动信息）。 */
    slug: "2024-10th-anniversary-gala",
    title: "商会成立十周年庆典晚宴",
    titleEn: "10th Anniversary Gala Dinner",
    category: "gala",
    status: "past",
    date: "2024-11-28",
    time: "15:30 商务对接酒会 · 18:00 庆典晚宴",
    location: "199 Sunshine Rd, Tottenham, VIC 3012",
    venue: "Happy Reception 荣乐宴会厅",
    coverImage: "/images/news/1339-00.jpg",
    coverAlt: "商会新一届理事会成员在就职典礼舞台上合影",
    summary:
      "近 400 位澳中各界嘉宾出席商会十周年庆典晚宴，同场举行新一届理事会就职仪式。",
    summaryEn:
      "Nearly 400 guests from Australia and China attended the Chamber's 10th anniversary gala, which also saw the inauguration of the new council.",
    body: [
      "2024 年 11 月 28 日，澳大利亚内蒙古商会在墨尔本隆重举行成立 10 周年庆典暨新一届理事会就职仪式。澳中各界嘉宾、会员、乡亲近 400 人身着民族服饰盛装出席晚宴。当日 15:30 先行举行商务对接酒会，18:00 庆典晚宴正式开始；主办方建议来宾以蒙古族服装、中式服装或正装出席。",
      "应邀出席晚宴的嘉宾有：中国驻墨尔本总领馆总领事房新文，中国驻墨尔本总领馆文化领事王亚妮，维多利亚州议员 John Mullahy MP，维多利亚州多元文化专员 Mohomed Mohideen OAM JP，维多利亚州前议长、大洋洲工商业委员会主席 Hon Ken Smith AM，维多利亚州前立法委员会主席 Hon Bruce Atkinson，墨尔本洪门民治党主委伍颂达等。",
      "创会会长孙国照致辞时表示，十载岁月流转，商会自 2014 年在墨尔本成立以来，以“连接中澳，合作共赢”为使命，逐步发展成为促进两国经济、文化、教育深度交流的重要平台。经过十年努力，商会会员企业覆盖教育、地产、金融、矿产、医疗、大健康等多个行业，总数逾百家。房新文总领事致辞表示祝贺，期待各界抓住中国的发展机遇和中澳关系改善的势头，为促进中澳经贸和各领域合作贡献更大力量。",
      "新任会长郝建才在致辞中提出三点：第一，加强商会自身建设；第二，广泛联系国内外的朋友、商家，加强交流；第三，做好全方位的服务工作，让友谊和事业更上一个台阶。大会向新一届理事会成员颁发证书，并表彰对商会发展作出突出贡献的会员。",
      "文艺演出与抽奖、慈善拍卖交错进行。国家二级演员哈斯琪琪格演奏马头琴曲《万马奔腾》，国家二级演员朱茵演唱《火红的萨日朗》；澳洲歌手 Mark Balas 献唱《青花瓷》和《吻别》，民间歌手吴天赐演唱《我的中国心》。",
      "拍卖环节，著名岭南画派画家林伯墀的国画《一啖荔枝三百颗》、旅澳画家姚迪雄的画作《乐佛》等作品均以较高价格成功拍出；林伯墀先生即席挥毫的书法作品“群贤必至”赠予商会惠存。庆典晚宴在欢乐融洽的氛围中圆满落下帷幕。",
    ],
    gallery: [
      {
        src: "/images/news/1339-30.jpg",
        alt: "庆典晚宴宴会厅全景，来宾在圆桌前就座",
        caption: "近 400 位嘉宾出席十周年庆典晚宴",
      },
      {
        src: "/images/news/1339-03.jpg",
        alt: "新任会长郝建才在庆典晚宴舞台上手持话筒致辞",
        caption: "新任会长郝建才致辞",
      },
      {
        src: "/images/news/1339-09.jpg",
        alt: "两位商会负责人在就职典礼背景板前握手交接红色证书",
        caption: "创会会长孙国照向新当选会长郝建才颁发证书",
      },
      {
        src: "/images/news/1339-08.jpg",
        alt: "六位嘉宾在十周年庆典背景墙前合影",
        caption: "嘉宾在庆典背景墙前合影",
      },
      {
        src: "/images/news/1339-12.jpg",
        alt: "身着蒙古族服饰的女演员在舞台上演奏马头琴",
        caption: "文艺演出中的马头琴表演",
      },
      {
        src: "/images/news/1339-16.jpg",
        alt: "身着中式红色礼服的歌手在庆典舞台上献唱",
        caption: "晚宴文艺演出的歌曲表演",
      },
      {
        src: "/images/news/1339-20.jpg",
        alt: "嘉宾与主持人在舞台上共同展示一幅国画作品",
        caption: "慈善拍卖环节展示的国画作品",
      },
      {
        src: "/images/news/1339-24.jpg",
        alt: "书法家在活动现场的长桌上即席挥毫书写",
        caption: "晚宴现场的书法即席创作",
      },
    ],
    price: "每位 100 澳元（含餐饮及活动费用）",
  },
  {
    /* 示例活动（example content）：老站无对应图片素材，
       封面仍为 Unsplash 占位图；正文事实取自老站文章 1339 的相关表述，
       但日期、行程时段等细节为示例，上线前须核实或替换。 */
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
    /* 真实活动 —— 内容与图片整理自老站文章 1231。 */
    slug: "2022-annual-cocktail",
    title: "2022 年度鸡尾酒会",
    titleEn: "2022 Annual Cocktail Reception",
    category: "networking",
    status: "past",
    date: "2022-09-18",
    location: "澳大利亚墨尔本",
    coverImage: "/images/news/1231-00.jpg",
    coverAlt: "2022 年度鸡尾酒会与会嘉宾在商会横幅前集体合影",
    summary:
      "近 60 位中澳企业家及社会活动家出席商会年度鸡尾酒会，共庆中秋佳节。",
    summaryEn:
      "Nearly 60 entrepreneurs and community leaders joined the Chamber's annual cocktail reception to celebrate the Mid-Autumn Festival.",
    body: [
      "9 月 18 日，澳大利亚内蒙古商会 2022 年度鸡尾酒会在墨尔本成功举办。本次活动是自疫情发生 2 年零 9 个月以来商会第二次举办面对面线下活动，近 60 位中澳优秀企业家、社会活动家、业界精英欢聚一堂，共同庆祝 2022 中秋佳节以及这个新朋旧友喜相逢的特别日子。",
      "商会名誉会长郝建才、会长孙国照、商会顾问田丰以及副会长廛洪武分别致辞；维省华联会主席钱恒裕、副主席苗庆，前维省华联会主席苏俊西，维省华联会名誉主席、澳华联合商会会长朱联人，澳大利亚广东总商会会长郭子宁等受邀出席了本次活动。",
      "郝建才表示，过去几年充满了种种困难和挑战，疫情限制了活动、改变了生活方式，但不能隔断彼此间的关爱与友情；商会将与会员和朋友一起，在新的一年里无畏挑战，合作共赢。孙国照表示，商会自成立以来一直坚持定期组织各类商务活动，就是希望不断加强会员之间的互动能力、增强凝聚力；每次活动中会员之间进行工作经验分享与商业信息互通，很好地促进了彼此事业的发展。",
      "活动现场安排了呼麦表演与抽奖环节，并备有地道的西北美食。主要赞助商 Panorama Investment Group 的开发商代表介绍了公司背景及其位于博士山（Box Hill）中心地段的高端公寓项目；ZINZINO 挪威圣希诺平衡油健康品牌公司的高级合伙人则在现场介绍了公司及产品。",
      "商会谨向本次活动的赞助机构致以谢意：Panorama Investment Group、ZINZINO 挪威圣希诺平衡油健康品牌公司、ZANK & CO 基金公司、普亚文化、墨颜手工学院、美宁顿澳大利亚有限公司、Pansy – 植物精油，以及提供餐点的豆豆莜面村、提供礼品的澳大利亚新西兰健康产业集团与美人计澳洲总代理。",
    ],
    gallery: [
      {
        src: "/images/news/1231-02.jpg",
        alt: "一位商会负责人在酒会现场手持话筒致辞",
        caption: "商会负责人在酒会上致辞",
      },
      {
        src: "/images/news/1231-04.jpg",
        alt: "与会来宾在活动场地内就座聆听项目介绍",
        caption: "酒会现场的项目介绍环节",
      },
      {
        src: "/images/news/1231-24.jpg",
        alt: "赞助商代表在投影幕前介绍地产项目",
        caption: "主要赞助商 Panorama Investment Group 代表介绍项目",
      },
      {
        src: "/images/news/1231-43.jpg",
        alt: "身着蒙古族传统服饰的表演者手持话筒在现场演唱",
        caption: "活动现场的呼麦表演",
      },
      {
        src: "/images/news/1231-21.jpg",
        alt: "几位来宾在落地窗旁围坐交谈",
        caption: "来宾在现场交流联谊",
      },
      {
        src: "/images/news/1231-13.jpg",
        alt: "多位来宾手持葡萄酒瓶在活动现场合影",
        caption: "抽奖与礼品环节后的合影",
      },
      {
        src: "/images/news/1231-35.jpg",
        alt: "多位女性来宾在商会横幅前合影",
        caption: "与会来宾在商会横幅前合影",
      },
    ],
  },
  {
    /* 真实活动 —— 内容与图片整理自老站文章 925。 */
    slug: "annual-council-meeting-2018",
    title: "2018 年度理事会",
    titleEn: "2018 Annual Council Meeting",
    category: "networking",
    status: "past",
    date: "2018-12-16",
    location: "澳大利亚 · 墨尔本",
    coverImage: "/images/news/925-00.jpg",
    coverAlt: "参加年度理事会的商会成员在商会横幅前合影",
    summary:
      "商会在墨尔本召开 2018 年度理事会，汇报近期工作成果并讨论次年工作计划。",
    summaryEn:
      "The Chamber held its 2018 annual council meeting in Melbourne, reviewing recent work and discussing plans for the year ahead.",
    body: [
      "当地时间 12 月 16 日，澳大利亚内蒙古商会在墨尔本成功召开 2018 年年度理事会。名誉会长郝建才，顾问田丰，商会会长孙国照，副会长廛洪武、周聪威、孙浩峰、韩思宇、窦飞、李端阳、申洁、潘雪飞，商会秘书何文竹，以及嘉宾王建邦、简贵来、李淑荣参加了会议。",
      "会议主要对商会近期工作成果进行了汇报，并讨论了 2019 年的工作计划。会长孙国照表示，商会成立以来一直在开展工作，当年 10 月底已和名誉会长及顾问一起商讨、策划了次年的活动，并专程将活动计划当面向内蒙古自治区领导作了汇报；商会网站上线后将主要对会员企业进行宣传，同时筹集出版一本名为《蒙商在澳新》的书籍，让更多人了解在澳洲和新西兰奋斗的内蒙古商人以及他们所在的行业和企业。",
      "商会秘书何文竹随后进行工作汇报：秘书处近期完成了商会网站的搭建，网站涵盖商会介绍、精彩活动、活动预告、项目库、风土人情和会员中心等模块；商会微信公众服务号亦在审核中。接下来秘书处将把工作重心放在新会员招募、会员企业与项目信息的撰写编辑，以及《蒙商在澳新》的采写三个方面。副会长兼秘书长孙浩峰介绍了商会的资金使用制度：用款需先由秘书处提出申请，报送相关领导审批，再经会长审批；账户定期公布，对会员公开。",
      "与会理事围绕吸引会员、搭建商家与政府之间的平台、推动资源整合等议题先后发言。远道而来的三位嘉宾——蒙牛创始元老王建邦，三 C 集团创始人简贵来、李淑荣也参加了此次会议，并表示希望与大家携手搭建平台、共同发展。参会成员皆表示对下一步的商会发展充满信心。",
    ],
    gallery: [
      {
        src: "/images/news/925-01.jpg",
        alt: "与会成员在会议现场举杯交流",
        caption: "理事会会后的交流环节",
      },
    ],
  },
  {
    /* 真实活动 —— 内容与图片整理自老站文章 1017。
       注意：老站原文仅写“3 月 31 日”，未标明年份；此处的 2018 年
       为根据文章发布时间推断的年份，上线前须向商会核实。 */
    slug: "ordos-friendship-signing-2018",
    title: "鄂尔多斯市总商会友好商会签约仪式",
    titleEn: "Sister Chamber Signing Ceremony with the Ordos Chamber of Commerce",
    category: "delegation",
    status: "past",
    // TODO: 年份为推断值（老站原文未注明年份），须向商会核实后确认
    date: "2018-03-31",
    location: "中国 · 鄂尔多斯",
    venue: "鄂尔多斯市生态文化博物馆",
    coverImage: "/images/news/1017-06.jpg",
    coverAlt: "双方代表在“友好商会签约仪式”横幅下签署协议",
    summary:
      "鄂尔多斯市总商会与澳大利亚内蒙古商会举行合作交流座谈会暨友好商会签约仪式，双方就两地经贸合作交换意见。",
    summaryEn:
      "The Ordos Chamber of Commerce and the Australian Inner Mongolia Chamber of Commerce held a roundtable and signed a sister-chamber agreement.",
    body: [
      "“相知无远近，万里尚为邻”。3 月 31 日下午，鄂尔多斯市总商会、澳大利亚内蒙古商会合作交流座谈会暨友好商会签约仪式在东胜区鄂尔多斯市生态文化博物馆举行。市委常委、统战部长金武出席会议并讲话，市委统战部副部长、市工商联党组书记李欣良出席会议，市工商联主席、鄂尔多斯市总商会会长刘钢柱主持会议；澳大利亚内蒙古商会会长孙国照，澳大利亚国际（内蒙古）草原文化交流协会会长郝建才，鄂尔多斯市生态文化研究会会长丁崇明出席座谈会。市商务局、市旅游局、空港物流园区及当地 30 多家企业家代表参加座谈会。",
      "会前，与会人员参观了鄂尔多斯市生态文化博览馆的野生动植物标本馆展区、生态馆展区、书画馆展区，观看了鄂尔多斯生态文化专题片，并听取了生态文化博览馆的详细介绍。",
      "金武对孙国照一行的到来表示热烈欢迎，并就当地经济社会发展情况作了简要介绍，同时对两地商会合作交流提出了希望和要求。他希望在外内蒙古企业家支持家乡发展，充分发挥分布广泛、信息灵通的优势，当好内蒙古经济发展的“情报员”、对外招商的“宣传员”、产品和形象的“推销员”，并积极参与扶贫助学等社会公益活动。",
      "刘钢柱表示，鄂尔多斯市历来重视商会的合作发展，市工商联（总商会）主动加强与各城市、各商会间的合作交流，增进共识、互惠互利，努力实现资源共享、市场共兴、发展共赢的良好局面。",
      "孙国照表示，澳大利亚内蒙古商会、澳大利亚国际（内蒙古）草原文化交流协会是由在澳大利亚内蒙古籍工商界人士发起成立的社团组织，是加强在澳蒙两地企业家交流的桥梁和纽带，也是展示内蒙古形象、向外宣传内蒙古品牌的重要平台；澳大利亚同鄂尔多斯在“羊煤土气”等产业方面有着相似性，存在很多可以互补和合作的商机。座谈会后，澳大利亚内蒙古商会、澳大利亚国际（内蒙古）草原文化交流协会、鄂尔多斯市总商会、鄂尔多斯市生态文化研究会举行了缔结友好商会签约仪式。",
    ],
    gallery: [
      {
        src: "/images/news/1017-01.jpg",
        alt: "与会人员参观鄂尔多斯市生态文化博览馆展区",
        caption: "会前参观鄂尔多斯市生态文化博览馆",
      },
      {
        src: "/images/news/1017-02.jpg",
        alt: "与会人员在鄂尔多斯市生态文化博览馆前合影",
        caption: "与会人员在博览馆前合影",
      },
      {
        src: "/images/news/1017-03.jpg",
        alt: "鄂尔多斯市委常委、统战部长金武在座谈会上讲话",
        caption: "市委常委、统战部长金武讲话",
      },
      {
        src: "/images/news/1017-04.jpg",
        alt: "鄂尔多斯市工商联主席、市总商会会长刘钢柱主持会议并讲话",
        caption: "市工商联主席、鄂尔多斯市总商会会长刘钢柱讲话",
      },
      {
        src: "/images/news/1017-05.jpg",
        alt: "澳大利亚内蒙古商会会长孙国照在座谈会上讲话",
        caption: "商会会长孙国照讲话",
      },
      {
        src: "/images/news/1017-07.jpg",
        alt: "签约仪式结束后双方代表合影留念",
        caption: "签约后双方合影",
      },
    ],
  },
  {
    /* 真实活动 —— 内容与图片整理自老站文章 939。 */
    slug: "baotou-trade-seminar-2016",
    title: "2016 中国包头—澳大利亚经贸合作洽谈会",
    titleEn:
      "2016 China Baotou City – Trade & Investment Cooperation Seminar in Australia",
    category: "forum",
    status: "past",
    date: "2016-11-07",
    location: "澳大利亚 · 墨尔本",
    venue: "维多利亚州议会大厦（Parliament House）",
    coverImage: "/images/news/939-00.jpg",
    coverAlt:
      "包头市政府代表团与澳方代表在“2016 中国包头—澳大利亚经贸合作洽谈会”横幅后合影",
    summary:
      "包头市政府代表团访澳出席经贸合作洽谈会，中澳双方在维州议会大厦签署多项合作协议，商会设欢迎晚宴。",
    summaryEn:
      "A Baotou municipal delegation visited Melbourne for a trade and investment seminar at Victoria's Parliament House, where several cooperation agreements were signed.",
    body: [
      "2016 年 11 月 7 日上午，由内蒙古包头市市长杜学军率队，市政府办公厅主任郑国强、市政府外事办主任黄昌帆、市商务局局长杨占明、市旅游局局长张勇东、市投资促进局局长王奋伟等领导组成的包头市政府代表团抵达墨尔本，拉开了《2016 中国包头—澳大利亚经贸合作洽谈会》的序幕。随团出访的还有包头市企业家代表。",
      "此次经贸洽谈会由澳大利亚国际商会承办，澳大利亚内蒙古商会协办，并得到了澳中工商委员会（ACBC）维州分会主席、维州议会前议长肯·史密斯（Ken Smith）先生的大力支持。上午的洽谈会在墨尔本的维州议会大厦（Parliament House）举行，代表团一行在史密斯主席和商会会长孙国照的陪同下，参观了维州众议院（下议院）、参议院（上议院）会议厅以及议会大厦图书馆；身为维州前议长的史密斯先生亲自介绍了众、参两院的构成、法律的制定程序以及维州议会大厦的历史。",
      "参观结束后，包头代表团和澳方代表在宴会厅举行了商务洽谈及签约仪式。洽谈会由澳大利亚国际商会首席官麦克果先生主持，维州下议院副议长 Khalil Eidenh 先生、前议长 Ken Smith 先生、包头市市长杜学军先后发表讲话，维州上议院议长 Bruce Atkinson 先生也到会与客人们亲切交谈。",
      "杜学军市长表示，中国内蒙古和澳大利亚维州合作的互补性非常强：内蒙古作为中国最大的草原牧区拥有丰富的牧场资源，包头在蒙语里是“有鹿的地方”，与以“骑在羊背上的国家”著称的澳大利亚很相似；包头与澳洲在旅游、商贸、农牧业、文化教育等各个领域都有非常大的合作空间。",
      "讲话结束后，中澳双方代表签署了多项合作协议：包头市投资促进局与澳洲资产投资集团签订深化投资合作协议书；澳大利亚及新西兰健康产业集团与包头市旅游局及内蒙古东疆商贸国际集团分别签订合作框架协议；内蒙古小尾羊牧业科技股份有限公司分别与澳大利亚海威德公司签订全面合作协议、与澳大利亚 JOC 国际公司签订牛羊肉产品加工及销售合作协议；内蒙古蒙源肉羊种业集团有限公司与澳大利亚凯斯特拉有限公司签订联合开展肉羊现代繁育技术合作协议；内蒙古日盛世濠餐饮连锁管理有限公司与中和澳亚股份有限公司签订进口牛肉战略合作框架协议。签约仪式后，宾主在维州议会大厦宴会厅共进工作午餐。",
      "当日晚，澳大利亚内蒙古商会会长孙国照在王朝海鲜酒楼贵宾厅设晚宴招待了来自故乡的领导和朋友。孙国照表示，能够在墨尔本接待来自故乡内蒙古的领导和商界代表感到十分荣幸，商会将不遗余力地促进澳洲同内蒙古在商务贸易、旅游教育、文化交流等各个领域的合作。杜学军市长表示，今后会加大和澳方合作力度，也将考虑在澳洲设立常驻机构，欢迎澳洲的朋友们去包头参观、考察、旅游。",
    ],
    gallery: [
      {
        src: "/images/news/939-01.jpg",
        alt: "包头市政府代表团在维州议会大厦合影留念",
        caption: "代表团在维州议会大厦合影留念",
      },
      {
        src: "/images/news/939-05.jpg",
        alt: "内蒙古包头市市长杜学军在洽谈会上讲话",
        caption: "内蒙古包头市市长杜学军先生讲话",
      },
      {
        src: "/images/news/939-07.jpg",
        alt: "维州议会前议长 Ken Smith 在洽谈会上讲话",
        caption: "维州议会前议长 Ken Smith 讲话",
      },
      {
        src: "/images/news/939-09.jpg",
        alt: "维州下议院副议长 Khalil Eidenh 在洽谈会上讲话",
        caption: "维州下议院副议长 Khalil Eidenh 讲话",
      },
      {
        src: "/images/news/939-11.jpg",
        alt: "包头市政府代表团向维州政府赠送纪念品",
        caption: "包头市政府代表团向维州政府赠送纪念品",
      },
      {
        src: "/images/news/939-15.jpg",
        alt: "澳洲资产投资集团与包头市投资促进局签署合作协议",
        caption: "澳洲资产投资集团同包头市投资促进局签署合作协议",
      },
      {
        src: "/images/news/939-13.jpg",
        alt: "澳大利亚及新西兰健康产业集团与内蒙古东疆商贸国际集团签署协议",
        caption:
          "澳大利亚及新西兰健康产业集团 ANZHPL 与内蒙古东疆商贸国际集团签署协议",
      },
      {
        src: "/images/news/939-17.jpg",
        alt: "商会会长孙国照在欢迎晚宴上致辞",
        caption: "澳大利亚内蒙古商会孙国照会长在欢迎晚宴上致词",
      },
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
