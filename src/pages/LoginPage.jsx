import { ArrowRight, GraduationCap, ShieldCheck, UserRoundCheck } from 'lucide-react';
import Brand from '../components/Brand.jsx';
import Button from '../components/Button.jsx';
import StatusBadge from '../components/StatusBadge.jsx';

export default function LoginPage({ onLogin }) {
  return (
    <main className="login-screen">
      <div className="login-shell">
        <section className="login-copy">
          <Brand />
          <StatusBadge tone="info"><ShieldCheck size={13} /> Demo environment</StatusBadge>
          <h1>Choose a role and enter the ILM academic workspace.</h1>
          <p>
            The prototype opens directly into realistic product flows for students and instructors. No authentication or backend is connected.
          </p>
          <div className="login-stats">
            <div><strong>5</strong><span>Core modules</span></div>
            <div><strong>1</strong><span>Academic workspace</span></div>
            <div><strong>0</strong><span>Backend services</span></div>
          </div>
        </section>

        <section className="role-panel" aria-label="Demo role selection">
          <div className="role-panel-head">
            <span className="eyebrow">Role Selection</span>
            <h2>Start presentation mode</h2>
          </div>
          <button className="role-card" onClick={() => onLogin('student')}>
            <span className="role-icon"><GraduationCap size={24} /></span>
            <div>
              <strong>Student Workspace</strong>
              <p>Courses, assignments, grade preview, live class, and secure exam readiness.</p>
            </div>
            <ArrowRight size={20} />
          </button>
          <button className="role-card doctor" onClick={() => onLogin('doctor')}>
            <span className="role-icon"><UserRoundCheck size={24} /></span>
            <div>
              <strong>Doctor Workspace</strong>
              <p>Course operations, submissions, AI detector, generator, secure exams, and analytics.</p>
            </div>
            <ArrowRight size={20} />
          </button>
          <Button as="a" href="#" variant="ghost" icon={ArrowRight}>Back to Product Intro</Button>
        </section>
      </div>
    </main>
  );
}
