"use client";

import { ExternalButtonTypes } from "@/Types/ExternalButtonTypes";
import Link from "next/link";

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
}: ExternalButtonTypes) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white font-light rounded-full transition-all duration-300 hover:scale-105 ${sizeClasses[size]}`}
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
