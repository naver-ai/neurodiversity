import type { Metadata } from "next";
import Image from "next/image";
import { assetPath } from "@/app/_lib/asset-path";
import { loadYAML } from "@/app/_lib/utils";
import type { PressItem } from "@/app/_types";
import { PressCard } from "@/app/_components/PressCard";

/* ------------------------------------------------------------------ *
 * autifact 연구 참여자 모집 페이지
 * 플라이어(autifact_recruitment_flyer.pdf)를 웹으로 그대로 옮긴 정적 페이지입니다.
 * 딥링크 전용: /projects/autifact/study/recruitment
 * ------------------------------------------------------------------ */

const FORM_URL = "https://forms.gle/XcRziinN3t4QhfaBA";
const CONTACT_EMAIL = "dl_neuro@navercorp.com";

// 플라이어 원본 일러스트(부모와 아이가 태블릿을 보는 장면). 배경 투명 PNG.
const HERO_SRC: string | null = "/assets/projects/autifact/hero.png";

export const metadata: Metadata = {
  title: "연구 참여자 모집 | AI 그림일기 기반 'What if..' 대화 시스템 연구",
  description:
    "자폐스펙트럼장애(ASD)로 진단받은 만 7~18세 아동·청소년과 양육자를 대상으로, AI 그림일기 기반 'What if..' 대화 시스템이 사회적 의사소통에 미치는 영향을 연구합니다.",
  // 딥링크 공유용 페이지이므로 검색 노출은 막아 둡니다.
  robots: { index: false, follow: false },
};

/* ── 색상 토큰 (플라이어 기준, 필요 시 조정) ──────────────────────── */
const C = {
  mint: "#28a156", // "연구 참여자 모집" 뱃지
  tag: "#5a5a5a", // 섹션 라벨 태그
  orange: "#ef7a3e", // 소제목 (아동 및 청소년 / 양육자)
  red: "#e23b2e", // 강조 안내 문구
  box: "#f3f3f3", // 연한 회색 박스
};

function SectionTag({ children }: { children: React.ReactNode }) {
  // 어두운 라벨이 흰 카드의 왼쪽 끝까지 꽉 차게(풀블리드) 이어지도록,
  // 카드의 좌측 패딩(px-6 / sm:px-12)을 음수 마진으로 상쇄하고 같은 만큼 안쪽 패딩을 줘서
  // 텍스트는 본문과 같은 위치에서 시작합니다.
  return (
    <span
      className="-ml-6 inline-block py-1.5 pl-6 pr-3 text-lg font-black text-white sm:-ml-12 sm:pl-12"
      style={{ backgroundColor: C.tag }}
    >
      {children}
    </span>
  );
}

/* 번호 매긴 항목 (1. 2. 3.) */
function Numbered({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="space-y-2.5">
      {items.map((node, i) => (
        <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-gray-700">
          <span className="shrink-0 font-bold text-gray-800">{i + 1}.</span>
          <span>{node}</span>
        </li>
      ))}
    </ol>
  );
}

