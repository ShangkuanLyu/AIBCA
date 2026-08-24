/**
 * 新闻数据。
 *
 * 内容来源说明：
 * - 以下 5 条为老官网（aibca.com.au）真实内容迁移，正文、人名、机构与图片
 *   均取自老站原文与原站图片，仅作分段、精简与错别字订正等编辑性整理：
 *     · 10th-anniversary-gala-recap（老站文章 1339）
 *     · 2022-mid-autumn-cocktail-recap（老站文章 1231）
 *     · annual-council-meeting-2018（老站文章 925）
 *     · ordos-chamber-friendship-agreement（老站文章 1017）
 *     · baotou-delegation-trade-seminar-2016（老站文章 939）
 *   老站原文自称“澳大利亚内蒙古总商会”，本站统一为“澳大利亚内蒙古商会”；
 *   引述其他机构名称一律保留原样。
 * - 其余条目（政策综述、市场简报、会员动态、合作备忘录、贸促会代表团、
 *   理事会就职公告、世界蒙商大会）仍为**示例内容（example content）**，
 *   封面为 Unsplash 占位图、附件链接为占位符（"#"），
 *   人名、职务、机构、日期等信息在正式上线前须逐一核实或替换。
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
    // TODO: 示例内容 —— 封面为 Unsplash 占位图，上线前替换
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
    // TODO: 示例内容 —— 封面为 Unsplash 占位图，上线前替换
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
    // TODO: 示例内容 —— 封面为 Unsplash 占位图，上线前替换
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
    // TODO: 示例内容 —— 封面为 Unsplash 占位图，上线前替换
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
    // TODO: 示例内容 —— 封面为 Unsplash 占位图，上线前替换
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
      "ordos-chamber-friendship-agreement",
    ],
  },
  /* 老站真实内容迁移（老站文章 1339）：正文与图集均取自原站原文与原站图片。 */
  {
    slug: "10th-anniversary-gala-recap",
    category: "event-recap",
    title: "鸿图十载澳中连——澳大利亚内蒙古商会圆满举办十周年庆典晚宴",
    titleEn:
      "A Decade of Connection: AIMCC Celebrates Its 10th Anniversary Gala Dinner",
    excerpt:
      "近四百位澳中各界嘉宾、会员与乡亲身着民族服饰盛装出席，共同见证商会成立十周年庆典暨第二届理事会就职仪式。",
    excerptEn:
      "Nearly 400 guests gathered in Melbourne to mark the Chamber's 10th anniversary and the inauguration of its second council.",
    date: "2024-12-19",
    author: "商会秘书处",
    source: "据商会原网站发布内容整理",
    coverImage: "/images/news/1339-00.jpg",
    coverAlt:
      "十周年庆典暨第二届理事会就职典礼舞台前，全体嘉宾与会员合影",
    coverCaption: "十周年庆典暨第二届理事会就职典礼大合影",
    featured: true,
    body: [
      "长歌短笛，琴声悠扬。2024 年 11 月 28 日，澳大利亚内蒙古商会在墨尔本隆重举行成立 10 周年庆典暨新一届理事会就职仪式。澳中各界嘉宾、会员与乡亲近 400 人身着民族服饰盛装出席晚宴。",
      "应邀出席商会晚宴的嘉宾有：中国驻墨尔本总领馆总领事房新文，中国驻墨尔本总领馆文化领事王亚妮，维多利亚州议员 John Mullahy MP，维多利亚州多元文化专员 Mohomed Mohideen OAM JP，维多利亚州前议长、大洋洲工商业委员会主席 Hon Ken Smith AM，维多利亚州前立法委员会主席 Hon Bruce Atkinson，墨尔本洪门民治党主委伍颂达等。",
      "澳大利亚内蒙古商会创会会长孙国照致辞时表示，十载岁月流转，商会自 2014 年在墨尔本成立以来，以“连接中澳，合作共赢”为使命，逐步发展成为促进两国经济、文化、教育深度交流的重要平台，搭建起连接内蒙古与澳大利亚之间的桥梁，推动双方在经济、文化、金融等多领域合作与发展。经过十年努力，商会会员企业覆盖教育、地产、金融、矿产、医疗、大健康等多个行业，总数逾百家。",
      "房新文总领事致辞表示祝贺。他认为商会一直支持总领馆的工作，总领馆也会一如既往为同胞提供优质高效服务；期待商会的各位朋友和领区的各界人士抓住中国的发展机遇和中澳关系改善的势头，为促进中澳经贸和各领域的合作贡献更大的力量。",
      "商会新任会长郝建才致辞，感谢房总领事、州议员等贵宾百忙之中出席晚宴。他表示：“前面孙会长做得很好，后面的我相信也会做得很好。”他以三句话表明态度：第一，加强商会的自身建设；第二，广泛联系国内外的朋友、商家加强交流；第三，做好全方位的服务工作，让友谊和事业更上一个台阶。“说千句万句，不如从实际行动做起。”郝会长的发言赢得大家热烈的掌声。维多利亚州前议长、山东省及江苏省荣誉市民、大洋洲工商业委员会主席 The Hon. Ken Smith AM，维多利亚州前立法委员会主席 The Hon. Bruce Atkinson，墨尔本洪门民治党主委伍颂达，维多利亚州多元文化专员 Mohomed Mohideen OAM JP 亦先后致辞。",
      "十年来，商会坚持定期组织商业活动，从会员交流到项目洽谈，从资源整合到实质性合作，凝聚了商会对促进中澳交流的初心和努力。商会曾组织澳大利亚代表团参加内蒙古全球蒙商大会，展示了内蒙古丰富的投资机会，并为会员企业与家乡深度合作打下坚实基础。2023 年，商会组织 15 名会员参加在中国呼和浩特举办的世界蒙商大会，创会会长孙国照被内蒙古自治区人民政府授予“澳大利亚招商大使”称号。内蒙古自治区贸促会及国际商会将澳大利亚代表处设立在澳大利亚内蒙古商会；内蒙古自治区呼和浩特市、包头市、鄂尔多斯市、阿拉善盟的贸促会代表处亦均设在商会，孙国照会长被任命为首席代表。",
      "大会向新一届理事会成员颁发证书，并表彰对商会发展作出突出贡献的会员。创会会长孙国照分别向新当选会长郝建才、新当选荣誉会长田丰颁发证书。",
      "欢声笑语中，抽奖活动、慈善拍卖与文艺演出交错进行。国家二级演员哈斯琪琪格演奏马头琴曲《万马奔腾》，激越的旋律展现出一幅大草原气势磅礴的牧马场景；国家二级演员朱茵演唱《火红的萨日朗》，悠扬的歌声充满浪漫的草原风情；国家二级演员贺军、张燕亦登台献艺。曾任周杰伦演唱会特邀嘉宾的澳洲歌手 Mark Balas 献唱《青花瓷》和《吻别》，磁性动情的歌声回荡在深沉的星空；民间歌手吴天赐一曲《我的中国心》，高昂的歌声带动着心灵的回响。",
      "晚宴拍卖现场高潮叠加、惊喜连连。著名岭南画派画家林伯墀的国画拍卖品《一啖荔枝三百颗》画面赋彩鲜艳，着色浓淡相宜；著名旅澳画家姚迪雄的画作《乐佛》等作品均以较高的价格成功拍出。随着一阵又一阵掌声、欢呼声与竞叫声，抽奖活动和拍卖活动始终牵动着与会者的热情——尤本林的草书作品、林伯墀的书法以及贺总的书法“海纳百川”均物归其主；最后，林伯墀先生即席挥毫的“群贤毕至”书法作品赠送给商会惠存。",
      "澳大利亚内蒙古商会第二届理事会履新名单如下：名誉会长田丰；会长郝建才；执行会长孙国照、William；常务副会长廛洪武、窦飞、任烨、白玫瑰；副会长孙浩峰、Helen Huang、李秀梅、关明星、潘雪飞、何涛、范丹丹、申洁、李端阳；常务理事黄慧、郭鑫、Rose Chen；副秘书长卓娜。",
      "商会庆典得到众多单位及个人的友情赞助与捧场，商会谨向各位赞助者与到场嘉宾致以诚挚谢意。庆典晚宴在欢乐融洽的氛围中圆满落下帷幕。",
    ],
    gallery: [
      {
        src: "/images/news/1339-01.jpg",
        alt: "创会会长孙国照在庆典晚宴讲台前手持话筒致辞",
        caption: "澳大利亚内蒙古商会创会会长孙国照致辞",
      },
      {
        src: "/images/news/1339-02.jpg",
        alt: "中国驻墨尔本总领馆总领事房新文在庆典晚宴讲台前致辞",
        caption: "中国驻墨尔本总领馆总领事房新文致辞",
      },
      {
        src: "/images/news/1339-03.jpg",
        alt: "新任会长郝建才站在庆典舞台上手持话筒致辞",
        caption: "商会新任会长郝建才致辞",
      },
      {
        src: "/images/news/1339-04.jpg",
        alt: "白发白须的男士在庆典晚宴讲台前致辞，身后大屏显示其姓名",
        caption:
          "维多利亚州前议长、大洋洲工商业委员会主席 The Hon. Ken Smith AM 致辞",
      },
      {
        src: "/images/news/1339-05.jpg",
        alt: "身着蒙古族样式马甲的男士在庆典舞台上致辞，另一位男士在旁陪同",
        caption: "维多利亚州前立法委员会主席 The Hon. Bruce Atkinson 致辞",
      },
      {
        src: "/images/news/1339-09.jpg",
        alt: "两位男士在写有“新一届理事会就职典礼”字样的大屏前握手并交接红色证书",
        caption: "创会会长孙国照向新当选会长郝建才颁发证书",
      },
      {
        src: "/images/news/1339-18.jpg",
        alt: "二十余位嘉宾与理事会成员在“新一届理事会就职典礼”舞台前分前后两排合影",
        caption: "第二届理事会就职典礼合影",
      },
      {
        src: "/images/news/1339-12.jpg",
        alt: "身着蒙古族服饰的女演员坐在庆典舞台上演奏马头琴",
        caption: "国家二级演员哈斯琪琪格演奏马头琴曲《万马奔腾》",
      },
      {
        src: "/images/news/1339-16.jpg",
        alt: "身着红色中式礼服的外籍男歌手在庆典舞台上手持话筒演唱",
        caption: "澳洲歌手 Mark Balas 献唱中文歌曲",
      },
      {
        src: "/images/news/1339-20.jpg",
        alt: "两位主持人与三位嘉宾在舞台上共同展示一幅荔枝题材的国画作品",
        caption: "拍卖环节展示岭南画派画家林伯墀的国画《一啖荔枝三百颗》",
      },
      {
        src: "/images/news/1339-25.jpg",
        alt: "四位嘉宾在舞台上展开两幅书法横卷，分别写有“海纳百川”与“群贤毕至”",
        caption: "书法作品《海纳百川》与《群贤毕至》在庆典现场展示",
      },
      {
        src: "/images/news/1339-28.jpg",
        alt: "宴会厅内数十桌宾客座无虚席，台上嘉宾正在讲台前致辞",
        caption: "庆典晚宴现场座无虚席",
      },
    ],
    relatedSlugs: [
      "second-council-inauguration-announcement",
      "2022-mid-autumn-cocktail-recap",
      "annual-council-meeting-2018",
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
    // TODO: 示例内容 —— 封面为 Unsplash 占位图，上线前替换
    coverImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "会议厅内的正式会议场景",
    body: [
      "根据商会章程及换届工作安排，澳大利亚内蒙古商会已完成第二届理事会选举工作。新一届理事会于 2024 年 11 月 28 日商会十周年庆典晚宴上正式就职，现将有关情况公告如下。",
      "第二届理事会主要成员为：名誉会长田丰；会长郝建才；执行会长孙国照（创会会长）、William；常务副会长廛洪武、窦飞、任烨、白玫瑰；副会长孙浩峰、Helen Huang、李秀梅、关明星、潘雪飞、何涛、范丹丹、申洁、李端阳；常务理事黄慧、郭鑫、Rose Chen；副秘书长卓娜。",
      "新一届理事会将依照章程履行职责，重点做好会员服务、活动组织与对外联络等工作，进一步健全商会内部治理，团结带领全体会员推动商会持续健康发展。",
      "商会谨向以创会会长孙国照为代表的第一届理事会全体成员在过去十年中的辛勤付出致以诚挚感谢，并欢迎广大会员对新一届理事会的工作提出意见和建议。有关事宜请联系商会秘书处（info@aibca.com.au）。",
    ],
    relatedSlugs: ["10th-anniversary-gala-recap", "annual-council-meeting-2018"],
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
    // TODO: 示例内容 —— 封面为 Unsplash 占位图，上线前替换
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
  /* 老站真实内容迁移（老站文章 1231）：正文与图集均取自原站原文与原站图片；
     原文中赞助商品牌的推广性介绍段落已精简为客观致谢。 */
  {
    slug: "2022-mid-autumn-cocktail-recap",
    category: "event-recap",
    title: "澳大利亚内蒙古商会 2022 年度鸡尾酒会圆满举办",
    titleEn: "AIMCC Hosts Its 2022 Mid-Autumn Cocktail Reception in Melbourne",
    excerpt:
      "近六十位中澳企业家、社会活动家与业界精英欢聚墨尔本，共庆中秋佳节，这是商会疫情以来举办的第二场线下活动。",
    excerptEn:
      "Nearly 60 entrepreneurs and community leaders joined the Chamber's annual cocktail reception in Melbourne to celebrate the Mid-Autumn Festival.",
    date: "2022-09-26",
    author: "商会秘书处",
    source: "据商会原网站发布内容整理",
    coverImage: "/images/news/1231-00.jpg",
    coverAlt: "2022 年度鸡尾酒会全体与会嘉宾在会场内合影",
    coverCaption: "2022 年度鸡尾酒会全体合影",
    body: [
      "9 月 18 日，澳大利亚内蒙古商会 2022 年度鸡尾酒会在墨尔本成功举办。本次活动是自疫情发生 2 年零 9 个月以来商会第二次举办面对面线下活动，近 60 位中澳优秀企业家、社会活动家、业界精英嘉宾欢聚一堂，共同庆祝 2022 中秋佳节以及这个新朋旧友喜相逢的特别日子。",
      "商会名誉会长郝建才、会长孙国照、商会顾问田丰以及商会副会长廛洪武分别致辞；维省华联会主席钱恒裕、副主席苗庆，前维省华联会主席苏俊西，维省华联会名誉主席、澳华联合商会会长朱联人，澳大利亚广东总商会会长郭子宁等受邀出席了本次活动。",
      "商会名誉会长郝建才表示，非常高兴在中国传统节日中秋佳节之时，与同处异国他乡的内蒙人团聚。他说，过去的几年充满了种种困难和挑战，疫情限制了我们的活动，改变了我们的生活方式，但是疫情不能隔断我们彼此间的关爱与友情。我们一路顽强地走来，迎来了又一个难忘的中秋；内蒙古商会将与我们的会员和朋友一起，在新的一年里无畏挑战，以充沛的韧性，合作共赢，携手扬帆。",
      "商会会长孙国照感谢了到场的所有会员朋友以及赞助方。他说，澳大利亚内蒙古商会自成立以来，一直坚持定期组织各类商务活动，就是希望不断加强会员之间的互动能力，增强凝聚力。每次活动中，会员之间都会进行工作经验分享、商业信息互通，这很好地促进了彼此事业的发展和成功。商会一定会在未来的工作中及时沟通与交流信息，群策群力，继往开来，不断推陈出新。",
      "活动现场还安排了热情似火的呼麦表演、惊喜连连的抽奖环节与地道的西北美食，为来宾留下许多难忘的欢喜瞬间。",
      "特别感谢以下机构对本次活动的赞助与支持：Panorama Investment Group、ZINZINO（挪威圣希诺平衡油）、豆豆莜面村、澳大利亚新西兰健康产业集团、美人计澳洲总代理、ZANK & CO 基金公司、普亚文化、墨颜手工学院、美宁顿澳大利亚有限公司，以及 Pansy 植物精油。",
      "欢声久久流传，笑语迟迟不归。澳大利亚内蒙古商会不仅是组织、是平台、是桥梁、是纽带，更是阵地、是窗口、是事业、是家园。涓涓细流汇成大海，点点星光照亮未来。商会会在未来为会员做更多服务，我们同时也希望有更多的企业家和创业者加入到商会中来，与我们一起资源共享，合作共赢。期待下次相会！",
    ],
    gallery: [
      {
        src: "/images/news/1231-01.jpg",
        alt: "商会名誉会长郝建才在酒会现场手持话筒致辞",
        caption: "商会名誉会长郝建才致辞",
      },
      {
        src: "/images/news/1231-02.jpg",
        alt: "商会会长孙国照在酒会现场手持话筒致辞",
        caption: "商会会长孙国照致辞",
      },
      {
        src: "/images/news/1231-04.jpg",
        alt: "酒会现场，来宾在落地窗前围坐聆听台上嘉宾发言",
        caption: "鸡尾酒会现场",
      },
      {
        src: "/images/news/1231-25.jpg",
        alt: "一位头戴礼帽的女士手持话筒向在座来宾发言",
        caption: "活动现场的分享环节",
      },
      {
        src: "/images/news/1231-21.jpg",
        alt: "四位男士在酒会现场围坐交谈，神情轻松",
        caption: "久别重逢的来宾在会场叙旧",
      },
      {
        src: "/images/news/1231-43.jpg",
        alt: "身着蒙古族长袍、头戴蒙古族帽子的艺人手持话筒在现场演唱",
        caption: "现场的蒙古族音乐表演",
      },
      {
        src: "/images/news/1231-09.jpg",
        alt: "身着蒙古族服饰的艺人坐在场中弹奏拨弦乐器，两位主持人在两侧鼓掌",
        caption: "蒙古族艺人现场弹唱助兴",
      },
      {
        src: "/images/news/1231-17.jpg",
        alt: "长桌上摆满烤羊肉、炒面等菜肴，一位身着蒙古族服饰者端出一盘烤肉",
        caption: "现场供应的西北风味美食",
      },
      {
        src: "/images/news/1231-11.jpg",
        alt: "三位来宾手持作为奖品的葡萄酒在会场内合影",
        caption: "抽奖环节的获奖来宾",
      },
      {
        src: "/images/news/1231-14.jpg",
        alt: "三位男士手持活动礼品在投影幕前合影",
        caption: "活动准备的伴手礼与奖品",
      },
      {
        src: "/images/news/1231-20.jpg",
        alt: "十余位与会嘉宾在澳大利亚内蒙古商会横幅前分两排合影",
        caption: "与会嘉宾合影",
      },
      {
        src: "/images/news/1231-35.jpg",
        alt: "多位女性来宾在澳大利亚内蒙古商会横幅前合影",
        caption: "与会来宾合影留念",
      },
    ],
    relatedSlugs: ["10th-anniversary-gala-recap", "annual-council-meeting-2018"],
  },
  /* 老站真实内容迁移（老站文章 925）：正文与图片均取自原站原文与原站图片。 */
  {
    slug: "annual-council-meeting-2018",
    category: "chamber",
    title: "澳大利亚内蒙古商会 2018 年度理事会成功召开",
    titleEn: "AIMCC Holds Its 2018 Annual Council Meeting in Melbourne",
    excerpt:
      "商会在墨尔本召开 2018 年度理事会，汇报网站与公众号建设、财务三级审批制度等工作，并讨论《蒙商在澳新》出书计划与 2019 年工作安排。",
    excerptEn:
      "The Chamber's 2018 annual council meeting in Melbourne reviewed its website and secretariat work and discussed plans for the year ahead.",
    date: "2018-12-16",
    author: "商会秘书处",
    source: "据商会原网站发布内容整理",
    coverImage: "/images/news/925-00.jpg",
    coverAlt:
      "2018 年度理事会与会人员在商会红色横幅前分两排合影",
    coverCaption: "2018 年度理事会与会人员合影",
    body: [
      "当地时间 12 月 16 日，澳大利亚内蒙古商会在墨尔本成功召开 2018 年年度理事会。名誉会长郝建才，顾问田丰，商会会长孙国照，副会长廛洪武、周聪威、孙浩峰、韩思宇、窦飞，以及李端阳、申洁、潘雪飞，商会秘书何文竹，以及嘉宾王建邦、简贵来、李淑荣参加了会议。",
      "会议主要对商会近期工作成果进行了汇报，并讨论了 2019 年的工作计划。",
      "会长孙国照首先发言。孙国照表示，商会成立以来一直在开展工作，今年 10 月底和名誉会长及顾问一起商讨、策划了明年的活动，也专程将活动计划当面向内蒙古自治区领导进行了汇报并获得了相关部门的肯定和赞同，具体事宜明年会继续跟进。商会也和相关部门和其他商会进行了对接，他们希望能和我们一起开展工作，进行资源整合、信息交流、商务洽谈。商会成立后有幸吸纳了各位骨干成员，商会队伍也在逐渐发展壮大。在新年之前希望能够举办一场商会活动，邀请更多会员加盟。商会网站上线后，明年将主要对会员企业进行宣传。商会将同时筹集出版一本名为《蒙商在澳新》的书籍，让更多人了解在澳洲和新西兰奋斗的内蒙古商人以及他们所在的行业和企业。",
      "商会秘书何文竹随后进行了工作汇报。商会秘书处近期主要进行了以下几项工作：第一，商会网站的搭建。商会目前正在建设的网站将涵盖商会介绍、精彩活动、活动预告、项目库、风土人情和会员中心等模块和功能；网站上线后，会员将可以从网站上获取最新资讯，也可以将企业和项目信息发布在网站上。第二，商会的微信公众服务号也已经在审核中，开通后将实现信息即时更新、会员会费缴纳、资讯提供等功能；会员群也将同步更新信息，与网站和微信公众号实现三位一体的信息同步更新。",
      "接下来商会秘书处将把工作重心放在三个方面：第一，新会员的招募；第二，撰写和编辑会员企业和项目信息，将企业信息放在网站进行宣传，将项目信息存入网站的项目库中；第三，进行《蒙商在澳新》的采写工作。",
      "副会长兼秘书长孙浩峰对商会的资金使用制度进行了解释。商会现已建立起严格的三级审批制度：用款需先由秘书处提出申请，报送相关领导审批，再由会长审批。目前财务由田丰顾问分管，账户定期公布、对会员公开；秘书的工作时间和内容分配也定期汇报。",
      "接下来名誉会长郝建才发言。他表示，商会发展已经迈出了第一步，进行了大量工作，充实了商会力量；后继有人，前途光明，也让我们这些常驻海外的内蒙商人找到了家的感觉。今年下半年我们策划了一些活动，希望明年能够顺利实施；明年也会争取让更多的想法落地，让更多的计划得以实施。商会有任务随时指示，我们尽力而为。塔斯马尼亚分会已经准备就绪，随时欢迎大家。",
      "商会顾问田丰表示，对生活在澳洲的内蒙商人来说，商会应该是个很好的平台。但要做好商会，一方面需要吸引会员，另一方面也需要就商会应该做些什么内容来和大家共同思考及时沟通。我们在商会建立之初提出了很多设想，最近也做了很多工作。接下来的发展一方面需要会长的指示和大家的配合，另一方面必须背靠国内支持，和国内互通有无。我们筹集出书一方面是为了向外界宣传大家，以及为大家彼此之间增加了解，另一方面也是促进民间和政府交流的过程。",
      "副会长廛洪武表示，这一年因为有了各位商会领导和骨干，感到商会有了核心、有了灵魂，就不愁更多的内蒙人才加入商会；吸引人才的目的不仅仅是聊聊乡情，更要有实际内容。孙会长的今年总结和明年计划都是比较明晰的，我们这些成员也要做做实事，责无旁贷。",
      "副会长周聪威表示，一方面，商会搭建成商家和政府间的平台，好的澳洲商业项目可以在平台进行展示、推进，国内就愿意投资；另一方面，通过商会平台介绍而产生的合作理应回报给商会，商会就能长期生存下来。下一步，政府间关系和信息在平台上也能进行展示；政商两方面的沟通也是艰巨的任务。",
      "副会长韩思宇和窦飞表示，商会平台能做起来，资源开放给我们，我们不能浪费，要做好实事，打好基础，支持商会。李端阳提出建议，商会在扩充过程中可以根据需要建立不同部门，完善构架，福利会员。新成员申洁和潘雪飞也表示希望能从自己的领域行业为商会做贡献。",
      "从中国远道而来的三位嘉宾——蒙牛创始元老王建邦，三 C 集团创始人简贵来、李淑荣也参加了此次会议。他们表示在商会看到了商业希望和无限前景，希望能和大家携手搭建平台，与商会共同发展。参会成员皆表示对下一步的商会发展充满信心，期待下一次活动，也期待在全体理事和会员的努力下，商会越办越好。",
    ],
    gallery: [
      {
        src: "/images/news/925-01.jpg",
        alt: "年度理事会结束后，与会人员在餐桌旁站立举杯交谈",
        caption: "会议结束后，与会人员举杯交流",
      },
    ],
    relatedSlugs: [
      "ordos-chamber-friendship-agreement",
      "baotou-delegation-trade-seminar-2016",
    ],
  },
  /* 老站真实内容迁移（老站文章 1017）：正文与图集均取自原站原文与原站图片。
     ⚠ 日期待核实：原文仅写“3 月 31 日”未注明年份，老站发布时间为 2019-02，
     此处的 2018-03-31 系据此推断，上线前须向商会核实确切年份。
     图片说明：老站文章首图（1017-00）实为 2016 年包头洽谈会合影，与本文无关，故未采用。 */
  {
    slug: "ordos-chamber-friendship-agreement",
    category: "exchange",
    title: "鄂尔多斯市总商会与澳大利亚内蒙古商会缔结友好商会",
    titleEn:
      "Ordos Chamber of Commerce and AIMCC Establish a Sister-Chamber Partnership",
    excerpt:
      "双方在鄂尔多斯市生态文化博物馆举行合作交流座谈会暨友好商会签约仪式，就资源互补与务实合作交换意见。",
    excerptEn:
      "The two chambers held a roundtable and signing ceremony in Ordos, agreeing to establish a sister-chamber partnership.",
    date: "2018-03-31",
    author: "商会秘书处",
    source: "据商会原网站发布内容整理",
    coverImage: "/images/news/1017-06.jpg",
    coverAlt: "缔结友好商会签约仪式横幅下，双方代表在签约桌前签署协议",
    coverCaption: "缔结友好商会签约仪式现场",
    body: [
      "“相知无远近，万里尚为邻。”3 月 31 日下午，鄂尔多斯市工商联（总商会）主席刘钢柱的开场主持词，一下子拉近了澳大利亚华商与鄂尔多斯市企业家的距离。",
      "当天，鄂尔多斯市总商会、澳大利亚内蒙古商会合作交流座谈会暨友好商会签约仪式在东胜区鄂尔多斯市生态文化博物馆举行。市委常委、统战部长金武出席会议并讲话，市委统战部副部长、市工商联党组书记李欣良出席会议，市工商联主席、鄂尔多斯市总商会会长刘钢柱主持会议；澳大利亚内蒙古商会会长孙国照，澳大利亚国际（内蒙古）草原文化交流协会会长郝建才，鄂尔多斯市生态文化研究会会长丁崇明出席座谈会。市商务局、市旅游局、空港物流园区及当地 30 多家企业的企业家代表参加座谈会。",
      "会前，与会人员参观了鄂尔多斯市生态文化博览馆的野生动植物标本馆展区、生态馆展区、书画馆展区，观看了鄂尔多斯生态文化专题片，并听取了生态文化博览馆的详细介绍。",
      "金武对澳大利亚内蒙古商会会长孙国照一行的到来表示热烈的欢迎，并就当地的经济社会发展情况做了简要介绍，同时对两地商会合作交流提出了希望和要求。",
      "金武要求，市工商联（总商会）要加强自身建设，提高服务水平。要围绕服务企业家这一根本宗旨，团结引导广大会员，联系在外内蒙古籍人士，不断提高商会的号召力和凝聚力。要推进企业之间交流合作，实现抱团发展。要充分发挥内联外引、以商招商的作用。",
      "金武希望，在外内蒙古企业家要支持家乡发展，共建美好家园。要充分发挥分布广泛、信息灵通的优势，当好内蒙古经济发展的“情报员”；要学习各地好的发展规划、管理经验、政策措施，借鉴先进经验，改进管理服务方式；要当好内蒙古对外招商的“宣传员”，积极动员各地企业来内蒙古参观考察、投资兴业，并协助家乡发展“归雁经济”；要当好内蒙古产品和形象的“推销员”，积极向外推介内蒙古品牌，把内蒙古知名产品推向全国；要争做公益事业的热心人，积极参与扶贫助学等社会公益活动，力所能及地为家乡办好事、办实事。",
      "刘钢柱表示，鄂尔多斯市历来重视商会的合作发展，市工商联（总商会）主动加强与各城市、各商会间的合作交流，增进共识、互惠互利，努力实现资源共享、市场共兴、发展共赢的良好局面。",
      "孙国照表示，澳大利亚内蒙古商会、澳大利亚国际（内蒙古）草原文化交流协会是在澳大利亚由内蒙古籍工商界人士发起成立的社团组织，是加强在澳蒙两地企业家交流的桥梁和纽带，也是展示内蒙古形象的窗口和向外宣传内蒙古品牌的重要平台。澳大利亚同鄂尔多斯在“羊煤土气”等产业方面有着相似性，有着很多可以互补和合作的商机；澳大利亚内蒙古商会将发挥自身优势，共同推动两国两地在经济、文化、贸易等多方面的交流合作与发展。",
      "座谈会后，澳大利亚内蒙古商会、澳大利亚国际（内蒙古）草原文化交流协会、鄂尔多斯市总商会、鄂尔多斯市生态文化研究会举行了缔结友好商会签约仪式。",
    ],
    gallery: [
      {
        src: "/images/news/1017-01.jpg",
        alt: "与会人员参观鄂尔多斯市生态文化博览馆的展区",
        caption: "会前，与会人员参观鄂尔多斯市生态文化博览馆",
      },
      {
        src: "/images/news/1017-02.jpg",
        alt: "双方代表在鄂尔多斯市生态文化博览馆前合影",
        caption: "双方代表在生态文化博览馆前合影",
      },
      {
        src: "/images/news/1017-03.jpg",
        alt: "鄂尔多斯市委常委、统战部长金武在座谈会上讲话",
        caption: "鄂尔多斯市委常委、统战部长金武讲话",
      },
      {
        src: "/images/news/1017-04.jpg",
        alt: "鄂尔多斯市工商联主席、鄂尔多斯市总商会会长刘钢柱在座谈会上讲话",
        caption: "鄂尔多斯市工商联主席、鄂尔多斯市总商会会长刘钢柱讲话",
      },
      {
        src: "/images/news/1017-05.jpg",
        alt: "澳大利亚内蒙古商会会长孙国照在座谈会上讲话",
        caption: "澳大利亚内蒙古商会会长孙国照讲话",
      },
      {
        src: "/images/news/1017-07.jpg",
        alt: "缔结友好商会签约仪式后，双方代表在会场内合影",
        caption: "签约仪式后双方代表合影",
      },
    ],
    relatedSlugs: [
      "baotou-delegation-trade-seminar-2016",
      "annual-council-meeting-2018",
    ],
  },
  /* 老站真实内容迁移（老站文章 939）：正文与图集均取自原站原文与原站图片，
     图集说明依据原站图片文件名的中文含义撰写。 */
  {
    slug: "baotou-delegation-trade-seminar-2016",
    category: "exchange",
    title: "包头市政府代表团访澳商贸洽谈 澳大利亚内蒙古商会设欢迎晚宴",
    titleEn:
      "Baotou Municipal Delegation Visits Melbourne for Trade Talks; AIMCC Hosts Welcome Dinner",
    excerpt:
      "包头市市长杜学军率代表团抵达墨尔本，在维州议会大厦举行《2016 中国包头—澳大利亚经贸合作洽谈会》，中澳双方签署六项合作协议。",
    excerptEn:
      "A Baotou delegation led by Mayor Du Xuejun held trade talks at Victoria's Parliament House, where six cooperation agreements were signed.",
    date: "2016-11-07",
    author: "商会秘书处",
    source: "据商会原网站发布内容整理",
    coverImage: "/images/news/939-00.jpg",
    coverAlt:
      "“2016 中国包头—澳大利亚经贸合作洽谈会”横幅前，中澳双方代表列队合影",
    coverCaption: "2016 中国包头—澳大利亚经贸合作洽谈会",
    body: [
      "2016 年 11 月 7 日上午，由内蒙古包头市市长杜学军率队，市政府办公厅主任郑国强，市政府外事办主任黄昌帆，市商务局局长杨占明，市旅游局局长张勇东，市投资促进局局长王奋伟等领导组成的包头市政府代表团抵达墨尔本，拉开了《2016 中国包头—澳大利亚经贸合作洽谈会》的序幕。",
      "随同包头市政府代表团领导出访的，还有包头市企业家代表。他们是：内蒙古小尾羊牧业科技股份有限公司董事长余佳荣；内蒙古圣鹿源生物科技股份有限公司董事长郑彬；内蒙古日盛世濠餐饮连锁管理有限公司总经理秦勇；东疆商贸国际集团总裁高岗；内蒙古轩宇投资咨询有限公司董事长支红；包头市食品协会会长刘军军；包头市东宝生物技术股份有限公司董事长王军；内蒙古蒙源肉羊种业（集团）有限公司董事长陈正国等。",
      "此次经贸洽谈会是由澳大利亚国际商会承办，澳大利亚内蒙古商会协办，并得到了澳中工商委员会（ACBC）维州分会主席、维州议会前议长肯·史密斯（Ken Smith）先生的大力支持。",
      "7 日上午的洽谈会在墨尔本的维州议会大厦（Parliament House）举行。代表团一行在 ACBC 肯·史密斯主席和澳大利亚内蒙古商会孙国照会长的陪同下，参观了维州众议院（下议院）、参议院（上议院）会议厅，以及议会大厦图书馆等。身为维州前议长的史密斯先生亲自向中方代表团的朋友们介绍了众、参两院的构成，法律的制定程序，维州议会大厦的历史等；代表团的朋友们饶有兴致地听取了介绍并提出了许多感兴趣的问题，宾主双方会晤气氛融洽。",
      "参观结束后，包头代表团和澳方代表在宴会厅举行了商务洽谈及签约仪式。洽谈会由澳大利亚国际商会首席官麦克果先生主持，维州下议院副议长 Khalil Eidenh 先生、前议长 Ken Smith 先生、包头市市长杜学军先后发表了讲话。维州上议院议长 Bruce Atkinson 先生也到会与客人们进行了亲切交谈。",
      "杜市长表示，中国内蒙古和澳大利亚维州合作的互补性非常强。内蒙古作为中国最大的草原牧区，拥有丰富的牧场资源；包头在蒙语里是有鹿的地方，一直以来是自然环境优美的所在，这一点和以“骑在羊背上的国家”著称的澳大利亚很相似。",
      "他表示，包头与澳洲在旅游、商贸、农牧业、文化教育等各个领域，都有非常大的合作空间。“墨尔本又叫新金山，曾是澳洲的淘金之地，我们相信借着中澳经贸合作的这座桥梁，包头也会成为中澳贸易合作中的另一座‘金矿’。”他还说，包头的企业已经和澳方在某些科技合作领域迈出了实质性的步伐，希望在不久的将来，能够和更多澳洲企业展开更全面、深化的合作。",
      "讲话结束后，中澳双方代表签署了多项合作协议。签署协议的企业有：包头市投资促进局与澳洲资产投资集团签订深化投资合作协议书；澳大利亚及新西兰健康产业集团与包头市旅游局及内蒙古东疆商贸国际集团分别签订了合作框架协议；内蒙古小尾羊牧业科技股份有限公司与澳大利亚海威德公司签订全面合作协议；内蒙古小尾羊牧业科技股份有限公司与澳大利亚 JOC 国际公司签订牛羊肉产品加工及销售合作协议；内蒙古蒙源肉羊种业集团有限公司与澳大利亚凯斯特拉有限公司签订联合开展肉羊现代繁育技术合作协议；内蒙古日盛世濠餐饮连锁管理有限公司与中和澳亚股份有限公司签订进口牛肉战略合作框架协议。签约仪式后，宾主在维州议会大厦宴会厅共进工作午餐。",
      "当日晚，澳大利亚内蒙古商会孙国照会长在王朝海鲜酒楼贵宾厅设晚宴招待了来自故乡的领导和朋友。乡音叙乡情，美酒伴良宵。孙会长说：能够在墨尔本接待来自故乡内蒙古的领导和商界代表，感到十分荣幸。我们将不遗余力地促进澳洲同内蒙古在商务贸易、旅游教育、文化交流等各个领域的合作，欢迎更多的领导和业界人士来访，相互交流共谋发展。",
      "大家一致认为，今天所签署的协议具有里程碑意义，为接下来的合作开启了新的篇章。杜市长表示，这次访澳之后，我们会把考察的成果回去向包头市委做一个全面的汇报；今后会加大和澳方合作力度，也将考虑在澳洲设立常驻机构，更欢迎澳洲的朋友们去包头参观、考察、旅游。包头人民热情好客，随时欢迎你们来访。",
      "部分在澳的澳大利亚内蒙古商会成员及签约企业家代表出席了欢迎晚宴，他们是：澳大利亚内蒙古商会会长、澳大利亚—中国工商业联合会主席、澳洲资产投资集团董事长孙国照，Australian Prime Meat Co. 公司副主席廛洪武博士，VNT 公司董事长 Tony Xu，Sino-Australia Top Beef (Beijing) Co., Ltd. 公司执行董事、首席财务官、黄金时代股份有限公司总裁周立功，澳大利亚大华时代传媒集团总经理、澳大利亚内蒙古同乡会副会长、中国医药物资协会非药（澳·新）委员会秘书长孙浩峰，内蒙古西北人家餐饮管理公司董事长、内蒙古国澳国际贸易有限公司董事长李端阳，Sun Planning 公司负责人孙宇，澳大利亚大华时代传媒集团董事刘风华等。",
    ],
    gallery: [
      {
        src: "/images/news/939-01.jpg",
        alt: "包头市政府代表团一行在维州议会大厦前合影",
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
        src: "/images/news/939-08.jpg",
        alt: "包头市市长杜学军向澳大利亚内蒙古商会会长孙国照赠送纪念品",
        caption: "杜市长向孙会长赠送纪念品",
      },
      {
        src: "/images/news/939-11.jpg",
        alt: "包头市政府代表团向维州政府赠送纪念品",
        caption: "包头市政府代表团向维州政府赠送纪念品",
      },
      {
        src: "/images/news/939-13.jpg",
        alt: "澳大利亚及新西兰健康产业集团与内蒙古东疆商贸国际集团代表签署协议",
        caption:
          "澳大利亚及新西兰健康产业集团（ANZHPL）与内蒙古东疆商贸国际集团签署协议",
      },
      {
        src: "/images/news/939-15.jpg",
        alt: "澳洲资产投资集团与包头市投资促进局代表签署合作协议",
        caption: "澳洲资产投资集团同包头市投资促进局签署合作协议",
      },
      {
        src: "/images/news/939-17.jpg",
        alt: "澳大利亚内蒙古商会会长孙国照在欢迎晚宴上致辞",
        caption: "澳大利亚内蒙古商会孙国照会长在欢迎晚宴上致词",
      },
      {
        src: "/images/news/939-18.jpg",
        alt: "欢迎晚宴现场，宾主围坐交流",
        caption: "欢迎晚宴现场",
      },
    ],
    relatedSlugs: [
      "ordos-chamber-friendship-agreement",
      "annual-council-meeting-2018",
    ],
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
