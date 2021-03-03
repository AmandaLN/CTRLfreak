const router = require("express").Router();
const budgetRoutes = require("./budget");

// Book routes
router.use("/budget", budgetRoutes);

module.exports = router;
