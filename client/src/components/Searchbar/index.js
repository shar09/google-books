import React from 'react';
import './style.css';

function Searchbar(props) {
    // function myFunction() {  
    //     document.getElementsByTagName("BODY")[0].onresize = () => );
    // };
    let width = window.innerWidth, height = window.innerHeight;
    function resize() {
        console.log(width, height);
        document.getElementsByTagName("BODY")[0].setAttribute("style",`{width: ${width}px, height:${height}px}`);
    }
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
                    onClick={() => resize()}
                />
                <button className="search-button" type="submit" onClick={props.onClick}>Search</button>
            </form>
        </div>
    )
}

export default Searchbar;