import axios from "axios";

export default {
  // Gets all workdays
  getAllEmployeeWorkdays: function() {
    return axios.get("/api/manager/workdays/");
  },
  // Gets the workday with the given id
  getOneWorkday: function(id) {
    return axios.get("/api/workdays/" + id);
  },
  // Deletes the workday with the given id
  deleteWorkday: function(id) {
    return axios.delete("/api/workdays/" + id);
  },
  // Saves a workday to the database
  saveWorkday: function(id, workdaysUpdate) {
    return axios.post("/api/workdays/" + id, workdaysUpdate);
  }
};
