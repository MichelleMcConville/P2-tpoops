const path = require('path');
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const router = require('express').Router();
const db = require('../../models');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/home', (req, res) => {
  res.render('index');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/input', (req, res) => {
  res.render('input');
});

router.get('/search', (req, res) => {
  db.Item.findAll().then((dbItem) => {
    res.render('search', { items: dbItem });
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/home', isAuthenticated, (_req, res) => {
  res.sendFile(path.join(__dirname, '../../public/home.html'));
});

module.exports = router;
