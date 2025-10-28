"use client";

import React, {useState} from 'react';
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
        const scrollbar = document.getElementById("project-scrollbar")!;
        const thumb = document.getElementById("project-scrollbar-thumb")!;

        const cards = document.querySelectorAll(".project-card");

        const projectScrollDistance = 600;
        scrollArea.style.height = `${container.offsetHeight + (projects.length) * projectScrollDistance}px`;


        cards.forEach((card, i) => {
            if (i != 0) {
                gsap.set(card, {pointerEvents: "none"})
                gsap.set(card, {opacity: 0, y: 20})
            }
        })

        const switchProject = (showIndex: number, direction: 1 | -1) => {
            if (showIndex >= projects.length) {
                console.log("Project show index greater than project[].length");
                return;
            }

            cards.forEach((card, i) => {
                if (i != showIndex) {
                    gsap.set(card, {pointerEvents: "none"})
                    gsap.to(card, {
                        opacity: 0,
                        y: `${-70 * direction}`,
                        duration: 0.65,
                        ease: "power2.in"
                    });
                }
            });
            gsap.set(cards[showIndex], {pointerEvents: "auto"})
            gsap.fromTo(cards[showIndex], {
                    opacity: 0,
                    y: `${70 * direction}`,
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.65,
                    delay: 0.25,
                    ease: "power2.inOut"
            });
        }

        const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
        projects.forEach((proj: Project, idx: number) => {
            if (idx !== 0 ) {
                ScrollTrigger.create({
                    trigger: pageContent,
                    start: `top+=${(idx - 0.6) * projectScrollDistance} top+=${6 * rem}`,
                    end: `top+=${(idx + 0.4) * projectScrollDistance} top+=${6 * rem}`,
                    onEnter: () => {switchProject(idx, 1)},
                    onLeaveBack: () => {switchProject(idx - 1, -1)},
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