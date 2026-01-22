import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type TProjectProps = {
  id?: string;
  projectName: string;
  projectImages: string[];
  description: string;
  liveProjectLink?: string;
  githubLink: string;
  statsId?: string;
  tech: string[];
};