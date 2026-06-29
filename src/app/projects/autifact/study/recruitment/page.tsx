import type { Metadata } from "next";
import { loadYAML } from "@/app/_lib/utils";
import type { PressItem } from "@/app/_types";
import { PressCard } from "@/app/_components/PressCard";
import {
  RecruitmentShell,
  RecruitmentCard,
  RecruitmentHeader,
  RecruitmentHero,
  RecruitmentNote,
  RecruitmentSection,
  RecruitmentBeat,
  RecruitmentApply,
  SectionTag,
  OrderedList,
  U,
  Keep,
} from "@/app/_components/RecruitmentTemplate";

/* ------------------------------------------------------------------ *
 * autifact 연구 참여자 모집 페이지
 * 플라이어(autifact_recruitment_flyer.pdf)를 웹으로 그대로 옮긴 정적 페이지입니다.
 * 공통 디자인은 RecruitmentTemplate 의 빌딩 블록을 재사용합니다.
 * 딥링크 전용: /projects/autifact/study/recruitment
 * ------------------------------------------------------------------ */

const FORM_URL = "https://forms.gle/XcRziinN3t4QhfaBA";
const CONTACT_EMAIL = "dl_neuro@navercorp.com";

// 플라이어 원본 일러스트(부모와 아이가 태블릿을 보는 장면). 배경 투명 PNG.
const HERO_SRC = "/assets/projects/autifact/hero.png";

export const metadata: Metadata = {
  title: "연구 참여자 모집 | AI 그림일기 기반 'What if..' 대화 시스템 연구",
  description:
    "자폐스펙트럼장애(ASD)로 진단받은 만 7~18세 아동·청소년과 양육자를 대상으로, AI 그림일기 기반 'What if..' 대화 시스템이 사회적 의사소통에 미치는 영향을 연구합니다.",
  // 딥링크 공유용 페이지이므로 검색 노출은 막아 둡니다.
  robots: { index: false, follow: false },
};

/* ── 색상 토큰 (플라이어 기준, 페이지 고유 강조색) ───────────────── */
const C = {
  mint: "#28a156", // "연구 참여자 모집" 뱃지
  orange: "#ef7a3e", // 소제목 (아동 및 청소년 / 양육자)
  red: "#e23b2e", // 강조 안내 문구
  box: "#f3f3f3", // 연한 회색 박스
};

