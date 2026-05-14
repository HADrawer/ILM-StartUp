import { ArrowRight, CalendarClock, UsersRound } from 'lucide-react';
import Button from './Button.jsx';
import ProgressBar from './ProgressBar.jsx';
import StatusBadge from './StatusBadge.jsx';

export default function CourseCard({ course, role }) {
  return (
    <article className="course-card">
      <div className="course-topline">
        <span>{course.code}</span>
        <StatusBadge tone={course.risk === 'Exam soon' ? 'warning' : 'success'}>{course.risk}</StatusBadge>
      </div>
      <h3>{course.title}</h3>
      <p>{course.instructor} · {course.college}</p>
      <ProgressBar label="Course progress" value={course.progress} compact />
      <div className="course-meta-grid">
        <span><CalendarClock size={15} />{course.nextClass}</span>
        <span><UsersRound size={15} />{course.activeLearners}/{course.students} active</span>
      </div>
      <div className="card-actions">
        <Button as="a" href={`#${role}/course/${course.id}`} variant="secondary" icon={ArrowRight}>Open Course</Button>
        <Button as="a" href={`#${role}/live`} variant="ghost">Live Room</Button>
      </div>
    </article>
  );
}
