import { Award, FileText, TrendingUp } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';

const gradeRows = [
  ['D', 'Data Structures', '4 Credits', 'B+', '87%', 'navy'],
  ['M', 'Machine Learning', '4 Credits', 'A-', '91%', 'blue'],
  ['S', 'Software Engineering', '3 Credits', 'A', '94%', 'cyan'],
  ['D', 'Database Systems', '4 Credits', 'B', '83%', 'navy'],
  ['W', 'Web Development', '3 Credits', 'A', '96%', 'blue'],
  ['C', 'Computer Networks', '3 Credits', 'B+', '88%', 'cyan']
];

export default function StudentGradesPage(props) {
  return (
    <AppShell {...props} title="Grades">
      <section className="ref-page">
        <h1>Grades</h1>
        <div className="grades-layout-ref">
          <main>
            <div className="grade-metrics-ref">
              <article><Award size={30} /><strong>3.65</strong><span>Overall GPA</span></article>
              <article><TrendingUp size={30} /><strong>3.72</strong><span>Current Semester</span></article>
              <article><FileText size={30} /><strong>78</strong><span>Credits Earned</span></article>
            </div>
            <section className="ref-panel">
              <h2>Course Grades</h2>
              {gradeRows.map(([letter, title, credits, grade, score, tone]) => (
                <article className="grade-row-ref" key={title}>
                  <span className={`ref-letter ${tone}`}>{letter}</span>
                  <div><h3>{title}</h3><p>{credits}</p></div>
                  <strong>{grade}<small>{score}</small></strong>
                </article>
              ))}
            </section>
            <section className="ref-panel">
              <h2>Recent Assignment Grades</h2>
              <article className="recent-grade"><div><strong>Binary Search Tree Implementation</strong><span>Data Structures · May 10</span><p>Feedback: Excellent work on optimization</p></div><b>92<small>out of 100</small></b></article>
              <article className="recent-grade"><div><strong>Linear Regression Analysis</strong><span>Machine Learning · May 8</span></div><b>88<small>out of 100</small></b></article>
            </section>
          </main>
          <aside className="grades-side-ref">
            <section className="ref-side-card chart-card">
              <h2>Grade Trend</h2>
              <div className="fake-chart"><span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span><span>W6</span><span>W7</span></div>
              <p>7-Week Performance Trend</p>
              <em>↑ Improving consistently</em>
            </section>
            <section className="ref-side-card">
              <h2>Grade Distribution</h2>
              {['A', 'A-', 'B+'].map((grade, index) => <div className="dist-row" key={grade}><span>{grade}</span><div><i style={{ width: `${[38, 22, 38][index]}%` }} /></div><b>{[2, 1, 2][index]}</b></div>)}
            </section>
            <section className="gradient-card">
              <h2>Spring 2026 Summary</h2>
              <p><span>Current GPA</span><strong>3.72</strong></p>
              <p><span>Credits This Semester</span><strong>21</strong></p>
              <p><span>Courses</span><strong>6</strong></p>
              <p><span>Dean's List</span><strong>✓ Eligible</strong></p>
            </section>
          </aside>
        </div>
      </section>
    </AppShell>
  );
}
