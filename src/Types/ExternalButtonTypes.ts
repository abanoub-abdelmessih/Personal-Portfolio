import { ReactNode } from "react";

export interface ExternalButtonTypes {
  label: string;
  icon?: ReactNode;
  href: string;
  size?: "xs" | "sm" | "md" | "lg";
}
