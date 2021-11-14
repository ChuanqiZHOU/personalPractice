const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/blog')
    .then(() => {
        console.log(' database is connected successfully')
    })
    .catch(() => console.log('database is not connected'))