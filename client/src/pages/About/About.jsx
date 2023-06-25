import React from "react";

export const About = () => {
    return (
        <div class="mx-16 my-12 flex flex-col items-center select-none">
            <h1 class="text-4xl font-semibold text-fuchsia-500 self-start">About me</h1>
            <h class="lg:text-xl mt-10">Ever since I was a kid, I've been interested in technology. Whether it'd be for videogames or for other entertainment apps, I would spend hours in front of my computer. As I grew older, I started wondering how everything worked, dreaming of making my own app or website (or even videogame) in the future. The more I understood, the more I wanted to learn coding. That's why, as soon as I finished high school, I got into a coding bootcamp where I learnt JavaScript, HTML, CSS, React.js, Redux, Node.js, Express.js and PostgreSQL. Afterwards, I learnt on my own Firebase and Tailwind CSS. Now I plan on continuing to learn new technologies and to make more projects to improve my skills.</h>

            <div class="self-center w-screen md:w-auto mt-16 md:mt-10 border-2 border-x-purple-600 border-y-fuchsia-500 shadow-md shadow-fuchsia-500/50 p-10 md:p-24 py-14 rounded-3xl justify-center bg-black/50 mb-16">
                <h1 class="text-3xl font-bold text-fuchsia-300 self-start">Professional Experience</h1>
                <div class="mt-5 ml-5">
                    <h1 class="md:text-xl font-semibold">➢ BuscadogQR (freelance)</h1>
                    <h>Developed a web page with the goal of facilitating the search for lost pets. A user can
                    register and, afterwards, register a pet. Once that's done, it will be provided with a QR
                    code. If the pet gets lost, when scanned, it will direct the person who scans it to a
                    page with all the necessary data to contact the owner. The page allows you to register,
                    log in, register pets and observe the way in which the data will be displayed when the
                    QR code is scanned. It was developed using JavaScript, HTML, CSS, Tailwind CSS,
                    React.js and Firebase.
                    <br/>
                    <a href="https://buscadogqr.vercel.app" target="_blank" class="text-fuchsia-300 outline-none hover:underline hover:underline-offset-4 cursor-same">Visit the web page</a>
                    </h>
                </div>
                <div class="mt-5 ml-5">
                    <h1 class="md:text-xl font-semibold">➢ Check-in Agent</h1>
                    <h>I'm currently working as a part-time check-in agent for Delta Airlines at CrossRacer Airport Services S.A. My job includes checking-in passengers, making sure they have the right documentation to enter the countries they´re traveling to and being present at the boarding. I´m also constantly improving my english skills as it´s an american airline and most people traveling speak english.</h>
                </div>
            </div>
        </div>
    )
};
