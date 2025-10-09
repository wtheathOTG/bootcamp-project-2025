import React from 'react';
import BlogPreview from "@/components/server/blogPreview";
import {blogs} from "@/blog";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Blog",
};

function Blogs() {
    return (
        <div>
            <h2 className="text-2xl text-foreground pb-4">Blog Posts</h2>
            <div className="flex flex-col gap-y-8">
                {blogs.map((blog, idx) => (
                    <BlogPreview key={idx} blog={blog} />
                ))}
            </div>
        </div>
    );
}

export default Blogs;