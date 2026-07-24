import type { Metadata } from "next";
import {
  RecruitmentShell,
  RecruitmentCard,
  RecruitmentHeader,
  RecruitmentHero,
  RecruitmentNote,
  RecruitmentSection,
  RecruitmentApply,
  UnorderedList,
  U,
  Keep,
} from "@/app/_components/RecruitmentTemplate";

/* ------------------------------------------------------------------ *
 * seneca lab2026 연구 참여자 모집 페이지 (lab study)
 * 플라이어(최종.pdf, "나만의 맞춤형 인공지능 연구")를 웹으로 옮긴 정적 페이지입니다.
 * 챗지피티 같은 대화형 AI 앱을 직접 체험하고 인터뷰에 참여할 중장년층 참여자를 모집합니다.
 * 공통 디자인은 RecruitmentTemplate 의 빌딩 블록을 재사용합니다.
 * 딥링크 전용: /projects/seneca/lab2026/recruitment
 * ------------------------------------------------------------------ */

const FORM_URL = "https://forms.gle/LyZ9uedZiqpyySDs7";
const CONTACT_EMAIL = "dl_hci@navercorp.com";

// 강조색 (민트) — 뱃지 · CTA 버튼 · 강조 문구
const ACCENT = "#28a156";

export const metadata: Metadata = {
  title: "연구 참여자 모집 | 중장년층 맞춤형 대화형 인공지능 자유 대화 체험 연구",
  description:
    "만 60세 이상 중장년층을 대상으로, 챗지피티 같은 대화형 인공지능 앱에서 건강·복지·인간관계를 주제로 자유 대화를 체험하고 인터뷰에 참여할 분을 모집합니다. (네이버-미시건 대학교 공동연구)",
  // 딥링크 공유용 페이지이므로 검색 노출은 막아 둡니다.
  robots: { index: false, follow: false },
};

// 참여 안내 (기간 · 실험 내용 · 사례비 · 장소)
const PARTICIPATION: { label: string; value: React.ReactNode }[] = [
  { label: "기간", value: <>2026년 7/20 ~ 8/30 중 1회, 90분 이내</> },
  {
    label: "실험 내용",
    value: <>간단한 사전 질문, 챗지피티 같은 인공지능 앱 사용 체험, 사용 경험 인터뷰</>,
  },
  {
    label: "사례비",
    value: (
      <>
        10만원 네이버페이 포인트 혹은 국민관광문화상품권
        <br className="hidden sm:block" /> (전국 주요 백화점·대형마트·호텔 등 폭넓게 사용 가능)
      </>
    ),
  },
  { label: "장소", value: <>선호 장소 선택 후 담당자와 개별 협의</> },
];

export default function SenecaLab2026RecruitmentPage() {
  return (
    <RecruitmentShell>
      <RecruitmentCard>
        <RecruitmentHeader
          badge="연구 참여자 모집"
          badgeColor={ACCENT}
          brands={[
            {
              kind: "logo",
              src: "/assets/logos/ai_lab_logo_horizontal.png",
              alt: "NAVER AI LAB",
              width: 2514,
              height: 390,
            },
            {
              kind: "logo",
              src: "/assets/logos/university-of-michigan.png",
              alt: "University of Michigan",
              width: 1541,
              height: 161,
              className: "h-5 md:h-6 w-auto",
            },
          ]}
        />

        <RecruitmentHero
          title={
            <>
              중장년층의 <Keep>개인 맞춤형</Keep> 의사소통 지원을 위한{" "}
              <Keep>대화형 인공지능</Keep> 연구
            </>
          }
          subtitle={<>챗지피티 같은 인공지능 앱에서 건강·복지·인간관계 자유 대화 체험하기</>}
          image={{
            src: "/assets/projects/seneca/oa_seneca_usage.png",
            alt: "중장년층이 컴퓨터로 AI 도우미와 대화하는 모습 일러스트",
            width: 832,
            height: 468,
          }}
        />

        {/* ── 안내 문구 (Autifact와 동일한 민트색) ───────────────── */}
        <RecruitmentNote color={ACCENT} />

        {/* ── 연구 소개 ─────────────────────────────────────────── */}
        <RecruitmentSection tag="연구 소개">
          <p className="mt-4 leading-relaxed text-gray-700">
            저희 네이버-미시건 대학교 공동연구진은 사용자와의 깊은 상호 이해를 바탕으로 신뢰감을 주는
            맞춤형 인공지능을 연구하고 있습니다. 이번 연구에서는 챗지피티 같은 대화형 인공지능이 탑재된
            앱에서 건강, 복지, 인간관계를 주제로 <U>자유롭게 대화를 체험</U>하실 분을 모집합니다.
          </p>
        </RecruitmentSection>

        {/* ── 모집 대상 ─────────────────────────────────────────── */}
        <RecruitmentSection tag="모집 대상">
          <p className="mt-4 text-base font-bold leading-relaxed text-gray-800">
            아래 조건을 모두 만족하는 분을 모집합니다.
          </p>
          <div className="mt-4 rounded-xl px-6 py-6 sm:px-8" style={{ backgroundColor: "#f3f3f3" }}>
            <UnorderedList
              items={[
                <>
                  <Keep>만 60세 이상</Keep>이신 분
                </>,
                <>
                  최근 1년 이내에 챗GPT, 제미나이 등 <U>대화형 인공지능을 한 번 이상 사용</U>해 보신 분
                </>,
                <>마우스와 키보드 등 컴퓨터·주변기기 사용에 큰 어려움이 없으신 분</>,
                <>알츠하이머병, 치매 등 인지장애를 진단받지 않으신 분</>,
              ]}
            />
          </div>
        </RecruitmentSection>

        {/* ── 참여 안내 ─────────────────────────────────────────── */}
        <RecruitmentSection tag="참여 안내">
          <dl className="mt-4 space-y-3">
            {PARTICIPATION.map((row) => (
              <div key={row.label} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <dt className="shrink-0 font-bold text-gray-900 sm:w-24">{row.label}</dt>
                <dd className="leading-relaxed text-gray-700">{row.value}</dd>
              </div>
            ))}
          </dl>
        </RecruitmentSection>

        {/* ── 참가 신청 및 문의 ─────────────────────────────────── */}
        <RecruitmentSection tag="참가 신청 및 문의">
          <RecruitmentApply
            description={
              <>
                참여를 희망하시는 분들은 아래 버튼을 통해 설문에 응답해 주세요. 설문 응답 내용을
                바탕으로 참여 조건과 일정이 맞는 분들께 연구진이 개별적으로 연락드립니다.
              </>
            }
            cta={{ label: "참가 신청하기", href: FORM_URL, color: ACCENT }}
            contact={
              <p>
                <span className="font-bold text-gray-700">문의</span> 네이버 AI랩 인간컴퓨터상호작용
                연구팀 {" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">
                  {CONTACT_EMAIL}
                </a>{" "}
              </p>
            }
          />
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            연구 예산과 진행 기간에 제한이 있어, 참여 조건에 해당하시더라도 신청해 주신 모든 분을
            연구에 모시지 못할 수 있는 점 미리 양해 부탁드립니다.
          </p>
        </RecruitmentSection>
      </RecruitmentCard>
    </RecruitmentShell>
  );
}
