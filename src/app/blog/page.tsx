import React from 'react';
import BlogPreview from "@/components/server/blogPreview";
import type {Metadata} from "next";
import connectDB from "@/database/db";
import Blog, {BlogDocument} from "@/database/blogSchema";

export const metadata: Metadata = {
    title: "Blog",
};

async function getBlogs(): Promise<BlogDocument[]> {
    await connectDB();

    try {
        return await Blog.find().sort({date: -1}).orFail();
    } catch (err) {
        return [];
    }
}

async function Blogs() {
    const blogs = await getBlogs();

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