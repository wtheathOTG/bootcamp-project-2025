import React, {Suspense} from 'react';
import {getAllProjects} from "@/app/actions/getProjects";
import ProjectDisplay from "@/components/server/projectDisplay";
import ProjectDisplaySkeleton from "@/components/server/skeletons/projectDisplaySkeleton";

async function Page() {
    const projects = await getAllProjects();

    return (
        <Suspense fallback={<ProjectDisplaySkeleton />}>
            <ProjectDisplay />
        </Suspense>
    );
}

export default Page;