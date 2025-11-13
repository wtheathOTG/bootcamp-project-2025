import {NextRequest, NextResponse} from "next/server";
import connectDB from "@/database/db";
import Blog, {CommentDoc} from "@/database/blogSchema";
/**
 * @deprecated Comments are not available on portfolio sections because it
 *             doesn't make sense in my website context.
 */
export default async function POST(req: NextRequest) {
    //Todo: validate schema before attempting to destructure
    const { username, message, company, slug } = await req.json();

    if (company) return NextResponse.json({ok: true}); //honeypot
    if (!username || !message || !slug) {
        return NextResponse.json({error: "Missing required fields."}, {status: 500});
    }

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
        return NextResponse.json({error: "Blog post not found."}, {status: 404});
    }

    const [{ user, comment, time }] = updated.comments as CommentDoc[];
    return NextResponse.json({ status: 200, user: user, comment: comment, time: time });
}