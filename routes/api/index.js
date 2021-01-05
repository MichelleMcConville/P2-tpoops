const router = require('express').Router();
const db = require('../../models');
const passport = require('../../config/passport');
const itemController = require('../../controllers/itemController');

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({
    email: req.user.email,
    id: req.user.id
  });
});

router.post('/signup', (req, res) => {
  db.User.create(req.body)
    .then(() => {
      res.redirect(307, '/api/login');
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

router.get('/user_data', (req, res) => {
  if (!req.user) {
    return res.json({});
  }
  const { password, ...user } = req.user;
  res.json(user);
});

router.get('/user', (req, res) => {});

router.post('/user', (req, res) => {});

router.put('/user/:id', (req, res) => {});

router.delete('/user/:id', (req, res) => {});

router.get('/items', itemController.getItems);

router.post('/items', itemController.createItem);

router.put('/items/:id', (req, res) => {
  itemController.updateItem(req, res);
});

router.delete('/items/:id', (req, res) => {
  itemController.deleteItem(req, res);
});

router.post('/test', (req, res) => {
  console.log('INCOMING REQUEST FROM FRONT END---> ', req.body);
});

module.exports = router;
