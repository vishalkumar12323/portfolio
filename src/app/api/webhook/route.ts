// import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
// import { isPushEvent, verifySignature } from "./utils"




export const POST = async () => {
    // const secret = process.env.WEBHOOK_SECRET;
    // const signature = req.headers.get("x-hub-signature-256") || '';
    // const rawBody = await req.text();

    // const isValid = verifySignature(rawBody, signature, secret)
    // if (!isValid) return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });

    // const payload = JSON.parse(rawBody);
    // const event = req.headers.get("x-github-event") || '';

    // if (isPushEvent(payload, event)) {
    //     const { id, message, url, timestamp } = payload.commits[0];
    //     await prisma.stats.create({ data: { commitId: id, commitMessage: message, commitUrl: url, timestamp } });
    // }

    return NextResponse.json({ received: true }, { status: 200 });
};