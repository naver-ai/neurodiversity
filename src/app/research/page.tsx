import type { Metadata } from "next";
import { loadYAML } from "../_lib/utils";
import type { ResearchProject } from "../_types";
import { ResearchCard } from "../_components/ResearchCard";
import { ParticipationBanner } from "../_components/ParticipationBanner";
import { SectionHeader } from "../_components/SectionHeader";

export const metadata: Metadata = {
  title: "진행중인 연구",
};

export default function ResearchPage() {
  const projects = loadYAML<ResearchProject[]>("research.yml");
  const ongoing = projects.filter((p) => p.status === "ongoing");
  const completed = projects.filter((p) => p.status === "completed");
  const openProjects = ongoing.filter((p) => p.participationOpen);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Page header */}
      <div className="mb-16 flex items-baseline gap-4 flex-wrap">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight tracking-tight">연구</h1>
        <p className="text-base text-gray-500">현재 진행 중인 HCI 연구 프로젝트를 소개합니다.</p>
      </div>

      {/* Participation banners */}
      {openProjects.length > 0 && (
        <div className="mb-16">
          <SectionHeader>실험 참가자 모집 중</SectionHeader>
          <div className="flex flex-col gap-8 mt-6">
            {openProjects.map((project) => (
              <ParticipationBanner key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* Ongoing projects */}
      {ongoing.length > 0 && (
        <div className="mb-16">
          <SectionHeader>진행중</SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 mt-2">
            {ongoing.map((project) => (
              <ResearchCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* Completed projects */}
      {completed.length > 0 && (
        <div className="pt-12 border-t border-gray-100">
          <SectionHeader>완료된 연구</SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 mt-2">
            {completed.map((project) => (
              <ResearchCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
