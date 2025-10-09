import React from 'react';
import {Field, FieldGroup, FieldLabel, FieldLegend, FieldSet} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";

function ContactForm() {
    return (
        <FieldGroup>
            <FieldSet>
                <FieldLegend variant="title">Contact Me</FieldLegend>
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="contact-name-input">Name</FieldLabel>
                        <Input
                            id="contact-name-input"
                            placeholder="Sassy Skunk"
                            required
                        />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="contact-email-input">Email</FieldLabel>
                        <Input
                            id="contact-email-input"
                            type="email"
                            placeholder="example@gmail.com"
                            required
                        />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="contact-message-input">Message</FieldLabel>
                        <Textarea
                            id="contact-message-input"
                            rows={5}
                            placeholder="Add your message..."
                            className="resize-none min-h-32"
                        />
                    </Field>
                </FieldGroup>
            </FieldSet>
            <Field orientation="horizontal">
                <Button type="submit">Submit</Button>
                <Button variant="outline" type="button">
                    Clear
                </Button>
            </Field>
        </FieldGroup>
    );
}

export default ContactForm;