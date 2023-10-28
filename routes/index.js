const express = require('express');
const Messages = require('../models/messages');
const router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  // get all messages from db
  const messages = await Messages.find();
  res.render('index', { title: 'Mini MessageBoard', messages: messages });
});

// new message page
router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Send Message' });
});

router.post('/new', async function (req, res, next) {
  const userName = req.body.userName;
  const userMessage = req.body.userMessage;
  const added = new Date();
  // create document in messages collection
  const userMsg = new Messages({
    user: userName,
    text: userMessage,
    added,
  });
  // save record
  await userMsg.save();
  res.redirect('/');
});

module.exports = router;
