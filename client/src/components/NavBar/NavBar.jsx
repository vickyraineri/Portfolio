import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav class="flex flex-col static left-0 inset-x-0 top-0 w-full h-full">
            <div class="flex flex-row py-2 justify-center md:justify-end">
                <Link to="/home">
                    <button class="text-xs md:text-lg p-1 px-2 border-2 rounded-xl mx-1 border-x-purple-600 border-y-fuchsia-500 font-semibold select-none hover:border-y-purple-600 hover:border-x-fuchsia-500 hover:shadow-md hover:shadow-fuchsia-500/50 cursor-same outline-none">Home</button>
                </Link>
                <Link to="/projects">
                    <button class="text-xs md:text-lg p-1 px-2 border-2 rounded-xl mx-1 border-y-purple-600 border-x-fuchsia-500 font-semibold select-none hover:border-x-purple-600 hover:border-y-fuchsia-500 hover:shadow-md hover:shadow-fuchsia-500/50 cursor-same outline-none">Projects</button>
                </Link>
                <Link to="/technologies">
                    <button class="text-xs md:text-lg p-1 px-2 border-2 rounded-xl mx-1 border-x-purple-600 border-y-fuchsia-500 font-semibold select-none hover:border-y-purple-600 hover:border-x-fuchsia-500 hover:shadow-md hover:shadow-fuchsia-500/50 cursor-same outline-none">Technologies</button>
                </Link>
                <Link to="/about">
                    <button class="text-xs md:text-lg p-1 px-2 border-2 rounded-xl mx-1 border-x-purple-600 border-y-fuchsia-500 font-semibold select-none hover:border-y-purple-600 hover:border-x-fuchsia-500 hover:shadow-md hover:shadow-fuchsia-500/50 cursor-same outline-none">About</button>
                </Link>
                <Link to="/contact">
                    <button class="text-xs md:text-lg p-1 px-2 border-2 rounded-xl mx-1 border-y-purple-600 border-x-fuchsia-500 font-semibold select-none hover:border-x-purple-600 hover:border-y-fuchsia-500 hover:shadow-md hover:shadow-fuchsia-500/50 cursor-same outline-none">Contact</button>
                </Link>
            </div>
        </nav>
    )
};
