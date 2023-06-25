import React from "react";
import Gmail from "../../assets/Gmail.webp";
import Linkedin from "../../assets/Linkedin.png";
import Github from "../../assets/Github.png";

export const Contact = () => {
    return (
        <div class="m-16 mt-12 select-none">
            <div class="mb-16">
                <h1 class="text-4xl font-semibold mb-2 text-fuchsia-300">Get in touch with me!</h1>
                <h class="text-2xl">You can find me in:</h>
            </div>
            
            <div class="flex flex-col gap-y-16 lg:flex-row justify-center gap-x-24">
                <a href="https://www.linkedin.com/in/victoria-raineri-657b64246/" target="_blank" class="flex flex-col items-center gap-y-5 hover:scale-110 border-2 border-x-purple-600 border-y-fuchsia-500 shadow-md shadow-fuchsia-500/50 p-10 py-24 rounded-3xl justify-center bg-black/30 select-none items-center cursor-same outline-none">
                    <img src={Linkedin} class="h-32 md:h-44 w-auto"/>
                    <h class="font-semibold">LinkedIn</h>
                </a>
                <a href="https://github.com/vickyraineri" target="_blank" class="flex flex-col items-center gap-y-5 hover:scale-110 border-2 border-x-purple-600 border-y-fuchsia-500 shadow-md shadow-fuchsia-500/50 p-10 py-24 rounded-3xl justify-center bg-black/30 select-none items-center cursor-same outline-none">
                <img src={Github} class="h-32 md:h-48 w-auto"/>
                    <h class="font-semibold">GitHub</h>
                </a>
                <a href="mailto:vickyraineri04@gmail.com" target="_blank" class="flex flex-col items-center gap-y-5 hover:scale-110 border-2 border-x-purple-600 border-y-fuchsia-500 shadow-md shadow-fuchsia-500/50 p-10 py-24 rounded-3xl justify-center bg-black/30 select-none items-center cursor-same outline-none">
                    <img src={Gmail} class="h-24 md:h-36 w-auto"/>
                    <h class="font-semibold">Gmail</h>
                </a>
            </div>
        </div>
    )
};
