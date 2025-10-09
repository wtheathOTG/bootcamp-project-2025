"use client";

import React from 'react';
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

function Animations() {
    //All intro animations using opacity must set initial css opacity to 0 to avoid flicker on load
    useGSAP(() => {
        gsap.from(".nav-hero", {
            x: -10,
            autoAlpha: 0,
            ease: "power1.out",
            stagger: 0.1,
            delay: 0.3,
            immediateRender: false,
        })

        gsap.from(".nav-links", {
            x: -10,
            autoAlpha: 0,
            ease: "power1.out",
            delay: 0.65,
            stagger: 0.06,
            immediateRender: false,
        })

        gsap.from("#page-content", {
            y: 10,
            autoAlpha: 0,
            ease: "power1.out",
            delay: 0.3,
            immediateRender: false,
        })
    });

    return (
        <div className="fixed"></div>
    );
}

export default Animations;