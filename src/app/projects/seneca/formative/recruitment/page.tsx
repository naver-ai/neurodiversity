import type { Metadata } from "next";
import {
  RecruitmentShell,
  RecruitmentCard,
  RecruitmentHeader,
  RecruitmentHero,
  RecruitmentSection,
  RecruitmentApply,
  OrderedList,
  U,
  Keep,
} from "@/app/_components/RecruitmentTemplate";

/* ------------------------------------------------------------------ *
 * seneca 전문가 인터뷰 대상자 모집 페이지 (formative study)
 * 모집 배너(Recruitment_Banner.pdf)를 웹으로 옮긴 정적 페이지입니다.
 * 공통 디자인은 RecruitmentTemplate 의 빌딩 블록을 재사용합니다.
 * 딥링크 전용: /projects/seneca/formative/recruitment
 * ------------------------------------------------------------------ */

// 배너 QR(bit.ly/4vnQr0d) 신청 설문 링크. 버튼/QR 모두 같은 설문으로 연결됩니다.
const FORM_URL = "https://bit.ly/4vnQr0d";
const RESEARCHER = "최유빈";
const CONTACT_PHONE = "010-3527-2090";
const CONTACT_EMAIL = "yubin.c@navercorp.com";

// 배너 강조색 (미시건 대학교 블루)
const ACCENT = "#00274c";

export const metadata: Metadata = {
  title: "전문가 인터뷰 대상자 모집 | 노년층 맞춤형 의사소통 지원 대화형 AI 연구",
  description:
    "만 60세 이상 노년층의 개인 맞춤형 의사소통을 돕는 대화형 인공지능 시스템 연구를 위한 전문가 인터뷰 대상자를 모집합니다. (네이버-미시건 대학교 공동연구)",
  // 딥링크 공유용 페이지이므로 검색 노출은 막아 둡니다.
  robots: { index: false, follow: false },
};

export default function SenecaRecruitmentPage() {
  return (
    <RecruitmentShell>
      <RecruitmentCard>
        <RecruitmentHeader
          badge="전문가 인터뷰 대상자 구인"
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
              노년층의 <Keep>개인 맞춤형</Keep> 의사소통 지원을 위한{" "}
              <Keep>대화형 인공지능</Keep> 연구
            </>
          }
          image={{
            src: "/assets/projects/seneca/hero.png",
            alt: "두 노년층이 대화하는 모습 일러스트",
            width: 500,
            height: 500,
          }}
        />

        {/* ── 연구 목적 ─────────────────────────────────────────── */}
        <RecruitmentSection tag="연구 목적">
          <p className="mt-4 text-[15px] leading-relaxed text-gray-700">
            저희 네이버-미시건 대학교 공동연구진은 만 60세 이상 노년층의 일상 속 의사소통을 개인
            맞춤형으로 돕는 대화형 인공지능 시스템을 연구하고 있습니다. 이 시스템은 노년층 본인에
            대해 추론하고 기억한 내용을 사용자가 직접 점검하고 수정할 수 있도록 설계됩니다. 본
            인터뷰에서는 전문가의 관점에서 이러한 시스템 설계와 인공지능 응답의 적절성에 대한 의견을
            구하고자 합니다.
          </p>
        </RecruitmentSection>

        {/* ── 모집 대상 ─────────────────────────────────────────── */}
        <RecruitmentSection tag="모집 대상">
          <p className="mt-4 text-[15px] font-bold leading-relaxed text-gray-800">
            다음 중 하나에 해당하는 경험과 지식을 가진 전문가를 모집합니다.
          </p>
          <div className="mt-4 rounded-xl px-6 py-6 sm:px-8" style={{ backgroundColor: "#f3f3f3" }}>
            <OrderedList
              marker="upper-alpha"
              items={[
                <>노년층을 대상으로 인공지능 시스템을 설계 및 구현해 본 전문가</>,
                <>노년층의 의사소통 관련한 연구를 수행하거나 논문을 출판한 전문가</>,
                <U>노년층 대상 심리 상담, 코칭, 언어치료 전문가</U>,
              ]}
            />
          </div>
        </RecruitmentSection>

        {/* ── 인터뷰 진행 방식 및 소요 시간 ─────────────────────── */}
        <RecruitmentSection tag="인터뷰 진행 방식 및 소요 시간">
          <p className="mt-4 text-[15px] leading-relaxed text-gray-700">
            <Keep>1:1 비대면</Keep>으로 약 <b>1시간 30분</b> 가량 소요됩니다. 노인 의사소통의 특성과
            어려움 이해 (30분), 인공지능 응답 적절성 검토 (30분), 인공지능 시스템에 대한 피드백
            (30분) 순으로 진행됩니다.
          </p>
        </RecruitmentSection>

        {/* ── 혜택 ──────────────────────────────────────────────── */}
        <RecruitmentSection tag="혜택">
          <p className="mt-4 text-[15px] leading-relaxed text-gray-700">
            <span className="font-bold text-gray-900">10만원</span>의 참가비를{" "}
            <span className="font-bold text-gray-900">네이버페이 포인트</span>로 지급합니다.
          </p>
        </RecruitmentSection>

        {/* ── 참가 신청 및 문의처 ───────────────────────────────── */}
        <RecruitmentSection tag="참가 신청 및 문의처">
          <RecruitmentApply
            description={
              <>
                참여를 희망하시는 분들은 아래 버튼 또는 QR 코드 스캔을 통해 설문지를 작성해주시기
                바랍니다. 기타 문의는 아래 연락처로 부탁드립니다.
              </>
            }
            cta={{ label: "참가 신청하기", href: FORM_URL, color: ACCENT }}
            contact={
              <p className="leading-relaxed">
                <span className="font-bold text-gray-700">담당 연구원</span> {RESEARCHER}
                <br />
                <span className="font-bold text-gray-700">핸드폰</span>{" "}
                <a href={`tel:${CONTACT_PHONE.replace(/-/g, "")}`} className="hover:underline">
                  {CONTACT_PHONE}
                </a>
                <br />
                <span className="font-bold text-gray-700">이메일</span>{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
            }
            qrSrc="/assets/projects/seneca/recruitment-qr.svg"
          />
        </RecruitmentSection>
      </RecruitmentCard>
    </RecruitmentShell>
  );
}
