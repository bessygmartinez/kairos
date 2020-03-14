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
  // .get(workdaysController.findById)
  // .get(workdaysController.findById)
  .post(workdaysController.findByIdAndInsertWorkday)
  // .put(workdaysController.update);

module.exports = router;
