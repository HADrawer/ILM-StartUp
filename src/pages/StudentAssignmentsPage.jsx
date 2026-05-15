import { CalendarClock, ClipboardCheck, Filter } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';
import Button from '../components/Button.jsx';
import DataTable from '../components/DataTable.jsx';
import ListPanel from '../components/ListPanel.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { assignments } from '../data/mockData.js';

export default function StudentAssignmentsPage(props) {
  return (
    <AppShell {...props} title="Assignments" subtitle="A single view for drafts, submissions, due dates, weights, and feedback status.">
      <section className="page-toolbar">
        <div className="segmented-control" aria-label="Assignment filters">
          <button className="active" type="button">All</button>
          <button type="button">Open</button>
          <button type="button">Submitted</button>
          <button type="button">Reviewed</button>
        </div>
        <div className="priority-actions">
          <Button variant="control" icon={Filter}>Course Filter</Button>
          <Button variant="control" icon={CalendarClock}>Due Date</Button>
        </div>
      </section>

      <section className="content-grid wide-left">
        <ListPanel title="Assignment Queue" subtitle="Status, due date, and grade weight are shown together for fast scanning.">
          <DataTable
            columns={[
              { key: 'title', label: 'Assignment' },
              { key: 'course', label: 'Course' },
              { key: 'due', label: 'Due' },
              { key: 'weight', label: 'Weight' },
              { key: 'status', label: 'Status', render: (row) => <StatusBadge tone={row.status === 'Reviewed' || row.status === 'Submitted' ? 'success' : row.progress < 40 ? 'warning' : 'info'}>{row.status}</StatusBadge> },
              { key: 'progress', label: 'Progress', render: (row) => <ProgressBar value={row.progress} compact tone={row.progress < 40 ? 'gold' : 'teal'} /> }
            ]}
            rows={assignments}
            getKey={(row) => `${row.course}-${row.title}`}
          />
        </ListPanel>

        <ListPanel title="Next Best Actions" subtitle="Recognition-based shortcuts reduce hunting across course pages.">
          <div className="stack-list">
            {assignments.slice(0, 3).map((item) => (
              <article className="readiness-card" key={item.title}>
                <ClipboardCheck size={22} />
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.courseTitle} · Due {item.due}</p>
                </div>
                <Button as="a" href="#student/course/fintech-301" size="sm" variant="ghost">Open</Button>
              </article>
            ))}
          </div>
        </ListPanel>
      </section>
    </AppShell>
  );
}
