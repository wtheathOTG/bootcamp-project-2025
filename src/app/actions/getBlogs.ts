'use server';

import connectDB from "@/database/db";
import blogSchema, {BlogDocument} from "@/database/blogSchema";
import Blog from "@/database/blogSchema";

export async function getBlogBySlug(slug: string) {
    await connectDB();

    try {
        const blog = await Blog.findOne({ slug }).orFail();
        return { ok: true, data: blog };
    } catch (err) {
        return { ok: false, error: 'Blog not found.' };
    }
}

export async function getAllBlogs(): Promise<BlogDocument[]> {
    await connectDB();

    try {
        return await Blog.find().sort({date: -1}).orFail();
    } catch (err) {
        return [];
    }
}