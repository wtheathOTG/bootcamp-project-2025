import React from 'react';
import {Badge} from "@/components/ui/badge";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {notFound} from "next/navigation";
import {getBlogBySlug} from "@/app/actions/blogActions";
import BlogCommentSection, {SerializableComment} from "@/components/client/BlogCommentSection";
import {parseTimeFrom} from "@/lib/utils";
import {CommentDoc} from "@/database/blogSchema";

async function BlogPost({slug}: {slug: string}) {
    const { ok, data: blog } = await getBlogBySlug(slug);
    if (!ok) notFound();

    blog!.comments.sort((a, b) => b.time.getTime() - a.time.getTime());

    const serializableComments: SerializableComment[] = blog!.comments.map((c: CommentDoc) => ({
        user: String(c.user),
        comment: String(c.comment),
        time: parseTimeFrom(c.time),
    }));

    return (
        <div className="text-foreground space-y-8">
            <div className="flex justify-between items-start">
                <div className="space-y-2">
                    <h2 className="text-3xl capitalize font-medium">{blog?.title}</h2>
                    <p className="text-muted-foreground">{blog?.author}</p>
                    {(blog && blog.tags && blog.tags.length > 0) &&
                        <div className="flex justify-start gap-x-2">
                            {blog?.tags?.map((tag, idx) => (
                                <Badge key={idx}>{tag}</Badge>
                            ))}
                        </div>
                    }
                </div>
                <p className="text-muted-foreground">
                    {blog?.date.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })}
                </p>
            </div>
            <div>
                <AspectRatio ratio={16 / 9} className="rounded-md border border-border shadow-md overflow-hidden">
                    <Image
                        src={blog?.image ?? ''}
                        alt={blog?.imageAlt ?? ''}
                        fill
                        className="h-full w-full object-cover bg-card"
                    />
                </AspectRatio>
            </div>
            <p>{blog?.description}</p>
            <BlogCommentSection slug={slug} originalComments={serializableComments}/>
        </div>
    );
}

export default BlogPost;