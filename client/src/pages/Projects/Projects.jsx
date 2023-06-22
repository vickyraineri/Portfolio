import React from "react";
import Videogames from "../../assets/Videogames.png";
import RoyalMakeup from "../../assets/RoyalMakeup.png";
import BuscadogQR from "../../assets/BuscadogQR.png";
import { Carousel  } from "@material-tailwind/react";

export const Projects = () => {
    return (
        <div class="mt-12 mb-24 flex flex-col">
            <h1 class="ml-16 text-4xl font-semibold mb-2 text-fuchsia-500">Projects</h1>
            <h class="mx-16 text-xl mb-16">Here are some of the projects I´ve made:</h>
            
            <Carousel transition={{ duration: 2 }}>
                <div className="relative h-full w-full">
                    <img
                    src={BuscadogQR}
                    alt="BuscadogQR Image"
                    className="h-screen lg:h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                            <h1 class="font-bold text-xl lg:text-7xl mb-5">BuscadogQR</h1>
                            <h class="lg:text-xl">Web page which facilitates the search for lost pets. The page allows users to register,
                            log in and register pets. It also features an admin page. It was developed using JavaScript, HTML, CSS, Tailwind CSS,
                            React.js and Firebase.</h>
                            <div class="mt-8">
                                <a href="https://buscadogqr.vercel.app" target="_blank" class="border-2 rounded-xl px-5 py-2 border-fuchsia-300 bg-fuchsia-300/50 animate-pulse lg:text-xl hover:animate-none outline-none">Visit web page</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                    src={Videogames}
                    alt="Videogames Image"
                    className="h-screen lg:h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                    <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                        <h1 class="font-bold text-xl lg:text-7xl mb-5">Henry Videogames</h1>
                        <h class="lg:text-xl">Individual project made during the Henry bootcamp. It consists of a web page which
                        allows the user to list, filter, order and view the details of diverse videogames. It was built using the PERN stack:
                        PostgreSQL, Express.js, React.js and Node.js.</h>
                        <div class="mt-8">
                            <a href="https://henryvideogamespi.vercel.app" target="_blank" class="border-2 rounded-xl px-5 py-2 border-fuchsia-300 bg-fuchsia-300/50 animate-pulse lg:text-xl hover:animate-none outline-none">Visit web page</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                    src={RoyalMakeup}
                    alt="Royal Makeup Image"
                    className="h-screen lg:h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                    <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                        <h1 class="font-bold text-xl lg:text-7xl mb-5">Royal Makeup</h1>
                        <h class="lg:text-xl">Final and group project of the Henry bootcamp. Royal Makeup is an e-commerce web
                        page. It features a home page with three sections, a catalogue with multiple filters,
                        user profiles, authentication using Firebase, a shopping cart, payment with PayPal and
                        an admin page. It also has a mailing service implemented. The technologies we used to
                        build this e-commerce were: JavaScript, HTML, CSS, Tailwind CSS, React.js, Material UI,
                        Redux, Sequelize, Express.js, Node.js, PostgreSQL, Nodemailer and Firebase
                        Authentication.</h>
                        <div class="mt-8">
                            <a href="https://royalmakeup.vercel.app" target="_blank" class="border-2 rounded-xl px-5 py-2 border-fuchsia-300 bg-fuchsia-300/50 animate-pulse lg:text-xl hover:animate-none outline-none">Visit web page</a>
                        </div>
                    </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
};
