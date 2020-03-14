const router = require("express").Router();
const workdaysRoutes = require("./workdays");

// Workday routes
router.use("/workdays", workdaysRoutes);

module.exports = router;
