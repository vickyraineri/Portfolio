import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        // This will calculate how many pixels the page is vertically
        const winScroll = document.documentElement.scrollTop;
        // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
        const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

        // This will calculate the final total of the percentage of how much the user has scrolled.
        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled);
    };

    useEffect(() => {
        // Fires when the document view has been scrolled
        window.addEventListener("scroll", onScroll);

        // 
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav class="flex flex-col fixed left-0 inset-x-0 top-0 w-full">
            <div className="progressMainWrapper">
                <div
                className="progressMainStyle"
                style={{ width: `${scrollTop}%` }}
                ></div>
            </div>

            {/* PREVIOUS NAVBAR */}
            {/* <div class="flex flex-row py-2 justify-center md:justify-end">
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
            </div> */}
        </nav>
    )
};
