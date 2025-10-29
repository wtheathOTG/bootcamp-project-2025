import mongoose, { Schema, Document, Model } from "mongoose";

export interface Blog {
    title: string;
    author: string;
    date: Date;
    description: string;
    image: string;
    imageAlt: string;
    tags?: string[];
    slug: string;
}

// Extend Mongoose's Document type
export interface BlogDocument extends Blog, Document {}

const blogSchema = new Schema<BlogDocument>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
    description: { type: String, required: true },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true },
    tags: { type: [String], required: false },
    slug: { type: String, required: true, unique: true },
});

// 👇 Properly typed model
const Blog: Model<BlogDocument> =
    mongoose.models.blogs || mongoose.model<BlogDocument>("blogs", blogSchema);

export default Blog;