import {
  ConsultlyLogo,
  EvercastLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { InstagramIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Rishabh Singh",
  role: "Full Stack Developer",
  initials: "RS",
  location: "Falls Church,VA",
  locationLink: "https://www.google.com/maps/place/Falls+Church,+VA,+USA",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  
    mail:
    "mail@rishabhsingh.com.np",
    mailLink: `mailto:mail@rishabhsingh.com.np`,
    website:
    "https://rishabhsingh.com.np",
    webLink: "https://rishabhsingh.com.np",
  summary:
    "Full Stack Developer with 2 year's experience in React, React Native, Node.js, PostgreSQL, MongoDB, Docker, and Kubernetes. Proficient in real-time features, performance optimization, and DevOps practices. Strong collaborator committed to delivering high-quality solutions and continuous learning.",
  avatarUrl: "",
  personalWebsiteUrl: "https://rishabhsingh.com.np",
  contact: {
    email: "mail@rishabhsingh.com.np",
    tel: "9803451416",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Rish4bh0",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/",
        icon: LinkedInIcon,
      },
      {
        name: "Instagram",
        url: "https://instagram.com/rish4bh.s",
        icon: InstagramIcon,
      },
    ],
  },
  education: [
    {
      school: "London Metropolitan University",
      degree: "Bsc (Hons) Computing, Grade: First Class Honours",
      courseWork:"Coursework: Operating Systems; Databases; Algorithms; Computer Architecture; Logic and problem solving; Software Engineering; Information Systems; Artificial Intelligence.",
      start: "01/2021",
      end: "06/2023",
    },
  ],
  work: [
    {
      company: "Dryice Solutions",
      link: "https://dryicesolutions.net",
      badges: ["Kumaripati, Lalitpur"],
      title: "Fullstack Developer",
      logo: ConsultlyLogo,
      start: "08/2023",
      end: null,
      description:
        "Designed and managed a ticketing system with real-time features, reducing issue resolution time by 30%. Implemented automation with Docker, Kubernetes, Argo CD, GitLab CI/CD, and GitHub Actions increasing deployment efficiency by 50%. Supported a SaaS product with 99.9% uptime and resolved issues promptly. Built RESTful APIs and maintained websites, boosting user engagement by 25%. Optimized performance, achieving a 35% reduction in load times.",
    },
    {
      company: "Featherwebs",
      link: "https://featherwebs.com/",
      badges: ["Kupondole, Lalitpur"],
      title: "React Intern",
      logo: ParabolLogo,
      start: "11/2022",
      end: "02/2023",
      description:
        "Developed multiple React projects using modern web techniques, integrating features like socket.io, state management, and API integration. Collaborated with developers, gaining knowledge of cutting-edge technologies. Implemented and maintained version control with Git for efficient collaboration. Kept accurate records of activities throughout the internship.",
    },
    
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "React/Next.js/React-Native",
    "Redux",
    "MongoDB/PostgresSQL",
    "Prisma",
    "Node.js",
    "TailwindCSS",
    "SocketIO",
    "WebRTC",
    "Docker",
    "Git",
    "GitHub Actions",
    "Nginx",
    "Jira",
   
  ],
  softSkills: [
    "Communication",
    "Team work and Collaboration",
    "Organization",
    "Problem Solving",
    "Attention to detail",
    "Time management",
    "Emotional intelligence",
    "Adaptability",

  ],
  projects: [
    {
      title: "Support Desk",
      techStack: [
        "Full Stack Developer",
        "React",
        "TailwindCSS",
        "Node.js",
        "SocketIO",
        "MongoDB",
        "Nginx",
        "Docker",
        "Git",
        "GitHub Actions",
      ],
      description:
        "A cross-platform solution for web and mobile offering ticketing, real-time updates, client tracking, analytics, chat, notifications, and more.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://supportdesk.dryicesolutions.net/",
      },
    },
    {
      title: "Finance SaaS",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "Bun",
        "Hono.js",
        "PostgresSQL",
        "Prisma",
      ],
      description:
        "Finance SaaS platform tracks income, expenses, categorizes transactions, connects to banks, and enhances financial management.",
      logo: EvercastLogo,
      link: {
        label: "Finance SaaS",
        href: "https://spamdetection.rishabhsingh.com.np",
      },
    },
    
    /*
    {
      title: "Plinko",
      techStack: [
        "Side Project",
        "TypeScript",
        "React",
        "Vite",
        "TailwindCSS",
        "Node.js",
      ],
      description: "Plinko clone a game originally from Stake, complete with both backend and frontend development.",
      logo: ConsultlyLogo,
      link: {
        label: "#",
        href: "",
      },
    },
    */
    {
      title: "Spam Detection",
      techStack: [
        "University Project",
        "React",
        "Vite",
        "TailwindCSS",
        "Python",
        "Jupyter Notebook",
        "Fast API",
        "AI",
      ],
      description: "A web app that detects spam using machine learning algorithms like SVM, KNN, and Naive Bayes. Leveraging Microservice architecture.",
      logo: ConsultlyLogo,
      link: {
        label: "Spam Detection",
        href: "https://spamdetection.rishabhsingh.com.np",
      },
    },
   
   
  ],
} as const;
