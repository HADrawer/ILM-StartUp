import { Sparkles } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';

export default function StudentAIAssistantPage(props) {
  return (
    <AppShell {...props} title="AI Assistant">
      <section className="ref-page">
        <h1>AI Assistant</h1>
        <section className="gradient-card ai-full-card">
          <Sparkles size={32} />
          <h2>AI Study Assistant</h2>
          <p>Get instant help with your studies. Summarize chapters, create flashcards, and prepare for quizzes.</p>
          <a href="#student/dashboard">Start AI Session</a>
        </section>
      </section>
    </AppShell>
  );
}
