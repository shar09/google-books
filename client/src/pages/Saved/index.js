import React, { Component } from "react";
import "./style.css";
import Card from '../../components/Card';
import API from '../../utils/API'

class Saved extends Component{
   state = {
      savedBooks : []
   }

   componentDidMount() {
      this.loadBooks();
      const func = () => {
         console.log(this.state.savedBooks);
      };setTimeout(func, 1000);
      
   }
   
   loadBooks = () => {
      API.loadBooks()
      .then(res => this.setState({savedBooks: res.data}))
      .catch(err => console.log(err));
   }

   deleteBook = (id) => {
      //console.log(id);
      API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
   }

   render() {
      let { savedBooks } = this.state;
   return (
      <div>
         <p className="saved-title">Saved Books</p>
         { savedBooks.map(book =>  { return (
                  <Card key={book._id}>
                     <div className="card-img">  
                        <img alt={book.title} 
                           src={book.image ? `${book.image}` : "http://placehold.jp/130x200.png"}
                        /> 
                     </div>   
                     <div className="card-header">
                        <p className="book-title"> <span className="bold">Title: </span> {book.title}</p>
                        <p className="authors"> 
                           <span className="bold"> Authors: </span> 
                           {book.authors ? `${book.authors[0]}` : "Anonymous" }
                           {book.authors && book.authors[1] ? `, ${book.authors[1]}` : "" }
                        </p>
                     </div>
                     <div className="card-links">
                        <button className="delete-button" onClick={() => this.deleteBook(book._id)}>Delete</button>
                     </div>
                     <div className="card-description">
                        <p className="synopsis"><span className="bold">Synopsis: </span> {book.synopsis}</p>
                     </div>
                  </Card>
               )})}
      </div>
   )
   }

}

export default Saved;