import { ReactNode } from "react";

export interface ExternalButtonTypes {
  label: string;
  icon?: ReactNode;
  href: string;
  newTab?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
}
