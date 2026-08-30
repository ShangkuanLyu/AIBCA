/**
 * 商会企业（会长团队企业展示）。
 *
 * 数据来源：各企业提供的简介资料（docs/商会会长公司简历/），文字据原文
 * 整理排版；图片（Logo、肖像、图集）均为企业自有资料。
 * 对原文的有意修正（上线前请与企业确认）：
 * - 金地：原文品种名「杜波」改为标准译名「杜泊」（Dorper）；原文「世界知名
 *   优良奶山羊品种」因列表含奶绵羊品种（东弗里生）改为「世界知名优良品种」；
 *   廛洪武英文名 Chan Hongwu 为原文之外补充（与 data/board.ts 一致）。
 * - ANG 聚创国际集团、澳醇思慕集团：企业提供的公司简介；负责人信息
 *   暂未提供。TODO(上线前)：补充两家企业负责人（商会职务）信息。
 * - 金地育种公司：企业提供的公司概况（含团队与发展战略），负责人廛洪武
 *   为商会常务副会长（见 data/board.ts）；图集选自企业宣传册照片。
 * - XPWine：企业暂未提供文字资料，现有简介为商会秘书处代拟的占位文案
 *   （仅确认其为李小鹏先生经营、位于墨尔本 Docklands 的酒类零售商店）。
 *   TODO(上线前)：简介全文须经企业确认修订，并补充 Logo 与照片。
 *
 * 接入 CMS 后由 CMS 数据源替代本文件。
 */

import type { Enterprise } from "@/lib/types";

