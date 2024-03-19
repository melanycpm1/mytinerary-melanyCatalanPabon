import React, { useEffect, useRef } from "react";
import getCities from "../services/citiesQuerys";
import Carrouselltem from "../components/Carrouselltem";
import { useSelector, useDispatch} from "react-redux";
import { load, filterByname } from "../redux/actions/citiesAction"; // Importa la acción filterByname

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
        const value = event.target.value.trim().toLowerCase();
        dispatch(filterByname(value)); // Despacha la acción filterByname con el valor del input
    };

    return (
        <main className="relative top-16">
            <search className="text-center">
                <input type="text" name="Name_ciudades" onInput={handleInput} ref={inputBusqueda} className="border-2 border-black text-center" />
            </search>
            <section>
                <h1 className="text-center text-6xl my-3">Cities</h1>
                <div className="flex flex-wrap gap-x-10 gap-y-10 justify-center">
                    {filteredCities.length > 0 &&
                        filteredCities.map((ciudad, index) => (
                            <Carrouselltem key={index} country={ciudad} />
                        ))}
                </div>
            </section>
        </main>
    );
}

export default MainCities;
