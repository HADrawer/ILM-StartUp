export default function Button({
  as: Component = 'button',
  children,
  className = '',
  icon: Icon,
  loading = false,
  size = 'md',
  variant = 'primary',
  ...props
}) {
  const componentProps = Component === 'button' && !props.type ? { type: 'button', ...props } : props;

  return (
    <Component className={`btn btn-${variant} btn-${size} ${className}`} aria-busy={loading || undefined} {...componentProps}>
      {loading ? <span className="spinner" aria-hidden="true" /> : Icon ? <Icon size={18} strokeWidth={2.2} /> : null}
      <span>{children}</span>
    </Component>
  );
}
