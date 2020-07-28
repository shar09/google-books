import React from "react";
import "./style.css";

function Search() {
    return (
        <div>
            <div className="search">
               <p className="search-title">Book Search</p>
                <form className="search-form">
                    <input className="search-bar" type="text" placeholder="Search"/>
                    <button className="search-button" type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Search;