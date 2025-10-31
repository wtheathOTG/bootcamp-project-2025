import mongoose, { Schema, Model } from "mongoose";

export type CommentDoc = {
    user: string;
    comment: string;
    time: Date;
};

const CommentSchema = new Schema<CommentDoc>({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, required: true, default: Date.now },
});

export type BlogDoc = {
    title: string;
    author: string;
    date: Date;
    description: string;
    image: string;
    imageAlt: string;
    tags?: string[];
    slug: string;
    comments: CommentDoc[];
}

const BlogSchema = new Schema<BlogDoc>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
    description: { type: String, required: true },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true },
    tags: { type: [String], required: false },
    slug: { type: String, required: true, unique: true },
    comments: { type: [CommentSchema], required: true, default: [] },
});

const Blog: Model<BlogDoc> =
    mongoose.models.blogs || mongoose.model<BlogDoc>("blogs", BlogSchema);

export default Blog;