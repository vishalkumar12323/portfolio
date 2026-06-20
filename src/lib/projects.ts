import Project from "@/models/Project";
import { IProject } from "@/models/Project";
import { connectDB } from "@/lib/mongodb";

// Maps a raw MongoDB document (snake_case fields from Prisma) to the IProject interface
function toProject(doc: any): IProject {
  return {
    id: doc._id.toString(),
    projectName: doc.project_name,
    projectImages: doc.project_images ?? [],
    description: doc.description,
    liveProjectLink: doc.live_project_link ?? undefined,
    githubLink: doc.github_link,
    tech: doc.technologies ?? [],
    statsId: doc.statsId,
  };
}

export async function getAllProjects(): Promise<IProject[]> {
  await connectDB();
  const projects = await Project.find({}).lean();

  return projects.map(toProject);
}

export async function getProjectById(
  id: string
): Promise<IProject | null> {
  await connectDB();
  const project = await Project.findById(id).lean();

  if (!project) return null;

  return toProject(project);
}
