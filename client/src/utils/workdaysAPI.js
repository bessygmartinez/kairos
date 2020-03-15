import axios from "axios";

export default {
  // GETS ALL workdays w/ user id
  getAllThisEmployeeWorkdays: function(id) {
    return axios.get("/api/workdays/allworkdays/" + id);
  },
  // GETS the workday with the given id
  getOneWorkday: function(id) {
    return axios.get("/api/workdays/" + id);
  },
  // UPDATES an existing workday with the given id
  updateWorkday: function(id, workdaysUpdate) {
    return axios.put("/api/workdays/" + id, workdaysUpdate);
  },
  // POST a workday to the database
  saveWorkday: function(id, workdaysUpdate) {
    return axios.post("/api/workdays/" + id, workdaysUpdate);
  }
};
