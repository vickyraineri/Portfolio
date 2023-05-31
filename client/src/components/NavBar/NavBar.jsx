import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
    const navigate = useNavigate();
    const [screenWidth, setScreenWidth] = useState("");

    useEffect(() => {
        setScreenWidth(screen.width)
    }, [screen.width]);

    const showMenu = (e) => {
        e.preventDefault();

        if(document.getElementById("menu").style.display === "block") document.getElementById("menu").style.display = "none";
        else document.getElementById("menu").style.display = "block";
    };

    const navigateTo = (e, whereTo) => {
        e.preventDefault();

        navigate(`/${whereTo}`);
        document.getElementById("menu").style.display = "none";
    };
    
    return (
        <nav class="flex flex-col static inset-x-0 top-0 w-full h-full">
            <div class="flex flex-row justify-end items-center p-5 pb-2">
                <div class="flex flex-row gap-x-5 items-center">
                    <div class="hidden md:block">
                        <Link to="/home">
                            <button class="p-1 px-2 border-2 rounded-xl mx-1 border-x-purple-600 border-y-fuchsia-500 font-semibold select-none hover:border-y-purple-600 hover:border-x-fuchsia-500 hover:shadow-md hover:shadow-fuchsia-500/50">Home</button>
                        </Link>
                        <Link to="/projects">
                            <button class="p-1 px-2 border-2 rounded-xl mx-1 border-y-purple-600 border-x-fuchsia-500 font-semibold select-none hover:border-x-purple-600 hover:border-y-fuchsia-500 hover:shadow-md hover:shadow-fuchsia-500/50">Projects</button>
                        </Link>
                        <Link to="/technologies">
                            <button class="p-1 px-2 border-2 rounded-xl mx-1 border-x-purple-600 border-y-fuchsia-500 font-semibold select-none hover:border-y-purple-600 hover:border-x-fuchsia-500 hover:shadow-md hover:shadow-fuchsia-500/50">Technologies</button>
                        </Link>
                        <Link to="/about">
                            <button class="p-1 px-2 border-2 rounded-xl mx-1 border-x-purple-600 border-y-fuchsia-500 font-semibold select-none hover:border-y-purple-600 hover:border-x-fuchsia-500 hover:shadow-md hover:shadow-fuchsia-500/50">About me</button>
                        </Link>
                        <Link to="/contact">
                            <button class="p-1 px-2 border-2 rounded-xl mx-1 border-y-purple-600 border-x-fuchsia-500 font-semibold select-none hover:border-x-purple-600 hover:border-y-fuchsia-500 hover:shadow-md hover:shadow-fuchsia-500/50">Contact</button>
                        </Link>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-fuchsia-500 hover:cursor-pointer md:hidden" onClick={(e) => showMenu(e)}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </div>
            </div>

            <div id="menu" class="hidden mt-5 text-white">
                <ul>
                    <li class="p-4 bg-fuchsia-700/20 hover:bg-fuchsia-700/30 font-semibold select-none cursor-pointer" onClick={(e) => navigateTo(e, "home")}>Home</li>
                    <li class="mt-1 p-4 bg-fuchsia-700/20 hover:bg-fuchsia-700/30 font-semibold select-none cursor-pointer" onClick={(e) => navigateTo(e, "projects")}>Projects</li>
                    <li class="mt-1 p-4 bg-fuchsia-700/20 hover:bg-fuchsia-700/30 font-semibold select-none cursor-pointer" onClick={(e) => navigateTo(e, "technologies")}>Technologies</li>
                    <li class="mt-1 p-4 bg-fuchsia-700/20 hover:bg-fuchsia-700/30 font-semibold select-none cursor-pointer" onClick={(e) => navigateTo(e, "about")}>About me</li>
                    <li class="mt-1 p-4 bg-fuchsia-700/20 hover:bg-fuchsia-700/30 font-semibold select-none cursor-pointer" onClick={(e) => navigateTo(e, "contact")}>Contact me</li>
                </ul>
            </div>
        </nav>
    )
};
