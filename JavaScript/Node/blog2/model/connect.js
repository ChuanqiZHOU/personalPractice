const mongoose = require('mongoose');
//导入config 模块
const config = require('config');
mongoose
  .connect(
    `mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get(
      'db.host'
    )}:${config.get('db.port')}/${config.get('db.name')}`
  )
  .then(() => {
    console.log("database is conected");
  })
  .catch(() => {
    console.log("database link is broken");
  });

//   mongoose
//     .connect(
//       `mongodb://bill:bill@localhost:27017/blog2`
//     )
//     .then(() => {
//       console.log("database is conected");
//     })
//     .catch(() => {
//       console.log("database link is broken");
//     });