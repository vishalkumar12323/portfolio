import { NextRequest, NextResponse } from "next/server";

export const GET = () => {
    return NextResponse.json({ message: "ok" }, { status: 200 });
};


export const POST = (req: NextRequest) => {
    const data = req.json();
    console.log({ data });
    return NextResponse.json({ message: "ok" }, { status: 200 });
};