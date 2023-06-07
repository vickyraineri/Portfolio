import React, { useState } from "react";
import Videogames from "../../assets/Videogames.png";
import RoyalMakeup from "../../assets/RoyalMakeup.jpg";
import BuscadogQR from "../../assets/BuscadogQR.png";

export const Projects = () => {
    const [ option, setOption ] = useState("Videogames");

    const handleChange = (e, opt) => {
        e.preventDefault();

        setOption(opt);
    };

    return (
        <div class="mt-12 mb-24 flex flex-col">
            <h1 class="ml-16 text-4xl font-semibold mb-2 text-fuchsia-500">Projects</h1>
            <h class="mx-16 text-xl">Here are some of the projects I´ve made:</h>

            <div class="flex flex-col lg:flex-row gap-x-5 self-center items-center">
                <div class="flex flex-col md:flex-row lg:flex-col gap-y-5 md:gap-10 mt-10">
                    { option == "Videogames" && (
                        <div class="bg-white text-fuchsia-800 w-screen md:w-fit h-fit pl-6 py-6 pr-16 rounded-3xl lg:rounded-l-none lg:rounded-r-3xl cursor-pointer">
                            <h1 class="font-bold select-none">Videogames SPA</h1>
                        </div>
                    )}

                    { option !== "Videogames" && (
                        <div class="bg-gray-800 hover:bg-white hover:text-fuchsia-800 text-white w-screen md:w-fit h-fit pl-6 py-6 pr-16 rounded-3xl lg:rounded-l-none lg:rounded-r-3xl cursor-pointer" onClick={(e) => handleChange(e, "Videogames")}>
                            <h1 class="font-bold select-none">Videogames SPA</h1>
                        </div>
                    )}

                    { option == "RoyalMakeup" && (
                        <div class="bg-white text-fuchsia-800 w-screen md:w-fit h-fit pl-6 py-6 pr-16 rounded-3xl lg:rounded-l-none lg:rounded-r-3xl cursor-pointer">
                            <h1 class="font-bold select-none">Royal Makeup</h1>
                        </div>
                    )}

                    { option !== "RoyalMakeup" && (
                        <div class="bg-gray-800 hover:bg-white hover:text-fuchsia-800 text-white w-screen md:w-fit h-fit pl-6 py-6 pr-16 rounded-3xl lg:rounded-l-none lg:rounded-r-3xl cursor-pointer" onClick={(e) => handleChange(e, "RoyalMakeup")}>
                            <h1 class="font-bold select-none">Royal Makeup</h1>
                        </div>
                    )}

                    { option == "BuscadogQR" && (
                        <div class="bg-white text-fuchsia-800 w-screen md:w-fit h-fit pl-6 py-6 pr-16 rounded-3xl lg:rounded-l-none lg:rounded-r-3xl cursor-pointer">
                            <h1 class="font-bold select-none">Buscadog
                            QR</h1>
                        </div>
                    )}

                    { option !== "BuscadogQR" && (
                        <div class="bg-gray-800 hover:bg-white hover:text-fuchsia-800 text-white w-screen md:w-fit h-fit pl-6 py-6 pr-16 rounded-3xl lg:rounded-l-none lg:rounded-r-3xl cursor-pointer" onClick={(e) => handleChange(e, "BuscadogQR")}>
                            <h1 class="font-bold select-none">Buscadog
                            QR</h1>
                        </div>
                    )}
                </div> 

                { option == "Videogames" && (
                    <div class="mt-16">
                        <h1 class="text-2xl font-bold mb-2 text-fuchsia-300 ml-20">Videogames SPA</h1>
                        <div class="flex flex-col lg:flex-row mt-5">
                            <img src={Videogames} class="md:h-96 lg:ml-20" alt="Pokemon Image"/>
                            <div class="flex flex-col justify-between lg:mx-5 mt-3 mx-10">
                                <div>
                                    <h>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto nemo fugiat suscipit a alias voluptatibus. Assumenda facere aut, maxime accusamus quos veniam, quasi, amet possimus incidunt laudantium ipsam repudiandae?</h>
                                    <h>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti in ipsa esse fugit debitis soluta a. Velit deleniti, accusantium, iste quisquam in architecto, ipsam obcaecati libero accusamus reprehenderit esse laboriosam?</h>
                                </div>
                                <a href="https://henryvideogamespi.vercel.app" target="_blank" class="mb-2 text-blue-300 hover:text-blue-400">Visit the web page 🚀</a>
                            </div>
                        </div>
                    </div>
                )}

                { option == "RoyalMakeup" && (
                    <div class="mt-16">
                    <h1 class="text-2xl font-bold mb-2 text-fuchsia-300 ml-20">Royal Makeup</h1>
                    <div class="flex flex-col lg:flex-row mt-5">
                        <img src={RoyalMakeup} class="md:h-96 lg:ml-20" alt="Royal Makeup Image"/>
                        <div class="flex flex-col justify-between lg:mx-5 mt-3 mx-10">
                            <div>
                                <h>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aperiam vel ab voluptate minima autem rerum aliquam velit odit aspernatur consectetur fuga deleniti veritatis beatae eum, aliquid, dolores illo harum.</h>
                                <h>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit eum atque eveniet iusto magni laborum tempora officia laudantium, beatae asperiores dolores dolorum aliquid amet, facilis cupiditate rem, molestias ipsum eos!</h>
                            </div>
                            <a href="https://royalmakeup.vercel.app" target="_blank" class="mb-2 text-blue-300 hover:text-blue-400">Visit the web page 🚀</a>
                        </div>
                    </div>
                </div>
                )}

                { option == "BuscadogQR" && (
                    <div class="mt-16">
                    <h1 class="text-2xl font-bold mb-2 text-fuchsia-300 ml-20">BuscadogQR</h1>
                    <div class="flex flex-col lg:flex-row mt-5">
                        <img src={BuscadogQR} class="md:h-96 lg:ml-20" alt="BuscadogQR Image"/>
                        <div class="flex flex-col justify-between lg:mx-5 mt-3 mx-10">
                            <div>
                                <h>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minima vitae laudantium quia illo, exercitationem architecto fugit debitis aliquid et deserunt adipisci porro at, dolore, dolorem nisi nulla ducimus suscipit!</h>
                                <h>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laborum alias labore porro aut quos itaque necessitatibus ratione magnam minus laudantium iure voluptatem, ex autem possimus nulla? Est, ipsam at.</h>
                            </div>
                            <a href="https://buscadogqr.vercel.app" target="_blank" class="mb-2 text-blue-300 hover:text-blue-400">Visit the web page 🚀</a>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
};
