import React from 'react';
import './style.css';

function Searchbar(props) {
    // function myFunction() {  
    //     document.getElementsByTagName("BODY")[0].onresize = () => );
    // };
    function test() {
        console.log(window.innerWidth, window.innerHeight)
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
                    onClick={() => test()}
                />
                <button className="search-button" type="submit" onClick={props.onClick}>Search</button>
            </form>
        </div>
    )
}

export default Searchbar;