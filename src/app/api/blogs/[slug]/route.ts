import { NextRequest, NextResponse } from 'next/server'
import blogSchema from "@/database/blogSchema"
import connectDB from "@/database/db";

export async function GET(
    _req: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params
    await connectDB()

    try {
        const blog = await blogSchema.findOne({ slug }).orFail()
        return NextResponse.json(blog)
    } catch (err) {
        return NextResponse.json({ error: 'Blog not found.' }, { status: 404 })
    }
}
