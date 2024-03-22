import React from "react";
import { Link } from "react-router-dom";

function CarrouselItem({ country }) {
    console.log(country._id)
    return (
        <>
            <article className="w-56 p-4 h-auto bg-white shadow-lg rounded-lg border border-gray-200">
                <img src={country.image} alt={"imagen de " + country.name} className="w-full h-36 object-cover rounded-t-lg mb-4" />
                <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{country.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{country.description}</p>
                    <Link to={`/cities/${country._id}`} className="block text-blue-600 font-semibold hover:underline">Detalles</Link>
                </div>
            </article>


        </>
    );
}
export default CarrouselItem;
