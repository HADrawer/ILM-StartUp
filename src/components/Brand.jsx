import { GraduationCap } from 'lucide-react';

export default function Brand({ compact = false, dark = false, role = 'student' }) {
  const href = role === 'doctor' ? '#doctor/dashboard' : role === 'student' ? '#student/dashboard' : '#landing';

  return (
    <a className={`brand ${dark ? 'dark' : ''}`} href={href} aria-label="ILM home">
      <span className="brand-mark"><GraduationCap size={22} /></span>
      {!compact && (
        <span className="brand-copy">
          <strong>ILM</strong>
          <small>{role === 'doctor' ? 'Instructor OS' : 'Academic OS'}</small>
        </span>
      )}
    </a>
  );
}
