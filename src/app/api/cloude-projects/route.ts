import { NextResponse } from "next/server";

export const GET = async () => {

    return NextResponse.json({ "msg": "ok" }, { status: 200 });

};