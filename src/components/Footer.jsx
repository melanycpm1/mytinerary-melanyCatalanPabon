import React from "react";
function Footer() {
    return(
        <footer className="flex justify-evenly">
            <div>
                <h3 className="text-base font-medium underline">About</h3>
                <ul>
                    <li><a href="#"> Who are we?</a></li>
                    <li><a href="#">Student</a></li>
                    <li><a href="#">We're hiring</a></li>
                    <li><a href="#">Guides and reviews</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-base font-medium underline">Help</h3>
                <ul>
                    <li><a href="#">Seller</a></li>
                    <li><a href="#">Pays</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-base font-medium underline">Law and Orden</h3>
                <ul>
                    <li><a href="#">Term or services</a> </li>
                    <li><a href="#">Data Proteccion</a></li>
                    <li><a href="#">Cookies</a></li>
                    <li><a href="#">Legal notice</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-base font-medium underline" >Hello There!</h3>
                <ul>
                    <li><a href="#">Medium</a></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer