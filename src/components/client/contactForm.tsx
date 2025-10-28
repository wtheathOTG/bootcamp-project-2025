"use client";

import React, {useActionState, useRef} from 'react';
import {Field, FieldGroup, FieldLabel, FieldLegend, FieldSet} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {sendContact} from "@/app/actions/sendcontact";

const initialState = { status: 'idle' as const, error: undefined as string | undefined };

function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [state, formAction, isPending] = useActionState(sendContact, initialState);

    const handleClear = () => formRef.current?.reset();

    return (
        <form ref={formRef} action={formAction}>
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
                    <Button type="submit" disabled={isPending}>
                        {isPending ? "Sending..." : "Submit"}
                    </Button>
                    <Button
                        variant="outline"
                        type="button"
                        disabled={isPending}
                        onClick={handleClear}
                    >
                        Clear
                    </Button>
                </Field>

                {state.status === "error" && <p className="text-sm">Error: {state.error}</p>}
                {state.status === "sent" && <p className="text-sm">Thanks! Your message has been sent.</p>}
            </FieldGroup>
        </form>
    );
}

export default ContactForm;