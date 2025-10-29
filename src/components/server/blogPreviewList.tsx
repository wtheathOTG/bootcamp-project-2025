import React from 'react';
import BlogPreview from "@/components/server/blogPreview";
import Blog, {BlogDocument} from "@/database/blogSchema";
import connectDB from "@/database/db";

async function getBlogs(): Promise<BlogDocument[]> {
    await connectDB();

    try {
        return await Blog.find().sort({date: -1}).orFail();
    } catch (err) {
        return [];
    }
}

async function BlogPreviewList() {
    const blogs = await getBlogs();

    return (
        <div className="flex flex-col gap-y-8">
            {blogs ?
                blogs.map((blog, idx) => (
                    <BlogPreview key={blog.slug} blog={blog} />
                )) :
                <p className="text-xl">No Blogs Found :(</p>
            }
        </div>
    );
}

export default BlogPreviewList;