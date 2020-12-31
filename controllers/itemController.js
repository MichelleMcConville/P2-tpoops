const db = require("../models");
const itemController = {
  createItem: (req, res) => {
    db.Item.create(req.body).then((results) => res.json(results));
  },

  getItems: (req, res) => {
    db.Item.findAll().then((results) => res.json(results));
  },

  updateItem: (req, res) => {
    db.Item.update(req.body, { where: { id: req.params.id } }).then((results) => res.json(results));
  },

  deleteItem: (req, res) => {
    db.Item.destroy(req.body, { where: { id: req.params.id } }).then((results) => res.json(results));
  },
};
