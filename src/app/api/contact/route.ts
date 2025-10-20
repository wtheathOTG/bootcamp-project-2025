import {Resend} from "resend";
import {NextResponse} from "next/server";
import {EmailTemplate} from "@/components/server/emailTemplate";

export async function POST(req: Request) {
    const from = process.env.CONTACT_FROM;
    if (!from) return NextResponse.json({ error: "Server misconfig: CONTACT_FROM is missing" }, { status: 500 });

    const to = process.env.CONTACT_TO;
    if (!to) return NextResponse.json({ error: "Server misconfig: CONTACT_TO is missing" }, { status: 500 });

    const key = process.env.RESEND_API_KEY;
    if (!key) return NextResponse.json({ error: "Server misconfig: RESEND_API_KEY is missing" }, { status: 500 });
    const resend = new Resend(key);

    try {
        const {name, email, message, company} = await req.json();

        if (company) return NextResponse.json({ok: true}); //honeypot
        if (!name || !email || !message) {
            return NextResponse.json({error: "Missing required fields."}, {status: 400});
        }

        const {error} = await resend.emails.send({
            from: from,
            to: to,
            subject: "From: " + name,
            react: EmailTemplate({name, email, message}),
        });

        if (error) {
            return NextResponse.json({error: error.message ?? "Failed to send"}, {status: 500});
        }

        return NextResponse.json({ok: true});
    } catch (err) {
        const error = err instanceof Error ? err : new Error("Unknown error");
        return NextResponse.json({error: error.message ?? "Failed to send"}, {status: 500});
    }
}