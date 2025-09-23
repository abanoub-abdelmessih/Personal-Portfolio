type HeadingProps = {
  title: string;
};

export default function Heading({ title }: HeadingProps) {
  return (
    <header className="mb-8">
      <div className="inline-flex items-center gap-3 border-l-4 border-foreground pl-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground uppercase tracking-wide">
          {title}
        </h3>
      </div>
    </header>
  );
}
