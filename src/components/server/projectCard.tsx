import React from 'react';
import {Project} from "@/projectData";
import {Badge} from "@/components/ui/badge";
import ProjectGraphic from "@/components/server/ProjectGraphic";

export function ProjectCard({proj}: {proj: Project}) {
    return (
        <div className="grid h-full min-h-0 grid-rows-[auto_auto_1fr] gap-y-8">
            <div className="flex justify-between items-start">
                <div className="space-y-2">
                    <h2 id="project-title" className="text-2xl text-foreground">{proj.title}</h2>
                    <div id="project-tags" className="space-x-2">
                        {proj.tags.map((tag, idx) => (
                            <Badge key={idx}>{tag}</Badge>
                        ))}
                    </div>
                </div>
                <p id="project-date" className="text-muted-foreground">{proj.date}</p>
            </div>
            <div id="project-description" className="space-y-2 text-sm">
                {proj.description.map((paragraph, idx) => (
                    <React.Fragment key={idx}>{paragraph}</React.Fragment>
                ))}
            </div>
            <div className="min-h-0 justify-self-center">
                <div
                    id="project-image"
                    className="relative h-full aspect-[4/3] w-auto max-w-full rounded-md bg-muted mx-auto overflow-hidden"
                >
                    <ProjectGraphic src="/videos/RoboticsCroppedClip.webm" isPhoto={false} />
                </div>
            </div>
        </div>
    );
}