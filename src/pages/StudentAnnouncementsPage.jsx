import { Filter, Pin } from 'lucide-react';
import AppShell from '../components/AppShell.jsx';

const announcementRows = [
  { icon: Pin, title: 'Midterm Schedule Released', course: 'Data Structures', by: 'Dr. Sarah Roberts', time: '2 hours ago', important: true, body: 'The midterm exam schedule has been finalized. The Data Structures midterm will be held on Monday, May 20th at 9:00 AM in Room 301. The exam will cover all material from Weeks 1-6, including arrays, linked lists, stacks, queues, and binary search trees. Please ensure your secure exam browser is installed and updated before the exam date.' },
  { title: 'New Lab Material Available', course: 'Machine Learning', by: 'Prof. Michael Chen', time: '5 hours ago', body: "Lab materials for Week 5 on Neural Networks have been uploaded to the course materials section. Please review the Jupyter notebooks before Tuesday's lab session." },
  { title: 'Project Guidelines Updated', course: 'Software Engineering', by: 'Dr. Emma Davis', time: '1 day ago', body: 'Updated project guidelines and rubric are now available in the course page.' }
];

export default function StudentAnnouncementsPage(props) {
  return (
    <AppShell {...props} title="Announcements">
      <section className="ref-page">
        <div className="ref-title-row">
          <div>
            <h1>Announcements</h1>
            <div className="ref-tabs">
              <button className="active">All</button>
              <button>Important</button>
              <button>Unread</button>
            </div>
          </div>
          <div className="ref-filter-row">
            <button><Filter size={16} /> Filter by Course</button>
          </div>
        </div>
        <div className="announcement-list-ref">
          {announcementRows.map((item) => {
            const Icon = item.icon;
            return (
              <article className={`announcement-ref ${item.important ? 'important' : ''}`} key={item.title}>
                <div className={`announcement-icon ${item.important ? 'red' : 'blue'}`}>{Icon ? <Icon size={24} /> : item.course[0]}</div>
                <div>
                  <h2>{item.title} {item.important && <span>Important</span>}</h2>
                  <p>{item.course} · Posted by {item.by}</p>
                  <strong>{item.body}</strong>
                  <div><a>View Details</a><button>Mark as Read</button></div>
                </div>
                <time>{item.time}</time>
              </article>
            );
          })}
        </div>
      </section>
    </AppShell>
  );
}
