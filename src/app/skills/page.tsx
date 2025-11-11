import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { skills } from "@/lib/data";
import { IconType } from "react-icons";

export default function ExperiencePage() {
  return (
    <Card className="my-4 md:my-8 p-2 md:p-4 rounded-sm border-none bg-accent">
      <div className="project-heading after:bg-gray-700 dark:after:bg-gray-400 text-center mt-5 mb-4 text-[20px] md:text-4xl md:mt-8 font-bold relative bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400 bg-gradient-to-b from-black to-neutral-800">
        <h2 className="leading-12 md:leading-10 uppercase">
          My Professional Skills
        </h2>
      </div>

      <div className="mb-3 w-full">
        <p className="text-center w-full leading-6 text-gray-800 dark:text-gray-300">
          These are the top skills that I&apos;ve learned and used in my
          projects, some skills I&apos;m learning currently, Click on each one
          of them to learn more.
        </p>
      </div>

      <div className="mx-auto max-w-[110rem] mt-8 mb-8 text-center">
        {skills.map((s) => (
          <Skill
            name={s.name}
            key={s.id}
            description={s.description}
            icon={s.icon}
          />
        ))}
      </div>
    </Card>
  );
}

const Skill = ({
  name,
  description,
  icon: Icon,
}: {
  name: string;
  description: string;
  icon: IconType;
}) => {
  return (
    <Dialog>
      <span className="inline-block w-[17rem] py-4 px-3 m-2 shadow-md border hover:shadow-lg dark:bg-accent cursor-pointer">
        <DialogTrigger className="cursor-pointer w-full h-full">
          {name}
        </DialogTrigger>
        <DialogContent className="bg-accent rounded-sm">
          <DialogTitle className="font-normal text-xl flex items-center gap-2">
            {name} <Icon className="inline" size={30} />
          </DialogTitle>
          <p className="text-[15px]">{description}</p>
        </DialogContent>
      </span>
    </Dialog>
  );
};
