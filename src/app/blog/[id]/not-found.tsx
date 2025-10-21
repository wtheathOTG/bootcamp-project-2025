import React from 'react';

function NotFound() {
    return (
        <div
            className="absolute top-[calc(-6rem+50svh)] left-1/2 -translate-x-1/2 -translate-y-1/2
                flex justify-between items-center gap-x-2"
        >
            <p className="text-3xl font-bold">404</p>
            <p className="relative -translate-y-0.25 text-3xl">|</p>
            <p className="text-xl">Not Found</p>
        </div>
    );
}

export default NotFound;