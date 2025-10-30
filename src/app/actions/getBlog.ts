'use server';

import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";

export async function getBlogBySlug(slug: string) {
    await connectDB();

    try {
        const blog = await blogSchema.findOne({ slug }).orFail();
        return { ok: true, data: blog };
    } catch (err) {
        return { ok: false, error: 'Blog not found.' };
    }
}