import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
    const location=useLocation();
    //console.log(location.pathname)
    return(
        <header className="fixed top-0 left-0 w-full z-50 bg-blue-400 h-16 flex justify-between items-center px-8">
            <div>
                <Link to="/" className="text-white text-xl font-semibold hover:text-gray-200">My Tinerary</Link>
            </div>
            <nav>
                <ul className="flex items-center gap-8 font-semibold">
                    <li><Link to="/" className="text-white hover:text-gray-200">Home</Link></li>
                    <li><Link to="/cities" className="text-white hover:text-gray-200">Cities</Link></li>
                    <li><Link to="/SignUp" className="text-white hover:text-gray-200">Registro</Link></li>
                    <li>
                        <Link to="/login" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header 