export default function AutifactRecruitmentPage() {
  // 연구진의 과거 연구 사례 / 보도자료 (참고용) — 메인 사이트의 보도자료 리스트를 재사용
  const pressItems = [...loadYAML<PressItem[]>("press.yml")].sort(
    (a, b) => b.year - a.year || (b.month ?? 0) - (a.month ?? 0)
  );

  return (
    <div className="min-h-screen bg-[#f4f4f2] py-8 sm:py-12 px-4">
      <article className="mx-auto max-w-[860px] overflow-hidden rounded-2xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
        <div className="px-6 py-8 sm:px-12 sm:py-10">
          {/* ── 헤더: 뱃지 + 로고 ───────────────────────────────── */}
          <header className="flex flex-wrap items-center justify-between gap-4">
            <span
              className="px-3 py-1.5 text-base font-extrabold text-white"
              style={{ backgroundColor: C.mint }}
            >
              연구 참여자 모집
            </span>
            <div className="flex items-center gap-3">
              <Image
                src={assetPath("/assets/logos/ai_lab_logo_horizontal.png")}
                alt="NAVER AI LAB"
                width={2514}
                height={390}
                className="h-6 md:h-8 w-auto"
              />
              <span className="h-4 w-px bg-gray-200" aria-hidden />
              <span className="text-sm md:text-lg font-bold text-gray-500">도닥임아동발달센터</span>
            </div>
          </header>

          {/* ── 타이틀 + 일러스트 ───────────────────────────────── */}
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-[26px] font-extrabold leading-snug tracking-tight text-gray-900 sm:text-[28px]">
              AI 그림일기 기반 <Keep>“What if..”</Keep> <Keep>대화 시스템이</Keep> 자폐 아동 및 청소년의 <Keep>사회적 의사소통</Keep>에 미치는 영향 연구
            </h1>
            <div className="shrink-0 sm:w-64">
              {HERO_SRC ? (
                <Image
                  src={assetPath(HERO_SRC)}
                  alt="부모와 아이가 태블릿으로 시스템을 사용하는 모습"
                  width={1256}
                  height={929}
                  className="h-auto w-full"
                  priority
                />
              ) : (
                <div className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 text-center text-xs text-gray-400">
                  <span className="text-2xl">🧑‍🤝‍🧒</span>
                  <span className="mt-1 px-2 leading-tight">일러스트 영역<br />(에셋 교체 예정)</span>
                </div>
              )}
            </div>
          </div>

          {/* ── 모집 대상 ───────────────────────────────────────── */}
          <section className="mt-10">
            <SectionTag>모집 대상</SectionTag>
            <p className="mt-4 text-[15px] font-bold leading-relaxed text-gray-800">
              아래 조건을 만족하는 만 7~18세 (초등학교 1학년 ~ 고등학교 3학년)의
              <br className="hidden sm:block" /> 자폐스펙트럼장애(ASD)로 진단받은 아동 및 청소년과 양육자
            </p>

            <div className="mt-4 rounded-xl px-6 py-6 sm:px-8" style={{ backgroundColor: C.box }}>
              <h3 className="text-base font-extrabold" style={{ color: C.orange }}>
                아동 및 청소년
              </h3>
              <div className="mt-3">
                <Numbered
                  items={[
                    <>
                      인지 기능이 <U><b>경계선이거나 그 이상</b></U>인 아동 및 청소년 (표준화된 지능검사
                      결과 <b>IQ 60</b> 이상)
                    </>,
                    <>
                      발화가 원활하고 <U>일상적 대화 수준의 구어 의사소통이 가능</U>한 아동 및 청소년
                      (2~3문장 이상의 자발적 발화가 가능하며, 질문에 대한 언어적 응답이 가능한 수준)
                    </>,
                    <>
                      대화 내용을 이해할 수 있으나 사회적 의사소통(타인의 생각·감정 이해, 상황에 적절한
                      표현, 상호적 대화 등)에 <U>어려움이 있는</U> 아동 및 청소년
                    </>,
                  ]}
                />
              </div>

              <h3 className="mt-6 text-base font-extrabold" style={{ color: C.orange }}>
                양육자 (부모 중 1인)
              </h3>
              <div className="mt-3">
                <Numbered
                  items={[
                    <>대면/비대면으로 진행되는 오리엔테이션 및 인터뷰에 참여가 가능하신 분</>,
                    <>스마트폰을 소지하고 계시는 분</>,
                    <>
                      3주의 기간 동안 하루 2-30분 진행되는 Tablet PC 기반의 시스템을 자녀와 함께 사용
                      가능한 분
                    </>,
                  ]}
                />
              </div>
            </div>
          </section>

          {/* ── 연구 절차 및 소요시간 ───────────────────────────── */}
          <section className="mt-10">
            <SectionTag>연구 절차 및 소요시간</SectionTag>
            <ol className="mt-5 space-y-3">
              {[
                {
                  n: "오리엔테이션",
                  d: "연구 배경 및 시스템 사용에 대한 설명을 제공합니다. (약 40분)",
                },
                {
                  n: "시스템 사용",
                  d: "3주의 기간 동안 자택에서 15회 이상 Tablet PC를 통해 시스템을 사용합니다. (태블릿은 연구팀에서 제공, 매회 약 2-30분 이내)",
                },
                {
                  n: "설문조사/인터뷰",
                  d: "전반적인 시스템 사용 경험에 대한 설문조사 및 인터뷰를 진행합니다. (약 1시간)",
                },
              ].map((step, i) => (
                <li key={i} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <span className="flex shrink-0 items-baseline gap-2 sm:w-36">
                    <span className="font-bold text-gray-800">{i + 1}.</span>
                    <span className="font-bold text-gray-900">{step.n}</span>
                  </span>
                  <span className="text-[15px] leading-relaxed text-gray-600 sm:pt-px">
                    {step.d}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-[15px] font-bold leading-relaxed" style={{ color: C.red }}>
              실험은 2026년 7-8월 중 진행 예정이며, 자세한 일정은 연구 시작 전 협의를 통해 결정합니다.
            </p>
          </section>

          {/* ── 연구 참가 사례 ─────────────────────────────────── */}
          <section className="mt-10">
            <SectionTag>연구 참가 사례</SectionTag>
            <p className="mt-4 text-[15px] font-medium leading-relaxed text-gray-700">
              각 그룹마다 소정의 사례비(신청 설문 참조)를{" "}
              <span className="font-bold text-gray-900">네이버페이 포인트</span>로 지급합니다.
            </p>
          </section>

          {/* ── 참가 신청 및 문의 ──────────────────────────────── */}
          <section className="mt-10">
            <SectionTag>참가 신청 및 문의</SectionTag>
            <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <p className="text-[15px] leading-relaxed text-gray-700">
                  연구 참여를 희망하시는 분들은 아래 버튼 또는 QR 코드 스캔을 통해 참가 신청을
                  부탁드립니다.
                </p>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: C.orange }}
                >
                  참가 신청하기
                  <span aria-hidden>→</span>
                </a>

                <p className="mt-5 text-sm text-gray-500">
                  <span className="font-bold text-gray-700">문의</span> 네이버 AI랩 신경다양성 연구팀{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-brand hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>

              <div className="shrink-0 self-center sm:self-start">
                <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                  <Image
                    src={assetPath("/assets/projects/autifact/recruitment-qr.svg")}
                    alt="참가 신청 구글폼 QR 코드"
                    width={132}
                    height={132}
                    className="h-32 w-32"
                  />
                </div>
                <p className="mt-2 text-center text-xs text-gray-400">QR 스캔으로 신청</p>
              </div>
            </div>
          </section>


          {/* ── 하단 안내 ──────────────────────────────────────── */}
          <p className="mt-10 border-t border-gray-100 pt-6 text-sm font-bold leading-relaxed" style={{ color: C.mint }}>
            *본 연구는 네이버의 비영리 학술연구 조직에서 진행하는 연구로, 참가자로부터 얻은 지식은 네이버의
            서비스/제품개발이 아닌 사회적/학술적 기여를 목적으로 활용됩니다.
          </p>

          {/* ── 참고: 연구진의 과거 연구 사례 / 보도자료 ─────────── */}
          <section className="mt-10">
            <SectionTag>연구진의 과거 연구 사례 / 보도자료</SectionTag>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
              참고를 위해 연구팀의 관련 연구 및 언론 보도 사례를 함께 안내드립니다.
            </p>
            <div className="mt-2 flex flex-col">
              {pressItems.map((item) => (
                <PressCard key={item.id} item={item} compact />
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}

/* 밑줄 강조 (플라이어의 밑줄 표기 재현) */
function U({ children }: { children: React.ReactNode }) {
  return <span className="underline decoration-1 underline-offset-2">{children}</span>;
}

/* 줄바꿈 방지 — 공백이 있어도 한 줄에 붙여서 표시할 구절을 감쌉니다. */
function Keep({ children }: { children: React.ReactNode }) {
  return <span className="whitespace-nowrap">{children}</span>;
}
