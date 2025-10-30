import React from 'react';
import ProjectScrollBar from "@/components/client/ProjectScrollBar";
import ProjectCardNew from "@/components/server/projectcardnew";
import ProjectAnimationManager from "@/components/client/ProjectAnimationManager";
import {getAllProjects} from "@/app/actions/getProjects";

async function ProjectDisplay() {
    const projects = await getAllProjects();

    return (
        <div id="project-scroll-area" className="h-full">
            <div id="project-container" className="sticky top-16 md:top-24 h-full max-h-[calc(100vh-8rem)] grid grid-cols-[0.25rem_1fr] gap-x-8">
                <ProjectScrollBar projectLength={projects.length} />
                <div className="w-full relative top-0 left-0">
                    {projects.map((project, idx) => (
                        <ProjectCardNew key={idx} proj={project} className="project-card will-change-[opacity,transform]" />
                    ))}
                </div>
            </div>
            <ProjectAnimationManager projectLength={projects.length}/>
        </div>
    );
}

export default ProjectDisplay;