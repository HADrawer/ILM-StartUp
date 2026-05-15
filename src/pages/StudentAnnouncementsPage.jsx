import { Bell, Filter } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';
import Button from '../components/Button.jsx';
import EmptyState from '../components/EmptyState.jsx';
import ListPanel from '../components/ListPanel.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { announcements, courses } from '../data/mockData.js';

export default function StudentAnnouncementsPage(props) {
  return (
    <AppShell {...props} title="Announcements" subtitle="Course and campus updates with clear audience, tone, and recovery actions.">
      <section className="page-toolbar">
        <div className="segmented-control" aria-label="Announcement filters">
          <button className="active" type="button">All</button>
          <button type="button">Important</button>
          <button type="button">Unread</button>
        </div>
        <Button variant="control" icon={Filter}>Filter by Course</Button>
      </section>

      <ListPanel title="Latest Updates" subtitle="Messages are grouped by importance and written in academic language.">
        {announcements.length ? (
          <div className="announcement-list-ref unified">
            {announcements.map((item) => (
              <article className={`announcement-ref ${item.tone === 'warning' ? 'important' : ''}`} key={item.title}>
                <div className={`announcement-icon ${item.tone === 'warning' ? 'red' : item.tone === 'success' ? 'green' : 'blue'}`}><Bell size={22} /></div>
                <div>
                  <h2>{item.title} <StatusBadge tone={item.tone}>{item.audience}</StatusBadge></h2>
                  <p>{courses[0].university || 'University channel'} · Posted to {item.audience}</p>
                  <strong>{item.body}</strong>
                  <div><a href="#student/dashboard">View context</a><button type="button">Mark as Read</button></div>
                </div>
                <time>Today</time>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState icon={Bell} title="No announcements" body="Important course and campus updates will appear here." />
        )}
      </ListPanel>
    </AppShell>
  );
}
