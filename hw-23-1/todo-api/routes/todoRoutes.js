const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');


router.post('/todos', async (req, res) => {
    try {
        const {text, checked} = req.body;
        if (!text) {
            return res.status(400).json({error: 'Text is required'});
        }

        const newTodo = new Todo({text, checked: checked || false});
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({error: 'Failed to create todo'});
    }
});


router.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch todos'});
    }
});


router.put('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {new: true});
        if (!updatedTodo) {
            return res.status(404).json({error: 'Todo not found'});
        }
        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json({error: 'Failed to update todo'});
    }
});


router.delete('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).json({error: 'Todo not found'});
        }
        res.status(200).json({message: 'Todo deleted'});
    } catch (error) {
        res.status(500).json({error: 'Failed to delete todo'});
    }
});


module.exports = router;