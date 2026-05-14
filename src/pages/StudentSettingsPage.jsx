import AppShell from '../components/AppShell.jsx';

export default function StudentSettingsPage(props) {
  return (
    <AppShell {...props} title="Settings">
      <section className="ref-page">
        <h1>Settings</h1>
        <section className="ref-panel">
          <h2>Profile Settings</h2>
          <div className="settings-list">
            <label><span>Display name</span><input defaultValue="John Smith" /></label>
            <label><span>Email</span><input defaultValue="john@university.edu" /></label>
            <label><span>Notifications</span><select defaultValue="All"><option>All</option><option>Important only</option></select></label>
          </div>
        </section>
      </section>
    </AppShell>
  );
}
