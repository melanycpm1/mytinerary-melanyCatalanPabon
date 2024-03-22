import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../redux/actions/userAction";

function Header() {
    const user = useSelector(store => store.user.user);
    console.log(user)

    const dispatch = useDispatch();
    const location = useLocation();

    // Verificar si user es null antes de acceder a sus propiedades
    const hiddenSignUp = user && user.first_name ? false : true;
    const hiddenLogin = user && user.first_name ? false : true;

    const [links,setLinks]=useState([
        {
            path: '/',
            title: "Home",
            active: '/' === location.pathname,
            hidden: true,
        },
        {
            path: "/cities",
            title: "Cities",
            active: "/cities" === location.pathname,
            hidden: true,
        },
        {
            path: "/SignUp",
            title: "Registro",
            active: "/SignUp" === location.pathname,
            hidden: hiddenSignUp,
        },
        {
            path: "/login",
            title: "Login",
            active: "/login" === location.pathname,
            hidden: hiddenLogin,
        },
    ])

    const handleClick = () => {
        dispatch(logout());
    };

    const Anchor = (link) => {
        if (link.hidden) {
            return (
                <Link key={link.title} className={"text-white hover:text-gray-200"} to={link.path}>{link.title}</Link>
            );
        }
    }

    useEffect( ()=>{
        setLinks([
            {
                path: '/',
                title: "Home",
                active: '/' === location.pathname,
                hidden: true,
            },
            {
                path: "/cities",
                title: "Cities",
                active: "/cities" === location.pathname,
                hidden: true,
            },
            {
                path: "/SignUp",
                title: "Registro",
                active: "/SignUp" === location.pathname,
                hidden: hiddenSignUp,
            },
            {
                path: "/login",
                title: "Login",
                active: "/login" === location.pathname,
                hidden: hiddenLogin,
            }, 
        ])
    },[user])

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-blue-400 h-16 flex justify-between items-center px-8">
            <div>
                <Link to="/" className="text-white text-xl font-semibold hover:text-gray-200">My Tinerary</Link>
            </div>
            <nav>
                {links.map(link => <Anchor key={link.title} {...link} />)}
                {user && user.first_name && (
                    <button onClick={handleClick} className={"text-white border px-2 py-1 font-semibold bg-red-800"}>LogOut</button>
                )}
            </nav>
        </header>
    );
}

export default Header;
