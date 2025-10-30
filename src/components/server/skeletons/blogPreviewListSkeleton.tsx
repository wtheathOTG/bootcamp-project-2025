import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";

function BlogPreviewListSkeleton() {
    return (
        <div className="flex flex-col gap-y-8">
            <div className="w-full flex flex-col gap-y-6 p-6">
                <div className="space-y-2">
                    <div className="flex justify-between items-start">
                        <Skeleton className="w-48 h-8" />
                        <Skeleton className="w-32 h-4" />
                    </div>
                    <Skeleton className="w-12 h-4" />
                </div>
                <div className="space-y-1">
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-2/3 h-4" />
                </div>
            </div>

            <div className="w-full flex flex-col gap-y-6 p-6">
                <div className="space-y-2">
                    <div className="flex justify-between items-start">
                        <Skeleton className="w-48 h-8" />
                        <Skeleton className="w-32 h-4" />
                    </div>
                    <Skeleton className="w-12 h-4" />
                </div>
                <div className="space-y-1">
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-2/3 h-4" />
                </div>
            </div>

            <div className="w-full flex flex-col gap-y-6 p-6">
                <div className="space-y-2">
                    <div className="flex justify-between items-start">
                        <Skeleton className="w-48 h-8" />
                        <Skeleton className="w-32 h-4" />
                    </div>
                    <Skeleton className="w-12 h-4" />
                </div>
                <div className="space-y-1">
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-2/3 h-4" />
                </div>
            </div>
        </div>
    );
}

export default BlogPreviewListSkeleton;