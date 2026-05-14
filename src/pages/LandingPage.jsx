import {
  ArrowRight,
  Building2,
  CheckCircle2,
  DatabaseZap,
  LockKeyhole,
  MapPin,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import Brand from '../components/Brand.jsx';
import Button from '../components/Button.jsx';
import ModuleCard from '../components/ModuleCard.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { platformModules } from '../data/mockData.js';

export default function LandingPage() {
  return (
    <main className="product-intro">
      <nav className="marketing-nav">
        <Brand />
        <div>
          <a href="#modules">Modules</a>
          <a href="#trust">Trust</a>
          <Button as="a" href="#login" variant="light" size="sm">Open Demo</Button>
        </div>
      </nav>

      <section className="intro-hero">
        <div className="intro-copy">
          <StatusBadge tone="info"><MapPin size={13} /> Built for Bahrain and GCC universities</StatusBadge>
          <h1>ILM is the academic operating system that unifies learning, exams, live classes, and AI review.</h1>
          <p>
            Replace disconnected course portals, lockdown browsers, video tools, and AI add-ons with one high-trust campus workspace.
          </p>
          <div className="hero-actions">
            <Button as="a" href="#login" icon={ArrowRight}>Launch Product Demo</Button>
            <Button as="a" href="#modules" variant="light">Explore Modules</Button>
          </div>
          <div className="trust-row">
            <span><ShieldCheck size={16} /> Private campus cloud posture</span>
            <span><DatabaseZap size={16} /> One academic data layer</span>
            <span><CheckCircle2 size={16} /> Role-based workflows</span>
          </div>
        </div>

        <div className="command-preview" aria-label="ILM product preview">
          <div className="preview-header">
            <div>
              <span>ILM Command Center</span>
              <strong>University of Bahrain</strong>
            </div>
            <StatusBadge tone="success">Live</StatusBadge>
          </div>
          <div className="preview-grid">
            <div className="preview-main">
              <span>Today’s Priority</span>
              <h2>CS 220 secure midterm readiness</h2>
              <div className="preview-bars">
                <span style={{ width: '92%' }} />
                <span style={{ width: '76%' }} />
                <span style={{ width: '84%' }} />
              </div>
            </div>
            <div className="preview-tile pearl">
              <LockKeyhole size={22} />
              <strong>1,284</strong>
              <span>secure exams</span>
            </div>
            <div className="preview-tile green">
              <Building2 size={22} />
              <strong>418</strong>
              <span>course spaces</span>
            </div>
            <div className="preview-tile gold">
              <Sparkles size={22} />
              <strong>212</strong>
              <span>AI reviews</span>
            </div>
          </div>
        </div>
      </section>

      <section className="module-showcase" id="modules">
        <div className="section-heading">
          <span className="eyebrow">Five Core Services</span>
          <h2>One product instead of five disconnected systems.</h2>
          <p>Each module is designed to reduce switching cost, improve clarity, and keep academic decisions inside the university context.</p>
        </div>
        <div className="module-grid">
          {platformModules.map((module) => <ModuleCard module={module} key={module.title} />)}
        </div>
      </section>

      <section className="trust-section" id="trust">
        <div className="section-heading">
          <span className="eyebrow">Why it feels different</span>
          <h2>Familiar enough to trust. Unified enough to matter.</h2>
        </div>
        <div className="principle-grid">
          <article><strong>Clarity first</strong><span>Every screen leads with priority, status, and the next action.</span></article>
          <article><strong>Lower cognitive load</strong><span>Grouped modules and role-based navigation reduce scattered decision-making.</span></article>
          <article><strong>Accessible by design</strong><span>Readable type, visible focus states, large targets, and high-contrast feedback.</span></article>
          <article><strong>Local confidence</strong><span>Bahrain/GCC academic examples, institution tone, and privacy-oriented language.</span></article>
        </div>
      </section>
    </main>
  );
}
