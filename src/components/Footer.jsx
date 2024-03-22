import React from "react";
function Footer() {
    return(
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto flex flex-wrap justify-evenly gap-16">
                <div className="footer-section">
                    <h3 className="text-lg font-semibold mb-4">About</h3>
                    <ul>
                        <li><a href="#" className="text-gray-300 hover:text-gray-400">Who are we?</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-gray-400">Student</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-gray-400">We're hiring</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-gray-400">Guides and reviews</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="text-lg font-semibold mb-4">Help</h3>
                    <ul>
                        <li><a href="#" className="text-gray-300 hover:text-gray-400">Seller</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-gray-400">Pays</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-gray-400">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="text-lg font-semibold mb-4">Law and Order</h3>
                    <ul>
                        <li><a href="#" className="text-gray-300 hover:text-gray-400">Term of services</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-gray-400">Data Protection</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-gray-400">Cookies</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-gray-400">Legal notice</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="text-lg font-semibold mb-4">Hello There!</h3>
                    <ul>
                        <li><a href="#" className="text-gray-300 hover:text-gray-400">Medium</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer