import {JSX} from "react";
import {HybridTooltip, HybridTooltipContent, HybridTooltipTrigger, TouchProvider} from "@/components/ui/hybridtooltip";

export type Project = {
    title: string,
    date: string,
    description: JSX.Element[],
    tags: string[]
    src: string,
};

export const projects: Project[] = [
    {
        title: "Hunt The Wumpus",
        date: "Feb 2025 – May 2025",
        description: [
            <p>
                This dungeon-crawler built for the command-line interface was the winner of the 2025 Microsoft Hunt The Wumpus
                competition Best Implementation and Crowd Favorite Award.
            </p>,
            <p>
                It was created from scratch in Java, following specifications and taking creative liberties with its retro presentation.
            </p>,
            <p>
                The project was built with scalability in mind, implementing the strategy pattern for prototyping multiple solutions
                and creating an{" "}
                <TouchProvider><HybridTooltip>
                    <HybridTooltipTrigger>ASCII</HybridTooltipTrigger>
                    <HybridTooltipContent side="top">American Standard Code for Information Interchange</HybridTooltipContent>
                </HybridTooltip></TouchProvider>
                {" "}z-index rendering engine.
            </p>,
        ], //Maybe add graph traversal algorithms
        tags: ["Java"],
        src: "/videos/HuntTheWumpusClips.webm",
    },
    {
        title: "FTC Into The Deep Robot",
        date: "Sep 2023 – June 2025",
        description: [
            <p>
                As Autonomous Lead for robotics{" "}
                <TouchProvider><HybridTooltip>
                    <HybridTooltipTrigger>FTC</HybridTooltipTrigger>
                    <HybridTooltipContent side="top">FIRST Tech Challenge</HybridTooltipContent>
                </HybridTooltip></TouchProvider>
                {" "}Team 4042, I created a custom{" "}
                <TouchProvider><HybridTooltip>
                    <HybridTooltipTrigger>PID</HybridTooltipTrigger>
                    <HybridTooltipContent side="top">Proportional-integral-derivative</HybridTooltipContent>
                </HybridTooltip></TouchProvider>
                {" "}controller for accurate transportation.
                This feedback loop used sensor data to regulate motor and servo power.
            </p>,
            <p>
                Combined with a system for queueing groups of actions, components such as the drive base, lift, and claw could
                function fast and in tandem.
            </p>,
        ],
        tags: ["Java", "Git"],
        src: "/videos/RoboticsCroppedClip.webm",
    },
    {
        title: "Game Development",
        date: "Sep 2020 – Present",
        description: [
            <p>
                Through game development I have had experience with large{" "}
                <TouchProvider><HybridTooltip>
                    <HybridTooltipTrigger>OOP</HybridTooltipTrigger>
                    <HybridTooltipContent side="top"><p>Object-oriented programming</p></HybridTooltipContent>
                </HybridTooltip></TouchProvider>
                {" "}projects, using the singleton, observer, flyweight,
                factory, and strategy design patterns often when creating performant and maintainable code.
            </p>,
            <p>
                One project leveraged {""}
                <TouchProvider><HybridTooltip>
                    <HybridTooltipTrigger>TCP</HybridTooltipTrigger>
                    <HybridTooltipContent side="top"><p>Transmission Control Protocol</p></HybridTooltipContent>
                </HybridTooltip></TouchProvider>
                /
                <TouchProvider><HybridTooltip>
                    <HybridTooltipTrigger>UDP</HybridTooltipTrigger>
                    <HybridTooltipContent side="top"><p>User Datagram Protocol</p></HybridTooltipContent>
                </HybridTooltip></TouchProvider>
                {" "}servers for matches and a load balancer that directs players to horizontally-scalable
                match manager servers using a{" "}
                <TouchProvider><HybridTooltip>
                    <HybridTooltipTrigger>REST API.</HybridTooltipTrigger>
                    <HybridTooltipContent side="top" className="text-center space-y-[0.075rem]">
                        <p>Application Programming Interface that adheres to</p>
                        <p>Representational State Transfer principles</p>
                    </HybridTooltipContent>
                </HybridTooltip></TouchProvider>
            </p>,
            <p>
                I have developed predominantly in Unity with some experience in Unreal Engine 4 and Game Maker Studio 2.
            </p>,
        ],
        tags: ["C#", "Unity", ".Net", "PostgreSQL", "SQLite"],
        src: "/videos/GameDevClipMontage.webm",
    },
];