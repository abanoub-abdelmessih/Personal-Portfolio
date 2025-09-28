"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ExternalButtonTypes {
  label: string;
  icon?: React.ReactNode;
  href: string;
  newTab?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  xs: "px-3 py-1.5 text-sm",
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-7 py-3.5 text-base",
};

export const ExternalButton = ({
  label,
  icon,
  href,
  size = "md",
  newTab = true,
  className,
}: ExternalButtonTypes) => {
  return (
    <Link
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full bg-zinc-900 text-zinc-100 font-light transition-all duration-300 hover:bg-zinc-800 hover:scale-105",
        sizeClasses[size],
        className
      )}
    >
      <span className="tracking-wide">{label}</span>
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          {icon}
        </span>
      )}
    </Link>
  );
};
