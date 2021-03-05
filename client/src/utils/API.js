import axios from "axios";

export default {
  // Gets all budget
  getBudgets: function() {
    return axios.get("/api/budget");
  },
  // Gets the budget with the given id
  getBudget: function(id) {
    console.log(id, "getbudget")
    return axios.get("/api/budget/" + id);
  },
  // Deletes the budget with the given id
  deleteBudget: function(id, deleteUser) {
    return axios.put("/api/budget/test/" + id, deleteUser);
  },
  // Saves a budget to the database
  saveBudget: function(budgetData) {
    return axios.post("/api/budget", budgetData);
  },
  getId: function(user) {
    console.log(user, "getId");
    return axios.get("/api/budget/test/" + user);
  },
  updateBudget: function(id, budgetData) {
    console.log(id, budgetData, "updatebudget" )
    return axios.put("/api/budget/" + id, budgetData);
  }
};
