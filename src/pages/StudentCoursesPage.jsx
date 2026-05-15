import { BookOpenCheck } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';
import CourseCard from '../components/CourseCard.jsx';
import EmptyState from '../components/EmptyState.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { courses } from '../data/mockData.js';

export default function StudentCoursesPage(props) {
  return (
    <AppShell {...props} title="Courses" subtitle="Your Blackboard-style course spaces, materials, assignments, and live rooms.">
      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Active Course Spaces</h2>
            <p>Each course shows progress, next class, active learner count, and the safest next action.</p>
          </div>
          <StatusBadge tone="success">{courses.length} active</StatusBadge>
        </div>
        {courses.length ? (
          <div className="course-grid">
            {courses.map((course) => <CourseCard course={course} role="student" key={course.id} />)}
          </div>
        ) : (
          <EmptyState icon={BookOpenCheck} title="No active courses" body="Your registered courses will appear here after enrollment sync." />
        )}
      </section>
    </AppShell>
  );
}
