# CMS 接入建议

当前全站内容集中在 `data/*.ts`，字段类型定义于 `lib/types.ts`，接口边界清晰，可平滑迁移至任意 Headless CMS。

## 推荐方案：Sanity

对本项目（新闻/活动为主、双语预留、编辑非技术人员）最合适：

- **Portable Text** 富文本可直接替换目前的 `body: string[]` 段落数组
- 内置图片 CDN（裁剪、格式转换），替换 Unsplash 占位图后无需自建图库
- `next-sanity` + ISR（`revalidate`）即可增量更新，无需重新部署
- 国际化插件（`@sanity/document-internationalization`）覆盖 zh/en 双语需求

### 迁移步骤

1. 在 Sanity 中按 `lib/types.ts` 建 schema：`newsArticle`、`event`、`member`、`partner`、`boardMember`（字段一一对应，`...En` 字段改为 i18n 文档或字段级翻译）
2. 新建 `lib/cms.ts`，将 `data/*.ts` 中的取数函数（`getNewsBySlug`、`getUpcomingEvents` 等）改为 GROQ 查询，**保持函数签名不变**——页面代码几乎无需改动
3. `next.config.ts` 的 `images.remotePatterns` 换成 `cdn.sanity.io`
4. 详情页从 `generateStaticParams` + 全量 SSG 改为 ISR：`export const revalidate = 3600`
5. 表单（入会申请/联系我们）接入：Resend/SendGrid 发邮件，或 HubSpot/Airtable 存线索；在 `app/api/` 下新增 Route Handler，替换表单组件中标注 `TODO(上线前)` 的提交逻辑

## 备选：Strapi

若商会希望数据自托管（如放在自购 VPS），选 Strapi：Content-Type 同样按 `lib/types.ts` 建模，REST/GraphQL 取数，i18n 插件做双语。运维成本高于 Sanity（需自己维护数据库、备份、升级）。

## 轻量过渡：不上 CMS

短期内也可以只用 Git 管理内容——秘书处每次发新闻即编辑 `data/news.ts` 提交，Vercel 自动部署。类型系统会在构建时拦截字段错误。适合每月更新量少于 5 篇的阶段。
