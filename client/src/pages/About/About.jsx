import React from "react";

export const About = () => {
    return (
        <div class="m-16 mt-12">
            <h1 class="text-4xl font-semibold mb-2 text-fuchsia-500">About me</h1>
            <div class="flex flex-col md:flex-row gap-y-8 justify-center mt-10 items-center mx-10 text-xl">
                <div class="flex flex-col">
                    <h>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur similique saepe quos recusandae quis eligendi, excepturi, quibusdam quas explicabo delectus alias officia at omnis? Impedit error vero laborum incidunt perferendis.</h>
                    <h>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nesciunt soluta ratione natus voluptatum commodi odit non? Reprehenderit in commodi, numquam repudiandae nam nobis nemo voluptatum harum, assumenda, atque saepe.</h>
                    <h>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur blanditiis facere, quae, eum aperiam adipisci nesciunt minus enim corporis quo reprehenderit perferendis maxime optio laborum autem magnam commodi ex officiis.</h>
                </div>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/female-developer-doing-programming-3839570-3202816.png" class="md:w-1/3 md:h-1/3"/>
            </div>
        </div>
    )
};
