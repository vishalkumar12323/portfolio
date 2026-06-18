import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const GET = async () => {
    try {
        const projects = await prisma.projects.findMany({ include: { stats: { select: { commitMessage: true, timestamp: true } } } });
        if (!projects || projects.length < 0) return NextResponse.json({ message: "You have no any project on mongodb cloud" }, { status: 200 });

        return NextResponse.json(projects, { status: 200 });
    } catch (error) {
        console.error("error fetching cloude projects:: ", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
};