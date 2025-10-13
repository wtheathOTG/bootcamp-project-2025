
import React from 'react';
import {projects} from "@/projectData";
import ProjectCard from "@/components/server/projectCard";
import ProjectScrollBar from "@/components/client/ProjectScrollBar";
import ProjectAnimation from "@/components/client/ProjectAnimation";

function Page() {


    return (
        <div id="project-scroll-area"className="h-[200vh]">
            <div id="project-container" className="sticky top-24 grid grid-cols-[0.25rem_1fr] gap-x-8">
                <ProjectScrollBar projects={projects} />
                <div className="w-full">
                    <ProjectCard proj={projects[0]} />
                </div>
            </div>
            <ProjectAnimation />
        </div>
    );
}

export default Page;