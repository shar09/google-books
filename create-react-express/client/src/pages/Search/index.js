import React, { Component } from "react";
import "./style.css";
import Card from '../../components/Card';
import API from "../../utils/API";

class Search extends Component {
   state = {
      books : [],
      bookSearch : ""
   }
   
   componentDidMount = () => {
      API.getBooks("harry potter")
      .then((res) => console.log(res.data.items))
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
      .then(res => this.setState({ books: res.data.items }))
      .catch(err => console.log(err));
   }

   render() {
      let { books } = this.state;
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
                  <button className="search-button" type="submit" onClick={this.handleForSubmit}>Search</button>
               </form>
            </div>
            { books.map(book =>  { return (
                  // {book.id} ? <h3>No results found</h3> :
                  <Card key={book.id}>
                     <div className="card-img">
                        <img alt={book.volumeInfo.title} src={book.volumeInfo.imageLinks.thumbnail}/>
                     </div>   
                     <div className="card-header">
                        <p className="book-title"> <span className="bold">Title: </span> {book.volumeInfo.title}</p>
                        <p className="authors"> 
                           <span className="bold">Authors: </span> {book.volumeInfo.authors[0]}
                           {book.volumeInfo.authors[1] ? `, ${book.volumeInfo.authors[1]}` : "" }
                        </p>
                     </div>
                     <div className="card-links">
                        <a className="buttons" target="_blank" href="https://books.google.com/books/about/Fantastic_Beasts_and_Where_to_Find_Them.html?hl=&id=ASImDQAAQBAJ">
                           View
                        </a>
                        <a className="buttons">Save</a>
                     </div>
                     <div className="card-description">
                        <p className="synopsis"><span className="bold">Synopsis: </span> {book.volumeInfo.description}</p>
                     </div>
                  </Card>
               )})}
         </div>
      )
   }
}

export default Search;