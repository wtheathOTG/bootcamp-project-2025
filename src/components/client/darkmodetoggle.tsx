"use client"

import React, {useEffect, useRef, useState} from 'react';
import {Button} from "@/components/ui/button";
import DarkModeIcon from "@/components/icons/darkmodeicon";
import LightModeIcon from "@/components/icons/lightmodeicon";

function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(true);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        document.documentElement.classList.toggle("dark");
    }, [darkMode])

    return (
        <Button variant="ghost" size="icon" onClick={() => setDarkMode(state => !state)}>
            {darkMode ? <DarkModeIcon/> : <LightModeIcon/>}
        </Button>
    );
}

export default DarkModeToggle;