import { Bell, Search } from 'lucide-react';
import { doctorProfile, studentProfile } from '../data/mockData.js';

export default function Navbar({ role, title, subtitle }) {
  const user = role === 'doctor' ? doctorProfile : studentProfile;
  const searchTerm = title?.toLowerCase().includes('course') ? 'courses' : title?.toLowerCase().includes('exam') ? 'exams' : title?.toLowerCase().includes('live') ? 'classes' : title?.toLowerCase().includes('assignment') ? 'assignments' : 'courses, assignments, materials';

  return (
    <header className="topbar">
      <div>
        <h1>{title}</h1>
        {subtitle && <p className="topbar-sub">{subtitle}</p>}
      </div>
      <div className="topbar-actions">
        <label className="search-pill">
          <Search size={20} />
          <input aria-label={`Search ${searchTerm}`} placeholder={`Search ${searchTerm}...`} />
        </label>
        <button className="notification-btn" aria-label="Notifications">
          <Bell size={21} />
          <span />
        </button>
        <div className="profile">
          <div className="profile-meta">
            <strong>{user.name}</strong>
            <span>{user.role} · {user.semester}</span>
          </div>
          <div className="avatar">{user.avatar}</div>
        </div>
      </div>
    </header>
  );
}
