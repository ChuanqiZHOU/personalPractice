 const mongoose = require('mongoose');

 // build student schema
 const studentSchema = new mongoose.Schema({
     name: {
         type: String,
         required: true,
         minlength: 2,
         maxlength: 10
     },
     age: {
         type: Number,
         min: 10,
         max: 25
     },
     gender: { type: String },
     email: String,
     hobbies: [String],
     collage: String,
     enterDate: {
         type: Date,
         default: Date.now
     }
 });

 // build Student collection
 const Student = mongoose.model('Student', studentSchema);
 // export Student structure function
 module.exports = Student;