import React from 'react';
import Image from "next/image";

function ProjectGraphic({src, isPhoto}: {src: string; isPhoto: boolean}) {
    return (
        <div className="absolute inset-0 w-full h-full object-contain">
            {isPhoto
                ? <Image src={src} alt="Project Image" />
                : <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    controls={false}
                    src={src}
                />
            }
        </div>
    );
}

export default ProjectGraphic;