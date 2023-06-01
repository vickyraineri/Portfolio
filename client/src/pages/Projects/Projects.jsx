import React, { useState } from "react";
import Pokemon from "../../assets/Pokemon.png";
import RoyalMakeup from "../../assets/RoyalMakeup.png";
import BuscadogQR from "../../assets/BuscadogQR.png";

export const Projects = () => {
    const [ option, setOption ] = useState("Pokémon");

    const handleChange = (e, opt) => {
        e.preventDefault();

        setOption(opt);
    };

    return (
        <div class="mt-12">
            <h1 class="ml-16 text-4xl font-semibold mb-2 text-fuchsia-500">Projects</h1>
            <h class="ml-16 text-xl">Here are some of the projects I´ve made:</h>

            <div class="flex">
                <div class="flex flex-col gap-y-10 mt-16">
                    { option == "Pokémon" && (
                        <div class="bg-white text-fuchsia-800 w-fit pl-6 py-6 pr-16 rounded-r-3xl cursor-pointer">
                            <h1 class="font-bold select-none">Pokémon SPA</h1>
                        </div>
                    )}

                    { option !== "Pokémon" && (
                        <div class="bg-gray-800 hover:bg-white hover:text-fuchsia-800 text-white w-fit pl-6 py-6 pr-16 rounded-r-3xl cursor-pointer" onClick={(e) => handleChange(e, "Pokémon")}>
                            <h1 class="font-bold select-none">Pokémon SPA</h1>
                        </div>
                    )}

                    { option == "RoyalMakeup" && (
                        <div class="bg-white text-fuchsia-800 w-fit pl-6 py-6 pr-16 rounded-r-3xl cursor-pointer">
                            <h1 class="font-bold select-none">Royal Makeup</h1>
                        </div>
                    )}

                    { option !== "RoyalMakeup" && (
                        <div class="bg-gray-800 hover:bg-white hover:text-fuchsia-800 text-white w-fit pl-6 py-6 pr-16 rounded-r-3xl cursor-pointer" onClick={(e) => handleChange(e, "RoyalMakeup")}>
                            <h1 class="font-bold select-none">Royal Makeup</h1>
                        </div>
                    )}

                    { option == "BuscadogQR" && (
                        <div class="bg-white text-fuchsia-800 w-fit pl-6 py-6 pr-16 rounded-r-3xl cursor-pointer">
                            <h1 class="font-bold select-none">Buscadog
                            QR</h1>
                        </div>
                    )}

                    { option !== "BuscadogQR" && (
                        <div class="bg-gray-800 hover:bg-white hover:text-fuchsia-800 text-white w-fit pl-6 py-6 pr-16 rounded-r-3xl cursor-pointer" onClick={(e) => handleChange(e, "BuscadogQR")}>
                            <h1 class="font-bold select-none">Buscadog
                            QR</h1>
                        </div>
                    )}
                </div> 

                { option == "Pokémon" && (
                    <div class="ml-32 mt-16">
                        <h1 class="text-2xl font-bold mb-2 text-fuchsia-300">Pokémon SPA</h1>
                        <div class="flex mt-5">
                            {/* <img src={Pokemon} class="h-96" alt="Pokemon Image"/> */}
                            <img src={BuscadogQR} class="h-96" alt="Pokemon Image"/>
                            <div class="flex flex-col justify-between mx-5 mt-3">
                                <div>
                                    <h>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto nemo fugiat suscipit a alias voluptatibus. Assumenda facere aut, maxime accusamus quos veniam, quasi, amet possimus incidunt laudantium ipsam repudiandae?</h>
                                    <h>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti in ipsa esse fugit debitis soluta a. Velit deleniti, accusantium, iste quisquam in architecto, ipsam obcaecati libero accusamus reprehenderit esse laboriosam?</h>
                                </div>
                                <a href="https://buscadogqr.vercel.app" target="_blank" class="mb-2 text-blue-300 hover:text-blue-400">Visit the web page 🚀</a>
                            </div>
                        </div>
                    </div>
                )}

                { option == "RoyalMakeup" && (
                    <div class="ml-32 mt-16">
                    <h1 class="text-2xl font-bold mb-2 text-fuchsia-300">Royal Makeup</h1>
                    <div class="flex mt-5">
                        <img src={RoyalMakeup} class="h-96" alt="Royal Makeup Image"/>
                        <div class="flex flex-col justify-between mx-5 mt-3">
                            <div>
                                <h>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aperiam vel ab voluptate minima autem rerum aliquam velit odit aspernatur consectetur fuga deleniti veritatis beatae eum, aliquid, dolores illo harum.</h>
                                <h>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit eum atque eveniet iusto magni laborum tempora officia laudantium, beatae asperiores dolores dolorum aliquid amet, facilis cupiditate rem, molestias ipsum eos!</h>
                            </div>
                            <a href="https://buscadogqr.vercel.app" target="_blank" class="mb-2 text-blue-300 hover:text-blue-400">Visit the web page 🚀</a>
                        </div>
                    </div>
                </div>
                )}

                { option == "BuscadogQR" && (
                    <div class="ml-32 mt-16">
                    <h1 class="text-2xl font-bold mb-2 text-fuchsia-300">BuscadogQR</h1>
                    <div class="flex mt-5">
                        <img src={BuscadogQR} class="h-96" alt="BuscadogQR Image"/>
                        <div class="flex flex-col justify-between mx-5 mt-3">
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
