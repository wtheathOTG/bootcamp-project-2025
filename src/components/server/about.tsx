import React from 'react';
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";

function About() {
    return (
        <div>
            <h2 className="text-2xl text-foreground font-medium pb-4">About</h2>
            <div className="space-y-4 text-foreground">
                <p>
                    I am a freshman at Cal Poly San Luis Obispo. Since starting my programming journey in game development, I
                    have learned the importance of user experience. It is imperative that an application interface is appealing, a
                    concept that guided my artistic and architectural design decisions.
                </p>
                <p>
                    As I have progressed in data structures, algorithms, and system design I still prioritize maintaining ergonomic
                    interfaces. As a team member, I hope to bridge the gap between backend design and user experience.
                </p>
            </div>
            <div className="pb-16 pt-8">
                <AspectRatio ratio={2/1} className="rounded-lg border border-border shadow-md overflow-hidden">
                    <Image
                        src="/pictures/headshot.JPG"
                        alt="Photo of Will Heath"
                        fill
                        className="relative h-full w-full object-cover bg-card saturate-95 object-[62%_50%]"
                    />
                </AspectRatio>
            </div>
        </div>
    );
}

export default About;