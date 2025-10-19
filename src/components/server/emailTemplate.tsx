import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export function EmailTemplate(props: EmailTemplateProps) {
    return (
        <div>
            <p>Message:</p>
            <p>{props.message}</p>
            <br/>
            <p><span>{props.name}'s email: </span>{props.email}</p>
        </div>
    );
}