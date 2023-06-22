import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../../assets/error.png";

export const Error = () => {
    const navigate = useNavigate();

    const goHome = (e) => {
        e.preventDefault();

        navigate("/home");
    };

    return (
        <div class="m-16 mt-36 flex flex-col gap-y-5 justify-center items-center">
            <img src={error} class="h-2/5 w-2/5 saturate-[.25] mb-5" alt="404"/>
            <h class="font-semibold text-3xl">Oops! We couldn't find the page you were looking for</h>
            <button class="font-semibold text-xl bg-black/50 border-2 border-fuchsia-500 rounded-3xl px-5 py-2 hover:scale-110" onClick={(e) => goHome(e)}>Go to the home page</button>
        </div>
    )
};
