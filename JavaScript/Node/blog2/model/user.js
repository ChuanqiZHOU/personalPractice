const mongoose = require('mongoose');

const bcrypt = require('bcrypt')

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

async function creatUser() {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash('123456', salt);
    const user = await User.create({
    username: 'wang4',
    email: 'wang4@sina.com',
    password: pass,
    role: 'admin',
    state: 0
    })
}

//creatUser();




module.exports = { User }