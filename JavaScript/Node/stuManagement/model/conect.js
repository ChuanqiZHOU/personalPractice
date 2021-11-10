const mongoose = require('mongoose');
const Student = require('./user');
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('database is connected'))
    .catch(() => console.log('database connected error'));


//Student.create('')