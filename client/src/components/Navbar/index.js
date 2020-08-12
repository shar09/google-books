import React from "react";
import {Link} from "react-router-dom";
import "./style.css"

function Navbar() {
    return (
        <div className="navbar">
           <ul className="nav-items">
                <li>
                    <Link to="/" className="home-link">Google Books</Link>
                </li>
                <li className="link-margin">
                    <Link to="/search" className="page-links">Search</Link>
                </li>
                <li className="link-margin">
                    <Link to="/saved" className="page-links">Saved</Link>
                </li>
           </ul>
        </div>
    )
}

export default Navbar;