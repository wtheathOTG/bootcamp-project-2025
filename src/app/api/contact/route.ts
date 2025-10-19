import {Resend} from "resend";
import {NextResponse} from "next/server";
import {EmailTemplate} from "@/components/server/emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const {name, email, message, company} = await req.json();

        if (company) return NextResponse.json({ok: true}); //honeypot
        if (!name || !email || !message) {
            return NextResponse.json({error: "Missing required fields."}, {status: 400});
        }

        const { data, error } = await resend.emails.send({
            from: process.env.CONTACT_FROM!,
            to: process.env.CONTACT_TO!,
            subject: `From: ${name}`,
            react: EmailTemplate({name, email, message}),
        });

        if (error) {
            return NextResponse.json({error: error.message ?? "Failed to send"}, {status: 500});
        }

        return NextResponse.json({ok: true});
    } catch (err: any) {
        return NextResponse.json({error: err.message ?? "Failed to send"}, {status: 500});
    }
}