import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
    const location=useLocation();
    //console.log(location.pathname)
    return(
        <header className="fixed w-full z-50 flex justify-around bg-blue-400 h-16 items-center">
            <div>
                <span className="font-serif text-xl font-semibold text-white">My Tinerary</span>
            </div>
            <div>
                <nav>
                    <ul className="flex items-center gap-8 font-serif">
                        <li><Link to="/" className="font-normal text-base text-white hover:text-slate-600">Home</Link></li>
                        <li><Link to="/cities" className="font-normal text-base text-white hover:text-slate-600">Cities</Link></li>
                        <li><button className="bg-blue-600 w-28 h-12 rounded-xl"><Link to="/login" className="font-normal text-base text-white hover:text-slate-600" >👤 Login</Link></button></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header 