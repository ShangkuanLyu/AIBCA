import Image from "next/image";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/asset";

interface ImageFrameProps {
  src: string;
  alt: string;
  /** Tailwind aspect 类，例如 "aspect-[4/3]" */
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  caption?: string;
  /** 金色细线偏移边框的方向 */
  offset?: "br" | "tl";
  className?: string;
}

/** 带极细金色偏移边框的图片（商会摄影图的统一呈现方式） */
export function ImageFrame({
  src,
  alt,
  aspect = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  caption,
  offset = "br",
  className,
}: ImageFrameProps) {
  return (
    <figure className={cn("relative", className)}>
      <div className="relative">
        {/* 金色细线偏移边框 */}
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 border border-gold/50",
            offset === "br" ? "translate-x-3 translate-y-3" : "-translate-x-3 -translate-y-3",
          )}
        />
        <div className={cn("relative overflow-hidden", aspect)}>
          <Image
            src={assetPath(src)}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-4 text-xs leading-relaxed text-ink-soft">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
