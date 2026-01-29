interface SpecRow {
  label: string;
  value: string;
}

interface SpecTableProps {
  title?: string;
  specs: SpecRow[];
}

export default function SpecTable({ title, specs }: SpecTableProps) {
  return (
    <div>
      {title && (
        <h4 className="text-lg font-bold text-dark mb-4">{title}</h4>
      )}
      <table className="spec-table">
        <thead>
          <tr>
            <th>Specification</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, index) => (
            <tr key={index}>
              <td className="font-medium text-dark">{spec.label}</td>
              <td className="text-text">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
