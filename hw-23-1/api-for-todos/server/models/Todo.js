const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    text: {
        type: String,
        require: true
    },
    checked: {
        type: Boolean,
        default: false
    },
}, { versionKey: false})

const TodoModel = mongoose.model('Todos', TodoSchema);

module.exports = TodoModel;