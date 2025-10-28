
import React from 'react';
import {projects} from "@/projectData";
import {ProjectCard} from "@/components/server/projectCard";
import ProjectScrollBar from "@/components/client/ProjectScrollBar";
import ProjectAnimationManager from "@/components/client/ProjectAnimationManager";
import ProjectCardNew from "@/components/server/projectcardnew";

function Page() {


    return (
        <div id="project-scroll-area" className="h-full">
            <div id="project-container" className="sticky top-24 h-full max-h-[calc(100vh-8rem)] grid grid-cols-[0.25rem_1fr] gap-x-8">
                <ProjectScrollBar projects={projects} />
                <div className="w-full">
                    {projects.map((project, index) => (
                        <ProjectCardNew key={index} proj={project} className="project-card will-change-[opacity,transform]" />
                    ))}
                </div>
            </div>
            <ProjectAnimationManager projects={projects}/>
        </div>
    );
}

export default Page;