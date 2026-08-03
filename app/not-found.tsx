import { MeanderStrip } from "@/components/decor/meander-strip";
import { ButtonLink } from "@/components/ui/button-link";

/** 404 页面 */
export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="font-serif text-7xl text-pine-800">404</p>
      <div className="mt-6 w-32 text-gold/60">
        <MeanderStrip />
      </div>
      <h1 className="mt-6 font-serif text-2xl">页面未找到</h1>
      <p className="mt-3 text-sm text-ink-soft">
        您访问的页面不存在或已被移动。Page not found.
      </p>
      <div className="mt-8">
        <ButtonLink href="/" variant="outline">
          返回首页
        </ButtonLink>
      </div>
    </section>
  );
}
