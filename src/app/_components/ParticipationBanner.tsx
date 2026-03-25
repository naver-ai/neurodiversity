import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import type { ResearchProject } from "../_types";

interface ParticipationBannerProps {
  project: ResearchProject;
}

export function ParticipationBanner({ project }: ParticipationBannerProps) {
  if (!project.participationOpen || !project.participationDetails) return null;

  const { participationDetails: d } = project;

  return (
    <div className="border-l-2 border-brand pl-5 py-3">
      <div className="flex flex-wrap items-baseline gap-3 mb-2">
        <span className="text-xs font-semibold text-brand">참가자 모집중</span>
        <h3 className="font-bold text-gray-900 text-sm">{project.title}</h3>
      </div>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs text-gray-500 mb-3">
        <div>
          <dt className="inline font-medium text-gray-600">대상: </dt>
          <dd className="inline">{d.target}</dd>
        </div>
        <div>
          <dt className="inline font-medium text-gray-600">기간: </dt>
          <dd className="inline">{d.period}</dd>
        </div>
        <div>
          <dt className="inline font-medium text-gray-600">보상: </dt>
          <dd className="inline">{d.compensation}</dd>
        </div>
      </dl>
      <p className="text-xs text-gray-400 leading-relaxed mb-3">{d.description}</p>
      <a
        href={`mailto:${d.contactEmail}?subject=실험 참가 문의: ${project.title}`}
        className={cn(buttonVariants({ size: "sm" }), "bg-brand hover:bg-brand-hover text-white text-xs h-7")}
      >
        참가 문의하기
      </a>
    </div>
  );
}
