import React from "react";
import heroImg from "../assets/img/hero.jpg"

function Hero() {
    return (
        <>
            <section className="relative top-16 h-96">
                <img src={heroImg} alt="" className="h-96 w-full object-cover" />
                <div className="relative bottom-72 left-2/3 font-serif  text-white w-36 text-center">
                        <h1 className="text-base">My Tinerary</h1>
                        <p className="text-xs my-6 ">Find your perfect trip, designed by insiders who know and love their cities</p>
                        <button className="bg-blue-600 w-20 h-8 rounded-xl"><a href="#" className=" text-sm">View more</a></button>
                </div>
            </section>
        </>
    )
}

export default Hero