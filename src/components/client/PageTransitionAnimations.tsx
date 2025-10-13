"use client";

import React from 'react';
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {usePathname} from "next/navigation";

function PageTransitionAnimations() {
    const pathname = usePathname();

    useGSAP(() => {
        gsap.set("#page-content", { opacity: 0 });

        gsap.fromTo("#page-content",
            {
                y: 10,
                opacity: 0,
            },
            {
            y: 0,
            opacity: 1,
            ease: "power1.out",
            delay: 0.3,
            immediateRender: false,
        });
    }, { dependencies: [pathname]});

    return (
        <div className=""></div>
    );
}

export default PageTransitionAnimations;