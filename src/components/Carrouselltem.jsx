import React from "react";
import { Link } from "react-router-dom";

function CarrouselItem({ country }) {
    console.log(country._id)
    return (
        <>
            <article className="w-56 py-6 px-6 h-96 bg-cyan-50 border-solid border-black border-2">
                    <img src={country.image} alt={"imagen de " + country.name} className='w-56 h-60 object-cover' />
                    <div className="w-40 text-center">
                        <h3 className="font-medium">{country.name}</h3>
                        <p className="text-xs">{country.description}</p>
                        <span><Link to={"/cities/"+ country._id}>Detalles</Link></span>
                    </div>
            </article>
        </>
    );
}
/*  <link to={"/cities/"+country.id}></link>*/
export default CarrouselItem;
