import { Award, Medal, TrendingUp } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';
import DashboardCard from '../components/DashboardCard.jsx';
import ListPanel from '../components/ListPanel.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { courses } from '../data/mockData.js';

export default function StudentGradesPage(props) {
  return (
    <AppShell {...props} title="Grades" subtitle="Readable grade previews, feedback signals, attendance, and learning outcome progress.">
      <section className="metric-grid">
        <DashboardCard icon={Award} label="Current GPA" value="3.72" meta="Spring 2026 preview" tone="gold" />
        <DashboardCard icon={TrendingUp} label="Best trend" value="+4.8%" meta="ENG 115" tone="green" />
        <DashboardCard icon={Medal} label="Highest course" value="A" meta="Academic Writing" />
        <DashboardCard icon={Award} label="Attendance avg" value="93%" meta="Across active courses" tone="teal" />
      </section>

      <section className="content-grid wide-left">
        <ListPanel title="Course Grade Preview" subtitle="Grades stay contextual with progress, attendance, and risk labels.">
          <div className="grade-list">
            {courses.map((course) => (
              <article className="grade-row-ref unified" key={course.id}>
                <span className="ref-letter navy">{course.code.split(' ')[0][0]}</span>
                <div>
                  <h3>{course.title}</h3>
                  <p>{course.code} · Attendance {course.attendance}%</p>
                  <ProgressBar value={course.progress} compact tone={course.risk === 'Exam soon' ? 'gold' : 'teal'} />
                </div>
                <strong>{course.grade}<small>{course.gradeTrend}</small></strong>
              </article>
            ))}
          </div>
        </ListPanel>

        <ListPanel title="Outcome Evidence" subtitle="Progress bars use labels and numeric values for accessibility.">
          <div className="pulse-stack">
            {courses[0].gradeBreakdown.map((item) => (
              <article className="pulse-card" key={item.label}>
                <div><strong>{item.label}</strong><span>FIN 301 assessment evidence</span></div>
                <ProgressBar value={item.value} compact tone="green" />
              </article>
            ))}
          </div>
        </ListPanel>
      </section>

      <ListPanel title="Recent Feedback" subtitle="Feedback is visible near grades so students know how to recover or improve.">
        <div className="stack-list">
          <article className="notice"><StatusBadge tone="success">Reviewed</StatusBadge><strong>Literature Review Draft</strong><p>Strong citation structure. Next step: tighten the conclusion around class readings.</p></article>
          <article className="notice"><StatusBadge tone="info">In progress</StatusBadge><strong>Open Banking Risk Memo</strong><p>Draft is 64% complete. Review rubric evidence before submission.</p></article>
        </div>
      </ListPanel>
    </AppShell>
  );
}
