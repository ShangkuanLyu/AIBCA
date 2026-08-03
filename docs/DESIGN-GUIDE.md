# 澳大利亚内蒙古商会官网 — 设计规范

> 本文档是全站视觉与代码约定的唯一依据。新增页面、组件时请严格遵循。

## 定位

“远看是现代国际商会官网，细看能感受到内蒙古文化。”
关键词：Minimal / Premium / Official / Institutional / Editorial / Trustworthy。

## 配色（已在 `app/globals.css` @theme 中定义）

| Token | 值 | 用途 |
| --- | --- | --- |
| `pine-800` | `#173D36` | 品牌主色：深色区块、主按钮、页头 |
| `pine-900` / `pine-950` | 更深墨绿 | 页脚、遮罩、渐变端点 |
| `ivory` | `#F4F1E9` | 页面主背景 |
| `white` | `#FFFFFF` | 卡片背景 |
| `gold` / `gold-light` / `gold-dark` | `#B89A63` 系 | 细线、眉题、悬停强调（只做细节，不做大面积） |
| `ink` | `#202522` | 主文字 |
| `ink-soft` | `#666B68` | 次要文字 |
| `cream` | `#F7F4ED` | 深色背景上的文字 |
| `oxblood` | `#762F2F` | 仅用于公告 / 文化类小面积标签，禁止大面积使用 |

## 字体

- `font-sans`：Inter + Noto Sans SC（正文）
- `font-serif`：Libre Baskerville + Noto Serif SC（标题、引言、数字）
- 中西文混排自动回退，无需手动切换字体。

## 排版节奏

- 区块间距：`py-20 md:py-28`；页面容器：`mx-auto max-w-7xl px-5 md:px-8`
- 区块标题一律使用 `<SectionHeading>`；页面页头一律使用 `<PageHeader>`
- 圆角克制：按钮 `rounded-[2px]`，卡片直角；禁止大圆角、厚阴影
- 悬停：`hover:-translate-y-0.5`／`hover:-translate-y-1` + `hover:border-gold/60`，过渡 `duration-300`

## 共用组件（必须复用，不要重复造）

| 组件 | 路径 | 说明 |
| --- | --- | --- |
| `SectionHeading` | `components/ui/section-heading.tsx` | eyebrow（英文大写眉题）+ 中文衬线标题 + 可选英文斜体副题；`dark` 用于深色背景 |
| `PageHeader` | `components/ui/page-header.tsx` | 内页深墨绿页头（h1），含回纹与地平线装饰 |
| `ButtonLink` | `components/ui/button-link.tsx` | variant: `primary/outline/dark/gold/link`，`withArrow` |
| `Badge` | `components/ui/badge.tsx` | tone: `pine/gold/oxblood/neutral/cream` |
| `Reveal` | `components/ui/reveal.tsx` | 进入视口淡入上移（client），`delay` 错落 |
| `StatCounter` | `components/ui/stat-counter.tsx` | 深色背景数字递增 |
| `ImageFrame` | `components/ui/image-frame.tsx` | 金色细线偏移边框图片 |
| `NewsCard` | `components/cards/news-card.tsx` | variant: `featured/default/mini/horizontal` |
| `EventCard` | `components/cards/event-card.tsx` | 活动卡片（含状态徽章） |
| `PartnerTile` | `components/cards/partner-tile.tsx` | 合作机构灰度 Logo 格 |
| `MeanderStrip` | `components/decor/meander-strip.tsx` | 金色回纹细条（分隔、页脚顶部） |
| `HorizonLines` | `components/decor/horizon-lines.tsx` | 草原地平线细曲线装饰 |

标签与文案映射统一取自 `lib/labels.ts`；日期格式化用 `lib/utils.ts` 的 `formatDate`。

## 文化元素使用守则

- 只用：极细回纹（`MeanderStrip`、`bg-meander-faint`）、地平线曲线、低饱和金色细线
- 出现位置：标题下方、分隔、页脚、深色区块的极淡底纹、图片边缘
- 禁止：大面积民族纹样、卡通蒙古包/人物/马匹、红金堆叠、龙纹祥云

## 动画守则

- 只用 `Reveal`（淡入上移）、图片 `group-hover:scale-105`、数字递增、金线展开
- 时长 ≤ 0.7s（图片缩放除外），一律尊重 `prefers-reduced-motion`
- 禁止：3D、粒子、滚动锁定、鼠标跟随

## 页面结构约定（App Router）

- 每个页面导出 `metadata`（标题 + 描述）
- 动态路由 `params` 是 Promise：`const { slug } = await params`（Next 16）
- 服务端组件优先；仅交互处（表单、筛选、动画容器）使用 `"use client"`
- 图片一律 `next/image` + 有意义的 `alt`；占位图 URL 处加 `TODO(上线前)` 注释
- 模拟数据只放 `data/*.ts`，页面不得内联长文案数据
