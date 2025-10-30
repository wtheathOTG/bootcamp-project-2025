import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";

function ProjectDisplaySkeleton() {
    return (
        <div className="sticky top-16 md:top-24 h-full max-h-[calc(100vh-8rem)] grid grid-cols-[0.25rem_1fr] gap-x-8">
            <Skeleton className="w-full h-full"/>
            <div className="w-full relative top-0 left-0 flex flex-col px-6 py-4 gap-y-4">
                <div className="flex justify-between items-start">
                    <div className="space-y-4">
                        <Skeleton className="w-64 h-8" />
                        <div className="flex justify-start gap-x-2">
                            <Skeleton className="w-16 h-6 rounded-full" />
                            <Skeleton className="w-16 h-6 rounded-full" />
                            <Skeleton className="w-16 h-6 rounded-full" />
                        </div>
                    </div>
                    <Skeleton className="w-32 h-4" />
                </div>
                <div className="space-y-1">
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-2/3 h-4" />
                    <div className="w-full h-1"></div>
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-3/4 h-4" />
                    <div className="w-full h-1"></div>
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-2/3 h-4" />
                </div>
                <div className="flex-grow">
                    <Skeleton className="h-full w-full" />
                </div>
            </div>
        </div>
    );
}

export default ProjectDisplaySkeleton;