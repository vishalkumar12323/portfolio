import { prisma } from "@/lib/prisma";
import { TProjectProps } from "@/lib/utils";

export async function getAllProjects(): Promise<TProjectProps[]> {
  const projects = await prisma.projects.findMany({
    include: {
      stats: { select: { commitMessage: true, timestamp: true } },
    },
  });

  return projects as unknown as TProjectProps[];
}

export async function getProjectById(
  id: string
): Promise<TProjectProps | null> {
  const project = await prisma.projects.findFirst({ where: { id } });

  return project as unknown as TProjectProps | null;
}
