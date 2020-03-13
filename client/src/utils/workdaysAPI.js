import axios from "axios";

export default {
  // Gets all workdays w/ user id
  getAllThisEmployeeWorkdays: function(id) {
    return axios.get("/api/workdays/allworkdays/" + id);
  },
  // Gets the workday with the given id
  getOneWorkday: function(id) {
    return axios.get("/api/workdays/" + id);
  },
  // Deletes the workday with the given id
  deleteWorkday: function(id) {
    return axios.delete("/api/workdays/" + id);
  },
  // UPDATES an existing workday with the given id
  updateWorkday: function(id) {
    return axios.delete("/api/workdays/" + id);
  },
  // POST a workday to the database
  saveWorkday: function(id, workdaysUpdate) {
    return axios.post("/api/workdays/" + id, workdaysUpdate);
  }
};
