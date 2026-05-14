import Button from './Button.jsx';

export default function EmptyState({ icon: Icon, title, body, action, actionHref }) {
  return (
    <div className="empty-state">
      {Icon && <Icon size={28} />}
      <strong>{title}</strong>
      <p>{body}</p>
      {action && <Button as="a" href={actionHref} variant="secondary" size="sm">{action}</Button>}
    </div>
  );
}
