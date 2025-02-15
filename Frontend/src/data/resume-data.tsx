import {
  ConsultlyLogo,
  EvercastLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { InstagramIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Rishabh Singh",
  role: "Software Engineer",
  initials: "RS",
  location: "Falls Church,VA",
  locationLink: "https://www.google.com/maps/place/Falls+Church,+VA,+USA",
  about:
    "A proactive and detail-oriented Software Engineer specializing in cloud computing and back-end development. Experienced in designing, implementing, and optimizing scalable cloud-based solutions. Skilled at project coordination, system performance optimization, and ensuring compliance with best practices. Adept at managing resources, mitigating risks, and delivering technical solutions on time and within budget. Proficient in leveraging cloud technologies to enhance system reliability, security, and efficiency.",
  
    mail:
    "mail@rishabhsingh.com.np",
    mailLink: `mailto:mail@rishabhsingh.com.np`,
    website:
    "https://rishabhsingh.com.np",
    webLink: "https://rishabhsingh.com.np",
  summary:
    "A proactive and detail-oriented Software Engineer specializing in cloud computing and back-end development. Experienced in designing, implementing, and optimizing scalable cloud-based solutions. Skilled at project coordination, system performance optimization, and ensuring compliance with best practices. Adept at managing resources, mitigating risks, and delivering technical solutions on time and within budget. Proficient in leveraging cloud technologies to enhance system reliability, security, and efficiency.",
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
      degree: "Bsc (Hons) Computing, GPA: 3.74/4",
      //courseWork:"Coursework: Operating Systems; Databases; Algorithms; Computer Architecture; Logic and problem solving; Software Engineering; Information Systems; Artificial Intelligence.",
      start: "01/2021",
      end: "06/2023",
    },
  ],
  work: [
    {
      company: "Dryice Solutions",
      link: "https://dryicesolutions.net",
      badges: ["Nepal"],
      title: "Software Engineer",
      logo: ConsultlyLogo,
      start: "08/2023",
      end: null,
      description:
        "Migrated applications to cloud platforms, enhancing performance, scalability, and cost-effectiveness using AWS services like EC2, S3, RDS, and Lambda. Developed CI/CD pipelines with GitHub Actions to automate testing, integration, and deployment while implementing AWS CloudWatch and Prometheus for proactive application monitoring and issue resolution. Provided technical assistance and maintenance for the Line Ministry Budget Information System (LMBIS) to ensure smooth operation and effective budget management for the Ministry of Finance (MoF), Nepal. Additionally, designed and built a help desk application using React, Node.js, and TailwindCSS, integrating RESTful APIs for seamless data handling, Socket.IO for real-time functionality, and AWS for deployment.",
    },
    {
      company: "Featherwebs",
      link: "https://featherwebs.com/",
      badges: ["Remote"],
      title: "Software Engineer Intern",
      logo: ParabolLogo,
      start: "11/2022",
      end: "02/2023",
      description:
        "Assisted in developing and enhancing features for React and Node.js applications, collaborating with the team to troubleshoot bugs and improve application performance. Gained hands-on experience in frontend development, ensuring components met project requirements and delivered a seamless user experience.",
    },
    
  ],
  skills: [
    "GO",
    "JavaScript/TypeScript",
    "Python",
    "Next.js/React/React-Native",
    "Redux",
    "DynamoDB/SQL",
    "Node.js",
    "TailwindCSS",
    "SocketIO",
    "WebRTC",
    "Docker",
    "Git",
    "GitHub Actions",
    "Nginx",
    "AWS(EC2, S3, RDS, Lambda, CloudWatch)",
    "Terraform",
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
      title: "Cloud Resume Challenge",
      techStack: [
        "Full Stack Developer",
        "Next.js",
        "TailwindCSS",
        "Node.js",
        "DynamoDB",
        "Git",
        "GitHub Actions",
        "AWS",
        "Terraform",
        "Lambda",
        "S3",
        "GO",
      ],
      description:
        "A cross-platform solution for web and mobile offering ticketing, real-time updates, client tracking, analytics, chat, notifications, and more.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://cloudresume.rishabhsingh.com.np/",
      },
    },
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
        href: "https://github.com/Rish4bh0/support-/",
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
