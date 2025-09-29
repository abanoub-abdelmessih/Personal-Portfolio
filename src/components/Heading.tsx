import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  className?: string;
}

export default function Heading({ title, className }: HeadingProps) {
  return (
    <header
      className={cn(
        "inline-flex items-center gap-3 border-l-4 border-foreground/60 pl-4 mb-8",
        className
      )}
    >
      {" "}
      <h3 className="text-2xl md:text-3xl font-semibold text-foreground uppercase tracking-wide">
        {title}
      </h3>
    </header>
  );
}
