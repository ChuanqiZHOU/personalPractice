const express = require('express');

const admin = express.Router();

admin.get('/', (req, res) => {
    res.send('welcome to admin page')

});
module.exports = { admin }