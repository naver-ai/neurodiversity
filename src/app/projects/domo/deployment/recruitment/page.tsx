import type { Metadata } from "next";
import {
  RecruitmentShell,
  RecruitmentCard,
  RecruitmentHeader,
  RecruitmentHero,
  RecruitmentNote,
  RecruitmentSection,
  RecruitmentBeat,
  RecruitmentApply,
  UnorderedList,
  U,
  Keep,
} from "@/app/_components/RecruitmentTemplate";

/* ------------------------------------------------------------------ *
 * domo deployment 연구 참여자 모집 페이지
 * 플라이어(flyer_revised2.pdf, "ADHD 아동 가족을 위한 AI 기반 일상 루틴 관리 시스템 연구")를
 * 웹으로 그대로 옮긴 정적 페이지입니다. 공통 디자인은 RecruitmentTemplate 의 빌딩 블록을
 * 재사용합니다. 딥링크 전용: /projects/domo/deployment/recruitment
 * ------------------------------------------------------------------ */

const FORM_URL = "https://forms.gle/dtHWBzXaQL9azodM9";
const CONTACT_NAME = "차윤정";
const CONTACT_EMAIL = "yoonjeong.cha@navercorp.com";

// 강조색 (보라) — 플라이어의 섹션 강조색을 샘플링한 값. 뱃지 · CTA 버튼 · 안내 문구에 사용.
const ACCENT = "#7E53F3";

const PAGE_TITLE = "연구 참여자 모집 | ADHD 아동 가족을 위한 AI 기반 일상 루틴 관리 시스템 연구";
const PAGE_DESCRIPTION =
  "만 6~12세 ADHD 진단 아동과 주 양육자를 대상으로, 아이와 함께 아침·저녁 일상 루틴을 계획·기록·회고하는 AI 기반 루틴 관리 시스템의 사용 경험을 평가하는 연구 참여자를 모집합니다.";

// 링크 미리보기(OG) 이미지 — 소셜/메신저 크롤러는 절대 URL만 불러올 수 있으므로
// GitHub Pages 배포 origin + basePath 를 붙여 앱 주요 기능 일러스트를 그대로 사용합니다.
const OG_IMAGE = `https://naver-ai.github.io${
  process.env.NEXT_PUBLIC_BASE_PATH ?? ""
}/assets/projects/domo/og.png`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  // 딥링크 공유용 페이지이므로 검색 노출은 막아 둡니다.
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "아이와 부모가 함께 태블릿으로 일상 루틴을 계획·기록·회고하는 모습 일러스트",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

// 진행 과정 (사전 만남 · 가정 내 앱 사용 · 사후 인터뷰)
const PROCEDURE: { n: string; d: string }[] = [
  {
    n: "사전 만남 (약 1시간)",
    d: "아동과 부모가 연구자의 도움 아래 태블릿 앱을 사용하여 일과 기록지를 만듭니다.",
  },
  {
    n: "가정 내 앱 사용 (3주)",
    d: "제공하는 태블릿을 사용하여 하루 1회 루틴을 기록합니다.",
  },
  {
    n: "사후 인터뷰 (약 1시간)",
    d: "부모와 아동을 대상으로 설문 및 인터뷰를 진행합니다.",
  },
];

