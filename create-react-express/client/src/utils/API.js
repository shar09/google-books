import axios from "axios";

export default {
  getBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?&key=AIzaSyBFD8e7MSOxH3BfVrbTtQOiFZ3hFJebEqE", 
    { params: { q: query } });
  },

  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("save", bookData);
    return axios.post("/api/books", bookData);
  },

  // Gets all books
  loadBooks: function() {
    return axios.get("/api/books");
  },
};