import { PushEvent } from "@octokit/webhooks-types";
import crypto from "node:crypto";


export const isPushEvent = (payload: unknown, eventName: string | string[] | undefined): payload is PushEvent => {
    return eventName === "push";
}

export function verifySignature(payload: string, signature: string, secret: string | undefined) {
    if (!signature || !secret) return false;
    const hash = signature.includes("=") ? signature.split("=")[1] : signature;

    const localHash = crypto.createHmac('sha256', secret).update(payload).digest('hex');

    const trusted = Buffer.from(localHash, 'hex');
    const received = Buffer.from(hash, 'hex');

    if (trusted.length !== received.length) return false;

    return crypto.timingSafeEqual(trusted, received);
}
