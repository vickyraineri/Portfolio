import React from "react";
import Pokemons from "../../assets/Pokemons.png";
import RoyalMakeup from "../../assets/RoyalMakeup.png";
import BuscadogQR from "../../assets/BuscadogQR.png";
import { Carousel } from  "@material-tailwind/react";

export const Projects = () => {
    return (
        <div class="mt-12 mb-24 flex flex-col select-none">
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
                            <div class="mt-8">
                                <a href="https://buscadogqr.vercel.app" target="_blank" class="border-2 rounded-xl px-5 py-2 border-fuchsia-300 bg-fuchsia-300/50 animate-pulse big:text-sm huge:text-xl hover:animate-none outline-none cursor-same outline-none">Visit web page</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative h-full w-full">
                    <img src={Pokemons} alt="Pokemons" class="h-screen lg:h-full w-full object-cover"/>
                    <div class="absolute inset-0 grid h-full w-full items-end bg-black/75">
                        <div class="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32 ml-5 md:ml-0">
                            <h1 class="font-bold text-xl big:text-xl huge:text-7xl mb-5">Henry Pokemons</h1>
                            <h class="big:text-sm huge:text-xl">Individual project made during the Henry bootcamp. It consists of a web page which
                            allows the user to list, filter, order and view the details of diverse pokemons. It also allows the user to create their own pokemon! It was built using: JavaScript, HTML, CSS, 
                            React.js and Redux.</h>
                            <div class="mt-8">
                                <a href="https://henrypokemonspi.vercel.app/" target="_blank" class="border-2 rounded-xl px-5 py-2 border-fuchsia-300 bg-fuchsia-300/50 animate-pulse big:text-sm huge:text-xl hover:animate-none outline-none cursor-same outline-none">Visit web page</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative h-full w-full">
                    <img src={RoyalMakeup} alt="Royal Makeup" class="h-screen lg:h-full w-full object-cover"/>
                    <div class="absolute inset-0 grid h-full w-full items-end bg-black/75">
                        <div class="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32 ml-5 md:ml-0">
                            <h1 class="font-bold text-xl big:text-xl huge:text-7xl mb-5">Royal Makeup</h1>
                            <h class="md:text-huge big:text-sm huge:text-xl">Final and group project of the Henry bootcamp. It features a home page, a catalogue, user profiles, a shopping cart, payment with PayPal, a mailing service and an admin page. The technologies we used were: JavaScript, HTML, CSS, Tailwind CSS, React.js, Material UI, Redux, Sequelize, Express.js, Node.js, PostgreSQL, Nodemailer and Firebase Authentication.</h>
                            <div class="mt-8">
                                <a href="https://github.com/silvina-varela/E-commerce" target="_blank" class="border-2 rounded-xl px-5 py-2 border-fuchsia-300 bg-fuchsia-300/50 animate-pulse big:text-sm huge:text-xl hover:animate-none outline-none cursor-same outline-none">Visit repository</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
};
