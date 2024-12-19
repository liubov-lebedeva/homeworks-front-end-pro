const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');


router.post('/todos', async (req, res) => {
    try {
        const newTodo = new Todo(req.body);
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create todo' });
    }
});


router.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});


router.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedTodo);
});


router.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({ message: 'Todo deleted' });
});

module.exports = router;