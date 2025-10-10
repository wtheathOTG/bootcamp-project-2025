import React from 'react';
import {blogs} from "@/blog";
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
        <div className="text-foreground">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="pb-2 text-3xl capitalize">{blog?.title}</h2>
                    <p className="text-muted-foreground">{blog?.author}</p>
                </div>
                <p className="text-muted-foreground">{blog?.date}</p>
            </div>
            {(blog && blog.tags && blog.tags.length > 0) &&
                <div className="flex justify-start gap-x-2 pt-2">
                    {blog?.tags?.map((tag, idx) => (
                        <Badge key={idx}>{tag}</Badge>
                    ))}
                </div>
            }
            <div className="py-8">
                <AspectRatio ratio={16 / 9} className="rounded-md">
                    <Image
                        src={`${blog?.image}`}
                        alt={`${blog?.imageAlt}`}
                        fill
                        className="h-full w-full rounded-md object-cover bg-card"
                    />
                </AspectRatio>
            </div>
            <p className="text-lg">{blog?.description}</p>
        </div>
    );
}

export default Page;