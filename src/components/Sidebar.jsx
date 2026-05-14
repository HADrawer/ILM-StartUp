import {
  BarChart3,
  Bell,
  BrainCircuit,
  BookOpen,
  Calendar,
  ClipboardCheck,
  FileSearch,
  FileText,
  Grid2X2,
  Medal,
  Settings,
  Shield,
  Sparkles,
  Video
} from 'lucide-react';
import Brand from './Brand.jsx';
import { doctorProfile, studentProfile } from '../data/mockData.js';

const nav = {
  student: [
    ['Dashboard', '#student/dashboard', Grid2X2, 'dashboard'],
    ['Courses', '#student/courses', BookOpen, 'courses'],
    ['Schedule', '#student/schedule', Calendar, 'schedule'],
    ['Assignments', '#student/assignments', FileText, 'assignments'],
    ['Exams', '#student/exams', Shield, 'exams'],
    ['Announcements', '#student/announcements', Bell, 'announcements'],
    ['Grades', '#student/grades', Medal, 'grades'],
    ['AI Assistant', '#student/ai-assistant', Sparkles, 'ai-assistant'],
    ['Settings', '#student/settings', Settings, 'settings']
  ],
  doctor: [
    ['Dashboard', '#doctor/dashboard', Grid2X2, 'dashboard'],
    ['Courses', '#doctor/course/fintech-301', BookOpen, 'course'],
    ['Submissions', '#doctor/dashboard', ClipboardCheck, 'submissions'],
    ['AI Detector', '#doctor/detector', FileSearch],
    ['AI Generator', '#doctor/generator', Sparkles],
    ['Secure Exams', '#doctor/exam', Shield],
    ['Live Classes', '#doctor/live', Video],
    ['Analytics', '#doctor/analytics', BarChart3]
  ]
};

export default function Sidebar({ role, page }) {
  const isDoctor = role === 'doctor';
  const user = isDoctor ? doctorProfile : studentProfile;

  return (
    <aside className="sidebar">
      <Brand />
      <nav className="side-nav" aria-label={`${role} navigation`}>
        {nav[role].map(([label, href, Icon, routeKey]) => {
          const active = routeKey ? routeKey === page || (routeKey === 'exams' && page === 'exam') || (routeKey === 'courses' && page === 'course') : href.includes(`/${page}`);
          return (
            <a className={active ? 'active' : ''} href={href} key={label}>
              <Icon size={18} />
              {label}
            </a>
          );
        })}
      </nav>
      <div className="campus-card">
        <div className="avatar">{user.avatar}</div>
        <div>
          <strong>{user.name}</strong>
          <small>{user.email}</small>
        </div>
      </div>
    </aside>
  );
}
