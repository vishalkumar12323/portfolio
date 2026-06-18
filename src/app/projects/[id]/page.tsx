import { TProjectProps } from "@/lib/utils";
import {
  CardContent,
  CardAction,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { ImageCarousel } from "@/components/main/image-carousel";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ProjectModel({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await prisma.projects.findFirst({ where: { id } }) as unknown as TProjectProps;
  return (
    <div className="p-4">
      <CardHeader className="pb-3 px-0">
        <CardTitle className="md:text-xl font-normal capitalize bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400 bg-gradient-to-b from-black to-neutral-800 leading-[25px]">
          {project.projectName}
        </CardTitle>
      </CardHeader>
      <hr className="mb-3 dark:bg-gray-500 bg-gray-700" />
      <CardContent className="px-0">
        <ImageCarousel images={project.projectImages} alt={project.projectName} />

        <CardDescription className="text-[14px] md:text-[16px] mb-3">
          {project.description}
        </CardDescription>

        <div className="mb-3">
          <h3 className="text-accent-foreground">Tech Stack :-</h3>
          <div className="flex items-center flex-wrap gap-2 gap-y-0.5 md:gap-y-0 md:gap-4">
            {project.tech.map((t) => (
              <div
                key={t}
                className="px-2 text-gray-700 dark:text-gray-300 py-2"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      <CardAction className="justify-self-start space-x-2">
        <Link href={project.liveProjectLink ?? "#"}>
          <Button
            variant={"outline"}
            className="rounded-sm border-gray-400 cursor-pointer shadow hover:shadow-lg transition-shadow capitalize"
          >
            <span>view live</span> <MoveRight />
          </Button>
        </Link>
        <Link href={project.githubLink ?? "#"}>
          <Button
            variant={"outline"}
            className="rounded-sm border-gray-400 cursor-pointer shadow hover:shadow-lg transition-shadow capitalize"
          >
            <span>view source code</span> <MoveRight />
          </Button>
        </Link>
      </CardAction>
    </div>
  );
}
