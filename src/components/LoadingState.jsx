export default function LoadingState({ title = 'Processing', body = 'ILM is preparing the next step.' }) {
  return (
    <div className="loading-state" aria-live="polite">
      <span className="spinner large" aria-hidden="true" />
      <strong>{title}</strong>
      <p>{body}</p>
    </div>
  );
}
