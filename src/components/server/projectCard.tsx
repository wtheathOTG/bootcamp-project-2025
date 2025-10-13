import React from 'react';
import {Project} from "@/projectData";
import {Badge} from "@/components/ui/badge";
import {AspectRatio} from "@/components/ui/aspect-ratio";

function ProjectCard({proj}: {proj: Project}) {
    return (
        <div>
            <div className="space-y-8">
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
                <AspectRatio id="project-image" ratio={16/9} className="w-full bg-muted rounded-md"></AspectRatio>
            </div>
        </div>
    );
}

export default ProjectCard;