/** 商会企业列表（按提供资料的完整程度排序） */
export const enterprises: Enterprise[] = [
  {
    slug: "kingland-artificial-breeders",
    name: "澳大利亚金地育种公司",
    nameEn: "Kingland Artificial Breeders Pty Ltd",
    industry: "农牧业",
    location: "维多利亚州 Learmonth",
    summary:
      "澳大利亚最大的种畜胚胎及遗传资源生产与出口企业，也是全澳唯一拥有出口中国绵羊（山羊）胚胎和冻精资质的公司。",
    logo: "/images/enterprises/kingland-logo.png",
    body: [
      "澳大利亚金地育种公司（Kingland Artificial Breeders Pty Ltd）坐落于维多利亚州 Learmonth 镇，距墨尔本市中心 130 公里。公司拥有天然草牧场 2500 余亩，基础设施完备，建有具备胚胎生产与出口资质的现代化胚胎中心，以及畜牧良种（牛羊）繁育基地。",
      "金地公司长期经营生产高产优质肉羊（澳洲白、杜泊、萨福克、无角多赛特、特克赛尔、多羔肉羊等）、奶山羊与奶绵羊（品种包括萨能、阿尔卑斯、吐根堡、东弗里生等世界知名优良品种）的胚胎和冻精，同时生产出口澳洲良种肉牛（和牛、安格斯、西门塔尔、散斑牛等）与奶牛（荷斯坦、娟姗）的种牛胚胎精液。",
      "金地育种公司的前身——澳大利亚凯斯特拉公司，在过去 15 年间共向中国以及韩国、泰国、孟加拉国等地区出口牛羊胚胎超过 8 万枚。作为澳大利亚最大的种畜胚胎及遗传资源生产及出口企业，金地育种公司目前具备年生产胚胎 1 万枚的能力，同时是全澳洲拥有出口中国绵羊（山羊）胚胎和冻精资质的唯一一家公司（境外官方注册号：R123BABVSE；中方注册号：QAUS0125061900003），诚挚与中国相关政府及企业沟通协商业务合作，满足中国市场对高繁殖性能的多羔新品种肉羊、优质奶山羊以及优质肉牛（和牛、安格斯、西门塔尔）和奶牛胚胎的需求。",
    ],
    strategies: [
      "与国内有关政府和机构合作，建立国际化胚胎研发生产中心：在中国建立完整和国际领先的牛羊胚胎研发、培植、推广和市场发展中心，向中国以及海外市场推广最先进的牛羊品种。",
      "建立标准化种羊和种牛示范牧场：与国内的企业和有关机构合作，建立符合国际标准的现代化种羊和种牛新品种示范基地，向国内同行业展示最新品种，并在种羊和种牛牧场的标准化、规范化建设和管理方面引领国内市场。",
      "建立符合商业化运营条件的胚胎培育、牛羊育种和繁殖、市场推广和销售以及低碳放牧的现代化畜牧业基地，并向全国推广。",
    ],
    leader: {
      name: "廛洪武",
      nameEn: "Chan Hongwu",
      chamberRole: "常务副会长",
      companyRole: "执行董事",
      photo: "/images/enterprises/chan-hongwu.png",
      bio: "廛洪武博士，著名家畜繁殖专家，从事家畜育种繁殖技术 30 余年。1986 年毕业于内蒙古大学生物系，师从旭日干院士；2003 年毕业于墨尔本大学，获博士学位。曾与旭日干院士及其团队共同培育出中国第一胎“试管羊”和“试管牛”，于 1992 年获内蒙古自治区科技进步一等奖；2000 年在墨尔本大学攻读博士期间，培育出澳大利亚第一只种公牛的体细胞克隆牛，同年率先在内蒙古锡盟乌拉盖实施世界最大规模的万枚优质种羊胚胎移植项目；2001 年以“牛 IVF–ET 技术的研究与开发”获国家科技进步二等奖；2003 年在新疆克隆出 9 头来自加拿大的高产奶牛体细胞克隆牛，获新疆科技进步一等奖；2005 年作为对内蒙古自治区经济建设有突出贡献的专家，获内蒙古自治区政府“骏马奖”；2006 年作为对中国经济建设有突出贡献的专家，获国务院颁发的“国家友谊奖”。",
    },
    team: [
      {
        name: "田丰",
        role: "公司董事",
        bio: "成功经营多家工业企业，涉及稀土化工、军工、自动化以及化工科技等领域。2014 年成立澳大利亚 Newlandoz International 投资咨询公司，主要经营农业投资。",
      },
      {
        name: "姜彦",
        role: "公司董事",
        bio: "资深职业经理人，曾就职管理澳洲大型肉类生产加工企业，多年从事相关农业产业。曾任澳大利亚澳中农业产业协会会长，现任澳中农业产业协会董事局主席。",
      },
      {
        name: "Ted Heywood",
        role: "牧场经理",
        bio: "Ted Heywood 博士，澳大利亚政府官方注册兽医，资深牛羊育种专家。",
      },
      {
        name: "Geogia Qiao",
        role: "财务负责人",
        bio: "注册会计师。",
      },
    ],
    gallery: [
      {
        src: "/images/enterprises/kingland-lambing.jpg",
        alt: "牧场上的多羔母羊与新生羔羊",
        caption: "牧场上的多羔母羊与新生羔羊",
      },
      {
        src: "/images/enterprises/kingland-triplets.jpg",
        alt: "一胎多羔的澳洲多羔羊",
        caption: "一胎多羔的澳洲多羔羊",
      },
      {
        src: "/images/enterprises/kingland-flock.jpg",
        alt: "金地公司培育的高产优质种羊群",
        caption: "高产优质种羊群",
      },
      {
        src: "/images/enterprises/kingland-farm.jpg",
        alt: "位于维多利亚州 Learmonth 的种畜繁育基地",
        caption: "位于维多利亚州 Learmonth 的种畜繁育基地",
      },
      {
        src: "/images/enterprises/kingland-goats-1.jpg",
        alt: "金地公司的良种奶山羊",
        caption: "良种奶山羊种群",
      },
      {
        src: "/images/enterprises/kingland-goats-2.jpg",
        alt: "阿尔卑斯、萨能、吐根堡等世界知名奶山羊品种",
        caption: "阿尔卑斯、萨能、吐根堡等世界知名品种",
      },
    ],
  },
  {
    slug: "ang-international-group",
    name: "ANG 聚创国际集团",
    nameEn: "ANG International Group",
    industry: "大健康",
    logo: "/images/enterprises/ang-logo.png",
    summary:
      "专注于健康产业与数字化赋能的多元化企业，业务覆盖天然保健品研发、跨境电商平台运营及创业孵化培训三大核心板块。",
    body: [
      "澳大利亚 ANG 国际集团是一家专注于健康产业与数字化赋能的多元化企业，业务覆盖天然保健品研发、跨境电商平台运营及创业孵化培训三大核心板块。",
      "旗下 WALVE Biotech Pty Ltd 专注天然营养保健品的研发与生产，拥有 116 项自主配方、三大自有品牌，其中核心品牌 Revefore（瑞沃丰）已推出超过 50 款产品，覆盖抗衰逆龄、心脑血管、益生菌全系列、免疫优化等系列；销售市场遍及澳大利亚、中国、欧美及东南亚等地，部分产品为东盟国家皇室指定保健品。",
      "ANG 国际集团将继续以“科技驱动健康，数字连接全球”为使命，打造全球领先的健康与数字化生态平台，赋能更多品牌与创业者走向世界。",
    ],
  },
  {
    slug: "ausmooth-group",
    name: "澳醇思慕集团有限公司",
    nameEn: "Ausmooth Group Pty Ltd",
    industry: "酒业",
    location: "澳大利亚维多利亚州",
    logo: "/images/enterprises/ausmooth-logo.jpg",
    summary:
      "总部位于维多利亚州的创新型酒类企业，开创性地将中国白酒引入澳洲本土酿造体系，打造融合中西精华的高端烈酒品牌。",
    body: [
      "Ausmooth Group Pty Ltd（澳醇思慕集团有限公司）是一家总部位于澳大利亚维多利亚州的创新型酒类企业，致力于以现代工艺重塑中国白酒传统，打造融合中西精华的高端烈酒品牌。",
      "公司以“让世界重新认识白酒”为使命、以“澳洲白酒开创者”为愿景，探索白酒全球化发展的全新路径。",
      "Ausmooth 率先打破地域界限，开创性地将中国白酒引入澳洲本土酿造体系，融合澳洲天然资源与国际酿酒技术，开辟出一条“白酒国际化”的实质性道路。",
    ],
  },
  {
    slug: "xpwine",
    name: "XPWine",
    industry: "酒业",
    location: "墨尔本 Docklands",
    summary:
      "位于墨尔本 Docklands 滨水区的精品酒类零售商店，专注澳大利亚各产区葡萄酒的甄选与零售，并为中国客户提供选品与出口服务。",
    // TODO(上线前)：以下简介为商会秘书处代拟的占位文案（企业未提供资料），
    // 全文须经 XPWine 确认修订后方可正式发布。
    body: [
      "XPWine 是一家位于墨尔本 Docklands 滨水区的精品酒类零售商店（bottle shop），由李小鹏先生创办经营，专注于澳大利亚各产区葡萄酒的甄选与零售。",
      "门店精选维多利亚州及全澳知名产区的葡萄酒——从雅拉谷（Yarra Valley）的凉爽气候黑皮诺、霞多丽，到巴罗萨谷（Barossa Valley）的西拉——同时供应精酿啤酒与烈酒，为周边居民、办公人群与游客提供日常选购、节庆用酒与礼品定制服务。",
      "依托墨尔本的口岸与物流优势，XPWine 亦为中国客户提供澳洲葡萄酒的选品咨询与出口配送服务，致力于把澳大利亚优质产区的葡萄酒介绍给更多中国消费者。",
    ],
    leader: {
      name: "李小鹏",
      companyRole: "创始人",
    },
  },
];

/** 有详情正文的企业（生成详情页与 sitemap 条目） */
export const enterprisesWithDetail = enterprises.filter(
  (enterprise) => enterprise.body.length > 0
);

export function getEnterpriseBySlug(slug: string): Enterprise | undefined {
  return enterprisesWithDetail.find((enterprise) => enterprise.slug === slug);
}
