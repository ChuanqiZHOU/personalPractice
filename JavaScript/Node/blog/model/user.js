// creat collections

const mongoose = require('mongoose')

const bcrypt = require('bcrypt');

const Joi = require('joi');

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

//createUser();

// to verify the user

const validateUser = (user) => {
    // define the schema of Joi

    const schema = Joi.object({
        username: Joi.string().min(2).max(12).required().error(new Error('username is wrong')),
        email: Joi.string().email().error(new Error('email is wrong')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{2,30}$/).required().error(new Error('password is wrong')),

        role: Joi.string().valid('normal', 'admin').required().error(new Error('role is wrong')),

        state: Joi.number().valid(0, 1).error(new Error('state is wrong'))

    });
    // here must be use validateAsync, because the return is object, can not be used by validate
    return schema.validateAsync(user);

}

module.exports = {
    User, // in ES6, User means "User: User"
    validateUser
}