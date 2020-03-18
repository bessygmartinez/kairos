import axios from "axios";

export default {
  // GETS ALL workdays for all employee's for manager
  getAllSchedules: function() {
    return axios.get("/api/schedules/");
  },
  // POST a workday to the database
  saveSchedules: function(schedulesUpdate) {
    return axios.post("/api/schedules/", schedulesUpdate);
  }
};
