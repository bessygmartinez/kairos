const router = require("express").Router();
const workdaysController = require("../../controllers/workdaysController");

const Workday = require("../../models/Workday");

// Matches with "/api/books"
router.route("/dashboard")
  .get(workdaysController.findById)
  .put(workdaysController.update);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(workdaysController.findById)
  .put(workdaysController.update)
  .delete(workdaysController.remove);

module.exports = router;
