const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String, // admin or normal
        required: true,
    },
    state: {
        typed: Number,
        default: 0, // 0 means active, 1 means inactive
    }
})

const User = mongoose.model('User', userSchema);

// User.create({
//     username: 'wang2',
//     email: 'wang2@sina.com',
//     password: '123456',
//     role: 'admin',
//     state: 0
// }).then(() => {
//     console.log('user has been created')
// }).catch(() => { console.log('user creation is wrong') })




module.exports = { User }