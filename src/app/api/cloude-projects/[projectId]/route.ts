import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";


export const GET = async (_req: NextRequest, { params }: { params: Promise<{ projectId: string }> }) => {
    const { projectId } = await params;

    // if (!projectId) return NextResponse.json({ message: "Project not found" }, { status: 404 });

    // try {
    //     const project = await prisma.projects.findFirst({ where: { id: projectId } });

    //     if (!project) return NextResponse.json({ message: "Project not found" }, { status: 404 });

    return NextResponse.json({ "msg": "ok", "id": projectId }, { status: 200 });
    // } catch (error) {
    //     console.error(`error fetching cloude project with id:: `, error);
    //     return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    // }
}