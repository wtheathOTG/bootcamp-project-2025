import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export function EmailTemplate(props: EmailTemplateProps) {
    return (
        <div>
            <p><strong>Message:</strong></p>
            <p>{props.message}</p>
            <p>
                <strong>
                    <u>{props.name}</u>
                    {"'s email:"}
                </strong>
            </p>
            <p>{props.email}</p>
        </div>
    );
}