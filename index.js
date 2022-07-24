require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
//const bp = require('body-parser');
//app.use(bp.json());
//app.use(bp.urlencoded({ extended: true }));
//app.use(bp.json())
//app.post('/apple', (req, res) => {
//    console.log(req.body);
//    res.send('Hello World!')
//})


app.use(express.json());

const routes = require('./routes/routes');
app.use('/api', routes);


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

