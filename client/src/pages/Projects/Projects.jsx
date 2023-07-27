import React from "react";
import Videogames from "../../assets/Videogames.png";
import RoyalMakeup from "../../assets/RoyalMakeup.png";
import BuscadogQR from "../../assets/BuscadogQR.png";
import { Carousel } from  "@material-tailwind/react";

export const Projects = () => {
    return (
        <div class="mt-32 mb-24 flex flex-col select-none">
            <h1 class="ml-16 text-4xl font-semibold mb-2 text-fuchsia-500">Projects</h1>
            <h class="mx-16 text-xl mb-16">Here are some of the projects I´ve made:</h>

            <Carousel
                prevArrow={({ handlePrev }) => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 md:w-12 md:h-12 stroke-gray-500 !absolute top-2/4 -translate-y-2/4 left-4 bg-gray-300 p-1 px-2 rounded-3xl hover:bg-gray-400 hover:stroke-gray-600 outline-none" onClick={handlePrev}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                )}

                nextArrow={({ handleNext }) => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 md:w-12 md:h-12 stroke-gray-500 bg-gray-300 !absolute top-2/4 -translate-y-2/4 !right-4 p-1 px-2 rounded-3xl hover:bg-gray-400 hover:stroke-gray-600 outline-none" onClick={handleNext}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                )}

                navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                    <span
                    key={i}
                    className={`block h-1 cursor-same rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                    }`}
                    onClick={() => setActiveIndex(i)}
                    />
                ))}
            </div>
            )}
            >
                <div class="relative h-full w-full">
                    <img src={BuscadogQR} alt="BuscadogQR" class="h-screen lg:h-full w-full object-cover"/>
                    <div class="absolute inset-0 grid h-full w-full items-end bg-black/75">
                        <div class="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32 ml-5 md:ml-0">
                            <h1 class="font-bold text-xl big:text-xl huge:text-7xl mb-5">BuscadogQR</h1>
                            <h class="big:text-sm huge:text-xl">Web page which facilitates the search for lost pets. The page allows users to register,
                            log in and register pets. It also features an admin page. It was developed using JavaScript, HTML, CSS, Tailwind CSS,
                            React.js and Firebase.</h>

                            <a href="https://buscadogqr.vercel.app" target="_blank" class="mt-3 flex gap-x-2 items-center hover:underline hover:underline-offset-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-fuchsia-200">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>

                                <h class="big:text-sm huge:text-base cursor-same text-fuchsia-200">visit web page</h>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="relative h-full w-full">
                    <img src={Videogames} alt="Videogames" class="h-screen lg:h-full w-full object-cover"/>
                    <div class="absolute inset-0 grid h-full w-full items-end bg-black/75">
                        <div class="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32 ml-5 md:ml-0">
                            <h1 class="font-bold text-xl big:text-xl huge:text-7xl mb-5">Henry Videogames</h1>
                            <h class="big:text-sm huge:text-xl">Individual project made during the Henry bootcamp. It consists of a web page which
                            allows the user to list, filter, order and view the details of diverse videogames. It was built using: JavaScript, HTML, CSS, 
                            React.js and Redux.</h>

                            <a href="https://henryvideogamespi.vercel.app" target="_blank" class="mt-3 flex gap-x-2 items-center hover:underline hover:underline-offset-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-fuchsia-200">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>

                                <h class="big:text-sm huge:text-base cursor-same text-fuchsia-200">visit web page</h>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="relative h-full w-full">
                    <img src={RoyalMakeup} alt="Royal Makeup" class="h-screen lg:h-full w-full object-cover"/>
                    <div class="absolute inset-0 grid h-full w-full items-end bg-black/75">
                        <div class="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32 ml-5 md:ml-0">
                            <h1 class="font-bold text-xl big:text-xl huge:text-7xl mb-5">Royal Makeup</h1>
                            <h class="md:text-huge big:text-sm huge:text-xl">Final and group project of the Henry bootcamp. It features a home page, a catalogue, user profiles, a shopping cart, payment with PayPal, a mailing service and an admin page. The technologies we used were: JavaScript, HTML, CSS, Tailwind CSS, React.js, Material UI, Redux, Sequelize, Express.js, Node.js, PostgreSQL, Nodemailer and Firebase Authentication.</h>

                            <a href="https://royalmakeup.vercel.app" target="_blank" class="mt-3 flex gap-x-2 items-center hover:underline hover:underline-offset-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-fuchsia-200">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                                
                                <h class="big:text-sm huge:text-base cursor-same text-fuchsia-200">visit web page</h>
                            </a>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
};
