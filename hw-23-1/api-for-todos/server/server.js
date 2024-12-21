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


/*const mongoURI = 'mongodb+srv://lebedlyuba:tVBABJA2Pf0qGqSX@cluster0.1qijc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'*/