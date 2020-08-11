import React, { Component } from "react";
import "./style.css";
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
      .then(res => this.setState({savedBooks: res}))
      .catch(err => console.log(err));
   }

   render() {
   return (
      <div>
          
      </div>
   )
   }

}

export default Saved;