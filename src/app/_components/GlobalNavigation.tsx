"use client";

import Link from "next/link";
import Image from "next/image";
import { NavLink } from "./NavLink";
import { assetPath } from "../_lib/asset-path";

export function GlobalNavigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Home icon */}
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-800 hover:text-[#66C36F] transition-colors"
          aria-label="홈으로 이동"
        >
          <Image
            src={assetPath("/assets/logos/naver-neuro-logo.png")}
            alt="홈"
            width={32}
            height={32}
            className="w-10 h-10"
          />
          <span className="hidden sm:inline text-lg font-extrabold">
            NAVER AI 신경다양성 연구팀
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-6">
          <NavLink href="/team">연구진 소개</NavLink>
          <NavLink href="/research">진행중인 연구</NavLink>
          <NavLink href="/publications">논문 성과</NavLink>
          <NavLink href="/press">보도자료</NavLink>
        </nav>
      </div>
    </header>
  );
}
