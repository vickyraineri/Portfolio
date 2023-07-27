import React, { useState } from "react";
import { Home } from "../pages/Home/Home";
import { Contact } from "../pages/Contact/Contact";
import { Technologies } from "../pages/Technologies/Technologies";
import { Projects } from "../pages/Projects/Projects";
import { About } from "../pages/About/About";
import "./Slider.css";

export const Slider = () => {
    const [currentPosition, setCurrentPosition] = useState(0);

    const goUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    addEventListener("scroll", (event) => {
        setCurrentPosition(window.scrollY);
    });

    return (
        <>
            <div className="cont">
                <div id='stars2'></div>
                <div id='stars'></div>

                <Home/>

                <div id='stars'></div>
                
                <Technologies/>

                <Projects/>

                <About/>

                <div id='stars2'></div>

                <Contact/>

                <div id='stars'></div>

            </div>

            { currentPosition > 0 && (<div class="fixed z-[100] right-6 bottom-6 ml-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 bg-gray-300/80 stroke-gray-500 p-3 rounded-full hover:bg-gray-300 cursor-same transition-all" onClick={() => goUp()}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                </svg>
            </div>)}
        </>
    )
};
