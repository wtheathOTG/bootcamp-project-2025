import React from 'react';
import {Project} from "@/projectData";
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import ProjectGraphic from "@/components/server/ProjectGraphic";

type ProjectCardNewProps = {
    proj: Project
    className?: string
}

function ProjectCardNew({ proj, className }: ProjectCardNewProps) {
    return (
        <Card className={`absolute top-0 h-full min-h-0 bg-background py-4 gap-y-4 ${className}`}>
            <CardHeader>
                <CardTitle
                    className="w-full flex flex-col justify-start gap-y-1
                        md:gap-y-0 md:flex-row md:justify-between md:items-center"
                >
                    <p>{proj.title}</p>
                    <p className="flex-shrink-0 whitespace-nowrap text-muted-foreground text-base">
                        {proj.date}
                    </p>
                </CardTitle>
                {(proj.tags && proj.tags.length > 0) &&
                    <CardDescription className="flex justify-start gap-x-2">
                        {proj.tags.map((tag, idx) => (
                            <Badge key={idx}>{tag}</Badge>
                        ))}
                    </CardDescription>
                }
                {/*<CardAction*/}
                {/*    className="flex-shrink-0 whitespace-nowrap text-muted-foreground"*/}
                {/*>*/}
                {/*    {proj.date}*/}
                {/*</CardAction>*/}
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
                {proj.description.map((paragraph, idx) => (
                    <React.Fragment key={idx}>{paragraph}</React.Fragment>
                ))}
            </CardContent>
            <CardFooter className="flex-grow">
                <div
                    className="relative h-full aspect-[4/3] w-auto max-w-full mx-auto overflow-hidden"
                >
                    <ProjectGraphic src={proj.src} isPhoto={false} />
                </div>
            </CardFooter>
        </Card>
    );
}

export default ProjectCardNew;