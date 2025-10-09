import React from 'react';
import LinkedInIcon from "@/components/icons/linkedinicon";
import {Button} from "@/components/ui/button";
import GithubIcon from "@/components/icons/githubIcon";
import InstagramIcon from "@/components/icons/instagramicon";
import Link from 'next/link'

function Nav() {
    return (
        <div>
            <div className="sticky h-[70lvh] max-h-144 top-32 text-foreground flex flex-col justify-between">
                <div className="space-y-4">
                    <h1 className="nav-hero text-5xl font-bold">Will Heath</h1>
                    <p className="nav-hero text-xl font-bold text-secondary">Developer & Designer</p>
                    <p className="nav-hero md:max-w-88 text-lg text-muted-foreground">
                        I am developer interested in system design and user experience.
                    </p>
                </div>
                <div className="flex flex-col items-start justify-between gap-4 text-muted-foreground">
                    <Link
                        className="hover:translate-x-2 hover:text-primary transition-all duration-200 ease-in-out"
                        href="/"
                    >
                        <p className="nav-links">About</p>
                    </Link>
                    <Link
                        className="hover:translate-x-2 hover:text-primary transition-all duration-200 ease-in-out"
                        href="/"
                    >
                        <p className="nav-links">Projects</p>
                    </Link>
                    <Link
                        className="hover:translate-x-2 hover:text-primary transition-all duration-200 ease-in-out"
                        href="/blog"
                    >
                        <p className="nav-links">Blog</p>
                    </Link>
                    <Link
                        className="hover:translate-x-2 hover:text-primary transition-all duration-200 ease-in-out"
                        href="/"
                    >
                        <p className="nav-links">Contact</p>
                    </Link>
                </div>
                <div className="nav-links flex justify-start gap-x-4">
                    <Button variant="grow" size="icon" asChild>
                        <a target="_blank" href="https://www.linkedin.com/in/william-heath06">
                            <LinkedInIcon className="size-6 fill-muted-foreground"/>
                        </a>
                    </Button>
                    <Button variant="grow" size="icon" asChild>
                        <a target="_blank" href="https://www.github.com/wtheathOTG">
                            <GithubIcon className="size-6 fill-muted-foreground"/>
                        </a>
                    </Button>
                    <Button variant="grow" size="icon" asChild>
                        <a target="_blank" href="https://www.instagram.com/will_heath06">
                            <InstagramIcon className="size-6 fill-muted-foreground" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Nav;