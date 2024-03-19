import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getCityByName from "../services/cities";

function City() {
    const params=useParams()
    const [ciudad,setCiudad]=useState({})
    useEffect( ()=>{
        getCityByName(params.name).then((res)=>{
            setCiudad(res.ciudad) 
        })

    },[])
    
    console.log(params)

    return(
        <>
            <h1>Detalles</h1>
            <section>
                <h2>{ciudad.name}</h2>
                <img src={ciudad.image} alt={ciudad.name}/>
            </section>
        </>
    )
}
export default City