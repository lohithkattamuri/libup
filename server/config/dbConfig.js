const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://lohithkattamuri22:12345@cluster0.bzhhtv1.mongodb.net/library")

const connection = mongoose.connection;

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

connection.on('error' , (err)=>{
    console.log('Mongo DB Connection Failed');
})

module.exports = connection;