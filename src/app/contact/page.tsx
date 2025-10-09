import React from 'react';
import ContactForm from "@/components/server/contactForm";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Contact",
};

function Page() {
    return (
        <ContactForm />
    );
}

export default Page;