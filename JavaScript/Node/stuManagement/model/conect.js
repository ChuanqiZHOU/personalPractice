const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('database is connected'))
    .catch(() => console.log('database connected error'));