const {Schema, model} = require('mongoose');

const TodoSchema = new Schema({
    text: {
        type: String,
        require: true
    },
    checked: {
        type: Boolean,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('Todo', TodoSchema);