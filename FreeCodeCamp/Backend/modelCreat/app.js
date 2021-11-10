const http = require('http');

const app = http.createServer();

app.on('request', (req, res) => {
    res.end('ok');
}).listen(3000);


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/modelCreat').then(console.log("conection is started"));

const stuSchema = new mongoose.Schema({
    name: { type: String },
    age: Number,
    gender: String
})

const Student = mongoose.model('Student', stuSchema);

const student1 = new Student({
    name: "tom",
    age: 10,
    gender: "male"
});

student1.save();

Student.create({ name: "Jerry", age: 10, gender: "male" });

const arrayStu = ["tom", "Jerry"];

// const sFinding = Student.find({ name: { $in: arrayStu } });
// console.log(sFinding);