const labels = {
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  info: 'info',
  neutral: 'neutral'
};

export default function StatusBadge({ children, tone = 'neutral' }) {
  return <span className={`status-badge ${labels[tone] || labels.neutral}`}>{children}</span>;
}
