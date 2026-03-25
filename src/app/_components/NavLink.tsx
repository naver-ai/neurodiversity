"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        "font-bold transition-colors hover:text-gray-500",
        isActive
          ? "text-white border-b border-white pb-0.5"
          : "text-white",
        className
      )}
    >
      {children}
    </Link>
  );
}
