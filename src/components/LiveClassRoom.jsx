import { Camera, Mic, MonitorUp, PhoneOff, Send, UsersRound } from 'lucide-react';
import Button from './Button.jsx';
import StatusBadge from './StatusBadge.jsx';
import { classChat, participants } from '../data/mockData.js';

export default function LiveClassRoom() {
  return (
    <section className="live-class-room">
      <div className="class-stage">
        <div className="stage-toolbar">
          <StatusBadge tone="success">Live now</StatusBadge>
          <span>Recording · Attendance synced</span>
        </div>
        <div className="presenter-frame">
          <span>Screen share</span>
          <h2>Open Banking Risk Controls</h2>
          <p>Slide 12 of 24 · Course context and chat remain connected to FIN 301.</p>
        </div>
        <div className="meeting-controls">
          <Button variant="control" icon={Mic}>Mute</Button>
          <Button variant="control" icon={Camera}>Camera</Button>
          <Button variant="secondary" icon={MonitorUp}>Share Screen</Button>
          <Button variant="danger" icon={PhoneOff}>End Session</Button>
        </div>
      </div>
      <aside className="class-side">
        <section className="side-card">
          <div className="side-card-head">
            <h3>Participants</h3>
            <UsersRound size={18} />
          </div>
          {participants.map((person) => (
            <div className="participant-row" key={person.name}>
              <span>{person.name.slice(0, 2).toUpperCase()}</span>
              <div>
                <strong>{person.name}</strong>
                <small>{person.role} · {person.status}</small>
              </div>
            </div>
          ))}
        </section>
        <section className="side-card chat-card">
          <div className="side-card-head">
            <h3>Class Chat</h3>
            <StatusBadge tone="info">Course only</StatusBadge>
          </div>
          {classChat.map((chat) => (
            <article className="chat-message" key={`${chat.name}-${chat.time}`}>
              <div><strong>{chat.name}</strong><span>{chat.time}</span></div>
              <p>{chat.message}</p>
            </article>
          ))}
          <div className="chat-compose">
            <span>Ask the class...</span>
            <Send size={16} />
          </div>
        </section>
      </aside>
    </section>
  );
}
