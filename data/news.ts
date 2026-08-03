/**
 * 新闻示例数据。
 *
 * 说明：
 * - 本文件为示例数据（example content），部分内容基于澳大利亚内蒙古商会
 *   老官网（aibca.com.au）公开发布的新闻与活动信息改写；
 * - 人名、职务、机构、日期等信息在正式上线前须逐一核实或替换；
 * - 封面图均为占位图（Unsplash），附件链接为占位符（"#"），
 *   接入 CMS 后应由后台内容与真实文件 URL 统一替换；
 * - 数据结构与 `@/lib/types` 中的 NewsArticle 保持一致，
 *   便于未来平滑迁移至 CMS。
 */

import type { NewsArticle } from "@/lib/types";

/** 全部新闻，按日期降序排列（最新在前） */
export const newsArticles: NewsArticle[] = [
  {
    slug: "inner-mongolia-australia-trade-policy-review-h1-2026",
    category: "policy",
    title: "内蒙古—澳大利亚经贸合作政策动态综述（2026 年上半年）",
    titleEn:
      "Inner Mongolia–Australia Trade Policy Review (First Half of 2026)",
    excerpt:
      "商会秘书处梳理 2026 年上半年内蒙古与澳大利亚经贸领域的主要政策动态，供会员单位参考。",
    excerptEn:
      "A secretariat round-up of key trade and investment policy developments between Inner Mongolia and Australia in the first half of 2026.",
    date: "2026-06-18",
    author: "商会秘书处",
    source: "据公开信息整理",
    coverImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "办公桌上的文件与签字笔",
    pinned: true,
    body: [
      "为帮助会员单位及时了解中澳两地经贸政策环境的变化，商会秘书处根据公开渠道信息，对 2026 年上半年内蒙古自治区与澳大利亚经贸合作相关的主要政策动态进行了梳理。本综述仅供会员参考，具体政策以官方发布为准。",
      "内蒙古方面，自治区继续推进对外开放平台建设，围绕口岸经济、绿色能源、农畜产品精深加工等重点领域出台了一系列支持措施，鼓励区内龙头企业开展海外投资考察与国际产能合作。自治区贸促会及国际商会系统亦持续完善海外代表处网络，为企业“走出去”提供商事法律、展览联络等配套服务。",
      "澳大利亚方面，中澳双边经贸往来总体保持平稳。农牧产品、矿产资源、教育与旅游服务贸易仍是双边合作的重点板块。会员单位在开展跨境业务时，应关注关税安排、检验检疫、外商投资审查等方面的最新要求，并在交易前完成必要的尽职调查。",
      "商会提示：涉及跨境投资、并购及大宗贸易的会员企业，建议在专业机构支持下审慎评估合规风险。内蒙古自治区贸促会及国际商会澳大利亚代表处设于本商会，可为会员提供政策咨询的对接渠道。",
      "如需了解详细政策文本或寻求业务对接，请与商会秘书处联系（info@aibca.com.au）。秘书处将视情况组织专题说明会，邀请专业人士为会员解读相关政策。",
    ],
    attachments: [
      {
        label: "2026 年上半年政策要点摘编（PDF）",
        // TODO: 上线前替换为真实文件地址
        href: "#",
      },
    ],
    relatedSlugs: [
      "australia-market-brief-q1-2026",
      "inner-mongolia-ccpit-delegation-melbourne-2025",
    ],
  },
  {
    slug: "member-enterprise-updates-h1-2026",
    category: "member",
    title: "会员企业动态（2026 年上半年）",
    titleEn: "Member Enterprise Updates (First Half of 2026)",
    excerpt:
      "多家会员企业在教育、地产、大健康等领域取得新进展，商会同期迎来数家新入会企业。",
    excerptEn:
      "Member enterprises report new progress across education, property and health sectors, as the Chamber welcomes several new members.",
    date: "2026-05-22",
    author: "商会秘书处",
    coverImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "现代办公空间内景",
    body: [
      "2026 年上半年，商会会员企业在各自领域稳步经营，多家单位向秘书处通报了新的业务进展。现将部分动态汇总如下，供会员单位相互了解、寻求合作参考。",
      "教育板块，数家会员机构与内蒙古高校及职业院校就学生交流、师资培训等事宜开展了初步接洽；地产与建筑板块，会员企业在墨尔本及周边地区的多个项目按计划推进；大健康板块，有会员企业正探索将澳大利亚健康产品经合规渠道引入国内市场。",
      "上半年商会亦迎来数家新入会企业，业务涵盖跨境物流、财务咨询与农产品贸易等领域。秘书处已按章程完成入会审核，并将在近期活动中向全体会员介绍新会员单位。",
      "商会欢迎各会员单位随时向秘书处提交企业动态与合作需求。经会员同意后，秘书处将通过官网及会员通讯予以发布，促进会员之间的信息互通与业务协作。",
    ],
    relatedSlugs: [
      "mou-australia-china-united-chamber-2026",
      "australia-market-brief-q1-2026",
    ],
  },
  {
    slug: "australia-market-brief-q1-2026",
    category: "business",
    title: "澳大利亚市场资讯简报（2026 年第一季度）",
    titleEn: "Australian Market Brief (Q1 2026)",
    excerpt:
      "秘书处汇总本季度澳大利亚农牧、矿产及服务贸易领域的市场信息，供会员经营决策参考。",
    excerptEn:
      "A quarterly digest of Australian market information covering agriculture, resources and services trade, for members' reference.",
    date: "2026-04-10",
    author: "商会秘书处",
    source: "据公开信息整理",
    coverImage:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "港口集装箱码头作业场景",
    body: [
      "本简报由商会秘书处根据公开渠道信息整理，概要介绍 2026 年第一季度澳大利亚与会员业务相关的市场情况。内容仅供参考，不构成任何投资建议；会员单位应结合自身情况并咨询专业机构后作出经营决策。",
      "农牧产品方面，澳大利亚牛羊肉、乳制品及饲草料对亚洲市场的出口保持稳定，与内蒙古在畜牧种业、草业技术等方面的互补性持续受到业界关注。有意开展相关贸易的会员，可关注两地在检验检疫与冷链物流方面的具体要求。",
      "矿产资源方面，澳大利亚主要矿区生产经营总体平稳，能源转型带动关键矿产领域的投资讨论增多。涉及资源类项目的会员企业，应充分评估项目周期、基础设施配套及审批合规等因素。",
      "服务贸易方面，教育与旅游仍是中澳人员往来最密切的领域。留学咨询、游学接待及文化交流类会员机构反映业务咨询量稳中有升。此外，会员在跨境结算中应留意汇率波动，合理安排收付款节奏。",
      "秘书处将按季度发布市场资讯简报。会员单位如有希望了解的行业专题，欢迎向秘书处提出，我们将在后续简报或专题活动中予以回应。",
    ],
    relatedSlugs: [
      "inner-mongolia-australia-trade-policy-review-h1-2026",
      "member-enterprise-updates-h1-2026",
    ],
  },
  {
    slug: "mou-australia-china-united-chamber-2026",
    category: "chamber",
    title: "澳大利亚内蒙古商会与澳华联合商会签署合作备忘录",
    titleEn:
      "AIMCC Signs Memorandum of Understanding with the Australia China United Chamber",
    excerpt:
      "双方将在信息共享、活动联办与会员互访等方面开展合作，共同服务在澳华人企业。",
    excerptEn:
      "The two chambers will cooperate on information sharing, joint events and member exchanges to better serve Chinese-Australian businesses.",
    date: "2026-03-06",
    author: "商会秘书处",
    coverImage:
      "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "签约仪式上的握手场景",
    coverCaption: "签约仪式现场（示例配图，上线前替换为活动照片）",
    body: [
      "2026 年 3 月 6 日，澳大利亚内蒙古商会与澳华联合商会在墨尔本签署合作备忘录。商会会长郝建才与澳华联合商会会长朱联人分别代表双方签署文件，两会部分理事会成员出席见证。",
      "根据备忘录，双方将建立常态化沟通机制，在商务信息共享、活动联合举办、会员企业互访等方面开展合作，并就会员共同关心的经贸议题保持交流，为在澳华人企业提供更完善的服务。",
      "郝建才会长在签约仪式上表示，两会长期保持友好往来，此次签署备忘录是双方合作的自然延续；希望以此为契机，推动两会会员在更多领域实现优势互补。朱联人会长表示，期待与澳大利亚内蒙古商会在服务会员、促进中澳经贸交流方面加强协作。",
      "签约仪式后，双方就 2026 年度拟联合举办的活动交换了初步意见。有关活动安排，商会将另行通知会员。",
    ],
    attachments: [
      {
        label: "合作备忘录要点说明（PDF）",
        // TODO: 上线前替换为真实文件地址
        href: "#",
      },
    ],
    relatedSlugs: [
      "second-council-inauguration-announcement",
      "member-enterprise-updates-h1-2026",
    ],
  },
  {
    slug: "inner-mongolia-ccpit-delegation-melbourne-2025",
    category: "exchange",
    title: "内蒙古自治区贸促会代表团到访墨尔本 商会组织专题座谈",
    titleEn:
      "Inner Mongolia CCPIT Delegation Visits Melbourne for Roundtable with the Chamber",
    excerpt:
      "商会接待内蒙古自治区贸促会代表团，双方围绕农畜产品、绿色能源与教育合作深入交流。",
    excerptEn:
      "The Chamber hosted an Inner Mongolia CCPIT delegation for discussions on agriculture, green energy and education cooperation.",
    date: "2025-09-12",
    author: "商会秘书处",
    coverImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "商务座谈会议现场",
    body: [
      "2025 年 9 月，内蒙古自治区贸促会代表团到访墨尔本。作为内蒙古自治区贸促会及国际商会澳大利亚代表处的所在机构，商会组织会员企业与代表团举行专题座谈，就深化两地经贸合作交换意见。",
      "座谈会上，代表团介绍了内蒙古近年经济社会发展情况以及在农畜产品加工、绿色能源、向北开放桥头堡建设等方面的合作需求；商会会长郝建才代表商会介绍了商会发展历程、会员构成及在澳开展的主要工作。",
      "与会会员企业结合自身业务，就农畜产品贸易、教育培训合作、投资考察对接等具体事项与代表团进行了交流。双方一致认为，内蒙古与澳大利亚在资源禀赋与产业结构上具有互补性，务实合作空间广阔。",
      "座谈会后，商会陪同代表团走访了部分会员企业。商会将继续发挥桥梁作用，跟进座谈中提出的合作意向，并适时组织会员赴内蒙古考察交流。",
    ],
    relatedSlugs: [
      "world-mongolian-entrepreneurs-conference-2023",
      "inner-mongolia-australia-trade-policy-review-h1-2026",
    ],
  },
  {
    slug: "10th-anniversary-gala-recap",
    category: "event-recap",
    title: "鸿图十载澳中连——澳大利亚内蒙古商会圆满举办十周年庆典晚宴",
    titleEn:
      "A Decade of Connection: AIMCC Celebrates Its 10th Anniversary Gala Dinner",
    excerpt:
      "近四百位澳中各界嘉宾齐聚墨尔本，共同见证商会成立十周年庆典暨新一届理事会就职仪式。",
    excerptEn:
      "Nearly 400 guests gathered in Melbourne to mark the Chamber's 10th anniversary and the inauguration of its new council.",
    date: "2024-12-19",
    author: "商会秘书处",
    coverImage:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "庆典晚宴宴会厅现场",
    coverCaption: "十周年庆典晚宴现场（示例配图，上线前替换为活动照片）",
    featured: true,
    body: [
      "2024 年 11 月 28 日晚，澳大利亚内蒙古商会十周年庆典晚宴在墨尔本隆重举行。近四百位澳中政商各界嘉宾、商会会员及旅澳乡亲欢聚一堂，共同回顾商会十年发展历程，并见证新一届理事会就职仪式。",
      "中国驻墨尔本总领馆总领事房新文、文化领事王亚妮，维多利亚州议员 John Mullahy MP，维州多元文化专员 Mohomed Mohideen OAM JP，维州前议长、大洋洲工商业委员会主席 Hon Ken Smith AM，以及 Hon Bruce Atkinson 等嘉宾出席晚宴并致以祝贺。",
      "创会会长孙国照在致辞中回顾了商会自 2014 年成立以来走过的十年历程。他表示，商会从最初的数家发起企业发展到覆盖教育、地产、金融、矿产、医疗、大健康等行业的百余家会员企业，离不开各级政府机构、友好社团和全体会员的支持；商会将继续秉持“连接中澳、合作共赢”的宗旨，为会员发展和两地交流贡献力量。",
      "晚宴同场举行了新一届理事会就职仪式，大会向新一届理事会成员颁发了聘任证书。新任会长郝建才在就职致辞中表示，新一届理事会将着力加强商会自身建设，广泛联系澳中各界与友好机构，切实做好会员服务，推动商会各项工作再上台阶。",
      "文艺演出环节，国家二级演员哈斯琪琪格带来的马头琴演奏《万马奔腾》将现场气氛推向高潮，悠扬的琴声让来宾感受到浓郁的草原文化气息；多位演员献上的歌曲节目亦赢得阵阵掌声。",
      "晚宴还举行了慈善拍卖与幸运抽奖环节。拍卖所得将按商会既定安排用于公益事项，来宾踊跃参与，现场气氛热烈而有序。",
      "商会谨向莅临晚宴的各位嘉宾、给予活动支持的赞助机构与志愿者致以诚挚谢意。站在新的十年起点上，商会将继续团结广大会员，深耕中澳经贸与人文交流，与各界朋友携手同行。",
    ],
    relatedSlugs: [
      "second-council-inauguration-announcement",
      "2022-mid-autumn-cocktail-recap",
      "world-mongolian-entrepreneurs-conference-2023",
    ],
  },
  {
    slug: "second-council-inauguration-announcement",
    category: "chamber",
    title: "关于澳大利亚内蒙古商会第二届理事会就职的公告",
    titleEn: "Announcement on the Inauguration of the Chamber's Second Council",
    excerpt:
      "商会完成换届工作，第二届理事会名单公布，郝建才出任会长，孙国照任执行会长。",
    excerptEn:
      "The Chamber announces its second council, with Hao Jiancai elected President and founding President Sun Guozhao as Executive President.",
    date: "2024-12-05",
    author: "商会秘书处",
    coverImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "会议厅内的正式会议场景",
    body: [
      "根据商会章程及换届工作安排，澳大利亚内蒙古商会已完成第二届理事会选举工作。新一届理事会于 2024 年 11 月 28 日商会十周年庆典晚宴上正式就职，现将有关情况公告如下。",
      "第二届理事会主要成员为：名誉会长田丰；会长郝建才；执行会长孙国照（创会会长）、William；常务副会长廛洪武、窦飞、任烨、白玫瑰；副会长孙浩峰、Helen Huang、李秀梅、关明星、潘雪飞、何涛、范丹丹、申洁、李端阳；常务理事黄慧、郭鑫、Rose Chen；副秘书长卓娜。",
      "新一届理事会将依照章程履行职责，重点做好会员服务、活动组织与对外联络等工作，进一步健全商会内部治理，团结带领全体会员推动商会持续健康发展。",
      "商会谨向以创会会长孙国照为代表的第一届理事会全体成员在过去十年中的辛勤付出致以诚挚感谢，并欢迎广大会员对新一届理事会的工作提出意见和建议。有关事宜请联系商会秘书处（info@aibca.com.au）。",
    ],
    relatedSlugs: ["10th-anniversary-gala-recap"],
  },
  {
    slug: "world-mongolian-entrepreneurs-conference-2023",
    category: "exchange",
    title: "商会组织会员代表团出席世界蒙商大会 孙国照会长获聘“澳大利亚招商大使”",
    titleEn:
      "Chamber Delegation Attends the World Mongolian Entrepreneurs Conference in Hohhot",
    excerpt:
      "商会组织十五名会员赴呼和浩特参加世界蒙商大会，创会会长孙国照获授“澳大利亚招商大使”称号。",
    excerptEn:
      "A 15-member Chamber delegation attended the conference in Hohhot, where founding President Sun Guozhao was named Australia Investment Promotion Ambassador.",
    date: "2023-10-20",
    author: "商会秘书处",
    coverImage:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "辽阔的草原地平线景观",
    body: [
      "2023 年，商会组织十五名会员组成代表团，赴内蒙古呼和浩特参加世界蒙商大会。大会汇聚了来自世界各地的蒙商代表，围绕家乡发展与全球蒙商合作展开交流。",
      "会议期间，内蒙古自治区人民政府向商会创会会长孙国照授予“澳大利亚招商大使”称号，以肯定其多年来在推动内蒙古与澳大利亚经贸交流方面所做的工作。这既是对孙国照会长个人的肯定，也是对商会全体会员长期努力的认可。",
      "代表团成员在会议前后走访了呼和浩特等地的相关园区和企业，就农畜产品加工、乳业、新能源等领域的合作机会进行了实地了解，并与区内有关部门和企业建立了联系。",
      "商会表示，将以此次大会为契机，继续发挥桥梁纽带作用，推动更多蒙商企业“走出去”、更多澳大利亚优质项目“走进来”，为内蒙古与澳大利亚之间的经贸往来与人文交流创造更多机会。",
    ],
    relatedSlugs: [
      "inner-mongolia-ccpit-delegation-melbourne-2025",
      "10th-anniversary-gala-recap",
    ],
  },
  {
    slug: "2022-mid-autumn-cocktail-recap",
    category: "event-recap",
    title: "澳大利亚内蒙古商会 2022 年度鸡尾酒会在墨尔本举行",
    titleEn: "AIMCC Hosts Its 2022 Mid-Autumn Cocktail Reception in Melbourne",
    excerpt:
      "近六十位中澳企业家与社会活动家出席商会年度鸡尾酒会，共庆中秋、畅叙情谊。",
    excerptEn:
      "Nearly 60 entrepreneurs and community leaders joined the Chamber's annual cocktail reception to celebrate the Mid-Autumn Festival.",
    date: "2022-09-26",
    author: "商会秘书处",
    coverImage:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "酒会现场的餐桌与灯光布置",
    body: [
      "2022 年 9 月 18 日，澳大利亚内蒙古商会年度鸡尾酒会在墨尔本举行。近六十位中澳企业家、社会活动家应邀出席，共庆中秋佳节。这是疫情发生以来商会举办的第二场线下活动，来宾久别重逢，现场气氛温馨热烈。",
      "名誉会长郝建才、会长孙国照、顾问田丰、副会长廛洪武先后致辞，回顾了商会在特殊时期坚持服务会员的工作，感谢各界朋友的支持，并祝愿各会员企业经营顺利、阖家安康。",
      "维省华联会主席钱恒裕、澳华联合商会会长朱联人、澳大利亚广东总商会会长郭子宁等友好社团代表出席酒会，并对商会长期以来在促进社区交流与中澳经贸往来方面的工作表示肯定。",
      "酒会现场安排了呼麦表演，浑厚悠远的歌声让来宾领略了草原文化的独特魅力；幸运抽奖环节亦为现场增添了欢乐气氛。",
      "商会谨向 Panorama Investment Group、ZINZINO、ZANK & CO 基金、普亚文化、豆豆莜面村、美宁顿澳大利亚有限公司等赞助机构，以及为活动付出辛劳的工作人员和志愿者致以诚挚谢意。",
    ],
    relatedSlugs: ["10th-anniversary-gala-recap"],
  },
];

