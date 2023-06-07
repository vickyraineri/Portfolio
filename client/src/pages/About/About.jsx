import React from "react";
import Me from "../../assets/me.jpeg";

export const About = () => {

    const toggleId = (e) => {
        e.preventDefault();

        if(document.getElementById("personalInfo").style.display === "block") document.getElementById("personalInfo").style.display = "none"
        else document.getElementById("personalInfo").style.display = "block";
    };

    return (
        <div class="m-16 mt-12 flex flex-col items-center">
            <h1 class="text-4xl font-semibold text-fuchsia-500 self-start">About me</h1>
            <div class="flex flex-col lg:flex-row gap-y-8 mt-10 lg:mt-0 justify-center items-center mx-10 text-xl">
                <div class="flex flex-col">
                    <button class="select-none self-start mb-5 border-2 border-fuchsia-300 px-5 py-2 rounded-2xl bg-fuchsia-300/50 hover:bg-fuchsia-400/50 hover:border-400 hover:scale-105 animate-pulse outline-none" onClick={(e) => toggleId(e)}>VIEW ID</button>
                    <h>Ever since I was a kid, I've been interested in technology. Whether it'd be for videogames or for other entertainment apps, I would spend hours in front of my computer. As I grew older, I started wondering how everything worked, dreaming of making my own app or website (or even videogame) in the future. The more I understood, the more I wanted to learn coding. That's why, as soon as I finished high school, I got into a coding bootcamp where I learnt JavaScript, HTML, CSS, React.js, Redux, Node.js, Express.js and PostgreSQL. Now I plan on continuing to learn new technologies and to make more projects to improve my skills.</h>
                </div>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/female-developer-doing-programming-3839570-3202816.png" class="lg:w-1/3 lg:h-1/3 lg:mt-10"/>
            </div>


            <div id="personalInfo" class="absolute hidden sm:object-top md:object-center mt-36 md:mt-24">
                <div class="relative w-full max-w-2xl md:max-h-full">
                    <div class="relative flex rounded-lg shadow h-52 md:h-auto bg-black/95 text-white border-4 border-fuchsia-700">
                        <img src={Me} class="h-auto md:h-60 rounded-l-lg" alt="me"/>
                        <div class="flex flex-col md:self-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-end mr-5 mt-5 hover:stroke-red-700 cursor-pointer" onClick={(e) => toggleId(e)}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                            <div class="ml-5 pt-4 pb-8 pr-8 text-sm">
                                <h><h class="text-fuchsia-400 font-semibold">Name:</h> Victoria
                                    <br/>
                                    <h class="text-fuchsia-400 font-semibold">Surname:</h> Raineri
                                    <br/>
                                    <h class="text-fuchsia-400 font-semibold">Birthday:</h> 29/04/2004
                                    <br/>
                                    <h class="text-fuchsia-400 font-semibold">Nationality:</h> Argentinian 🇦🇷
                                    <br/>
                                    <h class="text-fuchsia-400 font-semibold">Sex:</h> Female
                                </h>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="self-center mt-16 md:mt-10 ml-5 border-2 border-x-purple-600 border-y-fuchsia-500 shadow-md shadow-fuchsia-500/50 p-14 md:p-32 py-14 rounded-3xl justify-center bg-black/50">
                <h1 class="text-3xl font-bold text-fuchsia-300 self-start">Professional Experience</h1>
                <div class="mt-5 ml-5">
                    <h1 class="text-xl font-semibold">➢ BuscadogQR (freelance)</h1>
                    <h>Developed a web page with the goal of facilitating the search for lost pets. A user can
                    register and, afterwards, register a pet. Once that is done, it will be provided with a QR
                    code. If the pet gets lost, when scanned, the QR code will direct the person who scans it to a
                    page with all the necessary data to contact the owner. The page allows you to register,
                    log in, register pets and observe the way in which the data will be displayed when the
                    QR code is scanned. It was developed using JavaScript, HTML, CSS, Tailwind CSS,
                    React.js and Firebase.
                    <br/>
                    <a href="https://buscadogqr.vercel.app" target="_blank" class="text-fuchsia-300 outline-none hover:underline hover:underline-offset-4">Visit the web page</a>
                    </h>
                </div>
                <div class="mt-5 ml-5">
                    <h1 class="text-xl font-semibold">➢ Check-in Agent</h1>
                    <h>I'm currently working as a part-time check-in agent for Delta Airlines at CrossRacer Airport Services S.A. My job includes checking-in passengers, making sure they have the right documentation to enter the countries they´re traveling to and being present at the boarding. I´m also constantly improving my english skills as it´s an american airline and most people traveling speak english.</h>
                </div>
            </div>
        </div>
    )
};
