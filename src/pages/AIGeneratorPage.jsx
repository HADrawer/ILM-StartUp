import { useEffect, useState } from 'react';
import { CheckCircle2, Edit3, Rocket, Save, Sparkles } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';
import Button from '../components/Button.jsx';
import LoadingState from '../components/LoadingState.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { courses, generatedDraft } from '../data/mockData.js';

export default function AIGeneratorPage(props) {
  const [status, setStatus] = useState('ready');
  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState('');

  const generate = () => {
    setStatus('loading');
    setEditing(false);
    setMessage('');
    setTimeout(() => {
      setStatus('generated');
      setMessage('Assessment draft generated from mock course outcomes.');
    }, 1200);
  };

  const publish = () => {
    setMessage('Draft published to FIN 301 as a visual demo action.');
  };

  useEffect(() => {
    if (!message) return undefined;
    const timer = setTimeout(() => setMessage(''), 4200);
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <AppShell {...props} title="AI Assessment Generator" subtitle="Create structured drafts for quizzes, assignments, assessments, and midterms from course outcomes.">
      {message && <div className="toast success"><CheckCircle2 size={18} />{message}</div>}

      <section className="generator-layout">
        <form className="panel generator-form">
          <div className="panel-head">
            <div>
              <h2>Generator Workflow</h2>
              <p>Inputs are intentionally grouped to reduce choice overload and make the next step obvious.</p>
            </div>
            <StatusBadge tone="info">Instructor only</StatusBadge>
          </div>
          <label className="field-label">Course</label>
          <select defaultValue={courses[0].id}>
            {courses.map((course) => <option value={course.id} key={course.id}>{course.code} · {course.title}</option>)}
          </select>
          <div className="form-grid">
            <div>
              <label className="field-label">Assessment type</label>
              <select defaultValue="Quiz">
                <option>Quiz</option>
                <option>Assignment</option>
                <option>Assessment</option>
                <option>Midterm</option>
              </select>
            </div>
            <div>
              <label className="field-label">Difficulty</label>
              <select defaultValue="Intermediate">
                <option>Foundation</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>
          <label className="field-label">Topic</label>
          <input defaultValue="Open banking APIs and secure adoption in Bahrain" />
          <div className="form-grid">
            <div>
              <label className="field-label">Number of questions</label>
              <input type="number" min="1" max="20" defaultValue="4" />
            </div>
            <div>
              <label className="field-label">Duration</label>
              <input defaultValue="18 minutes" />
            </div>
          </div>
          <div className="outcome-chips">
            {courses[0].outcomes.map((outcome) => <span key={outcome}>{outcome}</span>)}
          </div>
          <Button icon={Sparkles} loading={status === 'loading'} onClick={generate}>
            {status === 'loading' ? 'Generating Draft' : 'Generate Assessment'}
          </Button>
        </form>

        {status === 'loading' ? (
          <LoadingState title="Building assessment draft" body="Mapping topic, difficulty, and course outcomes into sample questions." />
        ) : (
          <section className={`panel draft-preview ${editing ? 'editing' : ''}`}>
            <div className="panel-head">
              <div>
                <h2>Generated Draft Preview</h2>
                <p>Editable mock output with outcomes, point values, and publish action.</p>
              </div>
              <StatusBadge tone={status === 'generated' ? 'success' : 'neutral'}>{status === 'generated' ? 'Generated' : 'Ready'}</StatusBadge>
            </div>
            <div className="draft-meta">
              <div>
                <strong>{generatedDraft.type} · {generatedDraft.difficulty}</strong>
                <span>{generatedDraft.course} · Estimated duration {generatedDraft.estimatedTime}</span>
              </div>
              <ProgressBar label="Outcome coverage" value={88} tone="green" compact />
            </div>
            <div className="outcome-chips">
              {generatedDraft.outcomes.map((outcome) => <span key={outcome}>{outcome}</span>)}
            </div>
            <ol className="question-list">
              {generatedDraft.questions.map((question) => (
                <li key={question.prompt}>
                  <div>
                    <StatusBadge tone="info">{question.type}</StatusBadge>
                    <StatusBadge tone="neutral">{question.points} pts</StatusBadge>
                  </div>
                  {editing ? <textarea defaultValue={question.prompt} /> : <p>{question.prompt}</p>}
                </li>
              ))}
            </ol>
            <div className="card-actions">
              <Button variant="ghost" icon={editing ? Save : Edit3} onClick={() => setEditing(!editing)}>{editing ? 'Save Edits' : 'Edit Draft'}</Button>
              <Button variant="secondary" icon={Rocket} onClick={publish}>Publish to Course</Button>
            </div>
          </section>
        )}
      </section>
    </AppShell>
  );
}
