const mongoose = require('mongoose');

const bcrypt = require('bcrypt')
const Joi = require("joi");
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

// 验证用户信息
const validateUser = (user) => {
 const schema = Joi.object({
   username: Joi.string()
     .min(2)
     .max(12)
     .required()
     .error(new Error("username is not passed")), //自定义错误信息,
   email: Joi.string().email().error(new Error("email is not passed")),
   password: Joi.string()
     .regex(/^[a-zA-Z0-9]{3,30}$/)
     .error(new Error("password is not passed")),
   role: Joi.string()
     .valid("normal", "admin")
     .required()
     .error(new Error("role is not crect")),
   state: Joi.number()
     .valid(0, 1)
     .required()
     .error(new Error("state is not crect")),
 });
return schema.validateAsync(user);

}


module.exports = {
    User,
validateUser}