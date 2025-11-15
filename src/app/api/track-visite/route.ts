import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const alreadyVisited = await prisma.visit.findFirst({
      where: {
        ipAddress: ip,
        createdAt: {
          gt: new Date(Date.now() - 24 * 60 * 60 * 100),
        },
      },
    });

    if (alreadyVisited) {
      return NextResponse.json({ success: false });
    }
    await prisma.visit.create({
      data: {
        ipAddress: ip,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error tracking visit:", error);
    return NextResponse.json(
      { success: false, error: "Database error" },
      { status: 500 }
    );
  }
}
