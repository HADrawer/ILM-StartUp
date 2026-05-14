import { Bell, BookOpen, Calendar, Clock, FileText, Sparkles, Video } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';

const todaySchedule = [
  { time: '09:00 AM', title: 'Data Structures', type: 'Lecture · Room 301', color: 'navy' },
  { time: '11:30 AM', title: 'Machine Learning', type: 'Lab · Online', color: 'blue', live: true },
  { time: '02:00 PM', title: 'Software Engineering', type: 'Tutorial · Room 205', color: 'cyan' }
];

const assignments = [
  { color: 'red', title: 'Binary Search Tree Implementation', course: 'Data Structures', due: 'Due in 2 days', status: 'Not started' },
  { color: 'yellow', title: 'Linear Regression Analysis', course: 'Machine Learning', due: 'Due in 5 days', status: 'Not started' },
  { color: 'green', title: 'System Design Document', course: 'Software Engineering', due: 'Due in 1 week', status: 'Not started' }
];

const progress = [
  ['Data Structures', 78, 'navy'],
  ['Machine Learning', 65, 'blue'],
  ['Software Engineering', 82, 'cyan'],
  ['Database Systems', 45, 'navy']
];

export default function StudentDashboard(props) {
  return (
    <AppShell {...props} title="Dashboard">
      <section className="ref-page dashboard-ref">
        <h1>Welcome back, John!</h1>
        <p className="ref-subtitle">Here's what's happening with your courses today.</p>

        <div className="quick-action-row">
          <a className="navy" href="#student/live"><Video size={20} /> Join Class</a>
          <a className="blue" href="#student/courses"><BookOpen size={20} /> Open Materials</a>
          <a className="cyan" href="#student/schedule"><Calendar size={20} /> Check Deadlines</a>
          <a className="cream" href="#student/exams"><FileText size={20} /> Start Quiz</a>
        </div>

        <div className="dashboard-grid-ref">
          <main>
            <section className="ref-panel">
              <div className="panel-title-row">
                <h2>Today's Schedule</h2>
                <span>Wednesday, May 14</span>
              </div>
              <div className="schedule-list-ref">
                {todaySchedule.map((item) => (
                  <article className="schedule-row-ref" key={item.title}>
                    <time>{item.time}</time>
                    <div className={`schedule-accent ${item.color}`} />
                    <div>
                      <h3>{item.title} {item.live && <em>LIVE</em>}</h3>
                      <p>{item.type}</p>
                    </div>
                    <a href="#student/live">Join</a>
                  </article>
                ))}
              </div>
            </section>

            <section className="ref-panel">
              <div className="panel-title-row">
                <h2>Upcoming Assignments</h2>
                <a href="#student/assignments">View All</a>
              </div>
              <div className="assignment-mini-list">
                {assignments.map((item) => (
                  <a className="assignment-mini" href="#student/assignments" key={item.title}>
                    <span className={`dot ${item.color}`} />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.course}</p>
                    </div>
                    <div>
                      <strong>{item.due}</strong>
                      <small>{item.status}</small>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section className="ref-panel">
              <h2>Course Progress</h2>
              <div className="progress-grid-ref">
                {progress.map(([title, value, color]) => (
                  <article key={title}>
                    <h3>{title}</h3>
                    <div><span>Progress</span><strong>{value}%</strong></div>
                    <div className={`ref-progress ${color}`}><span style={{ width: `${value}%` }} /></div>
                  </article>
                ))}
              </div>
            </section>
          </main>

          <aside className="dashboard-side-ref">
            <section className="gradient-card study-card">
              <Sparkles size={26} />
              <h2>AI Study Assistant</h2>
              <p>Get instant help with your studies. Summarize chapters, create flashcards, and more.</p>
              <a href="#student/ai-assistant">Start AI Session</a>
            </section>

            <section className="ref-side-card">
              <div className="panel-title-row">
                <h2>Announcements</h2>
                <Bell size={20} />
              </div>
              <article className="announcement-mini">
                <h3>Midterm Schedule Released <span>Important</span></h3>
                <p>Data Structures · 2h ago</p>
              </article>
              <article className="announcement-mini">
                <h3>New Lab Material Available</h3>
                <p>Machine Learning · 5h ago</p>
              </article>
              <article className="announcement-mini">
                <h3>Project Guidelines Updated</h3>
                <p>Software Engineering · 1d ago</p>
              </article>
            </section>

            <section className="ref-side-card">
              <h2>Quick Stats</h2>
              <div className="quick-stat"><FileText size={22} /><span>Pending Tasks</span><strong>7</strong></div>
              <div className="quick-stat"><Clock size={22} /><span>Hours This Week</span><strong>24</strong></div>
              <div className="quick-stat"><BookOpen size={22} /><span>Active Courses</span><strong>5</strong></div>
            </section>
          </aside>
        </div>
      </section>
    </AppShell>
  );
}
