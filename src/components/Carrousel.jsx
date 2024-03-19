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
        <div>
            <CarrouselItem country={country} />
            <div className="flex justify-between mt-5">
                <div>
                    <button className="p-3 bg-sky-300" onClick={previous}>«—</button>
                </div>
                <div>
                    <button className="p-3 bg-sky-300" onClick={next}>—»</button>
                </div>
            </div>
        </div>
    );
}

export default Carrousel;
