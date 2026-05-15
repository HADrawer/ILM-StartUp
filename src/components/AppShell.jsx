import Sidebar from './Sidebar.jsx';
import Navbar from './Navbar.jsx';

export default function AppShell({ role, page, title, subtitle, children }) {
  return (
    <div className="app-shell">
      <Sidebar role={role} page={page} />
      <main className="main-area">
        <Navbar role={role} title={title} subtitle={subtitle} />
        {children}
      </main>
    </div>
  );
}
