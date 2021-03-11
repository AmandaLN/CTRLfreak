const db = require("../models");

// Defining methods for the budgetController
module.exports = {
  findAll: function (req, res) {
    db.Budget.aggregate()
      .addFields({
        totalExpenses: { $sum: "$expenses.cost" },
      })
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findType: function (req, res) {
    console.log(req.body, "userbudget controller findtype");
    db.Budget.aggregate([
      {$match: {user : req.body.user}}, 
      {$unwind: { path: "$expenses", preserveNullAndEmptyArrays: true}}, 
      {$group: {_id: "$expenses.type", totalType: {$sum: "$expenses.cost"}}}])
      .sort({ _id: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findInventory: function (req, res) {
    console.log(req.params.type, "type find inventory budget controller");
    console.log(req.body, "user find inventory budget controller");
    console.log(req.params)
    db.Budget.aggregate([
      {$unwind: '$expenses'},
         {
             $match: {
                 user : req.body.user ,
                 "expenses.type": { 
                     $in: [
                         req.params.type
                     ] 
                 },
                 
             }
         }])
      .sort({ _id: 1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findExpense: function (req, res) {
    console.log(req.params.user, "dan");
    db.Budget.aggregate()
      .match({ user: req.params.user })
      .addFields({
        totalExpenses: { $sum: "$expenses.cost" },
      })
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    console.log(req.params.id, "budgetcontroller");
    db.Budget.aggregate()
      .match({ user: req.params.id })
      .addFields({
        totalExpenses: { $sum: "$expenses.cost" },
      })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Budget.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log(req.params.id, "update");
    console.log(req.body, "update");
    db.Budget.findOneAndUpdate(
      { user: req.params.id },
      {
        $push: { expenses: req.body },
      },
      { new: true, runValidators: true }
    )
      .then((dbModel) => {
        console.log(dbModel, "after update");
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    console.log(req.body, "delete user");
    console.log(req.params.user, "delete id");
    db.Budget.findOneAndUpdate(
      { user: req.body.user },
      { $pull: { expenses: { _id: req.params.user } } },
      { new: true, runValidators: true }
    )
      // .then((dbModel) => dbModel.remove())
      .then((dbModel) =>{
      console.log(dbModel, "lalalala")
      res.json(dbModel)})
      .catch((err) => res.status(422).json(err));
  },
};
