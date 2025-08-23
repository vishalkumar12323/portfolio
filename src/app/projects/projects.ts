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
];
