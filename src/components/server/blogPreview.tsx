import React from 'react';
import Link from "next/link";
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {BlogDocument} from "@/database/blogSchema";

function BlogPreview({blog}: {blog: BlogDocument}) {
    return (
        <Link href={`/blog/${blog.slug}`}>
            <Card className="group bg-transparent hover:bg-muted transition-all duration-200 ease-in-out">
                <CardHeader>
                    <CardTitle>{blog.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{blog.author}</CardDescription>
                    <CardAction
                        className="text-muted-foreground group-hover:text-foreground transition-all duration-200 ease-in-out"
                    >
                        {blog.date.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}
                    </CardAction>
                </CardHeader>
                <CardContent className="text-sm">
                    <p>{blog.description}</p>
                </CardContent>
                {(blog.tags && blog.tags.length > 0) &&
                    <CardFooter className="flex justify-start gap-x-2">
                        {blog.tags.map((tag, idx) => (
                            <Badge key={idx}>{tag}</Badge>
                        ))}
                    </CardFooter>
                }
            </Card>
        </Link>
    );
}

export default BlogPreview;