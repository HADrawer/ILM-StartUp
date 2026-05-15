import { ArrowRight, GraduationCap, ShieldCheck, UserRoundCheck } from 'lucide-react';
import Button from '../components/Button.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import logoUrl from '../assets/ilm-logo.jpeg';

export default function LoginPage({ onLogin }) {
  return (
    <main className="role-entry">
      <a className="role-entry-logo" href="#landing" aria-label="Back to ILM landing">
        <img src={logoUrl} alt="" />
        <span>ILM</span>
      </a>

      <section className="role-entry-card" aria-label="Choose a demo role">
        <div className="role-entry-copy">
          <StatusBadge tone="info">Presentation mode</StatusBadge>
          <h1>Choose the workspace you want to present.</h1>
          <p>
            No authentication is connected. Each role opens a realistic mock workflow
            for the ILM academic operating system.
          </p>
        </div>

        <div className="role-choice-grid">
          <button type="button" onClick={() => onLogin('student')}>
            <span><GraduationCap size={24} /></span>
            <strong>Student Workspace</strong>
            <small>Today’s classes, courses, assignments, grades, announcements, and secure exam readiness.</small>
            <ArrowRight size={19} />
          </button>
          <button type="button" onClick={() => onLogin('doctor')}>
            <span><UserRoundCheck size={24} /></span>
            <strong>Doctor Workspace</strong>
            <small>Course operations, submissions, AI detector, assessment generator, exams, live classes, and analytics.</small>
            <ArrowRight size={19} />
          </button>
        </div>

        <div className="role-entry-footer">
          <span><ShieldCheck size={16} /> Frontend-only mock data</span>
          <Button as="a" href="#landing" variant="ghost" size="sm">Back to Landing</Button>
        </div>
      </section>
    </main>
  );
}
