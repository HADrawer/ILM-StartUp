export default function ProgressBar({ value, label, tone = 'teal', compact = false }) {
  const safeValue = Math.max(0, Math.min(100, Number(value) || 0));

  return (
    <div className={`progress-block ${compact ? 'compact' : ''}`}>
      {label && (
        <div className="progress-label">
          <span>{label}</span>
          <strong>{safeValue}%</strong>
        </div>
      )}
      <div className={`progress-track tone-${tone}`} role="progressbar" aria-valuenow={safeValue} aria-valuemin="0" aria-valuemax="100">
        <span style={{ width: `${safeValue}%` }} />
      </div>
    </div>
  );
}
