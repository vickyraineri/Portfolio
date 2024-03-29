import React from "react";
import CSS from "../../assets/CSS.png";
import FIREBASE from "../../assets/FIREBASE.png";
import HTML from "../../assets/HTML.png";
import JS from "../../assets/JS.png";
import REACTJS from "../../assets/REACTJS.png";
import NODEJS from "../../assets/NODEJS.png";
import POSTGRESQL from "../../assets/POSTGRESQL.png";
import REDUX from "../../assets/REDUX.png";
import TAILWIND from "../../assets/TAILWIND.png";
import EXPRESSJS from "../../assets/EXPRESSJS.png"

export const Technologies = () => {
    return (
        <div class="mx-16 my-12 flex flex-col select-none">
            <h1 class="text-4xl font-semibold mb-2 text-fuchsia-500">Technologies</h1>
            <h class="text-xl">Here are some of the technologies I've worked with:</h>

            <div class="w-fit self-center mt-16 grid grid-cols-1 lg:grid-cols-3 gap-x-24 gap-y-20 border-2 border-x-purple-600 border-y-fuchsia-500 shadow-md shadow-fuchsia-500/50 p-20 md:p-32 py-24 rounded-3xl justify-center bg-black/50 select-none items-center mb-16">
                <div class="flex flex-col items-center gap-y-3 hover:scale-125">
                    <img src={HTML} class="w-auto h-20 md:h-24" alt="html"/>
                    <h class="font-semibold">HTML</h>
                </div>
                <div class="flex flex-col items-center gap-y-3 hover:scale-125">
                    <img src={CSS} class="w-auto h-20 md:h-24" alt="css"/>
                    <h class="font-semibold">CSS</h>
                </div>
                <div class="flex flex-col items-center gap-y-3 hover:scale-125">
                    <img src={JS} class="w-auto h-20 md:h-24" alt="js"/>
                    <h class="font-semibold">JavaScript</h>
                </div>
                <div class="flex flex-col items-center gap-y-3 hover:scale-125">
                    <img src={REACTJS} class="w-auto h-20 md:h-24" alt="react.js"/>
                    <h class="font-semibold">React.js</h>
                </div>
                <div class="flex flex-col items-center gap-y-3 hover:scale-125">
                    <img src={REDUX} class="w-auto h-20 md:h-24" alt="redux"/>
                    <h class="font-semibold">Redux</h>
                </div>
                <div class="flex flex-col items-center gap-y-3 hover:scale-125">
                    <img src={TAILWIND} class="w-auto h-20 md:h-24" alt="tailwind"/>
                    <h class="font-semibold">Tailwind CSS</h>
                </div>
                <div class="flex flex-col items-center gap-y-3 hover:scale-125">
                    <img src={EXPRESSJS} class="w-auto h-24 md:h-28" alt="express.js"/>
                    <h class="font-semibold">Express.js</h>
                </div>
                <div class="flex flex-col items-center gap-y-3 hover:scale-125">
                    <img src={NODEJS} class="w-auto h-20 md:h-24" alt="nodejs"/>
                    <h class="font-semibold">Node.js</h>
                </div>
                <div class="flex flex-col items-center gap-y-3 hover:scale-125">
                    <img src={POSTGRESQL} class="w-auto h-20 md:h-24" alt="postgresql"/>
                    <h class="font-semibold">PostgreSQL</h>
                </div>
                <div class="flex flex-col lg:col-start-2 items-center gap-y-3 hover:scale-125">
                    <img src={FIREBASE} class="w-auto h-20 md:h-24" alt="firebase"/>
                    <h class="font-semibold">Firebase</h>
                </div>
            </div>
        </div>
    )
};
