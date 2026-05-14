import {
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  CalendarClock,
  Camera,
  ClipboardCheck,
  FileSearch,
  GraduationCap,
  LockKeyhole,
  MessageSquareText,
  MonitorUp,
  RadioTower,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Video
} from 'lucide-react';

export const studentProfile = {
  name: 'John Smith',
  role: 'Student',
  university: 'University of Bahrain',
  college: 'College of Business',
  id: '20216048',
  avatar: 'JS',
  email: 'john@university.edu',
  semester: 'Spring 2026'
};

export const doctorProfile = {
  name: 'Dr. Mariam Al Khalifa',
  role: 'Instructor',
  university: 'University of Bahrain',
  college: 'College of Business',
  id: 'FAC-1184',
  avatar: 'DM',
  email: 'mariam@university.edu',
  semester: 'Spring 2026'
};

export const platformModules = [
  {
    title: 'Learning Core',
    label: 'Blackboard alternative',
    route: '#student/course/fintech-301',
    icon: BookOpenCheck,
    color: 'teal',
    metric: '3.4s',
    metricLabel: 'median course open',
    description: 'Course spaces, materials, assignments, rubrics, grades, and announcements in one clean academic workspace.',
    features: ['Course hub', 'Grades', 'Assignments']
  },
  {
    title: 'Secure Exams',
    label: 'LockDown alternative',
    route: '#student/exam',
    icon: LockKeyhole,
    color: 'gold',
    metric: '98%',
    metricLabel: 'readiness pass rate',
    description: 'A visual exam environment with readiness checks, locked mode signals, identity status, and clear warnings.',
    features: ['Camera check', 'Mic check', 'Warnings']
  },
  {
    title: 'Live Class',
    label: 'Teams alternative',
    route: '#student/live',
    icon: Video,
    color: 'green',
    metric: '126',
    metricLabel: 'active learners today',
    description: 'Video sessions, chat, attendance, screen sharing, and class context without leaving the learning system.',
    features: ['Video', 'Chat', 'Attendance']
  },
  {
    title: 'AI Detector',
    label: 'Instructor review',
    route: '#doctor/detector',
    icon: FileSearch,
    color: 'coral',
    metric: '4',
    metricLabel: 'flagged reviews',
    description: 'A guided review flow that separates probability, confidence, similarity, and instructor judgment.',
    features: ['Probability', 'Highlights', 'Report']
  },
  {
    title: 'AI Generator',
    label: 'Assessment builder',
    route: '#doctor/generator',
    icon: Sparkles,
    color: 'navy',
    metric: '12m',
    metricLabel: 'average draft saved',
    description: 'Generate structured quiz, assignment, assessment, and midterm drafts from course outcomes.',
    features: ['Outcomes', 'Drafts', 'Publish']
  }
];

