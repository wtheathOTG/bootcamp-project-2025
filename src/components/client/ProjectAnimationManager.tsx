"use client"

import React from 'react';
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Project} from "@/projectData";

function ProjectAnimationManager({projects}: {projects: Project[]}) {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const pageContent = document.getElementById("page-content")!;
        const scrollArea = document.getElementById("project-scroll-area")!;
        const container = document.getElementById("project-container")!;
        const title = document.getElementById("project-title")!;
        const tags = document.getElementById("project-tags")!;
        const date = document.getElementById("project-date")!;
        const description = document.getElementById("project-description")!;
        const image = document.getElementById("project-image")!;
        const scrollbar = document.getElementById("project-scrollbar")!;
        const thumb = document.getElementById("project-scrollbar-thumb")!;

        const projectScrollDistance = 400;

        scrollArea.style.height = `${container.offsetHeight + projects.length * projectScrollDistance}px`;

        const switchProject = (showIndex: number) => {
            if (showIndex >= projects.length) {
                console.log("Project show index greater than project[].length");
                return;
            }

            gsap.to(thumb, {
                y: `${showIndex * scrollbar.offsetHeight / 3}`,
                duration: 1,
                ease: "Power1.inOut,"
            });
        }

        const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
        projects.forEach((proj: Project, idx: number) => {
            if (idx !== 0) {
                ScrollTrigger.create({
                    trigger: pageContent,
                    start: `top+=${(idx) * projectScrollDistance} top+=${6 * rem}`,
                    end: `top+=${(idx + 1) * projectScrollDistance} top+=${6 * rem}`,
                    onEnter: () => {switchProject(idx)},
                    onLeaveBack: () => {switchProject(idx - 1)},
                });
            }
        });
    });

    return (
        <div className="fixed"></div>
    );
}

export default ProjectAnimationManager;