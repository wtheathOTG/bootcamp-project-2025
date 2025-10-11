import React from 'react';
import {Project} from "@/projectData";
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

function ProjectCard({proj}: {proj: Project}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{proj.title}</CardTitle>
                <CardAction className="text-muted-foreground">{proj.date}</CardAction>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
                {proj.description.map((paragraph, idx) => (
                    <React.Fragment key={idx}>{paragraph}</React.Fragment>
                ))}
            </CardContent>
            <CardFooter className="space-x-2">
                {proj.tags.map((tag, idx) => (
                    <Badge key={idx}>{tag}</Badge>
                ))}
            </CardFooter>
        </Card>
    );
}

export default ProjectCard;