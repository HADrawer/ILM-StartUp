import { AlertCircle, CalendarClock, LockKeyhole, ShieldCheck } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';
import Button from '../components/Button.jsx';
import ListPanel from '../components/ListPanel.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { exams } from '../data/mockData.js';

export default function StudentExamsPage(props) {
  return (
    <AppShell {...props} title="Exams" subtitle="Secure exam windows, readiness checks, rules, and warning states before the timer starts.">
      <section className="priority-hero exam-landing">
        <div>
          <StatusBadge tone="warning">Pre-check recommended</StatusBadge>
          <h2>Know exactly what is required before entering a secure exam.</h2>
          <p>ILM separates readiness, identity, device policy, and exam rules so students can fix issues before exam day.</p>
        </div>
        <Button as="a" href="#student/exam" icon={ShieldCheck}>Open Secure Exam Center</Button>
      </section>

      <section className="content-grid wide-left">
        <ListPanel title="Upcoming Exam Windows" subtitle="Each exam shows duration, readiness, and attempt limits.">
          <div className="stack-list">
            {exams.map((exam) => (
              <article className="exam-row-ref unified" key={exam.title}>
                <span className="ref-letter navy"><LockKeyhole size={28} /></span>
                <div>
                  <h3>{exam.title}</h3>
                  <p>{exam.course} · {exam.window}</p>
                  <div className="exam-meta-ref">
                    <span><CalendarClock size={16} /> {exam.duration}</span>
                    <span><AlertCircle size={16} /> {exam.questions} questions</span>
                    <span><ShieldCheck size={16} /> Attempts {exam.attempts}</span>
                  </div>
                  <ProgressBar label="Readiness score" value={exam.readiness} tone="green" />
                </div>
                <Button as="a" href="#student/exam" variant="secondary">View Details</Button>
              </article>
            ))}
          </div>
        </ListPanel>

        <ListPanel title="Exam Rules" subtitle="Warnings are explicit, recoverable, and not hidden behind color.">
          <div className="rule-list">
            <article><ShieldCheck size={18} /><span>Complete camera, microphone, and identity checks before the timer begins.</span></article>
            <article><LockKeyhole size={18} /><span>Stay inside the secure environment; tab switching creates a warning event.</span></article>
            <article><AlertCircle size={18} /><span>Contact your instructor if a readiness check fails before the exam window closes.</span></article>
          </div>
        </ListPanel>
      </section>
    </AppShell>
  );
}
