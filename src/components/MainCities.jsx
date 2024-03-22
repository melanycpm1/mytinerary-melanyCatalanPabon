import React, { useEffect, useRef } from "react";
import getCities from "../services/citiesQuerys";
import Carrouselltem from "../components/Carrouselltem";
import { useSelector, useDispatch } from "react-redux";
import { load, filterByname } from "../redux/actions/citiesAction";

function MainCities() {
    const inputBusqueda = useRef(null);
    const dispatch = useDispatch();
    const filteredCities = useSelector((state) => state.ciudad.filtered);

    useEffect(() => {
        getCities().then((data) => {
            dispatch(load(data.data))
        });
    }, [dispatch]);

    const handleInput = (event) => {
        console.log(event)
        const value = event.target.value.trim().toLowerCase();
        dispatch(filterByname(value));
    };

    return (
        <main className="relative top-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-center mb-8">
                    <input type="text" name="Name_ciudades" onInput={handleInput} ref={inputBusqueda} placeholder="Buscar ciudades" className="w-full md:w-96 border border-gray-300 rounded-md py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-md" />
                </div>
                <section>
                    <h1 className="text-center text-4xl lg:text-6xl font-serif mb-10">Explore nuestras ciudades</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center">
                        {filteredCities.length > 0 ?
                            filteredCities.map((ciudad, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                                    <div className="flex flex-col justify-center items-center h-full p-6">
                                        <Carrouselltem country={ciudad} />
                                    </div>
                                </div>
                            ))
                            :
                            <p className="text-center text-lg">No se encontraron ciudades.</p>
                        }
                    </div>
                </section>
            </div>
        </main>

    );
}

export default MainCities;
