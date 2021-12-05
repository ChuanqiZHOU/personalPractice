const Joi = require('joi');
//定义对象的验证规则
const schema = Joi.object({
  username: Joi.string()
    .min(2)
    .max(5)
    .required()
    .error(new Error("username is not verified")),
  birth_year: Joi.number()
    .required()
    .min(1900)
    .max(2000)
    .error(new Error("birth year is not verified"))
});
// 使用规则去验证对象
//schema.validate({ username: "abcv" })

async function run() {
    try {
        await schema.validateAsync({username:'abcd', birth_year: 1800});
    } catch (ex) {
        console.log(ex.message);
        return
    }
console.log('pass verification')
}

run()