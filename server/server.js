const express = require('express')
const mongoose = require('mongoose')
const userModel = require('./Model/UserModel')
const AdminModel = require('./Model/AdminModel')
const RoomModel = require('./Model/RoomModel')
const BookingModel = require('./Model/BookingModel')
const ComplaintModle = require('./Model/ComplaintModel')
const cors = require('cors')

const app = express()
app.use(cors())

app.use(express.json())

mongoose.connect("mongodb+srv://Raja:raji2002@ecommerce.fhki0.mongodb.net/").then(()=>{
    console.log('MongoDb connection successful')
})


app.post("/registeruser", async (req,res)=>{

    const email = req.body.email   
    console.log(email)
    const finduser = await userModel.find({email:email})

    

    if(finduser.length == 0){
        const user = req.body
        const newuser = new userModel(user)
        await newuser.save()
        res.status(200).json({message:"Successfuly registered"})
    }else{
       res.json({message:"user already registered"})
    }
   
})

app.post("/loginuser", async (req,res)=>{
    const {email, password } = req.body

    try{
        const finduser = await userModel.findOne({email:email, password:password})
        if (finduser){
            console.log(finduser)
            res.json({status:"success", message:"User Login Successful",user:{email:finduser.email, name:finduser.name}})
        }
        else{
            res.json({status:"failure", message:"Unable to find User"})
        }
    }catch(e){
        console.log(e)
    }
})

app.post("/loginadmin", async (req,res)=>{

    const {email,password} = req.body  

    try{
        const finduser = await AdminModel.findOne({email:email, password:password})
        
        if(finduser){
            res.json({status:"success", message:"Login Successful", user:finduser})
        }
        else{
            res.json({status:"failure", message:"unable to find the user"})
        }

    }catch(e){
        console.log(e)
    }
 
})

app.post("/addroom", async (req,res)=>{
    try{
         const Room = new RoomModel(req.body)
         await Room.save()
         res.status(200).json({status:'success', message:'Room Added Successfully'})
    }catch(e){
        console.log(e)
    }
})

app.get("/viewrooms", async (req,res)=>{
    try{
        const Rooms = await RoomModel.find({})
        if(Rooms){
            res.status(200).json({Rooms})
        }
    }catch(e){
        console.log(e)
    }
})

app.post("/bookroom", async (req,res)=>{
    try{
        const email = req.body.email
        
        const user = BookingModel.find({email:email})
        
        if(user){
            res.json({message:"you have already Booked a room"})
        }else{
            const newBooking = new BookingModel(req.body)
            await newBooking.save()
            res.json({message:"Booking Done"}) 
        }       
    }catch(e){
        console.log(e)
    }
})

app.post("/registercomplaint", async (req,res)=>{
    const newcomplaint = new ComplaintModle(req.body)
    await newcomplaint.save().then(()=>{
        res.status(200).send({message:'Complaint Registered'})
    })
})

app.get("/getcomplaints", async (req,res)=>{

    try{
        const complaints = await ComplaintModle.find({})
        if(complaints.length == 0){
            res.json("No Compalaints found")
        }
        else{
            res.json({complaints})
        }
    }catch(e){
        console.log(e)
    }
    
})

app.put("/updatecomplaint", async (req,res)=>{
    try{
        
        await ComplaintModle.updateOne({_id:req.body.id},{$set:{status:true}}).then(()=>{
            res.json({status:'success'})
        }).catch((e)=>{
            console.log(e)
        })

    }catch(e){
        console.log(e)
    }
})

app.listen(3001,()=>{
    console.log("Server is running")
})