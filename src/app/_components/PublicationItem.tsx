import { assetPath } from "../_lib/asset-path";
import type { Publication } from "../_types";

interface PublicationItemProps {
  publication: Publication;
}

function Thumb({ src }: { src: string }) {
  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");
  const cls = "w-full h-full object-cover rounded-md";

  if (isVideo) {
    return (
      <video
        src={assetPath(src)}
        autoPlay
        loop
        muted
        playsInline
        className={cls}
      />
    );
  }
  return <img src={assetPath(src)} alt="" className={cls} />;
}

export function PublicationItem({ publication: p }: PublicationItemProps) {
  return (
    <div className="py-6 border-t border-gray-100 first:border-t-0 flex gap-5">
      {/* Thumbnail */}
      {p.thumb && (
        <div className="flex-shrink-0 w-[140px] h-[140px] bg-gray-50 rounded-md overflow-hidden">
          <Thumb src={p.thumb} />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-gray-900 leading-snug mb-1 text-base">
          {p.paperUrl ? (
            <a
              href={p.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-2"
            >
              {p.title}
            </a>
          ) : (
            p.title
          )}
        </h3>
        {p.titleKo && (
          <p className="text-sm text-gray-400 mb-2">{p.titleKo}</p>
        )}

        <p className="text-sm text-gray-500 mb-3">{p.authors.join(", ")}</p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
          <span className="text-sm font-semibold text-gray-900">{p.venueShort}</span>
          <span className="text-sm text-gray-400">{p.venue}</span>
          {p.award && (
            <span className="text-xs font-semibold bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full border border-amber-100">
              🏆 {p.award}
            </span>
          )}
        </div>

        {(p.paperUrl || p.arxivUrl || p.doi || p.projectUrl) && (
          <div className="flex flex-wrap gap-3 text-sm">
            {p.paperUrl && (
              <a href={p.paperUrl} target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-700 underline underline-offset-2 transition-colors">
                PDF
              </a>
            )}
            {p.arxivUrl && (
              <a href={p.arxivUrl} target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-700 underline underline-offset-2 transition-colors">
                arXiv
              </a>
            )}
            {p.doi && (
              <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-700 underline underline-offset-2 transition-colors">
                DOI
              </a>
            )}
            {p.projectUrl && (
              <a href={p.projectUrl} target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-700 underline underline-offset-2 transition-colors">
                Project
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
