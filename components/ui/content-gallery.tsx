import Image from "next/image";
import { MeanderStrip } from "@/components/decor/meander-strip";
import type { ContentImage } from "@/lib/types";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/asset";

interface ContentGalleryProps {
  images: ContentImage[];
  /** 图集标题，默认「活动图集」 */
  title?: string;
  titleEn?: string;
  className?: string;
}

/**
 * 活动图集：新闻 / 活动详情页正文之后的现场照片网格。
 * 有 caption 的图片在下方显示说明文字。
 */
export function ContentGallery({
  images,
  title = "活动图集",
  titleEn = "Gallery",
  className,
}: ContentGalleryProps) {
  if (images.length === 0) return null;

  return (
    <section className={cn("mt-16", className)} aria-label={title}>
      <div className="flex items-center gap-4">
        <h2 className="shrink-0 font-serif text-xl text-ink">
          {title}
          <span className="ml-3 text-[11px] uppercase tracking-[0.22em] text-gold-dark">
            {titleEn}
          </span>
        </h2>
        <span aria-hidden="true" className="h-px flex-1 bg-ink/10" />
        <span aria-hidden="true" className="w-16 shrink-0 text-gold/50">
          <MeanderStrip />
        </span>
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((img) => (
          <li key={img.src}>
            <figure className="group">
              <div className="relative aspect-[4/3] overflow-hidden border border-ink/10 transition-colors duration-300 group-hover:border-gold/60">
                <Image
                  src={assetPath(img.src)}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {img.caption && (
                <figcaption className="mt-2 text-xs leading-relaxed text-ink-soft">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
