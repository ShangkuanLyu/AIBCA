# 澳大利亚内蒙古商会官方网站

Australian Inner Mongolia Chamber of Commerce — official website.

基于 **Next.js (App Router) + React + TypeScript + Tailwind CSS** 构建的现代化、响应式商会官网。

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发（http://localhost:3000）
npm run dev

# 生产构建 + 启动
npm run build
npm start

# 代码检查
npm run lint
```

## 目录结构

```
app/                 # App Router 页面与路由
  page.tsx           # 首页
  about/  news/  events/  membership/  business/  contact/
  news/[slug]/       # 新闻详情
  events/[slug]/     # 活动详情
  privacy/  terms/   # 法律页面（占位）
  sitemap.ts robots.ts
components/
  layout/            # 导航栏、页脚、Logo
  home/              # 首页各区块
  ui/                # 通用 UI（SectionHeading、ButtonLink、Badge、Reveal…）
  cards/             # 新闻 / 活动 / 合作机构卡片
  forms/             # 共享表单控件
  decor/             # 蒙古回纹、地平线等装饰组件
  providers/         # 语言（中/EN）Provider
data/                # 模拟内容数据（未来由 CMS 替换）
lib/                 # 类型、站点配置、标签映射、工具函数
docs/DESIGN-GUIDE.md # 全站设计规范
```

## 内容维护

- 所有展示内容集中在 `data/*.ts`，字段类型见 `lib/types.ts`
- 站点名称 / 联系方式 / 社交链接在 `lib/site.ts`
- 上线前需替换的内容均以 `TODO(上线前)` 注释或 `[待填写]` 标注

## 技术要点

- Next/Image + Unsplash 占位图（`next.config.ts` 中配置了 remotePatterns）
- next/font 加载 Inter、Libre Baskerville、Noto Sans SC、Noto Serif SC
- Framer Motion 轻量入场动画（尊重 prefers-reduced-motion）
- 语义化 HTML + 元数据 + JSON-LD + sitemap/robots（SEO）
