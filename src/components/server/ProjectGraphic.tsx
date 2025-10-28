import React from 'react';
import Image from "next/image";

function ProjectGraphic({src, isPhoto}: {src: string; isPhoto: boolean}) {
    return (
        <div className="absolute inset-0 flex items-center justify-center rounded-md overflow-hidden">
            {isPhoto ? (
                <Image
                    src={src}
                    alt="Project Image"
                    className="max-w-full max-h-full object-contain rounded-md"
                />
            ) : (
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    controls={false}
                    src={src}
                    className="max-w-full max-h-full object-contain rounded-md"
                />
            )}
        </div>
    );
}

export default ProjectGraphic;