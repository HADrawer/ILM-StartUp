import { AlertTriangle, PlayCircle } from 'lucide-react';
import Button from './Button.jsx';
import ProgressBar from './ProgressBar.jsx';
import StatusBadge from './StatusBadge.jsx';

export default function ExamStatusPanel({ exam, started, onStart }) {
  return (
    <section className="exam-status-panel">
      <div className="exam-summary">
        <StatusBadge tone={started ? 'success' : 'warning'}>{started ? 'Exam session active' : 'Pre-check required'}</StatusBadge>
        <h2>{exam.title}</h2>
        <p>{exam.window} · {exam.duration} · {exam.questions} questions</p>
        <div className="exam-timer" aria-label="Exam timer">01:30:00</div>
        <ProgressBar label="Readiness score" value={exam.readiness} tone="green" />
        <Button icon={PlayCircle} onClick={onStart} loading={started} disabled={started}>
          {started ? 'Secure mode active' : 'Start Exam'}
        </Button>
      </div>
      <div className="exam-check-grid">
        {exam.checks.map((check) => {
          const Icon = check.icon;
          return (
            <article className={`exam-check ${check.state}`} key={check.label}>
              <Icon size={21} />
              <div>
                <strong>{check.label}</strong>
                <span>{check.value}</span>
              </div>
            </article>
          );
        })}
      </div>
      <div className="exam-warning">
        <AlertTriangle size={18} />
        <span>Tab switching and external display warnings are visual placeholders in this demo.</span>
      </div>
    </section>
  );
}
