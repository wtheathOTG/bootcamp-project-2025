"use client";

import React, {useRef, useState} from 'react';
import {Field, FieldGroup, FieldLabel, FieldLegend, FieldSet} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";

function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);

    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");
        setError(null);

        const form = e.currentTarget;
        const  data = Object.fromEntries(new FormData(form).entries()) as {
            name: string;
            email: string;
            message: string;
            company?: string; //honeypot
        };

        try {
            console.log(JSON.stringify(data));
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error((await res.json()).error ?? "Failed to send");
            setStatus("sent");
            form.reset();
        } catch (err: any) {
            setStatus("error");
            setError(err.message ?? "Something went wrong");
        }
    };

    const handleClear = () => {
        formRef.current?.reset();
        setStatus("idle");
        setError(null);
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <FieldGroup className="pb-16">
                <FieldSet>
                    <FieldLegend variant="title">Contact Me</FieldLegend>
                    <FieldGroup>
                        <input type="text" name="company" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px" }} />
                        <Field>
                            <FieldLabel htmlFor="contact-name-input">Name</FieldLabel>
                            <Input
                                id="contact-name-input"
                                name="name"
                                placeholder="Sassy Skunk"
                                required
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="contact-email-input">Email</FieldLabel>
                            <Input
                                id="contact-email-input"
                                name="email"
                                type="email"
                                placeholder="example@gmail.com"
                                required
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="contact-message-input">Message</FieldLabel>
                            <Textarea
                                id="contact-message-input"
                                name="message"
                                rows={5}
                                placeholder="Add your message..."
                                className="resize-none min-h-32"
                            />
                        </Field>
                    </FieldGroup>
                </FieldSet>
                <Field orientation="horizontal">
                    <Button type="submit" disabled={status === "sending"}>
                        {status === "sending" ? "Sending..." : "Submit"}
                    </Button>
                    <Button
                        variant="outline"
                        type="button"
                        disabled={status === "sending"}
                        onClick={handleClear}
                    >
                        Clear
                    </Button>
                </Field>

                {status === "error" && <p className="text-sm">Error: {error}</p>}
                {status === "sent" && <p className="text-sm">Thanks! Your message has been sent.</p>}
            </FieldGroup>
        </form>
    );
}

export default ContactForm;