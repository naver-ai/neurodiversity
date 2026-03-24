"use client";

import Link from "next/link";
import { NavLink } from "./NavLink";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="hidden sm:inline text-sm font-semibold">
            뉴로다이버시티 연구팀
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-6">
          <NavLink href="/team">연구진 소개</NavLink>
          <NavLink href="/research">진행중인 연구</NavLink>
          <NavLink href="/publications">연구성과</NavLink>
        </nav>
      </div>
    </header>
  );
}
