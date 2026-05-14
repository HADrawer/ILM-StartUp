import { useEffect, useState } from 'react';
import { CheckCircle2, FileText, UploadCloud, WandSparkles } from 'lucide-react';
import AIResultCard from '../components/AIResultCard.jsx';
import AppShell from '../components/AppShell.jsx';
import Button from '../components/Button.jsx';
import LoadingState from '../components/LoadingState.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { aiReview } from '../data/mockData.js';

const sampleText = `Digital transformation in GCC banking has accelerated because customers expect instant services, lower friction, and secure mobile access. Open banking APIs can improve onboarding when banks share verified data through consent-based flows. However, institutions must manage fraud risk, privacy concerns, and compliance obligations carefully. A strong governance model should include consent logs, incident response, and regular third-party audits.`;

export default function AIDetectorPage(props) {
  const [text, setText] = useState(sampleText);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const analyze = () => {
    setStatus('loading');
    setMessage('');
    setTimeout(() => {
      setStatus('complete');
      setMessage('Mock analysis complete. Review the result before making any academic decision.');
    }, 1100);
  };

  useEffect(() => {
    if (!message) return undefined;
    const timer = setTimeout(() => setMessage(''), 4200);
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <AppShell {...props} title="AI Detector Studio" subtitle="Instructor-only review workflow for student writing, probability signals, and report export.">
      {message && <div className="toast success"><CheckCircle2 size={18} />{message}</div>}

      <section className="ai-layout">
        <div className="panel analysis-input">
          <div className="panel-head">
            <div>
              <h2>Student Work Input</h2>
              <p>Keep the review human-centered: AI score, similarity, and evidence are shown separately.</p>
            </div>
            <StatusBadge tone="info">Mock review</StatusBadge>
          </div>
          <label className="field-label" htmlFor="student-work">Paste student text</label>
          <textarea id="student-work" value={text} onChange={(event) => setText(event.target.value)} />
          <div className="input-actions">
            <button className="upload-box" type="button">
              <UploadCloud size={20} />
              <strong>Upload document placeholder</strong>
              <span>PDF, DOCX, or plain text. No file leaves this frontend demo.</span>
            </button>
            <button className="upload-box" type="button" onClick={() => setText(sampleText)}>
              <FileText size={20} />
              <strong>Use sample submission</strong>
              <span>Populate realistic GCC banking text for the pitch demo.</span>
            </button>
          </div>
          <Button icon={WandSparkles} loading={status === 'loading'} onClick={analyze}>
            {status === 'loading' ? 'Analyzing Text' : 'Analyze Submission'}
          </Button>
        </div>

        {status === 'loading'
          ? <LoadingState title="Analyzing writing patterns" body="Checking probability, confidence, similarity context, and suspicious section structure." />
          : <AIResultCard result={aiReview} analyzed={status === 'complete'} onExport={() => setMessage('Report export prepared as a visual demo action.')} />}
      </section>
    </AppShell>
  );
}
