import { CalendarClock, ClipboardCheck, RadioTower, Video } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';
import LiveClassRoom from '../components/LiveClassRoom.jsx';
import ListPanel from '../components/ListPanel.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { liveClasses } from '../data/mockData.js';

export default function LiveClassPage(props) {
  return (
    <AppShell {...props} title="Live Class Studio" subtitle="A Teams alternative where meetings, attendance, chat, and course context stay connected.">
      <section className="studio-summary">
        <article>
          <Video size={22} />
          <span>Current room</span>
          <strong>FIN 301 · Live Room A</strong>
        </article>
        <article>
          <RadioTower size={22} />
          <span>Session status</span>
          <strong>Recording · Attendance synced</strong>
        </article>
        <article>
          <ClipboardCheck size={22} />
          <span>Class context</span>
          <strong>Slides, chat, and course files linked</strong>
        </article>
      </section>

      <LiveClassRoom />

      <section className="content-grid">
        <ListPanel title="Upcoming Sessions" subtitle="Live classes stay visible inside the same academic system.">
          <div className="stack-list">
            {liveClasses.map((item) => (
              <article className="list-item rich" key={item.title}>
                <span className="item-icon"><CalendarClock size={17} /></span>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.course} · {item.time} · Host {item.host}</span>
                </div>
                <StatusBadge tone={item.status.includes('Starts') ? 'warning' : 'neutral'}>{item.status}</StatusBadge>
              </article>
            ))}
          </div>
        </ListPanel>

        <ListPanel title="Classroom Advantages" subtitle="Why ILM is more than a video link.">
          <div className="principle-list">
            <article><strong>Course-aware sessions</strong><span>Materials, chat, and attendance are attached to the right course.</span></article>
            <article><strong>Fewer context switches</strong><span>Students do not jump between separate LMS and video tools.</span></article>
            <article><strong>Instructor control</strong><span>Session actions are visible, predictable, and role appropriate.</span></article>
          </div>
        </ListPanel>
      </section>
    </AppShell>
  );
}
