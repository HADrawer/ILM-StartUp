import { ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';

const classes = [
  { name: 'Data Structures', time: '09:00 AM', place: 'Room 301', color: 'navy' },
  { name: 'Machine Learning', time: '11:30 AM', place: 'Online', color: 'blue', live: true },
  { name: 'Software Engineering', time: '02:00 PM', place: 'Room 205', color: 'cyan' }
];

export default function StudentSchedulePage(props) {
  return (
    <AppShell {...props} title="Schedule">
      <section className="ref-page">
        <h1>Schedule</h1>
        <div className="week-card">
          <ChevronLeft size={22} />
          <div>
            <strong>Week of May 13 - May 17, 2026</strong>
            <span>Spring 2026 Semester</span>
          </div>
          <ChevronRight size={22} />
        </div>
        <div className="schedule-layout">
          <div className="calendar-card">
            <div className="calendar-grid header">
              <span>Time</span>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => <strong key={day}>{day}<small>May {13 + index}</small></strong>)}
            </div>
            {['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'].map((time) => (
              <div className="calendar-grid" key={time}>
                <span>{time}</span>
                <div>{time === '09:00' && <CourseBlock color="navy" title="Data Structures" room="Room 301" />}</div>
                <div>{time === '11:00' && <CourseBlock color="blue" title="Machine Learning" room="Online" />}</div>
                <div>{time === '09:00' && <CourseBlock color="navy" title="Data Structures" room="Room 301" />}</div>
                <div>{time === '11:00' && <CourseBlock color="blue" title="Machine Learning" room="Online" />}</div>
                <div>{time === '13:00' && <CourseBlock color="cyan" title="Software Engineering" room="Room 205" />}</div>
              </div>
            ))}
          </div>
          <aside className="schedule-side">
            <section className="ref-side-card">
              <h2>Today's Classes</h2>
              {classes.map((item) => (
                <article className="today-class" key={item.name}>
                  <span className={`dot ${item.color}`} />
                  <strong>{item.name} {item.live && <em>LIVE</em>}</strong>
                  <small><Clock size={13} /> {item.time}</small>
                  <small><MapPin size={13} /> {item.place}</small>
                </article>
              ))}
            </section>
            <section className="ref-side-card">
              <h2>Quick Actions</h2>
              <button className="ref-full-btn">Join Next Class</button>
              <button className="ref-soft-btn">Download Schedule</button>
            </section>
          </aside>
        </div>
      </section>
    </AppShell>
  );
}

function CourseBlock({ color, title, room }) {
  return (
    <article className={`course-block ${color}`}>
      <strong>{title}</strong>
      <span>{room}</span>
    </article>
  );
}
