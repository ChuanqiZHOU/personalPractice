const Joi = require('joi');
//定义对象的验证规则
const schema = {
    username: Joi.string().min(2).max(5),
};
// 使用规则去验证对象

async function run() {
    try {
        await Joi.validate({ username: "" }, schema );
    } catch (ex) {
        console.log(ex);
        return
    }
console.log('pass verification')
}

run()