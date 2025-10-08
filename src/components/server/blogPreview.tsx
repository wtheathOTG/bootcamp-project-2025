import React from 'react';
import Link from "next/link";

function BlogPreview() {
    return (
        <Link href="/blog/blog1">
            <div
                className="px-6 py-4 border-t-2 border-border rounded-lg
                    hover:bg-background hover:border-muted transition-all duration-200 ease-in-out"
            >
                <h2 className="pb-4 text-3xl font-bold">Blog Title</h2>
                <p className="text-lg">
                    This is a short description of the article. I am going to keep writing
                    so that this paragraph fills up. Here is one last sentence to fill up
                    a little more space...
                </p>
            </div>
        </Link>
    );
}

export default BlogPreview;