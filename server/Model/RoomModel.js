const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({
    roomno:{
        type:String,
        required:true
    }, 
    roomcapacity:{
        type:String, 
        required:true
    }, 
    roomtype:{
        type:String, 
        required:true
    },
    seatavailability:{
        type:String, 
        required:true
    },
    description:{
        type:String, 
        required:true
    },
    status:{
        type:Boolean,
        default:false,
        required:true
    }
})

const RoomModel = mongoose.model("Rooms", RoomSchema)
module.exports = RoomModel