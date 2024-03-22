import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getCityByName from "../services/cities";
import Header from "./Header"
import Layout from "./Layout";
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
            <Layout>
                <main>
                    <h1 className="font-serif text-3xl lg:text-5xl xl:text-7xl text-center mt-16 mb-10">Detalles - {ciudad.name}</h1>
                    <section className="max-w-4xl mx-auto mt-8">
                        <p className="text-center text-base lg:text-lg xl:text-xl font-serif my-10">{ciudad.description}</p>
                        <img src={ciudad.image} alt={ciudad.name} className="w-full h-96 object-cover rounded-lg mb-10 shadow-md" />
                        {ciudad.itineraries && ciudad.itineraries.map((itinerary, index) => (
                            <div key={index} className="bg-cyan-900 text-white rounded-lg shadow-lg py-8 px-4 mb-10">
                                <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-4">{itinerary.title}</h3>
                                <div className="flex items-center mb-4">
                                    <img src={itinerary.guide_image} alt={itinerary.guide} className="w-12 h-12 rounded-full border-2 border-blue-50 mr-2" />
                                    <p className="text-lg">{itinerary.guide}</p>
                                </div>
                                <p className="text-lg mb-2">Precio: {itinerary.price}</p>
                                <p className="text-lg mb-2">Duración: {itinerary.duration} horas</p>
                                <p className="text-lg mb-4">Descripción: {itinerary.description}</p>
                                <p className="text-lg mb-2">Actividades:</p>
                                <div className="flex flex-wrap justify-center">
                                    {itinerary.activities.map((activity, idx) => (
                                        <img key={idx} src={activity} alt={`Actividad ${idx + 1}`} className="w-20 h-20 rounded-lg m-2" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                </main>
            </Layout>
        </>
    );
}
/*voy a dejar el estilo para lo ultimo */

export default City;
