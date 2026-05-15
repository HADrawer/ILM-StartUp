import {
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  CheckCircle2,
  LockKeyhole,
  ShieldCheck,
  Video
} from 'lucide-react';
import Button from '../components/Button.jsx';
import ModuleCard from '../components/ModuleCard.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { platformModules } from '../data/mockData.js';
import logoUrl from '../assets/ilm-logo.jpeg';

export default function LandingPage() {
  return (
    <main className="landing-page">
      <nav className="landing-nav" aria-label="Public navigation">
        <a className="landing-logo" href="#landing" aria-label="ILM landing">
          <img src={logoUrl} alt="" />
          <span>ILM</span>
        </a>
        <div>
          <a href="#services">Services</a>
          <a href="#trust">Trust</a>
          <Button as="a" href="#login" size="sm" icon={ArrowRight}>Open Demo</Button>
        </div>
      </nav>

      <section className="landing-hero">
        <div className="landing-dot-grid" aria-hidden="true" />
        <div className="landing-hero-inner">
          <StatusBadge tone="info">Built for Bahrain and GCC universities</StatusBadge>
          <h1>Everything universities need to run modern learning.</h1>
          <p>
            ILM brings course management, secure exams, live classes, AI review,
            and assessment generation into one calm academic operating system.
          </p>
          <div className="hero-actions">
            <Button as="a" href="#login" size="lg" icon={ArrowRight}>Choose Workspace</Button>
            <Button as="a" href="#services" size="lg" variant="light">Explore Services</Button>
          </div>
        </div>
      </section>

      <section className="landing-band" aria-hidden="true">
        <div />
        <span />
      </section>

      <section className="landing-section" id="services">
        <div className="section-heading">
          <span className="eyebrow">Five services, one system</span>
          <h2>Replace disconnected academic tools with one product.</h2>
          <p>Each service has a clear role, but the experience stays consistent for students, doctors, and university leaders.</p>
        </div>
        <div className="module-grid">
          {platformModules.map((module) => <ModuleCard module={module} compact key={module.title} />)}
        </div>
      </section>

      <section className="landing-section trust-layout" id="trust">
        <div>
          <span className="eyebrow">Why universities can trust it</span>
          <h2>Serious enough for academic operations. Simple enough for daily use.</h2>
        </div>
        <div className="trust-grid">
          <article><BookOpenCheck size={22} /><strong>Course-first</strong><span>Materials, tasks, grades, announcements, and live rooms stay tied to each course.</span></article>
          <article><LockKeyhole size={22} /><strong>Exam clarity</strong><span>Readiness checks and warning states are visible before a secure exam begins.</span></article>
          <article><Video size={22} /><strong>Live learning</strong><span>Teams-like sessions remain connected to attendance and class context.</span></article>
          <article><BrainCircuit size={22} /><strong>AI governance</strong><span>AI scores support instructor judgment instead of replacing it.</span></article>
          <article><ShieldCheck size={22} /><strong>Local posture</strong><span>Bahrain/GCC examples and privacy-oriented product language.</span></article>
          <article><CheckCircle2 size={22} /><strong>Demo-ready</strong><span>Mock data only, with stable routes for startup pitches and university presentations.</span></article>
        </div>
      </section>
    </main>
  );
}
