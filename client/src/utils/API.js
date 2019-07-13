import axios from "axios";

export default {
  // Gets books from the Google API
  getUser: function(q) {
    return axios.get("/api/user/"+id);
  },
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  //Go to the login page
  login: function(data) {
    return axios.post("/api/books", data);
  }
};
