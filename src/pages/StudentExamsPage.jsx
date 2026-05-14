import { AlertCircle, Calendar, Clock, Shield, Sparkles } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';

const examRows = [
  { title: 'Data Structures Midterm', course: 'Data Structures', date: 'May 20, 2026', time: '9:00 AM - 11:00 AM', type: 'Secure Exam', tone: 'navy' },
  { title: 'Machine Learning Final', course: 'Machine Learning', date: 'May 28, 2026', time: '2:00 PM - 4:30 PM', type: 'Secure Exam', tone: 'blue' },
  { title: 'Software Engineering Quiz', course: 'Software Engineering', date: 'May 24, 2026', time: '11:00 AM - 11:45 AM', type: 'Online Quiz', tone: 'cyan' }
];

export default function StudentExamsPage(props) {
  return (
    <AppShell {...props} title="Exams">
      <section className="ref-page">
        <h1>Exams</h1>
        <div className="exam-layout-ref">
          <section className="ref-panel">
            <h2>Upcoming Exams</h2>
            {examRows.map((exam) => (
              <article className="exam-row-ref" key={exam.title}>
                <span className={`ref-letter ${exam.tone}`}><Shield size={30} /></span>
                <div>
                  <h3>{exam.title}</h3>
                  <p>{exam.course}</p>
                  <div className="exam-meta-ref">
                    <span><Calendar size={16} /> {exam.date}</span>
                    <span><Clock size={16} /> {exam.time}</span>
                    <span><Shield size={16} /> {exam.type}</span>
                  </div>
                  <a href="#student/exam">View Details</a>
                </div>
              </article>
            ))}
          </section>
          <aside className="exam-side-ref">
            <section className="gradient-card">
              <Shield size={24} />
              <h2>Secure Exam Mode</h2>
              <p>When you're ready to start your exam, click below to enter secure mode.</p>
              <a href="#student/exam">Start Secure Exam</a>
            </section>
            <section className="ref-side-card">
              <h2><AlertCircle size={20} /> Exam Rules</h2>
              <ul>
                <li>Secure browser required for all exams</li>
                <li>No external resources allowed</li>
                <li>Camera must be enabled during exam</li>
                <li>Screen sharing will be active</li>
                <li>No switching tabs or windows</li>
              </ul>
            </section>
            <section className="practice-card"><Sparkles size={24} /><strong>AI Practice Quiz</strong></section>
          </aside>
        </div>
      </section>
    </AppShell>
  );
}
