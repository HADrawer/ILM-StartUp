import { CheckCircle2, FileDown, ShieldAlert } from 'lucide-react';
import Button from './Button.jsx';
import ProgressBar from './ProgressBar.jsx';
import StatusBadge from './StatusBadge.jsx';

export default function AIResultCard({ result, analyzed, onExport }) {
  if (!analyzed) {
    return (
      <section className="ai-result-placeholder">
        <ShieldAlert size={30} />
        <strong>Waiting for analysis</strong>
        <p>Paste text or use the sample document to generate a mock academic integrity review.</p>
      </section>
    );
  }

  return (
    <section className="ai-result-card">
      <div className="result-head">
        <div>
          <StatusBadge tone="warning">{result.verdict}</StatusBadge>
          <h2>{result.probability}% AI probability</h2>
          <p>Mock score with confidence and similarity context. Instructor judgment remains required.</p>
        </div>
        <div className="confidence-meter">
          <strong>{result.confidence}%</strong>
          <span>confidence</span>
        </div>
      </div>
      <div className="result-grid">
        <ProgressBar label="AI probability" value={result.probability} tone="coral" />
        <ProgressBar label="Similarity score" value={result.similarity} tone="gold" />
      </div>
      <div className="flagged-stack">
        <h3>Flagged passages</h3>
        {result.sections.map((section) => (
          <article className="flagged-passage" key={section.label}>
            <span>{section.score}</span>
            <strong>{section.label}</strong>
            <p>{section.text}</p>
          </article>
        ))}
      </div>
      <div className="review-actions">
        {result.actions.map((action) => (
          <span key={action}><CheckCircle2 size={15} />{action}</span>
        ))}
      </div>
      <Button variant="secondary" icon={FileDown} onClick={onExport}>Export Report</Button>
    </section>
  );
}
