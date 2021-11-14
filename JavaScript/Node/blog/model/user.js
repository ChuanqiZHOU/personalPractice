// creat collections

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        //unique means no repeated
        unique: true,

    },
    password: {
        type: String,
        required: true,
    },

    role: {

        type: String,
        require: true,
    },

    state: {

        type: Number,
        // 0 means start 1 means stop
        default: 0
    }
});

const User = mongoose.model('User', userSchema)
    // the following is test coding for User creation
    // User.create({
    //         username: 'wang1',
    //         email: 'wang1@sina.com',
    //         password: '123456',
    //         role: 'admin',
    //         state: 0

//     }).then(() => console.log('user is created'))
//     .catch(() => console.log('user created wrong'));
module.exports = {
    User // in ES6, User means "User: User"
}