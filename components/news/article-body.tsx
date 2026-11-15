import Image from "next/image";
import type { ArticleBlock } from "@/lib/types";
import { assetPath } from "@/lib/asset";
import { cn } from "@/lib/utils";

interface ArticleBodyProps {
  blocks: ArticleBlock[];
  className?: string;
}

/**
 * 新闻正文渲染：字符串为段落，其余块为小标题 / 配图 / 列表 / 人员名单。
 * 置于阅读宽度（max-w-3xl）栏内，排版与详情页其他细节（金色细线眉题、
 * 衬线小标题、方角）保持一致。
 */
export function ArticleBody({ blocks, className }: ArticleBodyProps) {
  return (
    <div
      className={cn(
        "space-y-6 text-[15px] leading-loose text-ink md:text-base",
        className,
      )}
    >
      {blocks.map((block, index) => {
        if (typeof block === "string") {
          return <p key={index}>{block}</p>;
        }

        switch (block.type) {
          case "heading":
            return (
              <div key={index} className="!mt-14 first:!mt-0">
                {block.eyebrow && (
                  <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-gold-dark">
                    <span aria-hidden="true" className="h-px w-8 bg-gold/70" />
                    {block.eyebrow}
                  </p>
                )}
                <h2 className="mt-3 font-serif text-xl leading-snug text-ink md:text-2xl">
                  {block.text}
                </h2>
              </div>
            );

          case "figure":
            return (
              <figure key={index} className="!my-10">
                <Image
                  src={assetPath(block.image.src)}
                  alt={block.image.alt}
                  width={block.image.width}
                  height={block.image.height}
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="h-auto w-full border border-ink/10"
                />
                {block.image.caption && (
                  <figcaption className="mt-3 flex items-start gap-3 text-xs leading-relaxed text-ink-soft">
                    <span
                      aria-hidden="true"
                      className="mt-[0.6em] h-px w-6 shrink-0 bg-gold/70"
                    />
                    {block.image.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "list": {
            const ListTag = block.ordered ? "ol" : "ul";
            return (
              <ListTag
                key={index}
                className={cn(
                  "space-y-3 pl-6 marker:text-gold-dark",
                  block.ordered ? "list-decimal" : "list-disc",
                )}
              >
                {block.items.map((item) => (
                  <li key={item} className="pl-1">
                    {item}
                  </li>
                ))}
              </ListTag>
            );
          }

          case "roster":
            return (
              <section
                key={index}
                className="!mt-10 border border-ink/10 bg-white"
                aria-label={block.title}
              >
                {block.title && (
                  <h3 className="border-b border-ink/10 px-5 py-4 font-serif text-base text-ink md:px-6">
                    {block.title}
                  </h3>
                )}
                <ol className="divide-y divide-ink/10">
                  {block.members.map((member, memberIndex) => (
                    <li
                      key={member.name}
                      className="grid grid-cols-[2rem_1fr] gap-x-3 px-5 py-3.5 text-sm leading-relaxed md:grid-cols-[2.5rem_13.5rem_1fr] md:px-6"
                    >
                      <span className="font-serif text-gold-dark">
                        {String(memberIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="font-medium text-ink">{member.name}</span>
                      <span className="col-start-2 text-ink-soft md:col-start-3">
                        {member.role}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
