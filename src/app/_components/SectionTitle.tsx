interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-16 flex items-baseline gap-4 flex-wrap">
      <h1 className="text-3xl font-bold text-gray-900 leading-tight tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-base text-gray-500">{subtitle}</p>
      )}
    </div>
  );
}
