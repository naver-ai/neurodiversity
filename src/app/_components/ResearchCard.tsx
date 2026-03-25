import type { ResearchProject } from "../_types";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

interface ResearchCardProps {
  project: ResearchProject;
}

export function ResearchCard({ project }: ResearchCardProps) {
  return (
    <div className="py-6 border-t border-gray-100 first:border-t-0">
      <div className="flex items-center gap-2 mb-3">
        <span
          className={cn(
            "text-xs font-semibold",
            project.status === "ongoing" ? "text-brand" : "text-gray-400"
          )}
        >
          {project.status === "ongoing" ? "진행중" : "완료"}
        </span>
        <span className="text-xs text-gray-300">
          {project.startYear}{project.endYear ? ` – ${project.endYear}` : " –"}
        </span>
      </div>

      <h3 className="text-lg font-bold text-gray-900 leading-snug mb-1">
        {project.title}
      </h3>
      {project.titleEn && (
        <p className="text-xs text-gray-400 mb-3">{project.titleEn}</p>
      )}

      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.keywords.map((kw) => (
          <span
            key={kw}
            className="text-xs px-2.5 py-0.5 rounded-full bg-gray-50 text-gray-500 border border-gray-100"
          >
            {kw}
          </span>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "text-xs h-7")}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
