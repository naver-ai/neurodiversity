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
        "font-bold transition-colors hover:text-black",
        isActive
          ? "text-black border-b border-black pb-0.5"
          : "text-gray-400",
        className
      )}
    >
      {children}
    </Link>
  );
}
