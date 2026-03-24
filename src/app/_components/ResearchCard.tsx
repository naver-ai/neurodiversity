import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import type { ResearchProject } from "../_types";

interface ResearchCardProps {
  project: ResearchProject;
}

export function ResearchCard({ project }: ResearchCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex flex-wrap gap-2 items-center mb-2">
          <Badge
            className={
              project.status === "ongoing"
                ? "bg-green-100 text-green-700 hover:bg-green-100"
                : "bg-gray-100 text-gray-500 hover:bg-gray-100"
            }
          >
            {project.status === "ongoing" ? "진행중" : "완료"}
          </Badge>
          <span className="text-xs text-gray-400">
            {project.startYear}
            {project.endYear ? ` – ${project.endYear}` : " –"}
          </span>
        </div>
        <CardTitle className="text-base font-bold leading-snug">
          {project.title}
        </CardTitle>
        {project.titleEn && (
          <p className="text-xs text-gray-400 mt-0.5">{project.titleEn}</p>
        )}
      </CardHeader>
      <CardContent className="pt-0 flex flex-col gap-3">
        <p className="text-sm text-gray-600 leading-relaxed">
          {project.description}
        </p>

        {/* Keywords */}
        <div className="flex flex-wrap gap-1">
          {project.keywords.map((kw) => (
            <span
              key={kw}
              className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100"
            >
              {kw}
            </span>
          ))}
        </div>

        {/* External links */}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "text-xs")}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
