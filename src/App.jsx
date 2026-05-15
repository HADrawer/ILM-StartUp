import { useEffect, useMemo, useState } from 'react';
import { courses } from './data/mockData.js';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import StudentCoursesPage from './pages/StudentCoursesPage.jsx';
import StudentSchedulePage from './pages/StudentSchedulePage.jsx';
import StudentAssignmentsPage from './pages/StudentAssignmentsPage.jsx';
import StudentExamsPage from './pages/StudentExamsPage.jsx';
import StudentAnnouncementsPage from './pages/StudentAnnouncementsPage.jsx';
import StudentGradesPage from './pages/StudentGradesPage.jsx';
import StudentAIAssistantPage from './pages/StudentAIAssistantPage.jsx';
import StudentSettingsPage from './pages/StudentSettingsPage.jsx';
import DoctorDashboard from './pages/DoctorDashboard.jsx';
import CoursePage from './pages/CoursePage.jsx';
import SecureExamPage from './pages/SecureExamPage.jsx';
import LiveClassPage from './pages/LiveClassPage.jsx';
import AIDetectorPage from './pages/AIDetectorPage.jsx';
import AIGeneratorPage from './pages/AIGeneratorPage.jsx';
import AnalyticsPage from './pages/AnalyticsPage.jsx';

const routeDefaults = {
  student: '#student/dashboard',
  doctor: '#doctor/dashboard'
};

function getRoute() {
  const hash = window.location.hash.replace('#', '');
  if (!hash) return { role: null, page: 'landing' };
  if (hash === 'login') return { role: null, page: 'login' };
  if (hash === 'landing') return { role: null, page: 'landing' };
  const [role, page = 'dashboard', id] = hash.split('/');
  return { role, page, id };
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const currentCourse = useMemo(() => {
    return courses.find((course) => course.id === route.id) || courses[0];
  }, [route.id]);

  const login = (role) => {
    window.location.hash = routeDefaults[role];
  };

  if (route.page === 'landing') {
    return <LandingPage />;
  }

  if (!route.role || route.page === 'login') {
    return <LoginPage onLogin={login} />;
  }

  const shared = { role: route.role, page: route.page };

  if (route.role === 'student') {
    if (route.page === 'courses') return <StudentCoursesPage {...shared} />;
    if (route.page === 'schedule') return <StudentSchedulePage {...shared} />;
    if (route.page === 'assignments') return <StudentAssignmentsPage {...shared} />;
    if (route.page === 'exams') return <StudentExamsPage {...shared} />;
    if (route.page === 'announcements') return <StudentAnnouncementsPage {...shared} />;
    if (route.page === 'grades') return <StudentGradesPage {...shared} />;
    if (route.page === 'ai-assistant') return <StudentAIAssistantPage {...shared} />;
    if (route.page === 'settings') return <StudentSettingsPage {...shared} />;
  }

  if (route.page === 'course') return <CoursePage {...shared} course={currentCourse} />;
  if (route.page === 'exam') return <SecureExamPage {...shared} />;
  if (route.page === 'live') return <LiveClassPage {...shared} />;
  if (route.page === 'detector') return <AIDetectorPage {...shared} />;
  if (route.page === 'generator') return <AIGeneratorPage {...shared} />;
  if (route.page === 'analytics') return <AnalyticsPage {...shared} />;
  if (route.role === 'doctor') return <DoctorDashboard {...shared} />;
  return <StudentDashboard {...shared} />;
}
