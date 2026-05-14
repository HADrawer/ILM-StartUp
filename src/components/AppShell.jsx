import Sidebar from './Sidebar.jsx';
import Navbar from './Navbar.jsx';
import { Command } from 'lucide-react';

export default function AppShell({ role, page, title, subtitle, children }) {
  return (
    <div className="app-shell">
      <Sidebar role={role} page={page} />
      <main className="main-area">
        <Navbar role={role} title={title} subtitle={subtitle} />
        <div className="command-strip">
          <span><Command size={16} /> Fast path</span>
          <a href={`#${role}/course/fintech-301`}>Course hub</a>
          <a href={`#${role}/exam`}>Secure exam</a>
          <a href={`#${role}/live`}>Live room</a>
          {role === 'doctor' && <a href="#doctor/detector">AI review</a>}
        </div>
        {children}
      </main>
    </div>
  );
}