export const courses = [
  {
    id: 'fintech-301',
    code: 'FIN 301',
    title: 'FinTech Systems in GCC Banking',
    instructor: 'Dr. Mariam Al Khalifa',
    college: 'College of Business',
    progress: 78,
    attendance: 94,
    grade: 'A-',
    gradeTrend: '+3.2%',
    risk: 'On track',
    students: 42,
    activeLearners: 38,
    nextClass: 'Today, 10:00 AM',
    room: 'Live Room A',
    outcomes: ['Open banking architecture', 'Risk controls', 'Regional payment systems'],
    materials: [
      { type: 'Slides', title: 'Week 6: Open banking APIs', time: '18 min', status: 'New' },
      { type: 'Case', title: 'BenefitPay adoption and customer trust', time: '24 min', status: 'Read' },
      { type: 'Policy', title: 'CBB sandbox brief for student teams', time: '12 min', status: 'Pinned' }
    ],
    announcements: [
      { title: 'Project groups finalized', body: 'Check your Messages tab for your assigned members and project workspace.', tone: 'info' },
      { title: 'Guest speaker confirmed', body: 'Bahrain FinTech Bay guest session starts five minutes earlier than usual.', tone: 'success' }
    ],
    assignments: [
      { title: 'Open Banking Risk Memo', due: 'May 18', status: 'Draft due', weight: '15%', progress: 64 },
      { title: 'Digital Wallet UX Review', due: 'May 26', status: 'Not opened', weight: '10%', progress: 12 }
    ],
    gradeBreakdown: [
      { label: 'Quizzes', value: 86 },
      { label: 'Assignments', value: 82 },
      { label: 'Participation', value: 96 }
    ]
  },
  {
    id: 'cs-220',
    code: 'CS 220',
    title: 'Secure Software Engineering',
    instructor: 'Dr. Faisal Noor',
    college: 'College of ICT',
    progress: 64,
    attendance: 88,
    grade: 'B+',
    gradeTrend: '+1.1%',
    risk: 'Exam soon',
    students: 35,
    activeLearners: 31,
    nextClass: 'Tomorrow, 1:00 PM',
    room: 'Lab 204 + Live',
    outcomes: ['Threat modeling', 'Secure coding', 'Authentication flows'],
    materials: [
      { type: 'Worksheet', title: 'Threat modeling studio guide', time: '20 min', status: 'Due' },
      { type: 'Checklist', title: 'Secure coding review checklist', time: '9 min', status: 'Open' },
      { type: 'Recording', title: 'Lecture: authentication pitfalls', time: '43 min', status: 'Watched' }
    ],
    announcements: [
      { title: 'Midterm secure exam window', body: 'The exam opens Thursday from 9:00 AM to 1:00 PM. Run readiness checks before exam day.', tone: 'warning' }
    ],
    assignments: [
      { title: 'API Threat Model', due: 'May 20', status: 'Not submitted', weight: '20%', progress: 38 },
      { title: 'Code Review Lab', due: 'May 27', status: 'Starts soon', weight: '15%', progress: 0 }
    ],
    gradeBreakdown: [
      { label: 'Labs', value: 79 },
      { label: 'Security memo', value: 84 },
      { label: 'Participation', value: 91 }
    ]
  },
  {
    id: 'eng-115',
    code: 'ENG 115',
    title: 'Academic Writing for Research',
    instructor: 'Dr. Noor Al Haddad',
    college: 'Foundation Program',
    progress: 86,
    attendance: 97,
    grade: 'A',
    gradeTrend: '+4.8%',
    risk: 'Excellent',
    students: 58,
    activeLearners: 54,
    nextClass: 'Sunday, 8:30 AM',
    room: 'Live Room C',
    outcomes: ['Research claims', 'Citation ethics', 'Structured abstracts'],
    materials: [
      { type: 'Guide', title: 'Citation and paraphrasing guide', time: '15 min', status: 'Pinned' },
      { type: 'Sample', title: 'Literature review annotation sample', time: '28 min', status: 'Read' },
      { type: 'Rubric', title: 'Research abstract rubric', time: '7 min', status: 'New' }
    ],
    announcements: [
      { title: 'Draft feedback released', body: 'All literature review drafts now include inline instructor comments.', tone: 'success' }
    ],
    assignments: [
      { title: 'Literature Review Draft', due: 'Submitted', status: 'Reviewed', weight: '25%', progress: 100 },
      { title: 'Research Abstract', due: 'May 22', status: 'Submitted', weight: '10%', progress: 100 }
    ],
    gradeBreakdown: [
      { label: 'Writing tasks', value: 94 },
      { label: 'Research process', value: 89 },
      { label: 'Participation', value: 98 }
    ]
  }
];

export const assignments = courses.flatMap((course) =>
  course.assignments.map((assignment) => ({
    ...assignment,
    course: course.code,
    courseTitle: course.title
  }))
);

export const liveClasses = [
  {
    title: 'FinTech guest session with Bahrain FinTech Bay',
    time: 'Today, 10:00 AM',
    course: 'FIN 301',
    host: 'Dr. Mariam',
    attendance: '38 joined',
    status: 'Starts in 22 min'
  },
  {
    title: 'Secure auth lab walkthrough',
    time: 'Tomorrow, 1:00 PM',
    course: 'CS 220',
    host: 'Dr. Faisal',
    attendance: '31 expected',
    status: 'Scheduled'
  },
  {
    title: 'Research citation clinic',
    time: 'Sunday, 8:30 AM',
    course: 'ENG 115',
    host: 'Dr. Noor',
    attendance: '54 expected',
    status: 'Scheduled'
  }
];

export const announcements = [
  {
    title: 'University cloud maintenance',
    body: 'ILM live classes and secure exams will remain available during the Friday maintenance window.',
    audience: 'All students',
    tone: 'info'
  },
  {
    title: 'Academic integrity reminder',
    body: 'Secure exams require camera and microphone checks before the timer begins.',
    audience: 'Exam candidates',
    tone: 'warning'
  },
  {
    title: 'Arabic support pilot',
    body: 'Selected course spaces now support bilingual material labels and announcements.',
    audience: 'Pilot colleges',
    tone: 'success'
  }
];

export const submissions = [
  { student: 'Ahmed Al Doseri', course: 'CS 220', item: 'API Threat Model', submitted: 'Today 9:12 AM', status: 'Needs review', similarity: 12, ai: 18 },
  { student: 'Maha Ebrahim', course: 'ENG 115', item: 'Literature Review Draft', submitted: 'Yesterday 7:44 PM', status: 'Flagged', similarity: 21, ai: 68 },
  { student: 'Yusuf Al Noaimi', course: 'FIN 301', item: 'Risk Memo', submitted: 'May 13 5:02 PM', status: 'Reviewed', similarity: 8, ai: 9 },
  { student: 'Sara Buhiji', course: 'FIN 301', item: 'Digital Wallet UX Review', submitted: 'May 13 1:30 PM', status: 'Ready', similarity: 14, ai: 24 }
];

