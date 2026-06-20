import Project from "@/models/Project";
import { IProject } from "@/models/Project";
import { connectDB } from "@/lib/mongodb";

// Maps a raw MongoDB document (snake_case fields from Prisma) to the IProject interface
function toProject(doc: Record<string, unknown>): IProject {
  return {
    id: String(doc._id),
    projectName: doc.project_name as string,
    projectImages: (doc.project_images as string[] | undefined) ?? [],
    description: doc.description as string,
    liveProjectLink: (doc.live_project_link as string | undefined) ?? undefined,
    githubLink: doc.github_link as string,
    tech: (doc.technologies as string[] | undefined) ?? [],
    statsId: doc.statsId as IProject["statsId"],
  };
}

export async function getAllProjects(): Promise<IProject[]> {
  await connectDB();
  const projects = await Project.find({}).lean();

  return projects.map((doc) => toProject(doc as unknown as Record<string, unknown>));
}

export async function getProjectById(
  id: string
): Promise<IProject | null> {
  await connectDB();
  const project = await Project.findById(id).lean();

  if (!project) return null;

  return toProject(project as unknown as Record<string, unknown>);
}
