import React from 'react';
import './style.css';

function Searchbar(props) {
    return (
        <div className="search">
            <p className="search-title">Book Search</p>
            <form className="search-form">
                <input className="search-bar" 
                    type="text" 
                    placeholder="Search"
                    name="bookSearch"
                    value={props.value}
                    onChange={props.onChange}
                />
                <button className="search-button" type="submit" onClick={props.onClick}>Search</button>
            </form>
        </div>
    )
}

export default Searchbar;