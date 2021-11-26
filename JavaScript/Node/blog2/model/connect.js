const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog2')
    .then(() => { console.log('database is conected') })
    .catch(() => { console.log('database link is broken') })