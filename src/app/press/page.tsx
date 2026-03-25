import type { Metadata } from "next";
import { loadYAML } from "../_lib/utils";
import type { PressItem } from "../_types";

export const metadata: Metadata = {
  title: "보도자료",
};

const TYPE_LABEL: Record<PressItem["type"], string> = {
  article: "기사",
  video: "영상",
};

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

export default function PressPage() {
  const items = loadYAML<PressItem[]>("press.yml");

  const sorted = [...items].sort(
    (a, b) => b.year - a.year || (b.month ?? 0) - (a.month ?? 0)
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Page header */}
      <div className="mb-16 flex items-baseline gap-4 flex-wrap">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight tracking-tight">보도자료</h1>
        <p className="text-base text-gray-500">총 {items.length}건</p>
      </div>

      <div className="flex flex-col">
        {sorted.map((item) => {
          const youtubeId = item.url ? getYouTubeId(item.url) : null;

          return (
            <article
              key={item.id}
              className="py-8 border-t border-gray-100 first:border-t-0"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {TYPE_LABEL[item.type]}
                </span>
                <span className="text-xs text-gray-300">
                  {item.year}{item.month != null ? `.${String(item.month).padStart(2, "0")}` : ""}
                </span>
              </div>

              <h2 className="text-base font-bold text-gray-900 mb-4">{item.title}</h2>

              {youtubeId && (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 bg-gray-50">
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              )}

              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line mb-3">
                {item.body}
              </p>

              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-gray-700 underline underline-offset-2 transition-colors"
                >
                  원문 보기 →
                </a>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
