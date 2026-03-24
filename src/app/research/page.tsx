import type { Metadata } from "next";
import { loadYAML } from "../_lib/utils";
import type { ResearchProject } from "../_types";
import { ResearchCard } from "../_components/ResearchCard";
import { ParticipationBanner } from "../_components/ParticipationBanner";
import { SectionTitle } from "../_components/SectionTitle";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "진행중인 연구",
};

export default function ResearchPage() {
  const projects = loadYAML<ResearchProject[]>("research.yml");
  const ongoing = projects.filter((p) => p.status === "ongoing");
  const completed = projects.filter((p) => p.status === "completed");
  const openProjects = ongoing.filter((p) => p.participationOpen);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <SectionTitle
        title="진행중인 연구"
        subtitle="현재 진행 중인 HCI 연구 프로젝트를 소개합니다."
      />

      {/* Participation banners */}
      {openProjects.length > 0 && (
        <div className="mb-10">
          <h2 className="text-base font-semibold text-gray-700 mb-4">
            실험 참가자 모집 중
          </h2>
          <div className="flex flex-col gap-4">
            {openProjects.map((project) => (
              <ParticipationBanner key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* Ongoing projects */}
      {ongoing.length > 0 && (
        <div className="mb-10">
          <h2 className="text-base font-semibold text-gray-700 mb-4">
            진행중
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ongoing.map((project) => (
              <ResearchCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* Completed projects */}
      {completed.length > 0 && (
        <>
          <Separator className="my-8" />
          <h2 className="text-base font-semibold text-gray-500 mb-4">완료된 연구</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {completed.map((project) => (
              <ResearchCard key={project.id} project={project} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
