"use client"

import React from 'react';
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

function ProjectAnimation() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const scrollArea = document.getElementById("page-content")!;
        const container = document.getElementById("project-container")!;
        const title = document.getElementById("project-title");
        const tags = document.getElementById("project-tags");
        const date = document.getElementById("project-date");
        const description = document.getElementById("project-description");
        const image = document.getElementById("project-image");
        const scrollbar = document.getElementById("project-scrollbar")!;
        const thumb = document.getElementById("project-scrollbar-thumb")!;

        // ScrollTrigger.create({
        //     trigger: scrollArea,          // the container to measure against
        //     pin: container,              // the element to pin
        //     start: () => `top top+=100`,        // starts when parent's top hits 6rem from viewport top
        //     endTrigger: scrollArea,
        //     end:   () => `bottom top+=100`,     // unpins when parent's bottom reaches that same 6rem line
        //     pinSpacing: false,         // keep layout from jumping (matches sticky behavior)
        //     anticipatePin: 1,
        //     invalidateOnRefresh: true, // recompute on resize
        //     markers: true           // uncomment to debug
        // });
        ScrollTrigger.create({
            trigger: scrollArea,
            start: "top+=100 top",
            end: "top+=200 top",
            onEnter: () => {
                gsap.to(thumb, {
                    y: "+=100",
                    duration: 1,
                    ease: "Power1.inOut,"
                })
            },
            onEnterBack: () => {
                gsap.to(thumb, {
                    y: "-=100",
                    duration: 1,
                    ease: "Power1.inOut,"
                })
            },
            markers: true,
        })
    });

    return (
        <div className=""></div>
    );
}

export default ProjectAnimation;