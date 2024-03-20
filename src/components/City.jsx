import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getCityByName from "../services/cities";
import Header from "./Header"
function City() {
    const params = useParams();
    const [ciudad, setCiudad] = useState({});

    useEffect(() => {
        getCityByName(params._id).then((res) => {
            setCiudad(res.data); 
        });
    }, [params._id]);

    console.log(ciudad);
    
    return (
        <>
            <h1 className="font-serif text-xl md:text-3xl lg:text-5xl xl:text-7xl text-center my-10">Detalles -{ciudad.name}</h1>
            <section>
                <p className="text-center text-xs md:text-sm lg:text-base xl:text-lg font-serif my-10">{ciudad.description}</p>
                <img src={ciudad.image} alt={ciudad.name} className="w-4/5 h-96 m-auto"/>
                {ciudad.itineraries && ciudad.itineraries.map((itinerary, index) => (
                    <div key={index} className="text-center bg-cyan-900 my-44 py-20">
                        <h3>{itinerary.title}</h3>
                        <img src={itinerary.guide_image} alt={itinerary.guide} className="m-auto  border-solid border-y-blue-50 border-2"/>
                        <p>Guía: {itinerary.guide}</p>
                        <p>Precio: {itinerary.price}</p>
                        <p>Duración: {itinerary.duration} horas</p>
                        <p>Descripción: {itinerary.description}</p>
                        <p>Actividades:</p>
                        <ul className="flex justify-center">
                            {itinerary.activities.map((activity, idx) => (
                                <li key={idx}>
                                    <img src={activity} alt={`Actividad ${idx + 1}`} className="w-5/6 h-60"/>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </>
    );
}
/*voy a dejar el estilo para lo ultimo */

export default City;
