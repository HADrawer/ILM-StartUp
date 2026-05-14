import { ArrowRight, Bell, CalendarClock, ClipboardCheck, FileText, Video } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';
import Button from '../components/Button.jsx';
import DataTable from '../components/DataTable.jsx';
import ListPanel from '../components/ListPanel.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import StatusBadge from '../components/StatusBadge.jsx';

export default function CoursePage({ role, page, course }) {
  return (
    <AppShell role={role} page={page} title={course.title} subtitle={`${course.code} · ${course.college} · ${course.instructor}`}>
      <section className="course-hero">
        <div>
          <StatusBadge tone="success">Active Course</StatusBadge>
          <h2>{course.title}</h2>
          <p>{course.instructor} · Next class {course.nextClass} · {course.room}</p>
          <div className="course-hero-actions">
            <Button as="a" href={`#${role}/live`} icon={Video}>Join Live Class</Button>
            <Button as="a" href={`#${role}/exam`} variant="secondary" icon={ClipboardCheck}>Exam Readiness</Button>
          </div>
        </div>
        <div className="course-score-card">
          <span>{role === 'student' ? 'Grade Preview' : 'Course Health'}</span>
          <strong>{role === 'student' ? course.grade : `${course.progress}%`}</strong>
          <small>{role === 'student' ? course.gradeTrend : `${course.activeLearners}/${course.students} active learners`}</small>
        </div>
      </section>

      <nav className="tabs" aria-label="Course sections">
        <a href="#materials">Materials</a>
        <a href="#assignments">Assignments</a>
        <a href="#announcements">Announcements</a>
        <a href="#outcomes">Outcomes</a>
        <a href={`#${role}/live`}>Live Class</a>
      </nav>

      <section className="course-overview-grid">
        <article>
          <CalendarClock size={20} />
          <span>Next Class</span>
          <strong>{course.nextClass}</strong>
          <small>{course.room}</small>
        </article>
        <article>
          <ClipboardCheck size={20} />
          <span>Assignments</span>
          <strong>{course.assignments.length}</strong>
          <small>Active tasks</small>
        </article>
        <article>
          <Bell size={20} />
          <span>Announcements</span>
          <strong>{course.announcements.length}</strong>
          <small>Course updates</small>
        </article>
        <article>
          <FileText size={20} />
          <span>Materials</span>
          <strong>{course.materials.length}</strong>
          <small>Curated resources</small>
        </article>
      </section>

      <section className="content-grid wide-left">
        <ListPanel title="Learning Path" subtitle="Materials are grouped by type, status, and estimated effort.">
          <div className="resource-list" id="materials">
            {course.materials.map((item) => (
              <article className="resource" key={item.title}>
                <span>{item.type}</span>
                <div>
                  <strong>{item.title}</strong>
                  <small>{item.time}</small>
                </div>
                <StatusBadge tone={item.status === 'Due' ? 'warning' : item.status === 'New' ? 'info' : 'neutral'}>{item.status}</StatusBadge>
              </article>
            ))}
          </div>
        </ListPanel>

        <ListPanel title={role === 'student' ? 'My Progress' : 'Class Progress'} subtitle="Grade and activity signals stay visible without taking over the page.">
          <div className="progress-large">
            <strong>{course.progress}%</strong>
            <ProgressBar value={course.progress} tone={course.risk === 'Exam soon' ? 'gold' : 'teal'} />
            <p>{role === 'student' ? `Current grade preview ${course.grade}. Attendance ${course.attendance}%.` : `${course.activeLearners} active learners out of ${course.students}. Attendance ${course.attendance}%.`}</p>
            {course.gradeBreakdown.map((item) => <ProgressBar key={item.label} label={item.label} value={item.value} compact />)}
          </div>
        </ListPanel>
      </section>

      <section className="content-grid">
        <ListPanel title="Assignments" subtitle="Course tasks with status and progress." className="anchor-section">
          <div id="assignments">
          <DataTable
            columns={[
              { key: 'title', label: 'Task' },
              { key: 'due', label: 'Due' },
              { key: 'weight', label: 'Weight' },
              { key: 'status', label: 'Status', render: (row) => <StatusBadge tone={row.status === 'Reviewed' || row.status === 'Submitted' ? 'success' : 'warning'}>{row.status}</StatusBadge> }
            ]}
            rows={course.assignments}
            getKey={(row) => row.title}
          />
          </div>
        </ListPanel>

        <ListPanel title="Announcements" subtitle="Instructor updates with clear severity." className="anchor-section">
          <div className="stack-list" id="announcements">
            {course.announcements.map((item) => (
              <article className="notice" key={item.title}>
                <StatusBadge tone={item.tone}>{item.tone}</StatusBadge>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </ListPanel>
      </section>

      <section className="panel outcomes-panel" id="outcomes">
        <div className="panel-head">
          <div>
            <h2>Course Outcomes</h2>
            <p>ILM connects assessment generation and grading evidence to these learning outcomes.</p>
          </div>
          {role === 'doctor' && <Button as="a" href="#doctor/generator" variant="secondary" icon={ArrowRight}>Generate From Outcomes</Button>}
        </div>
        <div className="outcome-list">
          {course.outcomes.map((outcome, index) => (
            <article key={outcome}>
              <span>0{index + 1}</span>
              <strong>{outcome}</strong>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
