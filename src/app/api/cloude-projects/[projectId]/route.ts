import { NextRequest, NextResponse } from "next/server";


export const GET = async (_req: NextRequest, { params }: { params: Promise<{ projectId: string }> }) => {
    const { projectId } = await params;

    return NextResponse.json({ "msg": "ok", "id": projectId }, { status: 200 });

}