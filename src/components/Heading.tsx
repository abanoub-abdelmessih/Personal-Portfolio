import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Heading({ title, className, children }: HeadingProps) {
  return (
    <header
      className={cn(
        "flex items-center gap-3 border-l-4 border-foreground/60 pl-4 mb-8 justify-between",
        className
      )}
    >
      {/* Title */}{" "}
      <h3 className="text-2xl md:text-3xl font-semibold text-foreground uppercase tracking-wide">
        {title}
      </h3>
      {/* Children Elements */}
      {children}
    </header>
  );
}
