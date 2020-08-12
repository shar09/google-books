import React, { Component } from "react";
import "./style.css";
import Searchbar from '../../components/Searchbar'
import Card from '../../components/Card';
import API from "../../utils/API";

class Search extends Component {
   state = {
      books : [],
      bookSearch : "",
      saved: []
   }
   
   componentDidMount = () => {
      API.getBooks("twilight")
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

   addToSaved = (books) => {
      console.log(books.volumeInfo.title )
      this.setState({ saved: [books]})
      const func = () => {
         let book = this.state.saved[0];
         API.saveBook({
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors ,
            image: book.volumeInfo.imageLinks.thumbnail,
            synopsis: book.volumeInfo.description,
            link: book.volumeInfo.canonicalVolumeLink,
         })
         .catch(err => console.log(err));
       };setTimeout(func, 1000);
   }

   render() {
      let { books } = this.state;
      if(!books) {
         return (
            <div>
               <Searchbar 
                  value={this.state.bookSearch}
                  onChange={this.handleInputChange}
                  onClick={this.handleForSubmit}
               />
               <p className="no-results">No books found.</p>
            </div>   
         )   
      }
      return (
         <div>
            <Searchbar 
               value={this.state.bookSearch}
               onChange={this.handleInputChange}
               onClick={this.handleForSubmit}
            />
            { books.map(book =>  { return (
                  <Card key={book.id}>
                     <div className="card-img">  
                        <img alt={book.volumeInfo.title} 
                           src={book.volumeInfo.imageLinks ? `${book.volumeInfo.imageLinks.thumbnail}` : "http://placehold.jp/130x200.png"}
                        /> 
                     </div>   
                     <div className="card-header">
                        <p className="book-title"> <span className="bold">Title: </span> {book.volumeInfo.title}</p>
                        <p className="authors"> 
                           <span className="bold"> Authors: </span> 
                           {book.volumeInfo.authors ? `${book.volumeInfo.authors[0]}` : "Anonymous" }
                           {book.volumeInfo.authors && book.volumeInfo.authors[1] ? `, ${book.volumeInfo.authors[1]}` : "" }
                        </p>
                     </div>
                     <div className="card-links">
                        <a id="view-button" className="buttons" target="_blank" href={book.volumeInfo.canonicalVolumeLink}>
                           View
                        </a>
                        <button className="buttons" onClick={() => this.addToSaved(book)}>Save</button>
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