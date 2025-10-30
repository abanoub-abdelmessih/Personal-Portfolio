"use client";

import React from "react";
import Link from "next/link";
import { Briefcase, Folder, HomeIcon, Mail, Wrench } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "./ui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
  navbar: [
    { href: "#home", icon: HomeIcon, label: "Home" },
    { href: "#skills", icon: Wrench, label: "Skills" },
    { href: "#experience", icon: Briefcase, label: "Experience" },
    { href: "#projects", icon: Folder, label: "Projects" },
    { href: "#contact", icon: Mail, label: "Contact" },
  ],
};

export function DockComponent() {
  return (
    <TooltipProvider>
      <Dock
        direction="middle"
        className="fixed inset-x-0 bottom-5 z-10 rounded-full bg-background border-2 border-primary/40"
      >
        {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
      </Dock>
    </TooltipProvider>
  );
}
