import { prisma } from "@/lib/prisma";
import { projectData } from "../projects"
import "dotenv/config";

async function main() {
    await Promise.all(
        projectData.map(async (project) => {
            const createdProject = await prisma.projects.create({
                data: {
                    projectName: project.projectName,
                    projectImages: project.projectImages,
                    description: project.description,
                    liveProjectLink: project.liveProjectLink,
                    githubLink: project.githubLink,
                    tech: project.tech,
                },
            });
            console.log(`Created project: ${createdProject.projectName}`);
        }
        )
    );
}
main()
    .then(async () => {
        await prisma.$disconnect();
        console.log("Seeding completed.");
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
