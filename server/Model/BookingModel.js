const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    }, 
    roomno:{
        type:String,
        required:true
    }
})

const BookingModel = mongoose.model("Bookings", BookingSchema)
module.exports = BookingModel