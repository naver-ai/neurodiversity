import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { loadYAML } from "./_lib/utils";
import { assetPath } from "./_lib/asset-path";
import type { TeamMember, ResearchProject, Publication } from "./_types";
import { ParticipationBanner } from "./_components/ParticipationBanner";
import { PublicationItem } from "./_components/PublicationItem";
import { SectionHeader } from "./_components/SectionHeader";

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
      <section className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
          <div className="grid grid-cols-1 sm:grid-cols-[5fr_7fr] gap-10 items-start">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 leading-10 tracking-tight">
                NAVER AI<br />신경다양성<br />연구팀
              </h1>
            </div>
            <div className="pt-1">
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                저희는 자폐 스펙트럼 장애, ADHD 등 신경다양성을 가진 아동/청소년/성인과 가족의 삶의
                질을 향상시키는 기술을 연구합니다. 실제 사용자와 함께하는 참여형 디자인, 공학적 시스템
                프로토타이핑 및 사용자 평가 등 HCI (인간-컴퓨터 상호작용) 연구방법론을 기반으로 합니다.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/research"
                  className={cn(buttonVariants(), "bg-brand hover:bg-brand-hover text-white")}
                >
                  진행중인 연구 보기
                </Link>
                <Link href="/team" className={buttonVariants({ variant: "outline" })}>
                  연구진 소개
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open participation */}
      {openProjects.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-[5fr_7fr] gap-10 items-start">
            <div>
              <SectionHeader>실험 참가자 모집 중</SectionHeader>
              <Link href="/research" className="text-sm text-gray-400 hover:text-gray-700 mt-1 inline-block transition-colors">
                전체 보기 →
              </Link>
            </div>
            <div className="flex flex-col gap-8">
              {openProjects.map((project) => (
                <ParticipationBanner key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team overview */}
      <section className="border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-[5fr_7fr] gap-10 items-start">
            <div>
              <SectionHeader>연구진</SectionHeader>
              <Link href="/team" className="text-sm text-gray-400 hover:text-gray-700 mt-1 inline-block transition-colors">
                전체 보기 →
              </Link>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
              {currentMembers.map((member) => (
                <div key={member.id} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-gray-100 overflow-hidden mb-2">
                    {member.photo ? (
                      <Image
                        src={assetPath(member.photo)}
                        alt={member.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-base font-bold text-gray-400">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-medium text-gray-900 leading-tight">{member.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-tight">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent publications */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-[5fr_7fr] gap-10 items-start">
          <div>
            <SectionHeader>최근 연구성과</SectionHeader>
            <Link href="/publications" className="text-sm text-gray-400 hover:text-gray-700 mt-1 inline-block transition-colors">
              전체 보기 →
            </Link>
          </div>
          <div>
            {recentPublications.map((pub) => (
              <PublicationItem key={pub.id} publication={pub} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
