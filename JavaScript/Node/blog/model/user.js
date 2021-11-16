// creat collections

const mongoose = require('mongoose')

const bcrypt = require('bcrypt');

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

async function createUser() {
    const salt = await bcrypt.genSalt(10); //produce random string
    const pass = await bcrypt.hash('123456', salt);
    const user = await User.create({
            username: 'wang2',
            email: 'wang2@sina.com',
            password: pass,
            role: 'admin',
            state: 0

        }).then(() => console.log('user is created'))
        .catch(() => console.log('user created wrong'));
};

// createUser();

module.exports = {
    User // in ES6, User means "User: User"
}