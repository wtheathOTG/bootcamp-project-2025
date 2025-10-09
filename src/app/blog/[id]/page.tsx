import React from 'react';
import {blogs} from "@/blog";

async function Page({ params }: { params: Promise<{id: string}> }) {
    const {id} = await params;
    const blog = blogs.find(blog => blog.slug === id);

    return (
        <div>
            <h2 className="pb-8 text-3xl capitalize">{blog?.title}</h2>
            <p className="text-lg">{blog?.description}</p>
        </div>
    );
}

export default Page;