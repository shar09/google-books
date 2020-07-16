import React from "react";
import "./style.css"

function Navbar() {
    return (
        <div className="navbar">
           <ul className="nav-items">
               <li className="home-link">Google Books</li>
               <li className="page-links">Search</li>
               <li className="page-links">Saved</li>
           </ul>
        </div>
    )
}

export default Navbar;