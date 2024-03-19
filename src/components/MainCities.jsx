import React, { useEffect, useState, useRef } from "react";
import getCities from "../services/citiesQuerys";
import Carrouselltem from "../components/Carrouselltem";

function MainCities() {
    const [ciudades, setCiudades] = useState([]);
    const [filtrados, setFiltrados] = useState([]);
    const inputBusqueda = useRef(null);

    useEffect(() => {
        getCities().then((data) => {
            setCiudades(data.data);
            setFiltrados(data.data); 
        });
    }, []);

    const handleInput = (event) => {
        const valor = event.target.value.trim().toLowerCase();
        const filtrados = ciudades.filter((ciudad) =>
            ciudad.name.toLowerCase().includes(valor)
        );
        setFiltrados(filtrados); 
    };

    return (
        <main className="relative top-16">
            <search className="text-center">
                <input type="text" name="Name_ciudades" onInput={handleInput} ref={inputBusqueda} className="border-2 border-black text-center" />
            </search>
            <section>
                <h1 className="text-center text-6xl my-3">Cities</h1>
                <div className="flex flex-wrap gap-x-10 gap-y-10 justify-center">
                    {filtrados.length > 0 &&
                        filtrados.map((ciudad, index) => (
                            <Carrouselltem key={index} country={ciudad} />
                        ))}
                </div>
            </section>
        </main>
    );
}

export default MainCities;
