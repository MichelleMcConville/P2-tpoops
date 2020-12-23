//
const db = require('../models');
const itemController = {
  createItem: (req, res) => {
    db.Item.create(req.body).then((results) => {
      res.json(results);
    });
  },
  getItems: (req, res) => {
    db.Item.findAll().then((results) => {
      res.json(results);
    });
  },
  updateItem: (req, res) => {
    db.Item.update({
      where: {
        id: req.params.id
      }
    }).then((results) => {
      res.json(results);
    });
  },
  deleteItem: (req, res) => {
    db.Item.destroy({
      where: {
        id: req.params.id
      }
    }).then((results) => {
      res.json(results);
    });
  }
};

module.exports = itemController;
