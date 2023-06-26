import React, { useState, useEffect } from "react";
import Videogames from "../../assets/Videogames.png";
import RoyalMakeup from "../../assets/RoyalMakeup.png";
import BuscadogQR from "../../assets/BuscadogQR.png";

export const Projects = () => {
    const [current, setCurrent] = useState("buscadogqr");
    const [videogamesImg, setVideogamesImg] = useState("");
    const [buscadogqrImg, setBuscadogqrImg] = useState("");
    const [royalmakeupImg, setRoyalmakeupImg] = useState("");

    useEffect(() => { //did this so the images changed faster
        setVideogamesImg(Videogames);
        setBuscadogqrImg(BuscadogQR);
        setRoyalmakeupImg(RoyalMakeup);
    }, []);

    const carouselController = (e) => {
        if(e == "next") {
            switch(current) {

                case "buscadogqr": {
                    document.getElementById("videogames").style.display = "block"; 
                    setCurrent("videogames");
                    break;
                }
                
                case "videogames":
                    document.getElementById("royalmakeup").style.display = "block";
                    setCurrent("royalmakeup");
                    break; 

                default: 
                    setCurrent("royalmakeup");
                    break;
            }

        } else if (e == "prev") {

            switch(current) {
                case "royalmakeup":
                    document.getElementById("videogames").style.display = "block";
                    setCurrent("videogames");
                    break;
                
                case "videogames":
                    document.getElementById("buscadogqr").style.display = "block";
                    setCurrent("buscadogqr");
                    break; 

                default: 
                    setCurrent("buscadogqr");
                    break;
            }
        }
    };

    return (
        <div class="mt-12 mb-24 flex flex-col select-none">
            <h1 class="ml-16 text-4xl font-semibold mb-2 text-fuchsia-500">Projects</h1>
            <h class="mx-16 text-xl mb-16">Here are some of the projects I´ve made:</h>

            <div>
                <div id="buscadogqr">
                    { current == "buscadogqr" && (
                        <div class="transition-opacity ease-in duration-700 opacity-100">
                            <img src={buscadogqrImg || "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-white-solid-color-background.jpg"} alt="BuscadogQR" class="brightness-[0.25] h-screen huge:h-full w-full object-cover"/>
                            <div className="absolute top-2/3 md:top-3/4 huge:top-3/4 w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 huge:pl-32 huge:pb-32 ml-5 huge:ml-0">
                                <h1 class="font-bold text-xl big:text-xl huge:text-7xl mb-5">BuscadogQR</h1>
                                <h class="big:text-sm huge:text-xl">Web page which facilitates the search for lost pets. The page allows users to register,
                            log in and register pets. It also features an admin page. It was developed using JavaScript, HTML, CSS, Tailwind CSS,
                            React.js and Firebase.</h>
                                <div class="mb-5 mt-8">
                                    <a href="https://buscadogqr.vercel.app" target="_blank" class="border-2 rounded-xl px-5 py-2 border-fuchsia-300 bg-fuchsia-300/50 animate-pulse big:text-sm huge:text-xl hover:animate-none outline-none cursor-same outline-none">Visit web page</a>
                                </div>
                            </div>
                        </div>
                    )}  
                </div>

                <div id="videogames" class="hidden">
                    { current == "videogames" && (
                        <div>
                            <img src={videogamesImg || "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-white-solid-color-background.jpg"} alt="Videogames" class="brightness-[0.25] h-screen huge:h-full w-full object-cover"/>
                            <div className="absolute top-2/3 md:top-3/4 w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 huge:pl-32 huge:pb-32 ml-5 huge:ml-0">
                                <h1 class="font-bold text-xl big:text-xl huge:text-7xl mb-5">Henry Videogames</h1>
                                <h class="big:text-sm huge:text-xl">Individual project made during the Henry bootcamp. It consists of a web page which
                                allows the user to list, filter, order and view the details of diverse videogames. It was built using: JavaScript, HTML, CSS, 
                                React.js and Redux.</h>
                                <div class="mb-5 md:mb-0 mt-8">
                                    <a href="https://henryvideogamespi.vercel.app" target="_blank" class="border-2 rounded-xl px-5 py-2 border-fuchsia-300 bg-fuchsia-300/50 animate-pulse big:text-sm huge:text-xl hover:animate-none outline-none cursor-same outline-none">Visit web page</a>
                                </div>
                            </div>
                        </div> 
                    )}
                </div>

                <div id="royalmakeup" class="hidden">
                    { current == "royalmakeup" && (
                        <div>
                            <img src={royalmakeupImg || "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-white-solid-color-background.jpg"} alt="Royal Makeup" class="brightness-[0.25] h-screen huge:h-full w-full object-cover"/>
                            <div className="absolute top-[25rem] big:top-2/3 top-3/4 w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 huge:pl-32 huge:pb-32 ml-5 huge:ml-0">
                                <h1 class="font-bold text-xl big:text-xl huge:text-7xl mb-5">Royal Makeup</h1>
                                <h class="md:text-huge big:text-sm huge:text-xl">Final and group project of the Henry bootcamp. It features a home page, a catalogue, user profiles, a shopping cart, payment with PayPal, a mailing service and an admin page. The technologies we used were: JavaScript, HTML, CSS, Tailwind CSS, React.js, Material UI, Redux, Sequelize, Express.js, Node.js, PostgreSQL, Nodemailer and Firebase Authentication.</h>
                                <div class="mb-5 md:mb-0 mt-8">
                                    <a href="https://royalmakeup.vercel.app" target="_blank" class="border-2 rounded-xl px-5 py-2 border-fuchsia-300 bg-fuchsia-300/50 animate-pulse big:text-sm huge:text-xl hover:animate-none outline-none cursor-same outline-none">Visit web page</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 md:w-12 md:h-12 stroke-gray-500 absolute top-3/4 ml-5 bg-gray-300 p-1 px-2 rounded-3xl hover:bg-gray-400 hover:stroke-gray-600 outline-none" onClick={() => carouselController("prev")}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 md:w-12 md:h-12 stroke-gray-500 absolute top-3/4 right-0 mx-5 bg-gray-300 p-1 px-2 rounded-3xl hover:bg-gray-400 hover:stroke-gray-600 outline-none" onClick={() => carouselController("next")}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

            </div>
        </div>
    )
};
