import React from "react";
import heroImg from "../assets/img/hero.jpg"

function Hero() {
    return (
        <>
            <section className="relative h-96 overflow-hidden">
                <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
                    <div className="max-w-3xl text-center px-4">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">My Tinerary</h1>
                        <p className="text-sm md:text-base lg:text-lg xl:text-xl mb-8">Find your perfect trip, designed by insiders who know and love their cities</p>
                        <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-base md:text-lg transition duration-300 ease-in-out">View more</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero