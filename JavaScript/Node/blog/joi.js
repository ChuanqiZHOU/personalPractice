const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string().min(3).max(5).required().error(new Error('username incrected')),

    email: Joi.string().email()

})

// async function run() {
//     try {
//         const value = await schema.validate({ username: 'ab' });
//     } catch (e) {
//         console.log(e);
//         return
//     }
//     console.log('validation has passed')
// }

// run();
async function run() {
    try {
        const value = await schema.validateAsync({ username: 'ab' });
    } catch (e) {
        console.log(e.message);
        return
    }
    console.log('validation has passed');
}

run()