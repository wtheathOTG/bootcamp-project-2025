import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";

function BlogSkeleton() {
    return (
        <div>
            <div className="text-foreground space-y-8">
                <div className="flex justify-between items-start">
                    <div className="space-y-2">
                        <Skeleton className="w-64 h-8" />
                        <Skeleton className="w-32 h-4" />
                    </div>
                    <Skeleton className="w-32 h-4" />
                </div>
                <div>
                    <Skeleton className="w-full aspect-[16/9]" />
                </div>
                <div className="space-y-1">
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-2/3 h-4" />
                    <div className="w-full h-1"></div>
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-3/4 h-4" />
                </div>
            </div>
        </div>
    );
}

export default BlogSkeleton;