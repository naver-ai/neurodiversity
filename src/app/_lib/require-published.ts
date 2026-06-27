import { notFound } from "next/navigation";
import { SITE_PUBLISHED } from "./site-config";

/**
 * 메인 사이트가 비공개(`SITE_PUBLISHED === false`)이면 404로 처리합니다.
 *
 * (site) 그룹의 각 페이지 컴포넌트와 generateMetadata 최상단에서 호출하세요.
 * 페이지 단에서 막아야 실제 콘텐츠가 정적 HTML(RSC 페이로드)에 직렬화되지 않습니다.
 * 레이아웃에서 children을 렌더링하지 않는 것만으로는 페이로드에 콘텐츠가 남습니다.
 */
export function requireSitePublished(): void {
  if (!SITE_PUBLISHED) {
    notFound();
  }
}
