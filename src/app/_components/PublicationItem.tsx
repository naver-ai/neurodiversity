import { Badge } from "@/components/ui/badge";
import type { Publication } from "../_types";

interface PublicationItemProps {
  publication: Publication;
}

export function PublicationItem({ publication: p }: PublicationItemProps) {
  return (
    <div className="py-4 border-b border-gray-100 last:border-0">
      <div className="flex flex-col gap-2">
        {/* Title */}
        <div>
          <h3 className="font-bold text-gray-900 leading-snug">
            {p.paperUrl ? (
              <a
                href={p.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#66C36F] transition-colors"
              >
                {p.title}
              </a>
            ) : (
              p.title
            )}
          </h3>
          {p.titleKo && (
            <p className="text-base text-gray-400 mt-0.5">{p.titleKo}</p>
          )}
        </div>

        {/* Authors */}
        <p className="text-sm text-gray-600">
          {p.authors.join(", ")}
        </p>

        {/* Venue + Award */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-base font-semibold text-[#1E9DA7]">
            {p.venueShort}
          </span>
          <span className="text-sm text-gray-400">{p.venue}</span>
          {p.award && (
            <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 text-sm px-2 py-1">
              🏆 {p.award}
            </Badge>
          )}
        </div>

        {/* Links */}
        {(p.paperUrl || p.arxivUrl || p.doi || p.projectUrl) && (
          <div className="flex flex-wrap gap-3 text-sm">
            {p.paperUrl && (
              <a
                href={p.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                [PDF]
              </a>
            )}
            {p.arxivUrl && (
              <a
                href={p.arxivUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                [arXiv]
              </a>
            )}
            {p.doi && (
              <a
                href={`https://doi.org/${p.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                [DOI]
              </a>
            )}
            {p.projectUrl && (
              <a
                href={p.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                [Project]
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
