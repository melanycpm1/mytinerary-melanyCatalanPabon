import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getCityByName from "../services/cities";

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
            <h1>Detalles</h1>
            <section>
                <h2>{ciudad.name}</h2>
                <p>{ciudad.description}</p>
                {ciudad.itineraries && ciudad.itineraries.map((itinerary, index) => (
                    <div key={index}>
                        <h3>{itinerary.title}</h3>
                        <img src={itinerary.activities[0]} alt={itinerary.title} />
                        <img src={itinerary.guide_image} alt={itinerary.guide}/>
                        <p>Guía: {itinerary.guide}</p>
                        <p>Precio: {itinerary.price}</p>
                        <p>Duración: {itinerary.duration} horas</p>
                        <p>Descripción: {itinerary.description}</p>
                        <p>Actividades:</p>
                        <ul>
                            {itinerary.activities.map((activity, idx) => (
                                <li key={idx}>
                                    <img src={activity} alt={`Actividad ${idx + 1}`} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </>
    );
}

export default City;
