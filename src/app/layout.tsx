import type { Metadata } from "next";
import "./globals.css";
import { GlobalNavigation } from "./_components/GlobalNavigation";
import { Footer } from "./_components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | 네이버 신경다양성 연구팀",
    default: "네이버 신경다양성 연구팀",
  },
  description:
    "네이버의 신경다양성 인구를 위한 HCI 연구팀입니다. 신경다양성 아동 및 가족을 위한 기술 연구를 수행하며, 실험 참가자를 모집합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <GlobalNavigation />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
