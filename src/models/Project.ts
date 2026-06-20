import mongoose, { Schema, Model, Types } from "mongoose";

export interface IProject {
  id: string;
  projectName: string;
  projectImages: string[];
  description: string;
  liveProjectLink?: string;
  githubLink: string;
  tech: string[];
  statsId?: Types.ObjectId;
}

// Schema keys match the actual field names stored in MongoDB (set by Prisma's @map)
const ProjectSchema = new Schema(
  {
    project_name: { type: String, required: true },
    project_images: { type: [String], default: [] },
    description: { type: String, required: true },
    live_project_link: { type: String, default: null },
    github_link: { type: String, required: true },
    technologies: { type: [String], default: [] },
    statsId: { type: Schema.Types.ObjectId, ref: "Stat", default: null },
  },
  {
    collection: "projects",
  }
);

const Project: Model<IProject> =
  mongoose.models.Project ||
  mongoose.model<IProject>("Project", ProjectSchema);

export default Project;