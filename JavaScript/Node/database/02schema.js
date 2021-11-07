const mongoose = require('mongoose');
const { stringify } = require('querystring');

// link to database
mongoose.connect('mongodb://localhost/playground')
    .then(() => {
        console.log('linked sucessfully')
    })
    .catch(err => console.log('link to err'))

// creat schema for collections
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
})

// using schema to build collections
const Course = mongoose.model('Course', courseSchema) // Course must be with uppercase

// build document for Course

const course = new Course({
    name: 'node course',
    author: 'teacher',
    isPublished: true
})

// save document to course collection
course.save();