import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export const GET = async (_req: NextRequest, { params }: { params: { projectId: string } }) => {
    const projectId = params.projectId;

    if (!projectId) return NextResponse.json({ message: "Project not found" }, { status: 404 });

    try {
        const project = await prisma.projects.findFirst({ where: { id: projectId } });

        if (!project) return NextResponse.json({ message: "Project not found" }, { status: 404 });

        return NextResponse.json(project, { status: 200 });
    } catch (error) {
        console.error(`error fetching cloude project with id:: `, error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}