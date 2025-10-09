import React from 'react';
import Link from "next/link";
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Blog} from "@/blog";

function BlogPreview({blog}: {blog: Blog}) {
    return (
        <Link href={`/blog/${blog.slug}`}>
            <Card className="group bg-transparent hover:bg-muted transition-all duration-200 ease-in-out">
                <CardHeader>
                    <CardTitle className="text-xl">{blog.title}</CardTitle>
                    <CardDescription>{blog.author}</CardDescription>
                    <CardAction
                        className="text-muted-foreground group-hover:text-foreground transition-all duration-200 ease-in-out"
                    >
                        {blog.date}
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <p>{blog.description}</p>
                </CardContent>
                <CardFooter>
                    {blog.tags?.map((tag, idx) => (
                        <Badge key={idx}>{tag}</Badge>
                    ))}
                </CardFooter>
            </Card>
        </Link>
    );
}

export default BlogPreview;