import axios from "axios";

export default {
  // Gets all books
  getBudgets: function() {
    return axios.get("/api/budget");
  },
  // Gets the book with the given id
  getBudget: function(id) {
    console.log(id, "getbudget")
    return axios.get("/api/budget/" + id);
  },
  // Deletes the book with the given id
  deleteBudget: function(id) {
    return axios.delete("/api/budget/" + id);
  },
  // Saves a book to the database
  saveBudget: function(budgetData) {
    return axios.post("/api/budget", budgetData);
  },
  getId: function(id) {
    return axios.get("/api/budget/" + id);
  },
  updateBudget: function(id, budgetData) {
    console.log(id, budgetData, "updatebudget" )
    return axios.put("/api/budget/" + id, budgetData);
  }
};
