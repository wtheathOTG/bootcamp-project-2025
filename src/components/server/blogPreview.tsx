import React from 'react';
import Link from "next/link";
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

function BlogPreview() {
    return (
        <Link href="/blog/blog1">
            <Card className="group bg-transparent hover:bg-muted transition-all duration-200 ease-in-out">
                <CardHeader>
                    <CardTitle className="text-xl">Blog Title</CardTitle>
                    <CardDescription>Author</CardDescription>
                    <CardAction
                        className="text-muted-foreground group-hover:text-foreground transition-all duration-200 ease-in-out"
                    >
                        1 day ago
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <p>
                        This is a short description of the article. I am going to keep writing
                        so that this paragraph fills up. Here is one last sentence to fill up
                        a little more space...
                    </p>
                </CardContent>
                <CardFooter>
                    <Badge>Important</Badge>
                </CardFooter>
            </Card>
            {/*<div
                className="px-6 py-4 border border-border rounded-md
                    hover:bg-muted transition-all duration-200 ease-in-out"
            >
                <div className="w-full flex justify-between">
                    <h2 className="pb-4 text-2xl font-bold">Blog Title</h2>
                    <p className="text-muted-foreground">1 day ago</p>
                </div>
                <p className="">
                    This is a short description of the article. I am going to keep writing
                    so that this paragraph fills up. Here is one last sentence to fill up
                    a little more space...
                </p>
            </div>*/}
        </Link>
    );
}

export default BlogPreview;