import axios from "axios";

// The getBooks method retrieves books from the server
// It accepts a "query" or term to search the book api for
export default {
  getBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?&key=AIzaSyBFD8e7MSOxH3BfVrbTtQOiFZ3hFJebEqE", 
    { params: { q: query } });
  }
};