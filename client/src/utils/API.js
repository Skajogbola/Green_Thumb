import axios from "axios";
const apiUrl = "http://localhost:3001/api"

export default {
  // Gets books from the Google API
  getUser: function (q) {
    return axios.post(`${apiUrl}/login`, q);
  },
  // Gets all saved books
  getSavedBooks: function () {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },

  //Go to the login page
  loginInfo: function (data) {
    return axios.post("http://localhost:3001/api/signin", data);
  },
  getPlants: function () {
    return axios.get(`${apiUrl}/getPlants`);
  },
};
