const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const TodoModel = require('./models/Todo');

const app = express();
app.use(cors());
app.use(express.json());


const mongoURI = 'mongodb+srv://lebedlyuba:tVBABJA2Pf0qGqSX@cluster0.1qijc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(
    mongoURI,
    {}
)

const port = 8080;
app.listen(port, () => {
    console.log(`Server started on ${port}`)
});
app.get('/api/todos', async (req, res) => {
    const allTodos = await TodoModel.find();
    res.send(allTodos);
});

app.post('/api/todos', async (req, res) => {
    const newTodo = new TodoModel({text: req.body.text, checked: false});
    await newTodo.save();
    res.send(newTodo);
});

app.delete('/api/todos/:id', (req, res) => {
    const id = req.params.id;
    TodoModel.deleteOne({_id: id}).then(result => res.send(result));
});

app.put('/api/todos/:id', (req, res) => {
    const id = req.params.id;
    TodoModel.findOneAndUpdate({_id: id}, {
        $set: {
            text: req.body.text,
            checked: req.body.isCompleted
        }
    }, {new: true}).then(result => {
        res.send(result)
    });
})