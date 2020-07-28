import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

class Search extends Component {
   state = {
      books : [],
      bookSearch : ""
   }
   
   componentDidMount = () => {
      API.getBooks("harry potter")
        .then((res) => console.log("r: ",res))
        .catch(err => console.log(err));
   }

   handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
   }

   handleForSubmit = (event) => {
      event.preventDefault();
      API.getBooks(this.state.bookSearch)
      //   .then(res => this.setState({ books: res.data }))
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
   }

   render() {
      return (
         <div>
            <div className="search">
               <p className="search-title">Book Search</p>
               <form className="search-form">
                  <input className="search-bar" 
                     type="text" 
                     placeholder="Search"
                     name="bookSearch"
                     value={this.state.bookSearch}
                     onChange={this.handleInputChange}
                  />
                  <button className="search-button" type="submit">Search</button>
               </form>
            </div>
         </div>
      )
   }
}

export default Search;