export const exams = [
  {
    title: 'CS 220 Secure Software Engineering Midterm',
    course: 'CS 220',
    window: 'Thursday, 9:00 AM to 1:00 PM',
    duration: '90 min',
    questions: 45,
    readiness: 92,
    attempts: '0/1',
    warnings: 0,
    checks: [
      { label: 'Locked mode', value: 'Ready', state: 'success', icon: ShieldCheck },
      { label: 'Camera', value: 'Verified', state: 'success', icon: Camera },
      { label: 'Microphone', value: 'Verified', state: 'success', icon: RadioTower },
      { label: 'Screen policy', value: 'Tab switching monitored', state: 'warning', icon: MonitorUp },
      { label: 'Identity snapshot', value: 'Required on start', state: 'neutral', icon: ClipboardCheck }
    ]
  }
];

export const aiReview = {
  probability: 68,
  confidence: 74,
  similarity: 21,
  verdict: 'Instructor review recommended',
  sections: [
    {
      label: 'Paragraph transition',
      score: 'High regularity',
      text: 'The transition between paragraphs 2 and 3 uses unusually uniform sentence structure and limited personal citation context.'
    },
    {
      label: 'Conclusion',
      score: 'Generic claim pattern',
      text: 'The conclusion includes broad claims about digital transformation without references to class readings or Bahrain-specific evidence.'
    },
    {
      label: 'Citation language',
      score: 'Needs verification',
      text: 'Citation phrasing appears consistent with generated summaries and should be compared against the uploaded sources.'
    }
  ],
  actions: ['Ask student for source notes', 'Review version history', 'Compare against rubric']
};

export const generatedDraft = {
  type: 'Quiz',
  difficulty: 'Intermediate',
  course: 'FIN 301',
  estimatedTime: '18 minutes',
  outcomes: ['Explain API roles', 'Evaluate regional risk', 'Apply governance controls'],
  questions: [
    {
      type: 'Short answer',
      prompt: 'Explain how open banking APIs can change customer onboarding in Bahrain.',
      points: 6
    },
    {
      type: 'Scenario',
      prompt: 'A bank wants to connect a budgeting app to customer accounts. Identify two security risks and one compliance control.',
      points: 8
    },
    {
      type: 'Multiple choice',
      prompt: 'Which stakeholder is usually responsible for customer consent management in an open banking flow?',
      points: 4
    },
    {
      type: 'Reflection',
      prompt: 'What evidence would you request before accepting an AI detector result as conclusive?',
      points: 6
    }
  ]
};

export const institutionMetrics = [
  { label: 'Active learners', value: '7,842', trend: '+12%', icon: UsersRound },
  { label: 'Course spaces', value: '418', trend: '+31 this term', icon: GraduationCap },
  { label: 'Secure exams', value: '1,284', trend: '98% ready', icon: LockKeyhole },
  { label: 'Live sessions', value: '326', trend: '94% attendance sync', icon: Video },
  { label: 'AI reviews', value: '212', trend: '42 escalated', icon: BrainCircuit },
  { label: 'Avg response', value: '2.8s', trend: 'campus cloud', icon: BarChart3 }
];

export const weeklyActivity = [
  { day: 'Sun', learning: 72, exams: 18, live: 41 },
  { day: 'Mon', learning: 88, exams: 22, live: 56 },
  { day: 'Tue', learning: 81, exams: 31, live: 63 },
  { day: 'Wed', learning: 94, exams: 27, live: 59 },
  { day: 'Thu', learning: 69, exams: 38, live: 44 }
];

export const participants = [
  { name: 'Dr. Mariam', role: 'Host', status: 'Speaking' },
  { name: 'Fatima Hassan', role: 'Student', status: 'Camera on' },
  { name: 'Ahmed Al Doseri', role: 'Student', status: 'Muted' },
  { name: 'Maha Ebrahim', role: 'Student', status: 'Muted' },
  { name: 'Yusuf Al Noaimi', role: 'Student', status: 'Screen viewing' }
];

export const classChat = [
  { name: 'Fatima', message: 'Can we review the API risk example again?', time: '10:18' },
  { name: 'Dr. Mariam', message: 'Yes, I will share the slide after this poll.', time: '10:19' },
  { name: 'Ahmed', message: 'Audio is clear on my side.', time: '10:20' }
];

export const quickActions = [
  { label: 'Open live room', route: '#student/live', icon: Video },
  { label: 'Run exam check', route: '#student/exam', icon: ShieldCheck },
  { label: 'Message instructor', route: '#student/dashboard', icon: MessageSquareText },
  { label: 'View analytics', route: '#doctor/analytics', icon: BarChart3 },
  { label: 'Review submissions', route: '#doctor/dashboard', icon: ClipboardCheck },
  { label: 'Generate assessment', route: '#doctor/generator', icon: Sparkles },
  { label: 'Analyze writing', route: '#doctor/detector', icon: FileSearch },
  { label: 'Schedule class', route: '#doctor/live', icon: CalendarClock }
];
