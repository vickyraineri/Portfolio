import React from "react";
import x from "../../assets/x.png";

export const Projects = () => {
    return (
        <div class="mt-16 flex justify-center">

            <div class="flex flex-row gap-x-72">
                <div class="flex flex-col gap-y-5 align-items-center">
                    <h1>POKÉMON SPA</h1>
                    <img class="w-96 h-80" src={x} alt="random"/>
                </div>

                <div>
                    <h1>ROYAL MAKEUP</h1>
                </div>

                <div>
                    <h1>BUSCADOGQR</h1>
                </div>
            </div>

            {/* <div class="flex flex-col gap-y-14">
                <div class="flex flex-col items-center gap-y-5">
                    <h1 class="text-5xl font-semibold text-fuchsia-500">POKÉMON SPA</h1>
                    <img class="mx-24 h-max w-max" src={x} alt="random"/>
                    <h class="mx-max">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, esse officia pariatur eaque ipsum aut unde dolorum praesentium! Eveniet nostrum pariatur rem repellendus quis corporis exercitationem libero obcaecati veritatis sit?</h>
                </div>

                <div class="flex flex-col items-center gap-y-5">
                    <h1>ROYAL MAKEUP</h1>
                    <img class="w-96 h-60" src={x} alt="random"/>
                    <h>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate aspernatur perspiciatis voluptas accusantium sit, recusandae quos tenetur pariatur fugit ab consequuntur eius veniam nam iste beatae, qui laborum deleniti. Vero.</h>
                </div>

                <div class="flex flex-col items-center gap-y-5">
                    <h1>BUSCADOGQR</h1>
                    <img class="w-96 h-60" src={x} alt="random"/>
                    <h>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque dolor maiores optio? Ad placeat nulla distinctio nostrum deserunt eveniet exercitationem alias natus delectus beatae? Maxime modi provident aut quo.</h>
                </div>
            </div> */}
        </div>
    )
};
