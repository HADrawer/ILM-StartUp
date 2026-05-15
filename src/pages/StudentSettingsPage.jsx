import { Bell, ShieldCheck, UserRound } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';
import Button from '../components/Button.jsx';
import ListPanel from '../components/ListPanel.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { studentProfile } from '../data/mockData.js';

export default function StudentSettingsPage(props) {
  return (
    <AppShell {...props} title="Settings" subtitle="Profile, notifications, accessibility, and secure exam preferences.">
      <section className="content-grid">
        <ListPanel title="Profile" subtitle="Labels are explicit and keyboard-friendly.">
          <div className="settings-list">
            <label><span>Display name</span><input defaultValue={studentProfile.name} /></label>
            <label><span>Email</span><input defaultValue={studentProfile.email} /></label>
            <label><span>University ID</span><input defaultValue={studentProfile.id} /></label>
          </div>
        </ListPanel>

        <ListPanel title="Preferences" subtitle="Common academic settings are grouped by task.">
          <div className="settings-list">
            <label><span>Notifications</span><select defaultValue="All"><option>All</option><option>Important only</option><option>None</option></select></label>
            <label><span>Language</span><select defaultValue="English"><option>English</option><option>Arabic</option></select></label>
            <label><span>Contrast mode</span><select defaultValue="Standard"><option>Standard</option><option>Higher contrast</option></select></label>
          </div>
        </ListPanel>
      </section>

      <section className="content-grid">
        <article className="readiness-card"><UserRound size={24} /><div><strong>Account status</strong><p>Profile synced with student information system.</p></div><StatusBadge tone="success">Verified</StatusBadge></article>
        <article className="readiness-card"><ShieldCheck size={24} /><div><strong>Secure exam device</strong><p>Camera and microphone checks are ready for the next exam.</p></div><StatusBadge tone="success">Ready</StatusBadge></article>
        <article className="readiness-card"><Bell size={24} /><div><strong>Notification recovery</strong><p>Missed alerts remain visible in Announcements and course pages.</p></div><Button as="a" href="#student/announcements" size="sm" variant="ghost">Review</Button></article>
      </section>
    </AppShell>
  );
}
