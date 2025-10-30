"use client";

import React from 'react';

function ProjectScrollBar({projectLength}: {projectLength: number}) {
    return (
        <div id="project-scrollbar" className="bg-background border border-border">
            <div id="project-scrollbar-thumb" className="h-1/3 bg-muted-foreground"></div>
        </div>
    );
}

export default ProjectScrollBar;