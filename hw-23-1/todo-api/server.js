const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', todoRoutes);


const mongoURI = 'mongodb://localhost:27017/todo';
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));


app.get('/', (req, res) => {
    res.send('API is running...');
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));