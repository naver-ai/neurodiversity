import Image from "next/image";
import { assetPath } from "@/app/_lib/asset-path";

/* ------------------------------------------------------------------ *
 * 연구 참여자 모집(플라이어) 페이지 공통 템플릿
 *
 * autifact 모집 페이지에서 반복되던 레이아웃 요소들을 재사용 가능한
 * 빌딩 블록으로 추출한 것입니다. 새로운 모집 페이지(예: seneca)는 이
 * 컴포넌트들을 조합해 콘텐츠만 채우면 동일한 디자인을 얻습니다.
 *
 * 색상은 페이지별 강조색(accent)만 주입하고, 공통 토큰(섹션 라벨/박스)은
 * 아래 RECRUITMENT_COLORS 를 그대로 사용합니다.
 * ------------------------------------------------------------------ */

/* 모든 모집 페이지가 공유하는 색상 토큰 (플라이어 기준) */
export const RECRUITMENT_COLORS = {
  tag: "#5a5a5a", // 섹션 라벨 태그 (어두운 회색)
  box: "#f3f3f3", // 연한 회색 박스
} as const;

/* ── 페이지 셸: 회색 캔버스 위에 흰 플라이어 카드 ──────────────────── */

export function RecruitmentShell({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[#f4f4f2] sm:py-12 sm:px-4">{children}</div>;
}

export function RecruitmentCard({ children }: { children: React.ReactNode }) {
  return (
    <article className="mx-auto max-w-[860px] overflow-hidden bg-white sm:rounded-2xl sm:shadow-[0_8px_40px_rgba(0,0,0,0.08)] sm:ring-1 sm:ring-black/5">
      <div className="px-6 py-8 sm:px-12 sm:py-10">{children}</div>
    </article>
  );
}

/* ── 헤더: 모집 뱃지(좌) + 기관 로고/라벨(우) ─────────────────────── */

export type BrandItem =
  | {
      kind: "logo";
      src: string;
      alt: string;
      width: number;
      height: number;
      /** 높이 제어용 className (예: "h-6 md:h-8 w-auto") */
      className?: string;
    }
  | { kind: "label"; text: string; className?: string };

export function RecruitmentHeader({
  badge,
  badgeColor,
  brands,
}: {
  badge: string;
  badgeColor: string;
  brands: BrandItem[];
}) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <span
        className="px-3 py-1.5 text-base font-extrabold text-white"
        style={{ backgroundColor: badgeColor }}
      >
        {badge}
      </span>
      <div className="flex items-center gap-3">
        {brands.map((b, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && <span className="h-4 w-px bg-gray-200" aria-hidden />}
            {b.kind === "logo" ? (
              <Image
                src={assetPath(b.src)}
                alt={b.alt}
                width={b.width}
                height={b.height}
                className={b.className ?? "h-6 md:h-8 w-auto"}
              />
            ) : (
              <span className={b.className ?? "text-sm md:text-lg font-bold text-gray-500"}>
                {b.text}
              </span>
            )}
          </div>
        ))}
      </div>
    </header>
  );
}

/* ── 타이틀 + (선택) 일러스트 ─────────────────────────────────────── */

export function RecruitmentHero({
  title,
  subtitle,
  image,
}: {
  title: React.ReactNode;
  /** 연구명 아래에 들어갈 부제 */
  subtitle?: React.ReactNode;
  image?: { src: string; alt: string; width: number; height: number } | null;
}) {
  return (
    <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-[26px] font-extrabold leading-snug tracking-tight text-gray-900 sm:text-[28px]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 text-[17px] font-bold leading-snug text-gray-500 sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
      {image ? (
        <div className="shrink-0 sm:w-64">
          <Image
            src={assetPath(image.src)}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-auto w-full"
            priority
          />
        </div>
      ) : null}
    </div>
  );
}

/* ── 안내 문구 (네이버 비영리 학술연구 고지) ─────────────────────── */

