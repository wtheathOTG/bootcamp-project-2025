"use client";

import React from 'react';
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {usePathname} from "next/navigation";

function PageTransitionAnimations() {
    const pathname = usePathname();

    useGSAP(() => {
        gsap.set("#page-content", { autoAlpha: 0 });

        gsap.fromTo("#page-content",
            {
                y: 10,
                autoAlpha: 0,
            },
            {
            y: 0,
            autoAlpha: 1,
            ease: "power1.out",
            delay: 0.3,
            immediateRender: false,
        });
    }, { dependencies: [pathname]});

    return (
        <div className="fixed"></div>
    );
}

export default PageTransitionAnimations;