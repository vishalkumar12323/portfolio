import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TProjectProps } from "@/lib/utils"
import { IoLogoGithub, IoIosGitMerge } from "react-icons/io";



export const metadata: Metadata = {
  title: "My Projects",
  description: "Some intersting projects, I've done",
  authors: [
    { name: "Vishal Kumar", url: "https://github.com/vishalkumar12323" },
  ],
};

export default async function ProjectPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cloude-projects`);
  const projects: TProjectProps[] = await response.json();
  return (
    <section>
      <div className="project-heading after:bg-gray-700 after:mb-3 dark:after:bg-gray-400 text-center mt-5 mb-4 text-[20px] md:text-4xl md:mt-8 font-bold relative bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400 bg-gradient-to-b from-black to-neutral-800">
        <h2 className="leading-12 md:leading-10">
          SOME INSIDE PROJECTS, I&apos;VE DONE
        </h2>
      </div>

      <div className="mt-6 mb-3 w-full">
        <p className="text-center w-full leading-6 text-gray-800 dark:text-gray-300">
          These are all the projects that I have created, some are still in
          development which I keep updating, Click on each project to see the
          link for it and get more information.
        </p>
      </div>

      <div className="seprater-line relative max-w-[1200px] mx-auto">
        {projects.map((p, idx) => (
          <div className={`box ${(idx + 1) % 2 !== 0 ? "left" : "right"}`} key={p.id}>
            <Link
              href={`/projects/${p.id}`}
              key={p.id}
              className="rounded-lg drop-shadow-2xl dark:shadow-gray-800/80 transition-transform duration-500"
            >
              <Image
                src={p.projectImages[0]}
                alt={p.projectName}
                width={650}
                height={650}
                className="h-[300px] object-cover rounded-lg"
              />
            </Link>
            <div className="overlay rounded-b-lg">
              <div className="w-full flex flex-col justify-center items-start gap-2.5">
                <Link href={"#"} className="flex gap-2 items-center bg-[#22262b] rounded-full p-1.5"><IoLogoGithub size={18} /> vishalkumar12323/portfolio</Link>
                <Link href={"#"} className="hover:underline hover:cursor-pointer px-1">integrating github webhooks</Link>
                <p className="flex items-center gap-0.5 px-1">Jan 19 on <IoIosGitMerge size={18} /> <Link href={"#"} className="hover:underline cursor-pointer">main</Link> </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

