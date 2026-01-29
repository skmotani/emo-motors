interface EngineerSummaryProps {
  children: React.ReactNode;
}

export default function EngineerSummary({ children }: EngineerSummaryProps) {
  return (
    <div className="engineer-summary">
      {children}
    </div>
  );
}
