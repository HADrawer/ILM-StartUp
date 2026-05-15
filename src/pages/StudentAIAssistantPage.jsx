import { BookOpenCheck, MessageSquareText, Sparkles } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';
import Button from '../components/Button.jsx';
import ListPanel from '../components/ListPanel.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { courses } from '../data/mockData.js';

export default function StudentAIAssistantPage(props) {
  return (
    <AppShell {...props} title="AI Study Assistant" subtitle="A student-safe assistant for revision, practice, and course material support.">
      <section className="panel ai-assistant-layout">
        <div>
          <StatusBadge tone="info">Frontend demo</StatusBadge>
          <h2>Ask for help grounded in your course context.</h2>
          <p>Use ILM to summarize materials, create revision plans, and generate practice questions without leaving the academic workspace.</p>
          <div className="prompt-grid">
            {['Summarize open banking APIs', 'Create a CS 220 revision checklist', 'Quiz me on citation ethics'].map((prompt) => (
              <button type="button" key={prompt}><Sparkles size={16} />{prompt}</button>
            ))}
          </div>
        </div>
        <div className="chat-preview">
          <article><strong>Student</strong><p>Help me prepare for the secure software midterm.</p></article>
          <article><strong>ILM Assistant</strong><p>Start with threat modeling, authentication flows, and secure coding review. I can turn these into practice questions.</p></article>
          <div className="chat-compose"><span>Ask about your course...</span><MessageSquareText size={16} /></div>
        </div>
      </section>

      <ListPanel title="Course Context Available" subtitle="The assistant clearly shows what it can use, reducing uncertainty.">
        <div className="course-grid">
          {courses.map((course) => (
            <article className="tool-panel" key={course.id}>
              <BookOpenCheck size={21} />
              <strong>{course.code}</strong>
              <span>{course.title}</span>
              <Button as="a" href={`#student/course/${course.id}`} variant="ghost" size="sm">Open Course</Button>
            </article>
          ))}
        </div>
      </ListPanel>
    </AppShell>
  );
}
