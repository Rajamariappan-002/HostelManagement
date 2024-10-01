const mongoose = require('mongoose')

const ComplaintSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },

    roomno:{
        type:String,
        required:true
    },
    
    complainttype:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:false
    }
})

const ComplaintModel = mongoose.model("Complaints", ComplaintSchema)
module.exports = ComplaintModel