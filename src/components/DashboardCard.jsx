export default function DashboardCard({ icon: Icon, label, value, meta, tone = 'teal', action }) {
  return (
    <article className={`metric-card ${tone}`}>
      <div className="metric-icon">{Icon && <Icon size={21} />}</div>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{meta}</small>
      </div>
      {action && <a href={action.href}>{action.label}</a>}
    </article>
  );
}
