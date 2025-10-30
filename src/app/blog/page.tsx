import React, {Suspense} from 'react';
import type {Metadata} from "next";
import BlogPreviewListSkeleton from "@/components/server/skeletons/blogPreviewListSkeleton";
import BlogPreviewList from "@/components/server/blogPreviewList";

export const metadata: Metadata = {
    title: "Blog",
};

async function Blogs() {
    return (
        <div className="pb-16">
            <h2 className="text-2xl text-foreground pb-4 font-medium">Blog Posts</h2>
            <Suspense fallback={<BlogPreviewListSkeleton />}>
                <BlogPreviewList />
            </Suspense>
        </div>
    );
}

export default Blogs;