import React, {Suspense} from 'react';
import BlogSkeleton from "@/components/server/skeletons/BlogSkeleton";
import BlogPost from "@/components/server/blogPost";

// export async function generateMetadata({ params }: { params: Promise<{id: string}> }) {
//     const {id} = await params;
//     const blog = blogs.find(blog => blog.slug === id);
//
//     return {
//         title: blog ? blog.title : "Blog Not Found",
//     };
// }

// export async function generateStaticParams() {
//     return blogs.map(blog => ({id: blog.slug}));
// }

async function Page({ params }: { params: Promise<{id: string}> }) {
    const {id} = await params;

    return (
        <div className="pb-16">
            <Suspense fallback={<BlogSkeleton />}>
                <BlogPost slug={id}/>
            </Suspense>
        </div>
    );
}

export default Page;