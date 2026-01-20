
export type TProjectProps = {
  projectName: string;
  projectImages: string[];
  description: string;
  liveProjectLink?: string;
  githubLink: string;
  statsId?: string;
  tech: string[];
};

export const projectData: TProjectProps[] = [
  {
    projectName: "hotel management platform",
    projectImages: ["/images/book-my-hotel.png", "/images/book-my-hotel-vendor.png", "/images/book-my-hotel-add.png", "/images/book-my-hotel-login.png"],
    description:
      "A full-stack hotel and restaurant booking platform built with React.js, RTK Query, and Node.js. Implements role-based authentication using JWT and manages data with PostgreSQL and Prisma ORM. Supports Admin, Vendor, and Customer roles with secure access control.",
    liveProjectLink: "https://book-my-hotel-three.vercel.app/",
    githubLink: "https://github.com/vishalkumar12323/book-my-hotel",
    tech: [
      "React.js",
      "Node.js",
      "Redux-ToolKit",
      "PostgreSQL",
      "Prisma",
      "JWT",
    ],
  },
  {
    projectName: "spinny-lite",
    projectImages: ["/images/drivers.png", "/images/drivers-grid-view.png"],
    description:
      "A next.js app where users can search cars by projectName or filter by price, brand, and fuel type. for the data management uses NeonDB with prisma ORM.",
    githubLink: "https://github.com/vishalkumar12323/DreamDrive",
    liveProjectLink: "https://dream-drive.vercel.app/",
    tech: ["Next.js", "NeonDB", "Prisma"],
  },

  {
    projectName: "sleepy",
    projectImages: ["/images/sleepy.png", "/images/sleepy-login.png"],
    description:
      "Daily Sleeps is a Next.js full stack web app where users can log their sleep entries. it's offers a seamless experience for improving sleep habits.",

    liveProjectLink: "https://daily-sleeps.vercel.app",
    githubLink: "https://github.com/vishalkumar12323/daily-sleeps",
    tech: ["Next.js", "Next-Auth", "Postgres"],
  },
  {
    projectName: "RGB Background Downloader",
    projectImages: ["/images/background-1.png", "/images/background-2.png"],
    description:
      "RGB Background images generator, Download random background-color images using help with html5 canvas, css3, javascript.",

    liveProjectLink: "https://vishalkumar12323.github.io/Background-Picker",
    githubLink: "https://github.com/vishalkumar12323/Background-Picker",
    tech: ["Html5", "Css3", "Javascript", "HTML5 Canvas"],
  },
  {
    projectName: "BookIt Experiences & Slots",
    projectImages: ["/images/bookit-2.png", "/images/bookit-2.png", "/images/bookit-3.png", "/images/bookit-4.png", "/images/bookit-5.png", "/images/bookit-6.png"],
    description:
      "BookIt is a full-stack web application built with Next.js 14 (App Router) that allows users to discover and book unique experiences such as kayaking, cooking workshops, and trekking adventures.It features real-time slot availability, promo-code validation, and a smooth booking flow — from browsing to checkout to confirmation.",

    liveProjectLink: "https://bookit-gilt-six.vercel.app/",
    githubLink: "https://github.com/vishalkumar12323/bookit",
    tech: ["Next.js + Typescript", "Axios", "PostgreSQL", "TailwindCss"],
  },
  {
    projectName: "Chatting App (Slack-Lite)",
    projectImages: ["/images/chat-1.png", "/images/chat-2.png", "/images/chat-3.png", "/images/chat-4.png"],
    description:
      "Slack-Lite is a simplified version of Slack that enables teams to communicate in real-time through organized channels. Users can register, log in, create or join channels, send messages, and see who's currently online. The application uses WebSocket technology for instant message delivery and presence updates, providing a seamless chat experience.",

    liveProjectLink: "",
    githubLink: "https://github.com/vishalkumar12323/chat-app",
    tech: [
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
];