export default function AutifactRecruitmentPage() {
  // 연구진의 과거 연구 사례 / 보도자료 (참고용) — 메인 사이트의 보도자료 리스트를 재사용
  const pressItems = [...loadYAML<PressItem[]>("press.yml")].sort(
    (a, b) => b.year - a.year || (b.month ?? 0) - (a.month ?? 0)
  );

  return (
    <RecruitmentShell>
      <RecruitmentCard>
        <RecruitmentHeader
          badge="연구 참여자 모집"
          badgeColor={C.mint}
          brands={[
            {
              kind: "logo",
              src: "/assets/logos/ai_lab_logo_horizontal.png",
              alt: "NAVER AI LAB",
              width: 2514,
              height: 390,
            },
            { kind: "label", text: "도닥임아동발달센터" },
          ]}
        />

        <RecruitmentHero
          title={
            <>
              AI 그림일기 기반 <Keep>“What if..”</Keep> <Keep>대화 시스템이</Keep> 자폐 아동 및
              청소년의 <Keep>사회적 의사소통</Keep>에 미치는 영향 연구
            </>
          }
          image={{
            src: HERO_SRC,
            alt: "부모와 아이가 태블릿으로 시스템을 사용하는 모습",
            width: 1256,
            height: 929,
          }}
        />

        {/* ── 하단 안내 ──────────────────────────────────────── */}
        <RecruitmentNote color={C.mint} />

        {/* ── 연구 배경 ───────────────────────────────────────── */}
        <RecruitmentSection tag="연구 배경">
          <div className="mt-5 space-y-5">
            <RecruitmentBeat
              image={{
                src: "/assets/projects/autifact/autifact_background_cut_1.png",
                alt: "교실에서 또래와 갈등 상황을 마주한 아이",
                width: 1024,
                height: 768,
              }}
            >
              학교 등 새로운 환경에 들어선 자폐스펙트럼장애 아동 및 청소년은 또래/교사와의 여러{" "}
              <U>사회적 갈등 상황</U>을 마주하며 어려움을 겪을 수 있습니다.
            </RecruitmentBeat>

            <RecruitmentBeat
              image={{
                src: "/assets/projects/autifact/autifact_background_cut_2.png",
                alt: "어떤 말을 해야 할지 고민하는 아이",
                width: 1024,
                height: 768,
              }}
            >
              이런 순간에는 상대의 생각과 감정을 헤아리고, 어떤 상황에서 어떤 말을 해야 할지 떠올리는
              일이 쉽지 않습니다.
            </RecruitmentBeat>

            <RecruitmentBeat
              image={{
                src: "/assets/projects/autifact/autifact_background_cut_3.png",
                alt: "AI 시스템을 함께 사용하는 아이와 양육자",
                width: 1024,
                height: 768,
              }}
            >
              이에 저희 연구진은 이러한 사회적 상황을 <U>AI 친구와 함께 안전하게 연습</U>해 볼 수
              있도록 돕는 태블릿 앱을 구상하였습니다.
            </RecruitmentBeat>
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
            본 연구는 이 앱이 자폐 아동 및 청소년의 <U>사회적 의사소통</U>에 미치는 영향을 과학적으로
            검증하기 위해 진행됩니다. <b>참여 아동청소년</b>은 실제로 마주할 수 있는 사회적 상황을 새로운 AI기술을 통해 탐색해 볼 기회를 가질 수 있으며, <b>양육자</b>께서는 자녀의 안전한 앱 사용을 위한 도우미 역할로 참여하게 됩니다.
          </p>
        </RecruitmentSection>

        {/* ── 모집 대상 ───────────────────────────────────────── */}
        <RecruitmentSection tag="모집 대상">
          <p className="mt-4 text-[15px] font-bold leading-relaxed text-gray-800">
            아래 조건을 만족하는 만 7~18세 (초등학교 1학년 ~ 고등학교 3학년)의
            <br className="hidden sm:block" /> 자폐스펙트럼장애(ASD)로 진단받은 아동 및 청소년과
            양육자
          </p>

          <div className="mt-4 rounded-xl px-6 py-6 sm:px-8" style={{ backgroundColor: C.box }}>
            <h3 className="text-base font-extrabold" style={{ color: C.orange }}>
              아동 및 청소년
            </h3>
            <div className="mt-3">
              <OrderedList
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
              <OrderedList
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
        </RecruitmentSection>

        {/* ── 연구 절차 및 소요시간 ───────────────────────────── */}
        <RecruitmentSection tag="연구 절차 및 소요시간">
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
                <span className="text-[15px] leading-relaxed text-gray-600 sm:pt-px">{step.d}</span>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-[15px] font-bold leading-relaxed" style={{ color: C.red }}>
            실험은 2026년 7-8월 중 진행 예정이며, 자세한 일정은 연구 시작 전 협의를 통해 결정합니다.
          </p>
        </RecruitmentSection>

        {/* ── 연구 참가 사례 ─────────────────────────────────── */}
        <RecruitmentSection tag="연구 참가 사례">
          <p className="mt-4 text-[15px] font-medium leading-relaxed text-gray-700">
            각 그룹마다 소정의 사례비(신청 설문 참조)를{" "}
            <span className="font-bold text-gray-900">네이버페이 포인트</span>로 지급합니다.
          </p>
        </RecruitmentSection>

        {/* ── 참가 신청 및 문의 ──────────────────────────────── */}
        <RecruitmentSection tag="참가 신청 및 문의">
          <RecruitmentApply
            description={
              <>
                연구 참여를 희망하시는 분들은 아래 버튼 또는 QR 코드 스캔을 통해 참가 신청을
                부탁드립니다.
              </>
            }
            cta={{ label: "참가 신청하기", href: FORM_URL, color: C.orange }}
            contact={
              <p>
                <span className="font-bold text-gray-700">문의</span> 네이버 AI랩 신경다양성 연구팀{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
            }
            qrSrc="/assets/projects/autifact/recruitment-qr.svg"
          />
        </RecruitmentSection>
      </RecruitmentCard>

      {/* ── 참고: 연구진의 과거 연구 사례 / 보도자료 — 패널 없이 회색 배경 위에 노출 ── */}
      <section className="mx-auto mt-2 max-w-[860px] sm:mt-6">
        <div className="px-6 py-8 sm:px-12">
          <SectionTag>연구진의 과거 연구 사례 / 보도자료</SectionTag>
          <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
            참고를 위해 연구팀의 관련 연구 및 언론 보도 사례를 함께 안내드립니다.
          </p>
          {/* PressCard 구분선(border-gray-100)이 회색 배경에 묻히므로 약간 진하게 덮어씁니다 */}
          <div className="mt-2 flex flex-col [&>article]:border-gray-200">
            {pressItems.map((item) => (
              <PressCard key={item.id} item={item} compact />
            ))}
          </div>
        </div>
      </section>
    </RecruitmentShell>
  );
}
