import React, {Suspense} from 'react';
import BlogSkeleton from "@/components/server/skeletons/BlogSkeleton";
import BlogPost from "@/components/server/blogPost";
import {getAllBlogs} from "@/app/actions/blogActions";

// export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
//     const { slug } = await params;
//     const blog = blogs.find(blog => blog.slug === id);
//
//     return {
//         title: blog ? blog.title : "Blog Not Found",
//     };
// }

// With the addition of comments, it doesn't make sense the statically generate pages
// export async function generateStaticParams() {
//     const blogs = await getAllBlogs();
//     return blogs.map(blog => ({slug: blog.slug}));
// }

async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    return (
        <div className="pb-16">
            <Suspense fallback={<BlogSkeleton />}>
                <BlogPost slug={slug}/>
            </Suspense>
        </div>
    );
}

export default Page;