const bcrypt = require('bcrypt')

// create gen-salt

async function run() {
    let salt = await bcrypt.genSalt(10);
   // console.log(salt)
    let pass = await bcrypt.hash('123456', salt);
console.log(pass)
}
//

run()