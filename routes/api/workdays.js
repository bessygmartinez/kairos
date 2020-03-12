const router = require("express").Router();
const workdaysController = require("../../controllers/workdaysController");

const Workday = require("../../models/Workday");

// Matches with "/api/workdays"
router
  .route("/:id")
  .get(workdaysController.findById)
  .post(workdaysController.findByIdAndInsertWorkday)
  .put(workdaysController.update);


module.exports = router;
