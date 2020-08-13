import React, {Component} from 'react';
import './style.css';

class Searchbar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        
    }
    resize() {
        console.log(this.state.width, this.state.height);
        const elem = document.getElementsByTagName("BODY")[0];
        console.log(elem);
        elem.setAttribute("style",`max-width: ${this.state.width}px`);
    }
    render() {
    return (
        <div className="search">
            <p className="search-title">Book Search</p>
            <form className="search-form">
                <input className="search-bar" 
                    type="text" 
                    placeholder="Search"
                    name="bookSearch"
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onClick={() => this.resize()}
                />
                <button className="search-button" type="submit" onClick={this.props.onClick}>Search</button>
            </form>
        </div>
    )
    }
}

export default Searchbar;