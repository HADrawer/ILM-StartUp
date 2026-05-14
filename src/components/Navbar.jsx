import { Bell, Search } from 'lucide-react';
import { doctorProfile, studentProfile } from '../data/mockData.js';

export default function Navbar({ role, title, subtitle }) {
  const user = role === 'doctor' ? doctorProfile : studentProfile;
  const searchTerm = title?.toLowerCase().includes('course') ? 'courses' : title?.toLowerCase().includes('exam') ? 'exams' : title?.toLowerCase().includes('live') ? 'classes' : title?.toLowerCase().includes('assignment') ? 'assignments' : 'courses, assignments, materials';

  return (
    <header className="topbar">
      <div className="search-pill">
        <Search size={22} />
        <span>Search {searchTerm}...</span>
      </div>
      <div className="topbar-actions">
        <button className="notification-btn" aria-label="Notifications">
          <Bell size={21} />
          <span />
        </button>
        <div className="profile">
          <div className="avatar">{user.avatar}</div>
        </div>
      </div>
    </header>
  );
}
