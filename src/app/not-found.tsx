import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-5xl font-extrabold tracking-tight text-gray-900">404</p>
      <p className="mt-4 text-base text-gray-500">
        요청하신 페이지를 찾을 수 없습니다.
      </p>
      <p className="mt-1 text-sm text-gray-400">
        Sorry, the page you are looking for could not be found.
      </p>
    </div>
  );
}
