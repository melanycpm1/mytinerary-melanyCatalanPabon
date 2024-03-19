import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getCityByName from "../services/cities";

function City() {
    const params = useParams();
    const [ciudad, setCiudad] = useState({});

    useEffect(() => {
        getCityByName(params._id).then((res) => {
            setCiudad(res.data); // Assuming 'res.data' contains the city object
        });
    }, [params._id]);

    console.log(ciudad);
    
    return (
        <>
            <h1>Detalles</h1>
            <section>
                <h2>{ciudad.name}</h2>
                <img src={ciudad.image} alt={ciudad.name}/>
                <p>{ciudad.description}</p>
            </section>
        </>
    );
}
/**/
export default City