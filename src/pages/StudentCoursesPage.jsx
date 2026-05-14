import { BookOpen, Calendar, Clock, FileText, Shield } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';

const courseCards = [
  { letter: 'D', title: 'Data Structures', teacher: 'Dr. Sarah Roberts', progress: 78, files: 24, assignments: 8, exams: 2, time: 'Mon 9:00 AM', tone: 'navy' },
  { letter: 'M', title: 'Machine Learning', teacher: 'Prof. Michael Chen', progress: 65, files: 31, assignments: 12, exams: 3, time: 'Tue 11:00 AM', tone: 'blue' },
  { letter: 'S', title: 'Software Engineering', teacher: 'Dr. Emma Davis', progress: 82, files: 18, assignments: 6, exams: 2, time: 'Wed 2:00 PM', tone: 'cyan' },
  { letter: 'D', title: 'Database Systems', teacher: 'Prof. James Wilson', progress: 45, files: 27, assignments: 10, exams: 2, time: 'Thu 1:00 PM', tone: 'navy' }
];

export default function StudentCoursesPage(props) {
  return (
    <AppShell {...props} title="Courses">
      <section className="ref-page">
        <h1>My Courses</h1>
        <div className="ref-tabs">
          <button className="active">All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        <div className="ref-course-grid">
          {courseCards.map((course) => (
            <article className="ref-course-card" key={course.title}>
              <div className="ref-course-head">
                <span className={`ref-letter ${course.tone}`}>{course.letter}</span>
                <div>
                  <h2>{course.title}</h2>
                  <p>{course.teacher}</p>
                </div>
              </div>
              <div className="ref-progress-label">
                <span>Course Progress</span>
                <strong>{course.progress}%</strong>
              </div>
              <div className="ref-progress"><span style={{ width: `${course.progress}%` }} /></div>
              <div className="ref-course-meta">
                <span><FileText size={16} /> {course.files} Files</span>
                <span><BookOpen size={16} /> {course.assignments} Assignments</span>
                <span><Shield size={16} /> {course.exams} Exams</span>
                <span><Clock size={16} /> {course.time}</span>
              </div>
              <div className="ref-card-footer">
                <span><Calendar size={16} /> Next class: {course.time}</span>
                <a href="#student/course/fintech-301">View Course</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
