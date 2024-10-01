const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
    email:{
        type:String,
        required:true
    },   
    
    name:{
        type:String,
        required:true
    }, 
    password:{
        type:String,
        required:true
    }, 
    phonenumber:{
        type:String, 
        required:true
    },
    dateofbirth:{
        type:String,
        required:true
    }, 
    gender:{
        type:String,
        required:true
    }, 
    address:{
        type:String, 
        required:true
    }
})

const userModel = mongoose.model("users", userSchema)
module.exports = userModel