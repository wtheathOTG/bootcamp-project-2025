"use client";

import React from 'react';
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/SplitText";

function GlobalAnimations() {
    //All intro animations using opacity must set initial css opacity to 0 to avoid flicker on load
    useGSAP(() => {
        gsap.registerPlugin(SplitText);

        //fade in on initial load
        const siteBorder = document.querySelector("#site-border");
        gsap.set(siteBorder, {
            "--site-border-alpha": "0%",
            borderColor: "color-mix(in oklch, var(--border) var(--site-border-alpha), transparent)"
        });
        gsap.to(siteBorder, {
            "--site-border-alpha": "100%",
            duration: 0.6,
            ease: "power1.out",
            delay: 0.3
        });

        gsap.from(".nav-hero", {
            x: -10,
            autoAlpha: 0,
            ease: "power1.out",
            stagger: 0.1,
            delay: 0.3,
            immediateRender: false,
        });

        gsap.from(".nav-links", {
            x: -10,
            autoAlpha: 0,
            ease: "power1.out",
            delay: 0.65,
            stagger: 0.06,
            immediateRender: false,
        });

        //Nav name hover effect
        const navName = document.querySelector("#nav-name");
        const split = new SplitText(navName, {type: "chars"});
        let waveTween: gsap.core.Tween;
        navName?.addEventListener("mouseenter", () => {
            waveTween?.kill();

            waveTween = gsap.to(split.chars, {
                y: -5,
                duration: 0.3,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                yoyoEase: true,
                stagger: {
                    each: 0.07,
                    repeat: -1
                }
            });
        });
        navName?.addEventListener("mouseleave", () => {
            waveTween?.kill();

            gsap.to(split.chars, {
                y: 0,
                duration: 0.15,
                ease: "power2.out",
                stagger: 0.02
            });
        });
    });

    return (
        <div className="fixed"></div>
    );
}

export default GlobalAnimations;