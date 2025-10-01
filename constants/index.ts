import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  
  {
    skill_name: "C#",
    image: "C.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "linux",
    image: "linux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },{
    skill_name: "Express",
    image: "express.png",
    width: 70,
    height: 70,
  },
  
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com/geddikriss?igsh=ajR6M2dtN3NhNW1l",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com/gadi.rap",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "vs",
    image: "vs.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "vsc",
    image: "vsc.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "intellij",
    image: "intellij.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "jupter",
    image: "jupter.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "java",
    image: "java.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "ppt",
    image: "ppt.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "excel.js",
    image: "excel.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Word",
    image: "Word.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "python",
    image: "github.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  
] as const;

export const FULLSTACK_SKILL = [

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },{
    skill_name: "aftereffect",
    image: "aftereffect.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "perimum pro",
    image: "pr pro.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "photoshop",
    image: "photoshop.png",
    width: 80,
    height: 80,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "word",
    image: "word.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Online Learning Platform for Wolaita Zone Science and IT Department",
    description:
      'User Accounts & Roles – separate access for students and  teachers.Course Management – teachers can upload lecture notes, slides, and assignments. Video Lessons & Resources – integrated multimedia for distance learning.',
    images: ["/projects/project-1.png", "/projects/proj1.png"],
    link: "https://github.com/Geddi223",
  },
  {
    title: "Web-Based Face Recognition Attendance System",
    description:
      'The system utilized Python, Flask, and OpenCV to accurately recognize employee faces for attendance marking. I enhanced its security through GPS verification and liveness detection and built an admin dashboard for monitoring attendance records, generating reports, and linking with payroll functions. The project emphasized my ability to manage full-stack development while solving real-world administrative challenges through intelligent automation.',
    images: ["/projects/project-2.png", "/projects/face.png","/projects/Screenshot 2025-05-19 082810.png"],
    link: "https://github.com/Geddi223",
  },
  {
    title: "Haramaya Clinic Management System",
    description:
      'The Haramaya Clinic Management System is a comprehensive web-based application designed to streamline clinic operations. It enables administrators to add patients, specify details about doctors in the clinic, track the number of active patients, and manage other essential clinic information efficiently.',
    images: ["/projects/proj3.png", "/projects/proj4.png" , "/projects/proj2.png"],
    link: "https://github.com/Geddi223",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com/@gedionfikre299",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Geddi223",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com/geddikriss?igsh=ajR6M2dtN3NhNW1l",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "www.linkedin.com/in/gedion-fikre-3b4558325",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com/@gedionfikre299",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: process.env.CONTACT_EMAIL || "your-contact-email@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Geddi223",
};

export const EDUCATION = [
  {
    institution: "Haramaya University",
    degree: "Bachelor of Science in Information Systems",
    startYear: 2021,
    endYear: 2025,
    National_Exit_exam: "pass",
    location: "Haramaya, Ethiopia",
    details: [
      "Focused on software engineering, algorithms, and data structures.",
      "Final year project: Web-based face recognition attendance system using OpenCV.",
      "Relevant coursework: Database Systems, Operating Systems, Computer Networks.", "Graduated with distinction.", "Member of the programming club."
    ],
  },
  {
    institution: "Infolink University College",
    degree: "Bachelor of Arts in Business Management (Ongoing, 4th Year Student)",
    startYear: 2022,
    endYear: 2026,
    Relevant_Courses: " Strategic Management, Financial Accounting, Organizational Behavior, Marketing Management",
    location: "Wolaita sodo, Ethiopia",
    
  },
] as const;
