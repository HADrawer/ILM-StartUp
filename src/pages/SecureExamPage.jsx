import { useEffect, useState } from 'react';
import { AlertTriangle, CheckCircle2, LockKeyhole, ShieldCheck } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';
import Button from '../components/Button.jsx';
import ExamStatusPanel from '../components/ExamStatusPanel.jsx';
import ListPanel from '../components/ListPanel.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { exams } from '../data/mockData.js';

export default function SecureExamPage(props) {
  const [started, setStarted] = useState(false);
  const [notice, setNotice] = useState('');
  const exam = exams[0];

  useEffect(() => {
    if (!started) return undefined;
    setNotice('Secure mode visual demo started. Real proctoring is not connected.');
    const timer = setTimeout(() => setNotice(''), 4200);
    return () => clearTimeout(timer);
  }, [started]);

  return (
    <AppShell {...props} title="Secure Exam Center" subtitle="A LockDown Browser alternative demo with readiness, warnings, and exam state clarity.">
      {notice && <div className="toast success"><CheckCircle2 size={18} />{notice}</div>}

      <ExamStatusPanel exam={exam} started={started} onStart={() => setStarted(true)} />

      <section className="content-grid">
        <ListPanel title="Exam Rules" subtitle="Clear expectations reduce anxiety and support fair testing.">
          <div className="rule-list">
            <article><ShieldCheck size={18} /><span>Use one device and keep camera visibility during the exam.</span></article>
            <article><LockKeyhole size={18} /><span>Navigation outside the exam environment creates a warning event.</span></article>
            <article><AlertTriangle size={18} /><span>Warning events are placeholders in this frontend-only prototype.</span></article>
          </div>
        </ListPanel>

        <ListPanel title="Monitoring Events" subtitle="Visual warnings that would be reviewed by instructors.">
          <div className="event-timeline">
            <article>
              <StatusBadge tone="success">Passed</StatusBadge>
              <strong>Camera and microphone check</strong>
              <span>Verified before exam launch.</span>
            </article>
            <article>
              <StatusBadge tone="neutral">No events</StatusBadge>
              <strong>Tab switching warning</strong>
              <span>0 warnings recorded in demo session.</span>
            </article>
            <article>
              <StatusBadge tone="warning">Pending</StatusBadge>
              <strong>Identity snapshot</strong>
              <span>Captured when the exam begins.</span>
            </article>
          </div>
        </ListPanel>
      </section>
    </AppShell>
  );
}
