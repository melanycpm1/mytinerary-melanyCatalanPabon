import React from "react";
import Hero from "./Hero";
import Carrousel from "./Carrousel";

function Main() {
    return (
        <main className="h-1500">
            <Hero />
            <section className=" relative top-40">
                <h2 className="text-sm font-semibold text-center mb-16">POPULAR ITINERARIES</h2>
                <div className="flex justify-around flex-wrap gap-y-11">
                    <Carrousel start={1} end={4} />
                    <Carrousel start={5} end={8} />
                    <Carrousel start={9} end={12} />
                    <Carrousel start={13} end={16} />
                </div>
            </section>
        </main>
    )
}

export default Main