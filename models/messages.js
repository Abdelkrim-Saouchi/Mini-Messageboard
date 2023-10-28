const mongoose = require('mongoose');

const MessagesSchema = new mongoose.Schema({
  text: String,
  user: String,
  added: Date,
});

module.exports = mongoose.model('Messages', MessagesSchema);
