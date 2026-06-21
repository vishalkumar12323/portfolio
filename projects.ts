
export type TProjectProps = {
  project_name: string;
  project_images: string[];
  description: string;
  live_project_link?: string;
  github_link: string;
  stats_id?: string;
  technologies: string[];
};

export const projectData: TProjectProps[] = [
  {
    project_name: "AskTheSite",
    project_images: ["/images/ast1.png", "/images/ast2.png", "/images/ast3.png"],
    description: "AskTheSite is a full-stack application that allows users to submit a website URL and ask a question about it. The system scrapes the website, processes the content in the background, and uses an AI model to generate an answer — all asynchronously. This project demonstrates real- world backend architecture, background job processing, and modern frontend data - fetching patterns.",
    live_project_link: "https://github.com/vishalkumar12323/AskTheSite",
    github_link: "https://github.com/vishalkumar12323/AskTheSite",
    technologies: ["Next.js (App Router)", "TanStack Query", "Axios", "Node.js", "BullMQ+Redis", "PostgreSQL", "DrizzleORM", "Playwright", "Docker"]
  },
  {
    project_name: "Chatting App (Slack-Lite)",
    project_images: ["/images/chat-1.png", "/images/chat-2.png", "/images/chat-3.png", "/images/chat-4.png"],
    description:
      "Slack-Lite is a simplified version of Slack that enables teams to communicate in real-time through organized channels. Users can register, log in, create or join channels, send messages, and see who's currently online. The application uses WebSocket technology for instant message delivery and presence updates, providing a seamless chat experience.",

    live_project_link: "https://chat-app-brown-six-68.vercel.app",
    github_link: "https://github.com/vishalkumar12323/chat-app",
    technologies: [
      "React+Vite",
      "Zustand",
      "Axios",
      "Socket.IO client",
      "Node.js",
      "Express.js",
      "Socket.io",
      "JWT",
      "Sequelize + PostgreSQL",
    ],
  },
  {
    project_name: "TaskFlow",
    project_images: ["/images/task1.png", "/images/task2.png", "/images/task3.png", "/images/task4.png"],
    description: "⚡ TaskFlow — Scalable REST API with Auth & RBAC.",
    live_project_link: "https://github.com/vishalkumar12323/TaskFlow",
    github_link: "https://github.com/vishalkumar12323/TaskFlow",
    technologies: ["React", "Axios", "Express.jsj", "DrizzleORM", "PostgreSQL", "Jwt", "Zod", "express-rate-limmiter"]
  },
  {
    project_name: "hotel management platform",
    project_images: ["/images/book-my-hotel.png", "/images/book-my-hotel-vendor.png", "/images/book-my-hotel-add.png", "/images/book-my-hotel-login.png"],
    description:
      "A full-stack hotel and restaurant booking platform built with React.js, RTK Query, and Node.js. Implements role-based authentication using JWT and manages data with PostgreSQL and Prisma ORM. Supports Admin, Vendor, and Customer roles with secure access control.",
    live_project_link: "https://book-my-hotel-three.vercel.app/",
    github_link: "https://github.com/vishalkumar12323/book-my-hotel",
    technologies: [
      "React.js",
      "Node.js",
      "Redux-ToolKit",
      "PostgreSQL",
      "Prisma",
      "JWT",
    ],
  },

  {
    project_name: "sleepy",
    project_images: ["/images/sleepy.png", "/images/sleepy-login.png"],
    description:
      "Daily Sleeps is a Next.js full stack web app where users can log their sleep entries. it's offers a seamless experience for improving sleep habits.",

    live_project_link: "https://daily-sleeps.vercel.app",
    github_link: "https://github.com/vishalkumar12323/daily-sleeps",
    technologies: ["Next.js", "Next-Auth", "Postgres"],
  },
  {
    project_name: "RGB Background Downloader",
    project_images: ["/images/background-1.png", "/images/background-2.png"],
    description:
      "RGB Background images generator, Download random background-color images using help with html5 canvas, css3, javascript.",

    live_project_link: "https://vishalkumar12323.github.io/Background-Picker",
    github_link: "https://github.com/vishalkumar12323/Background-Picker",
    technologies: ["Html5", "Css3", "Javascript", "HTML5 Canvas"],
  },
  {
    project_name: "BookIt Experiences & Slots",
    project_images: ["/images/bookit-2.png", "/images/bookit-2.png", "/images/bookit-3.png", "/images/bookit-4.png", "/images/bookit-5.png", "/images/bookit-6.png"],
    description:
      "BookIt is a full-stack web application built with Next.js 14 (App Router) that allows users to discover and book unique experiences such as kayaking, cooking workshops, and trekking adventures.It features real-time slot availability, promo-code validation, and a smooth booking flow — from browsing to checkout to confirmation.",

    live_project_link: "https://bookit-gilt-six.vercel.app/",
    github_link: "https://github.com/vishalkumar12323/bookit",
    technologies: ["Next.js + Typescript", "Axios", "PostgreSQL", "TailwindCss"],
  },

];
