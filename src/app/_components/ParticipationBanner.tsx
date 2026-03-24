import { Card, CardContent } from "@/components/ui/card";
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
    <Card className="border-[#66C36F] bg-green-50">
      <CardContent className="p-5">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="flex-shrink-0">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#66C36F] text-white">
              참가자 모집중
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 text-sm mb-1">
              {project.title}
            </h3>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-gray-600 mb-3">
              <div>
                <dt className="inline font-medium text-gray-700">참여 대상: </dt>
                <dd className="inline">{d.target}</dd>
              </div>
              <div>
                <dt className="inline font-medium text-gray-700">참여 기간: </dt>
                <dd className="inline">{d.period}</dd>
              </div>
              <div>
                <dt className="inline font-medium text-gray-700">참여 보상: </dt>
                <dd className="inline">{d.compensation}</dd>
              </div>
            </dl>
            <p className="text-xs text-gray-500 leading-relaxed mb-3">
              {d.description}
            </p>
            <a
              href={`mailto:${d.contactEmail}?subject=실험 참가 문의: ${project.title}`}
              className={cn(buttonVariants({ size: "sm" }), "bg-[#66C36F] hover:bg-[#55b05e] text-white text-xs")}
            >
              참가 문의하기
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
