'use server';

import { Resend } from 'resend';
import { EmailTemplate } from '@/components/server/emailTemplate';
import { z } from 'zod';

const ContactSchema = z.object({
    name: z.string().min(1),
    email: z.email(),
    message: z.string().min(1),
    company: z.string().optional(), // honeypot
});

export type ActionState = { status: 'idle' | 'sending' | 'sent' | 'error'; error?: string };

export async function sendContact(prev: ActionState, formData: FormData): Promise<ActionState> {
    const from = process.env.CONTACT_FROM;
    const to = process.env.CONTACT_TO;
    const key = process.env.RESEND_API_KEY;

    if (!from || !to || !key) {
        return { status: 'error', error: 'Server misconfig: missing env vars' };
    }

    const raw = Object.fromEntries(formData.entries());
    const parsed = ContactSchema.safeParse(raw);
    if (!parsed.success) return { status: 'error', error: 'Invalid form data' };

    const { name, email, message, company } = parsed.data;
    if (company) return { status: 'sent' }; // honeypot

    try {
        const resend = new Resend(key);
        const { error } = await resend.emails.send({
            from,
            to,
            replyTo: email,
            subject: 'From: ' + name,
            react: EmailTemplate({ name, email, message }),
        });

        if (error) return { status: 'error', error: error.message ?? 'Failed to send' };
        return { status: 'sent' };
    } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : 'Unknown error';
        return { status: 'error', error: msg };
    }
}