export default function DomoDeploymentRecruitmentPage() {
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
            { kind: "label", text: "도닥임 아동발달센터" },
          ]}
        />

        <RecruitmentHero
          title={
            <>
              <Keep>ADHD 아동</Keep> 가족을 위한 <Keep>AI 기반</Keep> 일상 루틴 관리 시스템 연구
            </>
          }
          subtitle={<>아이와 함께 아침·저녁 일상 루틴을 즐겁고 체계적으로 관리해요</>}
          image={{
            src: "/assets/projects/domo/hero.png",
            alt: "아이와 부모가 함께 태블릿으로 루틴을 계획하는 모습",
            width: 615,
            height: 580,
          }}
        />

        {/* ── 안내 문구 (네이버 비영리 학술연구 고지 — 플라이어 문구) ─── */}
        <RecruitmentNote color={ACCENT}>
          *본 연구는 네이버의 비영리 학술조직에서 진행하는 연구로, 참가자로부터 얻은 지식은 네이버의
          서비스/제품개발이 아닌 학술적 기여를 위하여 활용됩니다.
        </RecruitmentNote>

        {/* ── 연구 소개 ───────────────────────────────────────── */}
        <RecruitmentSection tag="연구 소개">
          <div
            className="mt-4 rounded-xl px-6 py-5 sm:px-8"
            style={{ backgroundColor: "#f3f3f3" }}
          >
            <p className="text-[15px] font-bold leading-relaxed text-gray-800">
              아이가 해야 할 일을 자꾸 잊어버리거나, 매일 같은 목표를 반복해서 이야기하게 되시나요?
            </p>
            <p className="mt-2 text-[15px] font-bold leading-relaxed text-gray-800">
              아이와 함께 아침 준비나 잠자기와 같은 일상 루틴을 보다 즐겁고 체계적으로 관리해보고
              싶으신가요?
            </p>
          </div>
          <p className="mt-5 text-[15px] leading-relaxed text-gray-700">
            NAVER에서 저희 연구진은 ADHD 아동과 보호자가 함께 아침·저녁 일과를 달성할 수 있도록 돕는{" "}
            <U>인공지능 기반 루틴 관리 시스템</U>을 개발하고 있습니다. 시스템 사용 경험을 평가하기
            위해 본 연구팀에서는 ADHD 아동과 부모를 모집하고 있습니다.
          </p>
        </RecruitmentSection>

        {/* ── 앱 주요 기능 ─────────────────────────────────────── */}
        <RecruitmentSection tag="앱 주요 기능">
          <div className="mt-5 space-y-5">
            <RecruitmentBeat
              image={{
                src: "/assets/projects/domo/domo_feature_cut_1.png",
                alt: "아이와 부모가 함께 저녁 루틴을 계획하는 모습",
                width: 660,
                height: 600,
              }}
            >
              <b>아이-부모 함께 루틴 계획</b> — 아이와 부모가 <U>아침·저녁 루틴 중 하나를 선택</U>해
              함께 루틴 계획을 세웁니다.
            </RecruitmentBeat>

            <RecruitmentBeat
              image={{
                src: "/assets/projects/domo/domo_feature_cut_2.png",
                alt: "아이가 태블릿으로 오늘의 루틴을 기록하는 모습",
                width: 660,
                height: 600,
              }}
            >
              <b>아이가 루틴 기록</b> — 아이가 <Keep>하루 1회</Keep> 직접 그날의 루틴을 기록하며
              하나씩 완료해 나갑니다.
            </RecruitmentBeat>

            <RecruitmentBeat
              image={{
                src: "/assets/projects/domo/domo_feature_cut_3.png",
                alt: "아이와 부모가 함께 지난 루틴을 돌아보는 모습",
                width: 660,
                height: 600,
              }}
            >
              <b>아이-부모 함께 루틴 회고</b> — 아이와 부모가 함께 지난 루틴을 돌아보고{" "}
              <U>주 1회 루틴을 수정</U>합니다.
            </RecruitmentBeat>
          </div>
        </RecruitmentSection>

        {/* ── 모집 대상 ───────────────────────────────────────── */}
        <RecruitmentSection tag="모집 대상">
          <p className="mt-4 text-[15px] font-bold leading-relaxed text-gray-800">
            아래 조건을 만족하는 아동과 양육자를 함께 모집합니다.
          </p>
          <div className="mt-4 rounded-xl px-6 py-6 sm:px-8" style={{ backgroundColor: "#f3f3f3" }}>
            <UnorderedList
              items={[
                <>
                  <Keep>만 6~12세</Keep>이며 <U>ADHD 진단을 받은 아동</U>
                </>,
                <>
                  아동의 <U>주 양육자</U> (어머님 혹은 아버님) <Keep>1명</Keep>
                </>,
              ]}
            />
          </div>
        </RecruitmentSection>

        {/* ── 진행 과정 ───────────────────────────────────────── */}
        <RecruitmentSection tag="진행 과정">
          <ol className="mt-5 space-y-3">
            {PROCEDURE.map((step, i) => (
              <li key={i} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <span className="flex shrink-0 items-baseline gap-2 sm:w-48">
                  <span className="font-bold text-gray-800">{i + 1}.</span>
                  <span className="font-bold text-gray-900">{step.n}</span>
                </span>
                <span className="text-[15px] leading-relaxed text-gray-600 sm:pt-px">{step.d}</span>
              </li>
            ))}
          </ol>
        </RecruitmentSection>

        {/* ── 만남 장소 ───────────────────────────────────────── */}
        <RecruitmentSection tag="만남 장소">
          <p className="mt-4 text-[15px] leading-relaxed text-gray-700">
            <Keep>NAVER 사옥</Keep> (경기도 성남시 분당구 정자일로 95, 네이버 1784) 혹은{" "}
            <Keep>자택</Keep> 중 선택 가능합니다.
          </p>
        </RecruitmentSection>

        {/* ── 참여 보상 ───────────────────────────────────────── */}
        <RecruitmentSection tag="참여 보상">
          <p className="mt-4 text-[15px] leading-relaxed text-gray-700">
            소정의 연구 참여 사례비(신청 설문 참조)를{" "}
            <span className="font-bold text-gray-900">네이버 포인트</span>로 지급합니다.
          </p>
        </RecruitmentSection>

        {/* ── 참가 신청 및 문의 ──────────────────────────────── */}
        <RecruitmentSection tag="참가 신청 및 문의">
          <RecruitmentApply
            description={
              <>
                본 연구는 아동과 부모 모두 자발적으로 참여하는 것을 원칙으로 합니다. 아동과 부모 모두
                연구 참여를 희망하시는 경우 아래 버튼 또는 QR 코드 스캔을 통해 신청 설문에 응답해
                주세요. 설문 응답 후 연구 조건에 적합한 경우 연구진이 개별적으로 연락드립니다.
              </>
            }
            cta={{ label: "참가 신청하기", href: FORM_URL, color: ACCENT }}
            contact={
              <p>
                <span className="font-bold text-gray-700">문의</span> 연구담당자 {CONTACT_NAME}{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
            }
            qrSrc="/assets/projects/domo/recruitment-qr.svg"
          />
        </RecruitmentSection>
      </RecruitmentCard>
    </RecruitmentShell>
  );
}
