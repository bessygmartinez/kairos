import axios from "axios";

export default {
  // Gets all books
  getAllEmployeeWorkdays: function() {
    return axios.get("/api/manager/workdays/");
  },
  // Gets the book with the given id
  getOneWorkday: function(id) {
    return axios.get("/api/workdays/" + id);
  },
  // Deletes the book with the given id
  deleteWorkday: function(id) {
    return axios.delete("/api/workdays/" + id);
  },
  // Saves a book to the database
  saveWorkday: function(workdayData) {
    return axios.post("/api/workdays", workdayData);
  }
};
