interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeader({ children, className }: SectionHeaderProps) {
  return (
    <h2 className={`text-xl font-bold text-gray-900${className ? ` ${className}` : ""}`}>
      {children}
    </h2>
  );
}