/** 按 slug 查找新闻 */
export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}

/** 获取首页重点新闻（featured: true 的那一条） */
export function getFeaturedNews(): NewsArticle {
  return newsArticles.find((article) => article.featured) ?? newsArticles[0];
}

/** 获取最新的非重点新闻（默认 4 条） */
export function getSecondaryNews(count = 4): NewsArticle[] {
  return newsArticles.filter((article) => !article.featured).slice(0, count);
}

/**
 * 获取相关新闻（默认 3 条）：
 * 优先取 relatedSlugs 指定的文章，不足时以同分类最新文章补足，始终排除自身。
 */
export function getRelatedNews(article: NewsArticle, count = 3): NewsArticle[] {
  const related: NewsArticle[] = [];
  const seen = new Set<string>([article.slug]);

  for (const slug of article.relatedSlugs ?? []) {
    if (related.length >= count) break;
    const found = getNewsBySlug(slug);
    if (found && !seen.has(found.slug)) {
      related.push(found);
      seen.add(found.slug);
    }
  }

  for (const candidate of newsArticles) {
    if (related.length >= count) break;
    if (seen.has(candidate.slug)) continue;
    if (candidate.category === article.category) {
      related.push(candidate);
      seen.add(candidate.slug);
    }
  }

  return related.slice(0, count);
}

/**
 * 获取相邻新闻（按日期序）：
 * prev 为更早一篇，next 为更新一篇（newsArticles 按日期降序排列）。
 */
export function getAdjacentNews(slug: string): {
  prev?: NewsArticle;
  next?: NewsArticle;
} {
  const index = newsArticles.findIndex((article) => article.slug === slug);
  if (index === -1) {
    return {};
  }
  return {
    prev: newsArticles[index + 1],
    next: index > 0 ? newsArticles[index - 1] : undefined,
  };
}
