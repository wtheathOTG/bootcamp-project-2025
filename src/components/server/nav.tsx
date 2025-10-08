import React from 'react';
import LinkedInIcon from "@/components/icons/linkedinicon";
import {Button} from "@/components/ui/button";
import GithubIcon from "@/components/icons/githubIcon";
import InstagramIcon from "@/components/icons/instagramicon";

function Nav() {
    return (
        <div>
            <p className="text-5xl font-bold pb-4">Will Heath</p>
            <p className="text-xl pb-4 font-bold">Developer & Designer</p>
            <p className="max-w-88 text-lg text-gray-400">I am developer interested in system design and user experience.</p>
            <div className="flex flex-col items-start justify-between gap-4 pt-16 pb-40 text-gray-400">
                <a className="hover:translate-x-2 transition-all duration-200 ease-in-out" href="">About</a>
                <a className="hover:translate-x-2 transition-all duration-200 ease-in-out" href="">Projects</a>
                <a className="hover:translate-x-2 transition-all duration-200 ease-in-out" href="">Blog</a>
                <a className="hover:translate-x-2 transition-all duration-200 ease-in-out" href="">Contact</a>
            </div>
            <div className="flex justify-start gap-x-4">
                <Button variant="grow" size="icon">
                    <a target="_blank" href="https://www.linkedin.com/in/william-heath06">
                        <LinkedInIcon className="size-6 fill-gray-400"/>
                    </a>
                </Button>
                <Button variant="grow" size="icon">
                    <a target="_blank" href="https://www.github.com/wtheathOTG">
                        <GithubIcon className="size-6 fill-gray-400"/>
                    </a>
                </Button>
                <Button variant="grow" size="icon">
                    <a target="_blank" href="https://www.instagram.com/will_heath06">
                        <InstagramIcon className="size-6 fill-gray-400" />
                    </a>
                </Button>
            </div>
        </div>
    );
}

export default Nav;