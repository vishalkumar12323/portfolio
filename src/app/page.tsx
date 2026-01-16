"use client";

import React, { Suspense, lazy } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Linkedin, Twitter, MoveRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Archivo_Black } from "next/font/google"


const archivo_black = Archivo_Black({
  weight: "400"
});

const Profile = lazy(() => import("@/components/main/profile"));

const ProfileSkeleton = () => (
  <div className="flex-1 relative w-full max-w-md mx-auto">
    <Skeleton className="w-[400px] h-[400px] rounded-full shadow-md dark:bg-gradient-to-b dark:from-white dark:to-neutral-400 bg-gradient-to-r from-black/10 to-black/5" />
  </div>
);

export default function HeroSectionPage() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        <div className="md:max-w-[600px] flex-1 text-center md:text-left">
          <p className="text-xl text-muted-foreground mb-2">Hello 👋</p>
          <h1
          style={{zoom: 1.4}}
            className={
              `${archivo_black.className} text-2xl sm:text-3xl md:text-4xl font-[900] px-0 py-4 bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400 bg-gradient-to-b from-black to-neutral-800`
            }
          >
            I&apos;m Vishal Kumar
          </h1>
          <p className="text-[15px] md:text-[17px] mb-6 text-center md:text-start bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-white/80 dark:to-neutral-400 bg-gradient-to-b from-black to-neutral-800">
            Passionate and results-driven Full-Stack Web Developer with 2.5
            years of hands-on experience in building responsive front-end
            interfaces and scalable back-end APIs. Proficient in JavaScript,
            React.js, Node.js, PostgreSQL, and Docker, with a strong foundation
            in web architecture, RESTful services, and modern UI/UX principles.
            Excels in building full-featured web applications and solving
            complex problems in dynamic environments.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mb-6 flex-wrap">
            <Link
              href="https://linkedin.com/in/vishal-ninaniya-123"
              target="_blank"
            >
              <Button
                variant="outline"
                className="cursor-pointer shadow-sm hover:drop-shadow-lg"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
            </Link>
            <Link href="https://x.com/vishalkumar2654" target="_blank">
              <Button
                variant="outline"
                className="cursor-pointer shadow-sm hover:drop-shadow-lg"
              >
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
            </Link>
            <Link href="https://github.com/vishalkumar12323" target="__blank">
              <Button
                variant="outline"
                className="cursor-pointer shadow-sm hover:drop-shadow-lg"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            </Link>
          </div>
          <Link href="/resume.pdf" target="__blank">
            <Button
              variant={"outline"}
              className="px-6 py-4 text-md rounded-sm overflow-hidden relative z-10 cursor-pointer shadow-sm hover:drop-shadow-lg"
            >
              <span>Resume</span> <MoveRight className="w-6" />
            </Button>
          </Link>
        </div>
        <Suspense fallback={<ProfileSkeleton />}>
          <Profile />
        </Suspense>
      </div>
    </section>
  );
}
