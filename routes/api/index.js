const router = require("express").Router();
const workdaysRoutes = require("./workdays");
const schedulesRoutes = require("./schedules");

// Workday routes
router.use("/workdays", workdaysRoutes);

// Schedule routes
router.use("/schedules", schedulesRoutes);

module.exports = router;
