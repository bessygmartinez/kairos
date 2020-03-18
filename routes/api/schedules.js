const router = require("express").Router();
const schedulesController = require("../../controllers/schedulesController");

const Schedule = require("../../models/Schedule");

// Matches with "/api/schedules"
router
  .route("/")
  .get(schedulesController.findAll)
  .post(schedulesController.insertAll)

module.exports = router;
