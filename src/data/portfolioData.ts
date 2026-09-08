export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: "AI & ML" | "Web & Mobile" | "Telecom & Systems";
  featured: boolean;
}

export interface Skill {
  name: string;
  level?: "Advanced" | "Intermediate" | "Beginner";
  iconName?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  category: "education" | "experience" | "project";
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  twitter?: string;
}

export interface DeveloperProfile {
  name: string;
  role: string;
  focus: string;
  location: string;
  bio: string;
  cvUrl: string;
  socialLinks: SocialLinks;
}

export const developerProfile: DeveloperProfile = {
  name: "Azindo Abdul Razak",
  role: "Software Engineer & AI Developer",
  focus: "Engineering solutions at the intersection of AI, full-stack systems, and cybersecurity",
  location: "Accra, Ghana (Open to Remote)",
  bio: "I am a Telecommunication Engineering student and Software Engineer focused on AI development, full-stack applications, and practical technology solutions.\n\nMy work spans AI software engineering, full-stack web applications, and cybersecurity learning. I enjoy turning complex ideas into functional, reliable, and user-friendly solutions.\n\nCurrently, I am focused on building intelligent systems, modern web platforms, and exploring practical technology solutions across software and security domains.",
  cvUrl: "/resume.pdf",
  socialLinks: {
    github: "https://github.com/mrazindo12",
    linkedin: "https://linkedin.com/in/abdul-razak-azindo",
    email: "mailto:abdulrazakazindo@gmail.com",
    twitter: "https://twitter.com/azindo_ar",
  },
};

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    skills: [
      { name: "JavaScript" },
      { name: "Python" },
      { name: "MATLAB" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Technologies",
    skills: [
      { name: "Next.js" },
      { name: "React" },
      { name: "FastAPI" },
      { name: "Flask" },
      { name: "Express.js" },
      { name: "Socket.io" },
      { name: "Tailwind CSS" },
      { name: "Flutter" },
      { name: "HTML5" },
      { name: "CSS" },
      { name: "TypeScript" },
      { name: "Firebase" },
      { name: "Node.js" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub" },
      { name: "Vite" },
      { name: "PWA" },
      { name: "REST APIs" },
      { name: "OpenRouter" },
      { name: "Microsoft Edge TTS" },
      { name: "Figma" },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "maths-hub-online",
    title: "Maths Hub Online",
    description: "A full-stack online mathematics tutoring platform connecting students with tutors and providing curriculum-focused learning resources.",
    longDescription: "A production web platform built for an online mathematics tutoring service. The platform includes tutor discovery, curriculum-focused learning resources, user accounts, session booking, and online payment workflows. It also provides educational resources such as study guides, past questions, video tutorials, and reference materials.",
    tags: ["React", "Vite", "Node.js", "JavaScript", "REST APIs"],
    githubUrl: "https://github.com/mrazindo12/mathshubon",
    liveUrl: "https://www.mathshubon.com/",
    category: "Web & Mobile",
    featured: true,
  },
  {
    id: "slide2audio",
    title: "Slide2Audio",
    description: "A full-stack AI-powered document-to-speech converter that transforms PDFs, slides, and docs into natural-sounding audio lectures and podcasts.",
    longDescription: "Supports multi-format file uploads (.pdf, .pptx, .docx, .txt) and parses them for speech synthesis. Features three modes: direct verbatim reading, AI Lecture (LLM-summarized conversational presentation), and AI Podcast (multi-voice conversational scripting with distinct Host, Expert, and Student neural voices). Built with a React 19 + Vite frontend, a FastAPI backend, Edge-TTS for high-fidelity audio synthesis, and OpenRouter API for intelligent model fallback. Includes local conversion history, auto-scrolling transcript highlighting, and progressive web app (PWA) installation.",
    tags: ["React", "FastAPI", "Edge-TTS", "OpenRouter AI", "PWA", "Python"],
    githubUrl: "https://github.com/mrazindo12/Slides2Audio",
    liveUrl: "https://slides2audio-1.onrender.com/",
    category: "AI & ML",
    featured: true,
  },
  {
    id: "cwa-calculator",
    title: "KNUST CWA Predictor",
    description: "A Next.js-based CWA predictor for KNUST students featuring real-time calculations, scenario simulation, and a responsive UI.",
    longDescription: "Implements the official KNUST 0–100 grading formula for both fresh and continuing students. Supports multi-scenario comparisons (best/worst case), target-CWA reverse calculation, course-impact detection, URL-shareable scenarios via lz-string, CSV export, dark mode, and PWA installability. State persisted to localStorage with Zustand.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "PWA"],
    githubUrl: "https://github.com/mrazindo12/CWA_Calculator",
    liveUrl: "https://cwa-calculator.vercel.app",
    category: "Web & Mobile",
    featured: true,
  },
  {
    id: "quiz-game-app",
    title: "QUIZ Game",
    description: "A real-time multiplayer quiz game built for  exam preparation, with AI-generated questions from uploaded course materials.",
    longDescription: "Full-stack quiz platform with a React + Vite client and an Express + Socket.io server enabling live multiplayer rooms. Uses Google Generative AI to auto-generate questions from PDF and DOCX course material (parsed with pdf-parse and mammoth). Deployed via Vercel (client) and Render (server).",
    tags: ["React", "Vite", "Socket.io", "Express", "Google Generative AI"],
    githubUrl: "https://github.com/mrazindo12/QUIZ_GAME_APP",
    liveUrl: "https://ceng-woad.vercel.app/",
    category: "AI & ML",
    featured: true,
  },
  {
    id: "portfolio-website",
    title: "Premium Minimalist Portfolio",
    description: "The source code of this modern, highly customized, fluid portfolio website showcasing my engineering work.",
    longDescription: "Created a modern portfolio using Next.js (App Router), Framer Motion, and Tailwind CSS. Implemented sleek interactions, translucent blurring, custom responsive layouts, and automatic theme transitions.",
    tags: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/mrazindo12/premium-portfolio",
    liveUrl: "https://my-portfolio-eosin-sigma-rpio6y9sae.vercel.app/",
    category: "Web & Mobile",
    featured: false,
  },
];

export const journeyTimeline: TimelineEvent[] = [
  {
    id: "virtual-infosec-africa",
    year: "Sep 2026 - Present",
    title: "Cybersecurity Intern / Trainee",
    subtitle: "Virtual Infosec Africa / Kumasi, Ghana",
    description: "Undergoing practical cybersecurity training focused on security concepts, tools, and hands-on technical skills.",
    category: "experience",
  },
  {
    id: "cortexx-intern",
    year: "2026",
    title: "Software Engineering Intern @Cortexx",
    subtitle: "Cortexx Community / Accra",
    description: "Contributed to software engineering and AI-focused projects while gaining hands-on development experience.",
    category: "experience",
  },
  {
    id: "healthpass-hackathon",
    year: "2026",
    title: "HealthPass — Hackathon Developer",
    subtitle: "Claude Code Builders Club, KNUST",
    description: "Collaborated with a team to develop a healthcare system designed to improve access to patient records across healthcare facilities.",
    category: "project",
  },
  {
    id: "telecom-degree",
    year: "2025 - Present",
    title: "B.Sc. Telecommunication Engineering",
    subtitle: "KNUST / Kumasi, Ghana",
    description: "Studying core telecommunication subjects including electromagnetic fields, signal processing, network design, satellite communications, and information theory.",
    category: "education",
  },
  {
    id: "telecom-committee",
    year: "2025/2026",
    title: "Organizing Committee Member",
    subtitle: "Telecommunication Engineering Department, KNUST",
    description: "Supported the planning and coordination of departmental activities and student initiatives.",
    category: "experience",
  },
  {
    id: "iefi-it-head",
    year: "2024",
    title: "Head of IT Department",
    subtitle: "Islamic Enlightenment Foundation International / Accra",
    description: "Led technical operations, managed digital systems, and supported IT initiatives.",
    category: "experience",
  },
];
