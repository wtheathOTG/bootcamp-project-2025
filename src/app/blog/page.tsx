import React from 'react';
import BlogPreview from "@/components/server/blogPreview";
import {blogs} from "@/blogData";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Blog",
};

function Blogs() {
    return (
        <div className="pb-16">
            <h2 className="text-2xl text-foreground pb-4 font-medium">Blog Posts</h2>
            <div className="flex flex-col gap-y-8">
                {blogs.map((blog, idx) => (
                    <BlogPreview key={idx} blog={blog} />
                ))}
            </div>
        </div>
    );
}

export default Blogs;