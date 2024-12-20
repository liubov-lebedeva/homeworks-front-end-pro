const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const port = 8080;
let todos = [];
app.listen(port, () => {
    console.log(`Server started on ${port}`)
});
app.get('/api/todos', (req, res) => {
    res.send(todos);
});


/*const mongoURI = 'mongodb+srv://lebedlyuba:tVBABJA2Pf0qGqSX@cluster0.1qijc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'*/