export function RecruitmentNote({
  color,
  children,
}: {
  color: string;
  /** 기본 고지 문구를 다른 내용으로 바꾸고 싶을 때 */
  children?: React.ReactNode;
}) {
  return (
    <p
      className="mt-10 border-t border-gray-100 pt-6 text-sm font-bold leading-relaxed"
      style={{ color }}
    >
      {children ?? (
        <>
          *본 연구는 네이버의 비영리 학술연구 조직에서 진행하는 연구로, 실험으로부터 얻은 지식과
          데이터는 네이버의 서비스/제품개발이 아닌 사회적/학술적 기여를 목적으로 활용됩니다.
        </>
      )}
    </p>
  );
}

/* ── 섹션: 어두운 풀블리드 라벨 + 본문 ───────────────────────────── */

export function SectionTag({ children }: { children: React.ReactNode }) {
  // 어두운 라벨이 흰 카드의 왼쪽 끝까지 꽉 차게(풀블리드) 이어지도록,
  // 카드의 좌측 패딩(px-6 / sm:px-12)을 음수 마진으로 상쇄하고 같은 만큼 안쪽 패딩을 줘서
  // 텍스트는 본문과 같은 위치에서 시작합니다.
  return (
    <span
      className="-ml-6 inline-block py-1.5 pl-6 pr-3 text-lg font-black text-white sm:-ml-12 sm:pl-12"
      style={{ backgroundColor: RECRUITMENT_COLORS.tag }}
    >
      {children}
    </span>
  );
}

export function RecruitmentSection({
  tag,
  children,
}: {
  tag: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <SectionTag>{tag}</SectionTag>
      {children}
    </section>
  );
}

/* ── 순서 있는 목록 (1. 2. 3. 또는 A. B. C.) ─────────────────────── */

export function OrderedList({
  items,
  marker = "decimal",
}: {
  items: React.ReactNode[];
  /** "decimal" → 1. 2. 3. / "upper-alpha" → A. B. C. */
  marker?: "decimal" | "upper-alpha";
}) {
  const label = (i: number) =>
    marker === "upper-alpha" ? `${String.fromCharCode(65 + i)}.` : `${i + 1}.`;
  return (
    <ol className="space-y-2.5">
      {items.map((node, i) => (
        <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-gray-700">
          <span className="shrink-0 font-bold text-gray-800">{label(i)}</span>
          <span>{node}</span>
        </li>
      ))}
    </ol>
  );
}

/* ── 순서 없는 목록 (• 불릿) ──────────────────────────────────────── */

export function UnorderedList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((node, i) => (
        <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-gray-700">
          <span className="shrink-0 font-bold text-gray-800" aria-hidden>
            •
          </span>
          <span>{node}</span>
        </li>
      ))}
    </ul>
  );
}

/* ── 참가 신청 및 문의 (CTA 버튼 + QR) ───────────────────────────── */

export function RecruitmentApply({
  description,
  cta,
  contact,
  qrSrc,
  qrCaption = "QR 스캔으로 신청",
}: {
  description: React.ReactNode;
  cta?: { label: string; href: string; color: string };
  /** CTA 아래에 들어갈 문의 정보 */
  contact?: React.ReactNode;
  qrSrc: string;
  qrCaption?: string;
}) {
  return (
    <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex-1">
        <p className="text-[15px] leading-relaxed text-gray-700">{description}</p>

        {cta ? (
          <a
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: cta.color }}
          >
            {cta.label}
            <span aria-hidden>→</span>
          </a>
        ) : null}

        {contact ? <div className="mt-5 text-sm text-gray-500">{contact}</div> : null}
      </div>

      <div className="shrink-0 self-center sm:self-start">
        <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
          <Image
            src={assetPath(qrSrc)}
            alt="참가 신청 설문 QR 코드"
            width={132}
            height={132}
            className="h-32 w-32"
          />
        </div>
        <p className="mt-2 text-center text-xs text-gray-400">{qrCaption}</p>
      </div>
    </div>
  );
}

/* ── 텍스트 헬퍼 ─────────────────────────────────────────────────── */

/* 밑줄 강조 (플라이어의 밑줄 표기 재현) */
export function U({ children }: { children: React.ReactNode }) {
  return <span className="underline decoration-1 underline-offset-2">{children}</span>;
}

/* 줄바꿈 방지 — 공백이 있어도 한 줄에 붙여서 표시할 구절을 감쌉니다. */
export function Keep({ children }: { children: React.ReactNode }) {
  return <span className="whitespace-nowrap">{children}</span>;
}
