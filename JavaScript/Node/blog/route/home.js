const express = require('express');

const home = express.Router();

home.get('/', (req, res) => {
    res.send('home is ready');
})

module.exports = home;