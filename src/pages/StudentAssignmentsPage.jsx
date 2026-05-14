import { Calendar, ChevronRight, Filter } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';

const assignmentRows = [
  { title: 'Binary Search Tree Implementation', course: 'Data Structures', due: 'May 16, 2026', points: '100 pts', priority: 'High', status: 'Not Started', color: 'red', actions: ['Start Assignment'] },
  { title: 'Linear Regression Analysis', course: 'Machine Learning', due: 'May 18, 2026', points: '75 pts', priority: 'Medium', status: 'In Progress', color: 'yellow', actions: ['Continue Working', 'Submit'] },
  { title: 'System Design Document', course: 'Software Engineering', due: 'May 24, 2026', points: '120 pts', priority: 'Low', status: 'Submitted', color: 'green', actions: ['View Submission'] }
];

export default function StudentAssignmentsPage(props) {
  return (
    <AppShell {...props} title="Assignments">
      <section className="ref-page">
        <div className="ref-title-row">
          <div>
            <h1>Assignments</h1>
            <div className="ref-tabs">
              <button className="active">All</button>
              <button>Pending</button>
              <button>Submitted</button>
              <button>Graded</button>
            </div>
          </div>
          <div className="ref-filter-row">
            <button><Filter size={16} /> Filter by Course</button>
            <button><Calendar size={16} /> Filter by Date</button>
          </div>
        </div>
        <div className="assignment-list">
          {assignmentRows.map((item) => (
            <article className={`assignment-wide ${item.color === 'red' ? 'featured' : ''}`} key={item.title}>
              <span className={`dot ${item.color}`} />
              <div className="assignment-main">
                <h2>{item.title}</h2>
                <p>{item.course}</p>
                <div className="assignment-details">
                  <span><small>Due Date</small>{item.due}<em>11:59 PM</em></span>
                  <span><small>Points</small>{item.points}</span>
                  <span><small>Priority</small><b className={item.color}>{item.priority}</b></span>
                </div>
                <div className="assignment-buttons">
                  {item.actions.map((action, index) => <button className={index === 0 && item.color !== 'red' ? 'cyan' : ''} key={action}>{action}</button>)}
                </div>
              </div>
              <div className="assignment-status">
                <span>{item.status}</span>
                <ChevronRight size={22} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
