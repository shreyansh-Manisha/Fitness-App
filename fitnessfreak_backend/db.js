const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect("mongodb://127.0.0.1:27017/fitnessdb").then(
    () => {
        console.log('Connected to database');
    }
).catch((err) => {
    console.log('Error connecting to database ' + err);
})