import { Activity, Building2, ShieldCheck } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';
import DashboardCard from '../components/DashboardCard.jsx';
import ListPanel from '../components/ListPanel.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { institutionMetrics, platformModules, weeklyActivity } from '../data/mockData.js';

export default function AnalyticsPage(props) {
  return (
    <AppShell {...props} title="Institution Overview" subtitle="A pitch-ready view for adoption, exam readiness, live learning, and AI review activity.">
      <section className="priority-hero analytics">
        <div>
          <StatusBadge tone="success"><ShieldCheck size={13} /> Executive Signal</StatusBadge>
          <h2>ILM consolidates learning operations into one trusted campus layer.</h2>
          <p>Use this screen in investor or university presentations to show institutional value beyond individual classrooms.</p>
        </div>
        <div className="institution-seal">
          <Building2 size={28} />
          <strong>Bahrain Cloud Region</strong>
          <span>Private academic posture</span>
        </div>
      </section>

      <section className="metric-grid six">
        {institutionMetrics.map((metric) => (
          <DashboardCard
            key={metric.label}
            icon={metric.icon}
            label={metric.label}
            value={metric.value}
            meta={metric.trend}
            tone={metric.label.includes('AI') ? 'coral' : metric.label.includes('exam') ? 'gold' : 'teal'}
          />
        ))}
      </section>

      <section className="content-grid wide-left">
        <ListPanel title="Weekly Platform Activity" subtitle="Relative activity levels across learning, exams, and live sessions.">
          <div className="activity-chart">
            {weeklyActivity.map((day) => (
              <article key={day.day}>
                <strong>{day.day}</strong>
                <div>
                  <span className="learning" style={{ height: `${day.learning}%` }} />
                  <span className="exams" style={{ height: `${day.exams}%` }} />
                  <span className="live" style={{ height: `${day.live}%` }} />
                </div>
              </article>
            ))}
          </div>
          <div className="chart-legend">
            <span><i className="learning" /> Learning</span>
            <span><i className="exams" /> Exams</span>
            <span><i className="live" /> Live</span>
          </div>
        </ListPanel>

        <ListPanel title="Operational Readiness" subtitle="High-level platform confidence for university decision makers.">
          <div className="pulse-stack">
            <article className="pulse-card"><div><strong>Exam readiness</strong><span>Camera, mic, identity, lock checks</span></div><ProgressBar value={98} compact tone="green" /></article>
            <article className="pulse-card"><div><strong>Live class continuity</strong><span>Attendance and chat sync</span></div><ProgressBar value={94} compact tone="teal" /></article>
            <article className="pulse-card"><div><strong>AI review governance</strong><span>Human decision required</span></div><ProgressBar value={86} compact tone="gold" /></article>
          </div>
        </ListPanel>
      </section>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Module Adoption</h2>
            <p>One coherent product story across ILM’s five service lines.</p>
          </div>
          <StatusBadge tone="info"><Activity size={13} /> Demo metrics</StatusBadge>
        </div>
        <div className="adoption-grid">
          {platformModules.map((module, index) => {
            const Icon = module.icon;
            const value = [91, 88, 84, 72, 76][index];
            return (
              <article className={`adoption-card tone-${module.color}`} key={module.title}>
                <Icon size={22} />
                <div>
                  <strong>{module.title}</strong>
                  <span>{module.label}</span>
                </div>
                <ProgressBar value={value} compact tone={module.color === 'coral' ? 'coral' : module.color === 'gold' ? 'gold' : 'teal'} />
              </article>
            );
          })}
        </div>
      </section>
    </AppShell>
  );
}
