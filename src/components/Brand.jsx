import { GraduationCap } from 'lucide-react';

export default function Brand({ compact = false, dark = false }) {
  return (
    <a className={`brand ${dark ? 'dark' : ''}`} href="#student/dashboard" aria-label="ILM home">
      <span className="brand-mark"><GraduationCap size={22} /></span>
      {!compact && (
        <span className="brand-copy">
          <strong>Ilm</strong>
          <small>Student</small>
        </span>
      )}
    </a>
  );
}
