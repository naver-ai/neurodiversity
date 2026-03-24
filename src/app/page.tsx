import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { loadYAML } from "./_lib/utils";
import { assetPath } from "./_lib/asset-path";
import type { TeamMember, ResearchProject, Publication } from "./_types";
import { ParticipationBanner } from "./_components/ParticipationBanner";
import { PublicationItem } from "./_components/PublicationItem";

export default function HomePage() {
  const teamMembers = loadYAML<TeamMember[]>("team.yml");
  const researchProjects = loadYAML<ResearchProject[]>("research.yml");
  const publications = loadYAML<Publication[]>("publications.yml");

  const openProjects = researchProjects.filter((p) => p.participationOpen);
  const recentPublications = [...publications]
    .sort((a, b) => b.year - a.year || (b.month ?? 0) - (a.month ?? 0))
    .slice(0, 3);
  const currentMembers = teamMembers.filter((m) => m.status === "current");

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="mb-4">
              <Image
                src={assetPath("/assets/logos/ai_lab_logo_horizontal.png")}
                alt="NAVER AI Lab"
                width={140}
                height={22}
                className="h-12 w-auto"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              네이버 AI랩 신경다양성 연구팀
            </h1>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              자폐 스펙트럼 장애, ADHD 등 신경다양성을 가진 아동/청소년/성인과 가족의 삶의
              질을 향상시키는 기술을 연구합니다. 실제 사용자와
              함께하는 참여형 디자인, 공학적 시스템 프로토타이핑 및 사용자 평가 등 HCI (인간-컴퓨터 상호작용) 연구방법론을 기반으로 합니다.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/research" className={cn(buttonVariants(), "bg-[#66C36F] hover:bg-[#55b05e] text-white")}>
                진행중인 연구 보기
              </Link>
              <Link href="/team" className={buttonVariants({ variant: "outline" })}>
                연구진 소개
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Open participation */}
      {openProjects.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-gray-900">
              실험 참가자 모집 중
            </h2>
            <Link
              href="/research"
              className="text-sm text-[#66C36F] hover:underline"
            >
              전체 보기 →
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {openProjects.map((project) => (
              <ParticipationBanner key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Team overview */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-gray-900">연구진</h2>
            <Link
              href="/team"
              className="text-sm text-[#66C36F] hover:underline"
            >
              전체 보기 →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {currentMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mb-2">
                  {member.photo ? (
                    <Image
                      src={assetPath(member.photo)}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-lg font-bold text-gray-500">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {member.name}
                </p>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent publications */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-900">최근 연구성과</h2>
          <Link
            href="/publications"
            className="text-sm text-[#66C36F] hover:underline"
          >
            전체 보기 →
          </Link>
        </div>
        <div>
          {recentPublications.map((pub) => (
            <PublicationItem key={pub.id} publication={pub} />
          ))}
        </div>
      </section>
    </div>
  );
}
