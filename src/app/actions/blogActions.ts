'use server';

import connectDB from "@/database/db";
import {BlogDoc, CommentDoc} from "@/database/blogSchema";
import Blog from "@/database/blogSchema";
import {ActionState} from "@/app/actions/sendcontact";
import { z } from 'zod';

const CommentFormSchema = z.object({
    username: z.string().min(1).max(35),
    message: z.string().min(1).max(1000),
    company: z.string().optional(), // honeypot
    slug: z.string()
});

export async function getBlogBySlug(slug: string) {
    await connectDB();

    try {
        const blog = await Blog.findOne({ slug }).orFail();
        return { ok: true, data: blog };
    } catch (err) {
        return { ok: false, error: 'Blog not found.' };
    }
}

export async function getAllBlogs(): Promise<BlogDoc[]> {
    await connectDB();

    try {
        return await Blog.find().sort({date: -1}).orFail();
    } catch (err) {
        return [];
    }
}

export type CommentActionState = ActionState & { user?: string, comment?: string, time?: Date };

export async function postComment(
    prev: CommentActionState,
    formData: FormData
): Promise<CommentActionState> {
    const raw = Object.fromEntries(formData.entries());
    const parsed = CommentFormSchema.safeParse(raw);
    if (!parsed.success) return { status: 'error', error: 'Invalid form data.'};

    const { username, message, company, slug } = parsed.data;
    if (company) return { status: 'sent' }; // honeypot

    await connectDB();

    const update = {
        $push: {
            comments: {
                user: username.trim(),
                comment: message.trim(),
                time: new Date(),
            },
        },
    };

    const updated = await Blog.findOneAndUpdate(
        { slug },
        update,
        {
            new: true,
            projection: { comments: { $slice: -1 } },
        }
    ).lean();

    if (!updated) {
        return { status: "error", error: "Blog post not found." };
    }

    const [{ user, comment, time }] = updated.comments as CommentDoc[];
    return { status: "sent", user, comment, time};
}