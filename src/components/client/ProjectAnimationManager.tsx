"use client"

import React from 'react';
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import {Project} from "@/projectData";

function ProjectAnimationManager({projects}: {projects: Project[]}) {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);

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

        const projectScrollDistance = 600;

        scrollArea.style.height = `${container.offsetHeight + (projects.length) * projectScrollDistance}px`;

        const switchProject = (showIndex: number) => {
            if (showIndex >= projects.length) {
                console.log("Project show index greater than project[].length");
                return;
            }

            gsap.to(title, {
                duration: 0.6,
                yPercent: -100,
                opacity: 0,
                ease: "expo.in",
                onComplete: () => {
                    title.textContent = projects[showIndex].title;
                    gsap.fromTo(
                        title,
                        { yPercent: 100, opacity: 0 },
                        { duration: 0.6, yPercent: 0, opacity: 1, ease: "expo.out" }
                    );
                }
            });

            gsap.to(date, {
                duration: 0.6,
                xPercent: 100,
                opacity: 0,
                ease: "expo.in",
                onComplete: () => {
                    date.textContent = projects[showIndex].date;
                    gsap.fromTo(
                        date,
                        { xPercent: -100, opacity: 0 },
                        { duration: 0.6, xPercent: 0, opacity: 1, ease: "expo.out" }
                    );
                }
            });
        }

        const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
        projects.forEach((proj: Project, idx: number) => {
            if (idx !== 0 ) {
                ScrollTrigger.create({
                    trigger: pageContent,
                    start: `top+=${(idx - 0.6) * projectScrollDistance} top+=${6 * rem}`,
                    end: `top+=${(idx + 0.4) * projectScrollDistance} top+=${6 * rem}`,
                    onEnter: () => {switchProject(idx)},
                    onLeaveBack: () => {switchProject(idx - 1)},
                    //markers: true,
                });
            }
        });

        gsap.to(thumb, {
            y: `${scrollbar.offsetHeight * 2 / 3}`,
            scrollTrigger: {
                trigger: pageContent,
                start: `top top+=${6 * rem}`,
                end: `bottom bottom`,
                scrub: true,
                //markers: true,
            }
        });
    });

    return (
        <div className="fixed"></div>
    );
}

export default ProjectAnimationManager;