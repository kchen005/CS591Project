const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kchen005')
const db = mongoose.connection
db.once('open', function () {
    console.log('Connection successful.')
})

module.exports = router;



