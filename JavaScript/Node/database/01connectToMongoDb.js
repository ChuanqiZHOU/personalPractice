const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => {
        console.log('linked sucessfully')
    })
    .catch(err => console.log('link to err'))