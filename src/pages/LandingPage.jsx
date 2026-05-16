import { useCallback, useRef, useState } from 'react';

export default function LandingPage() {
  const iframeRef = useRef(null);
  const [showRoles, setShowRoles] = useState(false);

  const openRoleChoice = useCallback((event) => {
    event?.preventDefault();
    event?.stopPropagation();
    event?.stopImmediatePropagation?.();
    setShowRoles(true);
  }, []);

  const attachLoginBehavior = useCallback(() => {
    const frame = iframeRef.current;
    const doc = frame?.contentDocument;
    if (!doc) return;

    const buttons = doc.querySelectorAll('.nav-demo-btn, .cta-demo-btn');
    buttons.forEach((button) => {
      button.addEventListener('click', openRoleChoice, true);
      button.onclick = null;
    });
  }, [openRoleChoice]);

  const loginAs = (role) => {
    window.location.hash = role === 'doctor' ? '#doctor/dashboard' : '#student/dashboard';
  };

  return (
    <main className="provided-landing-shell">
      <iframe
        ref={iframeRef}
        className="provided-landing-frame"
        src={`${import.meta.env.BASE_URL}ilm.html`}
        title="ILM landing page"
        onLoad={attachLoginBehavior}
      />

      {showRoles && (
        <div className="provided-role-overlay" role="dialog" aria-modal="true" aria-labelledby="provided-role-title">
          <div className="provided-role-modal">
            <button className="provided-role-close" type="button" aria-label="Close role selection" onClick={() => setShowRoles(false)}>
              ×
            </button>
            <h2 id="provided-role-title">Choose login type</h2>
            <p>Select a frontend-only demo workspace.</p>
            <div className="provided-role-actions">
              <button type="button" onClick={() => loginAs('student')}>Login as Student</button>
              <button type="button" onClick={() => loginAs('doctor')}>Login as Doctor</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
