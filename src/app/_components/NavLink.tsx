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
        "text-base font-bold transition-colors hover:text-[#66C36F]",
        isActive
          ? "text-[#66C36F] border-b-2 border-[#66C36F] pb-0.5"
          : "text-gray-700",
        className
      )}
    >
      {children}
    </Link>
  );
}
