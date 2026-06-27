import type { PressItem } from "../_types";

const TYPE_LABEL: Record<PressItem["type"], string> = {
  article: "기사",
  video: "영상",
  magazine: "매거진",
  post: "포스트",
};

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

interface PressCardProps {
  item: PressItem;
  /** 참고용 압축 표기: 영상 임베드와 본문 설명을 생략하고 제목·링크만 노출 */
  compact?: boolean;
}

export function PressCard({ item, compact = false }: PressCardProps) {
  const youtubeId = item.url ? getYouTubeId(item.url) : null;
  const dateLabel = `${item.year}${
    item.month != null ? `.${String(item.month).padStart(2, "0")}` : ""
  }`;

  return (
    <article
      className={`border-t border-gray-100 first:border-t-0 ${compact ? "py-5" : "py-8"}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          {TYPE_LABEL[item.type]}
        </span>
        <span className="text-xs text-gray-300">{dateLabel}</span>
      </div>

      <h3 className="text-base font-bold leading-snug mb-3">
        {compact && item.url ? (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 underline-offset-2 transition-colors hover:text-brand hover:underline"
          >
            {item.title}
          </a>
        ) : (
          <span className="text-gray-900">{item.title}</span>
        )}
      </h3>

      {!compact && youtubeId && (
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

      <p
        className={
          compact
            ? "text-sm leading-relaxed text-gray-500 line-clamp-2"
            : "text-sm leading-relaxed text-gray-600 whitespace-pre-line mb-3"
        }
      >
        {item.body}
      </p>

      {!compact && item.url && (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-400 hover:text-gray-700 underline underline-offset-2 transition-colors"
        >
          {item.type === "video" ? "영상 보기" : "원문 보기"} →
        </a>
      )}
    </article>
  );
}
