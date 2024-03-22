import React, { useState } from "react";
import Layout from "./Layout";
import { Link, useNavigate } from "react-router-dom";
import authQueries from "../services/authQueries";
import alertas from "../ultis/alertas";


function Login() {
    const [formData,setFormData]=useState({
        email:"",
        password:"",
    });
    const navigate=useNavigate()

    function handleInput(e) {
        const name=e.target.name;
        const value=e.target.value;
        const aux= {...formData}
        aux[name] =value;
        setFormData(aux);
    }
    function handleSubmit(e) {
        e.preventDefault();
        const aux = {...formData};
        for (const key in aux) {
            if (!aux[key])delete aux[key];
            authQueries.login(aux).then((response) => {
                console.log(response)
                if (response.status==200) {
                    alertas.success("Inicio de sesión exitoso")
                    navigate("/");
                }else{
                    alertas.error(response.statusMsg)
                }
            })
        }
    }
    return (
        <Layout>
        <main className="flex flex-col items-center mt-40">
            <h2 className="text-3xl font-bold mb-8">Iniciar sesión</h2>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full md:w-1/2 lg:w-1/3">
                <form onSubmit={handleSubmit} onInput={handleInput}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            name="email"
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600"
                        >Ingresar
                        </button>
                        <Link to="/SignUp" className="mt-4 text-blue-500 hover:underline">Crear cuenta</Link>
                    </div>
                </form>
            </div>
        </main>
    </Layout>
    );
}

export default Login;
