type HeadingProps = {
  title: string;
};

export default function Heading({ title }: HeadingProps) {
  return (
    <header className="inline-flex items-center gap-3 border-l-4 border-foreground/60 pl-4 mb-8">
      <h3 className="text-2xl md:text-3xl font-semibold text-foreground uppercase tracking-wide">
        {title}
      </h3>
    </header>
  );
}
