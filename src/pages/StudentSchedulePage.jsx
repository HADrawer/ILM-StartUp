import { CalendarClock, ChevronLeft, ChevronRight, Clock, MapPin, Video } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';
import Button from '../components/Button.jsx';
import ListPanel from '../components/ListPanel.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { courses, liveClasses } from '../data/mockData.js';

export default function StudentSchedulePage(props) {
  return (
    <AppShell {...props} title="Schedule" subtitle="Weekly learning plan with physical rooms, live sessions, and exam preparation context.">
      <section className="week-card">
        <Button variant="icon" aria-label="Previous week" icon={ChevronLeft}><span className="sr-only">Previous</span></Button>
        <div>
          <strong>Week of May 17 - May 21, 2026</strong>
          <span>Spring 2026 Semester · Bahrain time</span>
        </div>
        <Button variant="icon" aria-label="Next week" icon={ChevronRight}><span className="sr-only">Next</span></Button>
      </section>

      <section className="content-grid wide-left">
        <div className="calendar-card unified">
          <div className="calendar-grid header">
            <span>Time</span>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu'].map((day, index) => <strong key={day}>{day}<small>May {17 + index}</small></strong>)}
          </div>
          {['08:30', '10:00', '11:30', '13:00', '14:30'].map((time) => (
            <div className="calendar-grid" key={time}>
              <span>{time}</span>
              <div>{time === '08:30' && <CourseBlock title="ENG 115" room="Live Room C" live />}</div>
              <div>{time === '10:00' && <CourseBlock title="FIN 301" room="Live Room A" live />}</div>
              <div>{time === '11:30' && <CourseBlock title="Study block" room="Library" tone="gold" />}</div>
              <div>{time === '13:00' && <CourseBlock title="CS 220 Lab" room="Lab 204 + Live" live />}</div>
              <div>{time === '14:30' && <CourseBlock title="Advisor hours" room="Office 2B" tone="green" />}</div>
            </div>
          ))}
        </div>

        <div className="stack-list">
          <ListPanel title="Today’s Classes" subtitle="Class status is readable without opening the live room.">
            <div className="stack-list">
              {courses.map((course) => (
                <article className="today-class unified" key={course.id}>
                  <span className="dot green" />
                  <strong>{course.code} · {course.title}</strong>
                  <small><Clock size={13} /> {course.nextClass}</small>
                  <small><MapPin size={13} /> {course.room}</small>
                </article>
              ))}
            </div>
          </ListPanel>
          <ListPanel title="Live Sessions" subtitle="Joinable rooms and attendance context.">
            <div className="stack-list">
              {liveClasses.slice(0, 2).map((item) => (
                <a className="list-item rich" href="#student/live" key={item.title}>
                  <span className="item-icon"><Video size={17} /></span>
                  <div><strong>{item.course}</strong><span>{item.time}</span></div>
                  <StatusBadge tone="info">{item.attendance}</StatusBadge>
                </a>
              ))}
            </div>
          </ListPanel>
        </div>
      </section>
    </AppShell>
  );
}

function CourseBlock({ title, room, live = false, tone = 'teal' }) {
  return (
    <article className={`course-block ${tone}`}>
      <strong>{title}</strong>
      <span>{room}</span>
      {live && <em>Live</em>}
    </article>
  );
}
