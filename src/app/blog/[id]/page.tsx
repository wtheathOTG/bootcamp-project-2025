import React from 'react';
import {blogs} from "@/blogData";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";

export async function generateMetadata({ params }: { params: Promise<{id: string}> }) {
    const {id} = await params;
    const blog = blogs.find(blog => blog.slug === id);

    return {
        title: blog ? blog.title : "Blog Not Found",
    };
}

async function Page({ params }: { params: Promise<{id: string}> }) {
    const {id} = await params;
    const blog = blogs.find(blog => blog.slug === id);

    return (
        <div className="pb-16 text-foreground space-y-8">
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
                <p className="text-muted-foreground">{blog?.date}</p>
            </div>
            <div>
                <AspectRatio ratio={16 / 9} className="rounded-md border border-border shadow-md overflow-hidden">
                    <Image
                        src={`${blog?.image}`}
                        alt={`${blog?.imageAlt}`}
                        fill
                        className="h-full w-full object-cover bg-card"
                    />
                </AspectRatio>
            </div>
            <p>{blog?.description}</p>
        </div>
    );
}

export default Page;