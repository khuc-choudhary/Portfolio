// ─────────────────────────────────────────────────────────────
//  EDIT ME — all personal details live here.
//  Anything marked `placeholder: true` is NOT a real link yet.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Khushi Mangal Singh',
  location: 'Ahmedabad, Gujarat, India',
  // Put your real resume at public/Khushi_Mangal_Singh_Resume.pdf (same name) to replace the placeholder.
  resumeUrl: '/Khushi_Mangal_Singh_Resume.pdf',
  resumeFileName: 'Khushi_Mangal_Singh_Resume.pdf',
}

export const contact = {
  email: 'khushichoudhary5753@gmail.com',
  linkedin: { url: 'https://www.linkedin.com/in/khushichoudhary1' },
  github: { url: 'https://github.com/khuc-choudhary' },
  instagram: { url: 'https://www.instagram.com/your-handle', placeholder: true },
}

export const typingPhrases = [
  'Aspiring AI Engineer',
  'MCA Student',
  'Software Developer',
  'Machine Learning Learner',
]

// Skills grouped by category (from resume). Add or remove items freely — the UI adapts.
// accent: 'violet' | 'sky' | 'fuchsia' | 'emerald' | 'amber' | 'rose' | 'indigo'
// wide: true makes the card span two columns on large screens.
export const skillGroups = [
  { title: 'Languages', icon: 'Code2', accent: 'violet', blurb: 'Core programming languages',
    items: ['Java', 'Python', 'C', 'PHP'] },
  { title: 'Web Technologies', icon: 'Globe', accent: 'emerald', blurb: 'Building for the browser',
    items: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'] },
  { title: 'Frameworks', icon: 'Layers', accent: 'sky', blurb: 'Backend, mobile & app frameworks',
    items: ['Django', 'Laravel', 'Flutter', '.NET'] },
  { title: 'Machine Learning & Data Science', icon: 'Brain', accent: 'fuchsia', wide: true,
    blurb: 'Currently my main focus in MCA',
    items: ['Machine Learning', 'Data Science', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'NLP', 'AI / LLM'] },
  { title: 'Databases', icon: 'Database', accent: 'indigo', blurb: 'Storing & querying data',
    items: ['SQL', 'MySQL', 'SQLite'] },
  { title: 'Tools & Platforms', icon: 'Wrench', accent: 'amber', blurb: 'Day-to-day developer toolkit',
    items: ['Git', 'GitHub', 'VS Code', 'Linux'] },
  { title: 'Core Concepts', icon: 'Cpu', accent: 'rose', wide: true, blurb: 'Fundamentals I build on',
    items: ['Data Structures', 'OOP', 'Problem-Solving', 'Debugging', 'Version Control', 'MVC Architecture'] },
]

export const projects = [
  {
    title: 'Lumetra Classora',
    tagline: 'AI Teacher Platform',
    description:
      'An AI teacher platform where AIRA Ma\'am and NEX Sir take your own study material and teach it like a real classroom teacher. Upload a PDF, DOCX or PPTX and get a topic-wise learning roadmap.',
    highlights: [
      'Teaches in English, Hindi, Hinglish & Gujarati with a live digital blackboard',
      'Alexa-style voice: say "AIRA Ma\'am, explain this…" and ask doubts by voice',
      'Auto-generated quizzes, notes and progress tracking from your own material',
    ],
    tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'Gemini AI', 'Web Speech API'],
    icon: 'BookOpenCheck',
    gradient: 'from-sky-500/40 to-violet-600/10',
    github: 'https://github.com/khuc-choudhary/Lumerta-classora-project',
    demo: 'https://lumetra-classora.vercel.app',
  },
  {
    title: 'Full Flash',
    tagline: 'AI-Powered Job Hunting Portal',
    description:
      'A full-stack job hunting and recruitment platform with three roles (Admin, Job Seeker, Company), real resume parsing and an explainable resume-to-job matching engine.',
    highlights: [
      'Upload a PDF/DOCX resume and get jobs ranked by an explainable match score',
      'Role-based dashboards for seekers, companies and admins with charts',
      'JWT auth, bcrypt passwords and a real PostgreSQL database via Prisma',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    icon: 'Briefcase',
    gradient: 'from-indigo-500/40 to-sky-500/10',
    github: 'https://github.com/khuc-choudhary/Full-Flash-AI-Powered-Job-Hunting-Portal',
    demo: 'https://full-flash-ai-powered-job-hunting-p.vercel.app',
  },
  {
    title: 'InterviewAI',
    tagline: 'AI Mock Interview Platform',
    description:
      'A full-stack mock interview platform where an AI interviewer asks role-based questions, listens to your spoken or typed answers, evaluates each one and generates a detailed performance report.',
    highlights: [
      'Voice interviews with speech-to-text, a talking AI interviewer and follow-up questions from your full answer history',
      'Scores every answer on 9 criteria plus pace, pauses and filler words from your real microphone audio',
      'Downloadable PDF reports, progress analytics and secure JWT auth on a PostgreSQL database',
    ],
    tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'LLM API', 'Web Speech API'],
    icon: 'Mic',
    gradient: 'from-violet-500/40 to-fuchsia-500/10',
    github: 'https://github.com/khuc-choudhary/ai-mock-interview-platform',
    demo: 'https://mockinterview-web.onrender.com',
  },
  {
    title: 'Faculty Feedback System',
    tagline: 'Student Feedback & Analytics Portal',
    description:
      'A web application for colleges to collect anonymous student feedback on faculty and turn it into clear reports, with separate dashboards for Admin, Student and Faculty.',
    highlights: [
      'Students rate each faculty on 8 criteria (1–5) with optional comments, one submission per subject',
      'Admin manages faculty, subjects and students, with bulk student import from Excel/CSV',
      'Subject-wise and faculty-wise reports with a full Excel export; faculty see only their own anonymous results',
    ],
    tech: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'Pandas', 'Jinja2', 'JavaScript'],
    icon: 'ClipboardCheck',
    github: 'https://github.com/khuc-choudhary/Faculty-Feedback',
    demo: 'https://faculty-feedback-system-pvgb.onrender.com',
  },
  {
    title: 'ReWear',
    tagline: 'Resell · Swap · Donate Pre-loved Clothes',
    description:
      'A sustainable fashion marketplace where people give their clothes a second life: sell them, swap them with others, or donate them for free, built for the Indian context with ₹ pricing and city-wise listings.',
    highlights: [
      'Explore page with Resell / Swap / Donate tabs, filters by category, size, condition, city and price',
      'Tinder-style swipe cards to find swap matches, plus a 5-step listing flow with suggested pricing',
      'Google sign-in, realtime chat between users and a dashboard with an eco-impact meter, via Supabase',
    ],
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Framer Motion', 'GSAP'],
    icon: 'Shirt',
    github: 'https://github.com/khuc-choudhary/rewear',
    demo: 'https://rewear-murex-eight.vercel.app',
  },
]

export const education = [
  { degree: 'Master of Computer Applications (MCA)', school: 'L.J. University, Ahmedabad', period: 'Expected 2027', note: 'Pursuing — focus on AI, Machine Learning & software development.' },
  { degree: 'Bachelor of Commerce (B.Com)', school: 'Gujarat University', period: 'Graduated 2025', note: 'Commerce graduate who moved into computer applications.' },
  { degree: '12th', school: 'Haryana', period: 'Completed', note: 'Higher Secondary Education.' },
]

export const certifications = [
  { title: 'Machine Learning with Python', issuer: 'IBM · Coursera' },
  { title: 'AI Fluency: Framework & Foundations', issuer: 'Anthropic' },
  { title: 'Hands-on Introduction to Linux Commands and Shell Scripting', issuer: 'IBM' },
  { title: 'Git and GitHub Complete Master Class', issuer: 'Coursera' },
  { title: 'Python for Data Science, AI & Development', issuer: 'Coursera' },
  { title: 'C Language', issuer: 'Udemy' },
  { title: 'Code Uncode with Nocode AI Tools', issuer: 'Workshop' },
]
