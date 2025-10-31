

import React from 'react';
import BlogPreview from "@/components/server/blogPreview";
import {getAllBlogs} from "@/app/actions/getBlogs";
import {unstable_noStore} from "next/cache";

async function BlogPreviewList() {
    unstable_noStore()
    const blogs = await getAllBlogs();

    return (
        <div className="flex flex-col gap-y-8">
            {blogs ?
                blogs.map((blog) => (
                    <BlogPreview key={blog.slug} blog={blog} />
                )) :
                <p className="text-xl">No Blogs Found :(</p>
            }
        </div>
    );
}

export default BlogPreviewList;