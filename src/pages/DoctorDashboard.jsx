import {
  AlertTriangle,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  ClipboardCheck,
  FileSearch,
  LockKeyhole,
  Sparkles,
  UsersRound,
  Video
} from 'lucide-react';
import AppShell from '../components/AppShell.jsx';
import Button from '../components/Button.jsx';
import DashboardCard from '../components/DashboardCard.jsx';
import DataTable from '../components/DataTable.jsx';
import ListPanel from '../components/ListPanel.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { announcements, courses, liveClasses, quickActions, submissions } from '../data/mockData.js';

export default function DoctorDashboard(props) {
  const doctorActions = quickActions.slice(3);

  return (
    <AppShell {...props} title="Doctor Command Center" subtitle="Course operations, submissions, AI tools, exams, and live teaching in one workspace.">
      <section className="priority-hero doctor">
        <div>
          <h2>Welcome back, Dr. Mariam!</h2>
          <p>Review submissions, manage secure exams, and prepare AI-assisted assessments for today.</p>
        </div>
        <div className="priority-actions">
          <Button as="a" href="#doctor/detector" icon={FileSearch}>Open AI Detector</Button>
          <Button as="a" href="#doctor/generator" variant="secondary" icon={Sparkles}>Generate Assessment</Button>
        </div>
      </section>

      <section className="metric-grid">
        <DashboardCard icon={BookOpenCheck} label="Active courses" value="3" meta="126 students" />
        <DashboardCard icon={ClipboardCheck} label="Submissions" value="18" meta="6 need review" tone="green" />
        <DashboardCard icon={BrainCircuit} label="AI reviews" value="4" meta="1 high priority" tone="coral" />
        <DashboardCard icon={LockKeyhole} label="Secure exams" value="2" meta="Scheduled" tone="gold" />
      </section>

      <section className="action-rail">
        {doctorActions.map((action) => {
          const Icon = action.icon;
          return (
            <a href={action.route} key={action.label}>
              <Icon size={18} />
              <span>{action.label}</span>
            </a>
          );
        })}
      </section>

      <section className="content-grid wide-left">
        <ListPanel title="Course Operations" subtitle="Live status, student activity, and course health.">
          <div className="doctor-course-list">
            {courses.map((course) => (
              <a href={`#doctor/course/${course.id}`} className="doctor-course" key={course.id}>
                <span>{course.code}</span>
                <div>
                  <strong>{course.title}</strong>
                  <small>{course.students} students · {course.nextClass} · {course.room}</small>
                </div>
                <ProgressBar value={course.progress} compact tone={course.risk === 'Exam soon' ? 'gold' : 'teal'} />
              </a>
            ))}
          </div>
        </ListPanel>

        <ListPanel title="Teaching Tools" subtitle="Instructor-only AI and assessment workflows.">
          <div className="tool-grid">
            <a className="tool-panel" href="#doctor/detector">
              <FileSearch size={21} />
              <strong>AI Detector</strong>
              <span>Probability, confidence, similarity context, highlighted sections, and report export.</span>
            </a>
            <a className="tool-panel" href="#doctor/generator">
              <Sparkles size={21} />
              <strong>AI Generator</strong>
              <span>Draft quizzes, assignments, assessments, and midterms from outcomes.</span>
            </a>
            <a className="tool-panel" href="#doctor/analytics">
              <BarChart3 size={21} />
              <strong>Institution Analytics</strong>
              <span>Adoption, exam readiness, live attendance, and AI review volume.</span>
            </a>
          </div>
        </ListPanel>
      </section>

      <section className="content-grid">
        <ListPanel title="Student Submissions" subtitle="Review queue with AI and similarity signals separated.">
          <DataTable
            columns={[
              { key: 'student', label: 'Student' },
              { key: 'item', label: 'Item' },
              { key: 'ai', label: 'AI', render: (row) => <StatusBadge tone={row.ai > 60 ? 'warning' : 'success'}>{row.ai}%</StatusBadge> },
              { key: 'similarity', label: 'Similarity', render: (row) => `${row.similarity}%` },
              { key: 'status', label: 'Status', render: (row) => <StatusBadge tone={row.status === 'Flagged' ? 'warning' : 'neutral'}>{row.status}</StatusBadge> }
            ]}
            rows={submissions}
            getKey={(row) => `${row.student}-${row.item}`}
          />
        </ListPanel>

        <ListPanel title="Upcoming Live Classes" subtitle="Integrated schedule and attendance context.">
          <div className="stack-list">
            {liveClasses.map((item) => (
              <a className="list-item rich" href="#doctor/live" key={item.title}>
                <span className="item-icon"><Video size={17} /></span>
                <div>
                  <strong>{item.course}</strong>
                  <span>{item.title} · {item.time}</span>
                </div>
                <StatusBadge tone="info">{item.attendance}</StatusBadge>
              </a>
            ))}
          </div>
        </ListPanel>
      </section>

      <section className="content-grid">
        <ListPanel title="Exam Management" subtitle="Lock mode readiness and exam windows.">
          <div className="readiness-card">
            <LockKeyhole size={24} />
            <div>
              <strong>CS 220 secure midterm</strong>
              <p>45 questions · 90 minutes · 92% readiness score across enrolled students.</p>
              <ProgressBar label="Class readiness" value={92} tone="green" />
            </div>
            <Button as="a" href="#doctor/exam" variant="secondary">Open Exam Room</Button>
          </div>
        </ListPanel>

        <ListPanel title="Announcements" subtitle="Targeted updates across courses and institution channels.">
          <div className="stack-list">
            {announcements.map((item) => (
              <article className="notice" key={item.title}>
                <div><StatusBadge tone={item.tone}>{item.audience}</StatusBadge></div>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </ListPanel>
      </section>
    </AppShell>
  );
}
