const router = require("express").Router();
const budgetController = require("../../controllers/budgetController");

// Matches with "/api/budget"
router.route("/")
  .get(budgetController.findAll)
  .post(budgetController.create);

  // Matches with "/api/budget/expenses/:type"

  router.route("/expenses/")
  .put(budgetController.findType)

   // Matches with "/api/budget/inventory/:type"
  router.route("/inventory/:type")
  .put(budgetController.findInventory)

// Matches with "/api/budget/:id"
router
  .route("/:id")
  .get(budgetController.findById)
  .put(budgetController.update)
  .delete(budgetController.remove);
 

  router
  .route("/test/:user")
  .get(budgetController.findExpense)
  .put(budgetController.remove);

module.exports = router;
