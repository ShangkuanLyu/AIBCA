import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { boardMembers } from "@/data/board";
import type { BoardMember } from "@/lib/types";
import { cn } from "@/lib/utils";

/** 会长层职务（单独一排大卡展示） */
const LEADERSHIP_ROLES = ["名誉会长", "会长", "执行会长"];

function sortByOrder(members: BoardMember[]) {
  return [...members].sort((a, b) => a.order - b.order);
}

/** 首字占位块（无照片成员统一呈现方式） */
function InitialBlock({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex items-center justify-center border border-gold/30 bg-pine-50 font-serif text-pine-800/50",
        className,
      )}
    >
      {name.trim().charAt(0)}
    </div>
  );
}

/** 会长层大卡（照片或首字占位 + 职务 + 简介） */
function LeaderCard({ member }: { member: BoardMember }) {
  return (
    <article className="flex h-full flex-col border border-ink/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold/60">
      {member.photo ? (
        <div className="relative aspect-[3/4] overflow-hidden">
          {/* TODO(上线前)：替换为成员正式肖像照 */}
          <Image
            src={member.photo}
            alt={`${member.name}（${member.role}）肖像照`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <InitialBlock name={member.name} className="aspect-[3/4] text-6xl" />
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[10px] uppercase tracking-[0.22em] text-gold-dark">
          {member.roleEn ?? member.role}
        </p>
        <h3 className="mt-2 font-serif text-xl text-ink">{member.name}</h3>
        <p className="mt-1 text-sm text-ink-soft">{member.role}</p>
        {member.bio && (
          <p className="mt-4 border-t border-ink/10 pt-4 text-sm leading-relaxed text-ink-soft">
            {member.bio}
          </p>
        )}
      </div>
    </article>
  );
}

/** 其余职务的紧凑成员卡 */
function MemberTile({ member }: { member: BoardMember }) {
  const showEn = member.nameEn && member.nameEn !== member.name;
  return (
    <article className="h-full border border-ink/10 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60">
      <div className="flex items-center gap-4">
        <InitialBlock name={member.name} className="h-12 w-12 flex-none text-lg" />
        <div>
          <h4 className="font-serif text-base text-ink">{member.name}</h4>
          {showEn && (
            <p className="mt-0.5 text-[11px] text-ink-soft">{member.nameEn}</p>
          )}
        </div>
      </div>
      {member.bio && (
        <p className="mt-4 border-t border-ink/10 pt-3 text-sm leading-relaxed text-ink-soft">
          {member.bio}
        </p>
      )}
    </article>
  );
}

/** 关于页 · 理事会成员（按职务分层展示，数据来自 data/board.ts） */
export function BoardSection() {
  const sorted = sortByOrder(boardMembers);
  const leaders = sorted.filter((m) => LEADERSHIP_ROLES.includes(m.role));
  const others = sorted.filter((m) => !LEADERSHIP_ROLES.includes(m.role));

  /** 其余成员按职务分组，保持出现顺序 */
  const groups: Array<{ role: string; roleEn?: string; members: BoardMember[] }> =
    [];
  for (const member of others) {
    const group = groups.find((g) => g.role === member.role);
    if (group) {
      group.members.push(member);
    } else {
      groups.push({ role: member.role, roleEn: member.roleEn, members: [member] });
    }
  }

  return (
    <section id="board" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Board of Directors"
          title="理事会成员"
          titleEn="The Board"
          description="第二届理事会于 2024 年 11 月就职。以下名单按职务排序，最终以商会正式公布为准。"
        />

        {/* 会长层：一排大卡 */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((member, i) => (
            <Reveal key={member.id} delay={i * 0.08} className="h-full">
              <LeaderCard member={member} />
            </Reveal>
          ))}
        </div>

        {/* 其余职务：按职务分组的紧凑列表 */}
        <div className="mt-16 space-y-12">
          {groups.map((group) => (
            <Reveal key={group.role}>
              <h3 className="flex items-baseline gap-3 font-serif text-xl text-ink">
                <span aria-hidden="true" className="h-px w-6 self-center bg-gold/60" />
                {group.role}
                {group.roleEn && (
                  <span className="text-[11px] uppercase tracking-[0.2em] text-gold-dark">
                    {group.roleEn}
                  </span>
                )}
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.members.map((member) => (
                  <MemberTile key={member.id} member={member} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
