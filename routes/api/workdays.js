const router = require("express").Router();
const workdaysController = require("../../controllers/workdaysController");

const Workday = require("../../models/Workday");

// Matches with "/api/workdays"
router
  .route("/")
  .get(workdaysController.findAll)

router
  .route("/allworkdays/:id")
  .get(workdaysController.findAllById)

router
  .route("/:id")
  .post(workdaysController.findByIdAndInsertWorkday)
  .put(workdaysController.findByIdAndUpdate);

module.exports = router;
