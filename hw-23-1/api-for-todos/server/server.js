const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const port = 8080;
let todos = [];
app.listen(port, () => {
    console.log(`Server started on ${port}`)
});
app.get('/api/todos', (req, res) => {
    res.send(todos);
});

app.post('/api/todos', (req, res) => {
    const newTodo = {text: req.body.text, checked: false, id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)};
    todos.push(newTodo);
    res.send(newTodo);
});

app.delete('/api/todos/:id', (req, res) => {
    const id = +req.params.id;
    const amountBefore = todos.length;
    todos = todos.filter((todo) => todo.id !== id);
    const dif = amountBefore - todos.length;
    res.send({isSuccess: dif > 0});
});

app.put('/api/todos/:id', (req, res) => {
    const id = +req.params.id;
    const changedTodo = todos.find((todo) => todo.id === id);
    changedTodo.text = req.body.text;
    changedTodo.checked = req.body.isCompleted;
    res.send(changedTodo);
})


/*const mongoURI = 'mongodb+srv://lebedlyuba:tVBABJA2Pf0qGqSX@cluster0.1qijc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'*/