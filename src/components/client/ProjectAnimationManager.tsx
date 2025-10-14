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

            SplitText.create(title, {
                type: "lines",
                autoSplit: true,
                mask: "lines",
                onSplit: (split) => {
                    const { lines } = split;
                    gsap.to(lines, {
                        duration: 0.6,
                        yPercent: -100,
                        opacity: 0,
                        ease: "expo.in",
                        onComplete: () => {
                            gsap.fromTo(
                                lines,
                                { yPercent: 100, opacity: 0 },
                                { duration: 0.6, yPercent: 0, opacity: 1, ease: "expo.out" }
                            );
                        }
                    });
                }
            });

            SplitText.create(date, {
                type: "lines",
                autoSplit: true,
                mask: "lines",
                onSplit: (split) => {
                    const { lines } = split;
                    gsap.to(lines, {
                        duration: 0.6,
                        xPercent: 100,
                        opacity: 0,
                        ease: "expo.in",
                        onComplete: () => {
                            gsap.fromTo(
                                lines,
                                { xPercent: -100, opacity: 0 },
                                { duration: 0.6, xPercent: 0, opacity: 1, ease: "expo.out" }
                            );
                        }
                    });
                }
            });

            SplitText.create(description, {
                type: "lines",
                autoSplit: true,
                mask: "lines",
                onSplit: (split) => {
                    const { lines } = split;
                    gsap.to(lines, {
                        duration: 0.6,
                        xPercent: -100,
                        opacity: 0,
                        stagger: 0.0165,
                        ease: "expo.in",
                        onComplete: () => {
                            gsap.fromTo(
                                lines,
                                { xPercent: 100, opacity: 0 },
                                { duration: 0.6, xPercent: 0, opacity: 1, stagger: 0.0165, ease: "expo.out" }
                            );
                        }
                    });
                }
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