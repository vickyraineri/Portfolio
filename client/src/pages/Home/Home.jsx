import React from "react";
import girlDeveloper from "../../assets/girlDeveloper.png";

export const Home = () => {
    return (
        <div class="mx-16 md:mx-52 mt-28 md:mt-32 mb-10">
            <div class="flex flex-wrap items-center justify-around">
                <div class="flex flex-col select-none">
                    <h1 class="flex flex-wrap text-6xl font-semibold gap-5">Hi! I'm <h1 class="animate-bounce text-fuchsia-500">Victoria</h1></h1>

                    <div class="flex flex-col mt-5 ml-1 text-3xl mb-16">
                        <h>I'm a junior <h class="text-fuchsia-300 font-semibold">web developer</h> eager</h>
                        <h>to start my career in the IT industry!</h>
                    </div>
                </div>

                <img class="lg:w-1/3 lg:w-1/3: contrast-200 mb-16" src={girlDeveloper} alt="Laptop"/>
            </div>
        </div>
    )
};
