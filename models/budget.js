const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  user: { type: Number, default: 1 },
  expires: { type: Date, default: Date.now },
  cost: { type: Number, default: 0 },
  date: { type: Date, default: Date.now }
});

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;
