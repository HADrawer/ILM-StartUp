import Button from './Button.jsx';

export default function ModuleCard({ module, compact = false }) {
  const Icon = module.icon;

  return (
    <article className={`module-card tone-${module.color} ${compact ? 'compact' : ''}`}>
      <div className="module-icon"><Icon size={22} /></div>
      <div className="module-content">
        <span>{module.label}</span>
        <h3>{module.title}</h3>
        <p>{module.description}</p>
      </div>
      <div className="module-footer">
        <div>
          <strong>{module.metric}</strong>
          <small>{module.metricLabel}</small>
        </div>
        <Button as="a" href={module.route} variant="ghost" size="sm">Open</Button>
      </div>
    </article>
  );
}
