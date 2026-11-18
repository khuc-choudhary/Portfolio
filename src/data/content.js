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
