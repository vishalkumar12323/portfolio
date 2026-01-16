import { StaticImageData } from "next/image";
import photo1 from "./images/book-my-hotel.png";
import photo1_1 from "./images/book-my-hotel-vendor.png";
import photo1_2 from "./images/book-my-hotel-add.png";
import photo1_3 from "./images/book-my-hotel-login.png";

import photo2 from "./images/drivers.png";
import photo2_1 from "./images/drivers-grid-view.png";

import photo3 from "./images/sleepy.png";
import photo3_1 from "./images/sleepy-login.png";

import photo4 from "./images/background-1.png";
import photo4_1 from "./images/background-2.png";

import photo5 from "./images/bookit-1.png";
import photo5_1 from "./images/bookit-2.png";
import photo5_2 from "./images/bookit-3.png";
import photo5_3 from "./images/bookit-4.png";
import photo5_4 from "./images/bookit-5.png";
import photo5_5 from "./images/bookit-6.png";

import chat_1 from "./images/chat-1.png";
import chat_2 from "./images/chat-2.png";
import chat_3 from "./images/chat-3.png";
import chat_4 from "./images/chat-4.png";

export type TProjectProps = {
  id: string;
  name: string;
  src: StaticImageData[];
  description: string;
  liveLink?: string;
  githubLink?: string;
  tech: string[];
};

export const projectData: TProjectProps[] = [
  {
    id: "1",
    name: "hotel management platform",
    src: [photo1, photo1_1, photo1_2, photo1_3],
    description:
      "A full-stack hotel and restaurant booking platform built with React.js, RTK Query, and Node.js. Implements role-based authentication using JWT and manages data with PostgreSQL and Prisma ORM. Supports Admin, Vendor, and Customer roles with secure access control.",
    liveLink: "https://book-my-hotel-three.vercel.app/",
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
    id: "2",
    name: "spinny-lite",
    src: [photo2, photo2_1],
    description:
      "A next.js app where users can search cars by name or filter by price, brand, and fuel type. for the data management uses NeonDB with prisma ORM.",
    githubLink: "https://github.com/vishalkumar12323/DreamDrive",
    liveLink: "https://dream-drive.vercel.app/",
    tech: ["Next.js", "NeonDB", "Prisma"],
  },

  {
    id: "3",
    name: "sleepy",
    src: [photo3, photo3_1],
    description:
      "Daily Sleeps is a Next.js full stack web app where users can log their sleep entries. it's offers a seamless experience for improving sleep habits.",

    liveLink: "https://daily-sleeps.vercel.app",
    githubLink: "https://github.com/vishalkumar12323/daily-sleeps",
    tech: ["Next.js", "Next-Auth", "Postgres"],
  },
  {
    id: "4",
    name: "RGB Background Downloader",
    src: [photo4, photo4_1],
    description:
      "RGB Background images generator, Download random background-color images using help with html5 canvas, css3, javascript.",

    liveLink: "https://vishalkumar12323.github.io/Background-Picker",
    githubLink: "https://github.com/vishalkumar12323/Background-Picker",
    tech: ["Html5", "Css3", "Javascript", "HTML5 Canvas"],
  },
  {
    id: "5",
    name: "BookIt Experiences & Slots",
    src: [photo5, photo5_1, photo5_2, photo5_3, photo5_4, photo5_5],
    description:
      "BookIt is a full-stack web application built with Next.js 14 (App Router) that allows users to discover and book unique experiences such as kayaking, cooking workshops, and trekking adventures.It features real-time slot availability, promo-code validation, and a smooth booking flow — from browsing to checkout to confirmation.",

    liveLink: "https://bookit-gilt-six.vercel.app/",
    githubLink: "https://github.com/vishalkumar12323/bookit",
    tech: ["Next.js + Typescript", "Axios", "PostgreSQL", "TailwindCss"],
  },
  {
    id: "6",
    name: "Chatting App (Slack-Lite)",
    src: [chat_1, chat_2, chat_3, chat_4],
    description:
      "Slack-Lite is a simplified version of Slack that enables teams to communicate in real-time through organized channels. Users can register, log in, create or join channels, send messages, and see who's currently online. The application uses WebSocket technology for instant message delivery and presence updates, providing a seamless chat experience.",

    liveLink: "",
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
