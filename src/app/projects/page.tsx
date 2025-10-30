import React, {Suspense} from 'react';
import ProjectDisplay from "@/components/server/projectDisplay";
import ProjectDisplaySkeleton from "@/components/server/skeletons/projectDisplaySkeleton";

async function Page() {
    return (
        <Suspense fallback={<ProjectDisplaySkeleton />}>
            <ProjectDisplay />
        </Suspense>
    );
}

export default Page;