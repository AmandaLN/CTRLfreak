const db = require("../models");

// Defining methods for the budgetController
module.exports = {
  findAll: function(req, res) {
    db.Budget
      .find()

      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findExpense: function(req, res) {
    console.log(req.params.user)
    db.Budget
      .aggregate({user: req.params.user})
      .addFields({ 
       totalExpenses: { $sum: "$expenses.cost" }
        })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log(req.params.id, "budgetcontroller")
    db.Budget
      .find({user: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Budget
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log(req.params.id, "update")
    console.log(req.body, "update")
    db.Budget
      .findOneAndUpdate({ user: req.params.id },
        {
          $push: { expenses: req.body },
        },
        { new: true, runValidators: true })
      .then(dbModel => {
        console.log(dbModel, "after update")
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Budget
      .findOneAndUpdate({ user: req.params.id } ,{$pull: { expenses: { _id: req.params.id }}})
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
