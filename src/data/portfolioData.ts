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
  focus: "Engineering solutions at the intersection of AI and real-world problems",
  location: "Accra, Ghana (Open to Remote)",
  bio: "I am a Telecommunication Engineering student and Software Engineer with a strong passion for building intelligent systems and scalable applications.\n\nMy interests lie in AI development, web applications, and solving real-world problems using technology. I enjoy turning complex ideas into simple, functional, and user-friendly solutions.\n\nCurrently, I am focused on improving my skills in AI engineering, backend systems, and modern web technologies while working on projects that combine automation, intelligence, and usability.",
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
      { name: "Flask" },
      { name: "Tailwind CSS" },
      { name: "Flutter" },
      { name: "HTML5" },
      { name: "CSS" },
      { name: "TypeScript" },
      { name: "Firebase" },
      { name: "Node js" },

    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub" },
      { name: "Figma" },
    ],
  },
];

export const projectsData: Project[] = [
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
    id: "telecom-degree",
    year: "2025 - Present",
    title: "B.Sc. Telecommunication Engineering",
    subtitle: "KNUST / Kumasi, Ghana",
    description: "Studying core telecommunication subjects including electromagnetic fields, signal processing, network design, satellite communications, and information theory.",
    category: "education",
  },
  {
    id: "ai-engineer-intern",
    year: "2026",
    title: "Software & AI Engineering Intern @Cortexx",
    subtitle: "Tech Solutions Hub / Accra",
    description: "Collaborated on web platform engineering, developed clean Next.js dashboard UI panels, and built apps to solve real world problems",
    category: "experience",
  },


];
