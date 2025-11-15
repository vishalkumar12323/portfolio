import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const totalVisits = await prisma.visit.count();
    return NextResponse.json({ totalVisits });
  } catch (error) {
    console.error("Error fetching visit count:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
