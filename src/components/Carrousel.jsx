import React, { useState } from "react";
import CarrouselItem from "./Carrouselltem";
import countries from "../data/data";

function Carrousel({ start, end }) {
    const countrySlice = countries.slice(start, end);
    const [indice, setIndice] = useState(0);

    function next() {
        const nextIndice = (indice + 1) % countrySlice.length;
        setIndice(nextIndice);
    }

    function previous() {
        const prevIndice = (indice - 1 + countrySlice.length) % countrySlice.length;
        setIndice(prevIndice);
    }

    const country = countrySlice[indice];

    return (
        <div className="max-w-lg mx-auto">
        <CarrouselItem country={country} />
        <div className="flex justify-between items-center mt-5">
            <button className="px-4 py-2 bg-sky-500 text-white rounded-lg focus:outline-none hover:bg-sky-600 transition-colors duration-300 ease-in-out" onClick={previous}>
                « Previous
            </button>
            <button className="px-4 py-2 bg-sky-500 text-white rounded-lg focus:outline-none hover:bg-sky-600 transition-colors duration-300 ease-in-out" onClick={next}>
                Next »
            </button>
        </div>
    </div>
    );
}

export default Carrousel;
