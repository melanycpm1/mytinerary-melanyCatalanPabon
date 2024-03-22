import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Layout from "./Layout";
import { getAllCountries } from "../services/countriesQuery";
import authQueries from "../services/authQueries";
function SingUp() {
    const nombre = useRef(null);
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        country: "",
    });

    const [countries, setCountries] = useState();
    useEffect(() => {
        getAllCountries().then(setCountries);
    }, []);

    function handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        const aux = { ...formData };
        aux[name] = value;
        setFormData(aux);
    }
    function handleSubmit(e) {
        
        //console.log(formData);
        e.preventDefault();
        //console.log(formData)
        const aux = { ...formData };
        //console.log(aux)
        for (const key in aux) {
            if (!aux[key]) delete aux[key];
        }
        authQueries.register(aux).then((response) => {
            if (response.status == 201) {
                console.log("salio todo bien")
            } else {
                console.log("älgo salio mal:", response)
            }
        }
        )
    }
    return (
        <Layout>
            <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-sky-500 to-sky-700 text-gray-800">
                <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-white">Registro</h1>
                <div className="border border-gray-300 bg-white w-11/12 md:w-9/12 lg:w-7/12 xl:w-5/12 rounded-lg shadow-lg py-8 px-10">
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit} onInput={handleInput}>
                        <input className="input-field" type="text" placeholder="Nombre" name="first_name" ref={nombre} />
                        <input className="input-field" type="text" placeholder="Apellido" name="last_name" />
                        <input className="input-field" type="email" placeholder="Email" name="email" />
                        <input className="input-field" type="password" placeholder="Contraseña" name="password" />
                        <select name="country" defaultValue={formData.country} className="input-field">
                            {countries && countries.length > 0 && countries.map(country => <option key={country} value={country}>{country}</option>)}
                        </select>
                        <input type="text" className="input-field" name="img" placeholder="URL Imagen" />
                        <button type="submit" className="btn-submit bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
                    </form>
                    <Link to="/Login" className="mt-4 underline cursor-pointer block text-center text-sky-700 hover:text-sky-900">¿Ya tienes cuenta? Inicia sesión aquí</Link>
                </div>
            </main>
        </Layout>
    )
}
export default SingUp;
