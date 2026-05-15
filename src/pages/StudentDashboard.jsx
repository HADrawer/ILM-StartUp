import { Bell, BookOpenCheck, CalendarClock, ClipboardCheck, GraduationCap, ShieldCheck, Sparkles, Video } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';
import Button from '../components/Button.jsx';
import CourseCard from '../components/CourseCard.jsx';
import DashboardCard from '../components/DashboardCard.jsx';
import ListPanel from '../components/ListPanel.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { announcements, assignments, courses, liveClasses, quickActions, studentProfile } from '../data/mockData.js';

export default function StudentDashboard(props) {
  const studentActions = quickActions.slice(0, 3);
  const urgentAssignments = assignments.slice(0, 3);

  return (
    <AppShell {...props} title="Student Dashboard" subtitle={`${studentProfile.university} · ${studentProfile.semester} · ${studentProfile.college}`}>
      <section className="priority-hero student">
        <div>
          <StatusBadge tone="success">Today is organized</StatusBadge>
          <h2>Welcome back, {studentProfile.name}. Your classes, exams, and course work are in one place.</h2>
          <p>ILM keeps live sessions, secure exams, materials, assignments, and academic support connected to your courses.</p>
        </div>
        <div className="priority-actions">
          <Button as="a" href="#student/live" icon={Video}>Join Live Class</Button>
          <Button as="a" href="#student/exam" variant="secondary" icon={ShieldCheck}>Run Exam Check</Button>
        </div>
      </section>

      <section className="metric-grid">
        <DashboardCard icon={BookOpenCheck} label="Active courses" value={courses.length} meta="Spring 2026" />
        <DashboardCard icon={ClipboardCheck} label="Open tasks" value={assignments.length} meta="2 need attention" tone="gold" />
        <DashboardCard icon={CalendarClock} label="Next live class" value="10:00" meta="FIN 301 · Today" tone="green" />
        <DashboardCard icon={GraduationCap} label="Best progress" value="86%" meta="ENG 115" tone="teal" />
      </section>

      <section className="action-rail">
        {studentActions.map((action) => {
          const Icon = action.icon;
          return <a href={action.route} key={action.label}><Icon size={18} /><span>{action.label}</span></a>;
        })}
      </section>

      <section className="content-grid wide-left">
        <ListPanel title="My Courses" subtitle="Course health, upcoming class time, and progress are visible without opening each course.">
          <div className="course-grid compact">
            {courses.map((course) => <CourseCard course={course} role="student" key={course.id} />)}
          </div>
        </ListPanel>

        <ListPanel title="Today’s Live Learning" subtitle="Meetings stay connected to course context and attendance.">
          <div className="stack-list">
            {liveClasses.map((item) => (
              <a className="list-item rich" href="#student/live" key={item.title}>
                <span className="item-icon"><Video size={17} /></span>
                <div>
                  <strong>{item.course}</strong>
                  <span>{item.title} · {item.time}</span>
                </div>
                <StatusBadge tone={item.status.includes('Starts') ? 'warning' : 'neutral'}>{item.status}</StatusBadge>
              </a>
            ))}
          </div>
        </ListPanel>
      </section>

      <section className="content-grid">
        <ListPanel title="Assignments Needing Attention" subtitle="Clear status labels prevent surprises near deadlines.">
          <div className="stack-list">
            {urgentAssignments.map((item) => (
              <article className="task-card" key={`${item.course}-${item.title}`}>
                <div>
                  <StatusBadge tone={item.status === 'Reviewed' || item.status === 'Submitted' ? 'success' : item.progress < 40 ? 'warning' : 'info'}>{item.status}</StatusBadge>
                  <strong>{item.title}</strong>
                  <span>{item.course} · Due {item.due} · Weight {item.weight}</span>
                </div>
                <ProgressBar value={item.progress} compact tone={item.progress < 40 ? 'gold' : 'teal'} />
              </article>
            ))}
          </div>
        </ListPanel>

        <ListPanel title="Announcements" subtitle="Important messages use text labels and tone, not color alone.">
          <div className="stack-list">
            {announcements.slice(0, 3).map((item) => (
              <article className="notice" key={item.title}>
                <div><StatusBadge tone={item.tone}>{item.audience}</StatusBadge></div>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </ListPanel>
      </section>

      <section className="panel ai-student-panel">
        <div>
          <Sparkles size={22} />
          <h2>AI Study Assistant</h2>
          <p>Summarize course material, create practice questions, and prepare revision plans from mock course context.</p>
        </div>
        <Button as="a" href="#student/ai-assistant" variant="secondary">Open Assistant</Button>
      </section>
    </AppShell>
  );
}
