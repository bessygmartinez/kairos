const router = require("express").Router();
const workdaysRoutes = require("./workdays");

// Book routes
router.use("/workdays", workdaysRoutes);

module.exports = router;
