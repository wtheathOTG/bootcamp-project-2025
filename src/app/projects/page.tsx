import React from 'react';
import {projects} from "@/projectData";
import ProjectCard from "@/components/server/projectCard";

function Page() {
    return (
        <div>
            <div className="flex flex-col gap-y-8">
                {projects.map((proj, idx) => (
                    <ProjectCard key={idx} proj={proj}/>
                ))}
            </div>
        </div>
    );
}

export default Page;