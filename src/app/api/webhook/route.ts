import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import crypto from "node:crypto";
// import {prisma} from "@/lib/prisma";

function verifySignature(payload: string, signature: string, secret: string | undefined) {
    if (!signature || !secret) return false;
    const hash = signature.includes("=") ? signature.split("=")[1] : signature;

    const localHash = crypto.createHmac('sha256', secret).update(payload).digest('hex');

    const trusted = Buffer.from(localHash, 'hex');
    const received = Buffer.from(hash, 'hex');

    if (trusted.length !== received.length) return false;

    return crypto.timingSafeEqual(trusted, received);
}

type EventPayload = {
    commitId: string;
    commitMessage: string;
    commitUrl: string;
    timestamp: Date;
};

function githubWebhookEventHandler(event: string | null, payload: EventPayload[]) {
    switch (event) {
        case 'push': {

            break;
        }
        default: {
            console.log(`unhandled event ${event}`);
        }
    }
}

export const POST = async (req: NextRequest) => {
    const secret = process.env.WEBHOOK_SECRET;
    const signature = req.headers.get("x-hub-signature-256") || '';
    const rawBody = await req.text();

    const isValid = verifySignature(rawBody, signature, secret)
    if (!isValid) return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });

    const { commits } = JSON.parse(rawBody);
    const event = req.headers.get("x-github-event");

    githubWebhookEventHandler(event, commits[0]);
    return NextResponse.json({ message: "ok" }, { status: 200 });
};