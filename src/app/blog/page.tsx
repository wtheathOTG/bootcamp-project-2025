import React from 'react';
import BlogPreview from "@/components/server/blogPreview";

function Blogs() {
    return (
        <div className="flex flex-col gap-y-8">
            <BlogPreview />
            <BlogPreview />
            <BlogPreview />
            <BlogPreview />
            <BlogPreview />
            <BlogPreview />
            <BlogPreview />
            <BlogPreview />
        </div>
    );
}

export default Blogs;