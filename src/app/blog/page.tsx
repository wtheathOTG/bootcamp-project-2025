import React from 'react';
import BlogPreview from "@/components/server/blogPreview";
import {blogs} from "@/blog";
import ContactForm from "@/components/server/contactForm";

function Blogs() {
    return (
        <div className="flex flex-col gap-y-8">
            {blogs.map((blog, idx) => (
                <BlogPreview key={idx} blog={blog} />
            ))}
        </div>
    );
}

export default Blogs;