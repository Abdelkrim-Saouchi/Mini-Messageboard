const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini MessageBoard', messages: messages });
});

// new message page
router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Send Message' });
});

router.post('/new', function (req, res, next) {
  const userName = req.body.userName;
  const userMessage = req.body.userMessage;
  const added = new Date();
  messages.push({ user: userName, text: userMessage, added });
  res.redirect('/');
});

module.exports = router;
