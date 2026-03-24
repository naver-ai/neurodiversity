import type { Metadata } from "next";
import { loadYAML } from "../_lib/utils";
import type { PressItem } from "../_types";
import { SectionTitle } from "../_components/SectionTitle";

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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <SectionTitle title="보도자료" subtitle={`총 ${items.length}건`} />

      <div className="flex flex-col gap-6">
        {sorted.map((item) => {
          const youtubeId = item.url ? getYouTubeId(item.url) : null;

          return (
            <article
              key={item.id}
              className="border border-gray-100 rounded-xl p-6 bg-white shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-[#55b05e]">
                  {TYPE_LABEL[item.type]}
                </span>
                <span className="text-xs text-gray-400">
                  {item.year}
                  {item.month != null ? `.${String(item.month).padStart(2, "0")}` : ""}
                </span>
              </div>
              <h2 className="text-base font-bold text-gray-900 mb-2">
                {item.title}
              </h2>
              {youtubeId && (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3">
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              )}
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {item.body}
              </p>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs text-[#55b05e] hover:underline"
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
