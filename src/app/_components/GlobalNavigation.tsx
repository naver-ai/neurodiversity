"use client";

import Link from "next/link";
import Image from "next/image";
import { NavLink } from "./NavLink";
import { assetPath } from "../_lib/asset-path";

export function GlobalNavigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100/80 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 h-18 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-gray-900 hover:opacity-70 transition-opacity"
          aria-label="홈으로 이동"
        >
          <Image
            src={assetPath("/assets/logos/naver-neuro-logo.png")}
            alt="홈"
            width={28}
            height={28}
            className="w-10 h-10"
          />
          <span className="hidden sm:inline text-lg font-extrabold tracking-tight">
            NAVER AI 신경다양성 연구팀
          </span>
        </Link>

        <nav className="flex items-center gap-7">
          <NavLink href="/team">연구진</NavLink>
          <NavLink href="/research">연구</NavLink>
          <NavLink href="/publications">논문</NavLink>
          <NavLink href="/press">보도자료</NavLink>
        </nav>
      </div>
    </header>
  );
}
