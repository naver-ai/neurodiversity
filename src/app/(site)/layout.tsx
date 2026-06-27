import { GlobalNavigation } from "../_components/GlobalNavigation";
import { Footer } from "../_components/Footer";
import { SITE_PUBLISHED } from "../_lib/site-config";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 정식 게시 허가 전까지 메인 사이트는 접근을 막습니다.
  // children(실제 페이지)을 아예 렌더링하지 않아 HTML 소스에도 콘텐츠가 남지 않습니다.
  // (딥링크 리크루팅 페이지는 이 그룹 밖에 있어 영향을 받지 않습니다.)
  if (!SITE_PUBLISHED) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
          NAVER AI · Neurodiversity
        </p>
        <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-gray-900">
          준비 중입니다
        </h1>
        <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-xs">
          현재 비공개 상태로, 정식 공개를 준비하고 있습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <GlobalNavigation />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
