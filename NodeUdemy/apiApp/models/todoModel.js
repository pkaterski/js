var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var todoModel = mongoose.model('todoM', schema);

module.exports = todoModel;