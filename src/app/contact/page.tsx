import React from 'react';
import ContactForm from "@/components/client/contactForm";
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