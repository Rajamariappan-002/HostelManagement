import React, { useState } from 'react'
import axios from 'axios'
import './ComplaintRegister.css'

const ComplaintRegister = () => {

    const [name,setname] = useState('')
    const [email, setemail] = useState('')
    const [complainttype,setissue] = useState('Cleanliness Issues')
    const [description,setdescription] = useState('')
    const [roomno,setroomno] =  useState('')

    const HandleComplaint = (event) =>{
        event.preventDefault()
        
        axios.post("http://localhost:3001/registercomplaint", {name, email, roomno, complainttype, description}).then((response)=>{
          alert(response.data.message)
        }).catch((e)=>{
          console.log(e)
        })
    }


  return (
    <div className='complaintpage'>
        

        <form className='complaintform' onSubmit={HandleComplaint}>
        <h3>Register A complaint</h3>
          <label>Name:</label>
          <input type='text' value={name} onChange={(e)=>setname(e.target.value)} placeholder='Enter Your name' required/>
          <label>Email:</label>
          <input type='text' value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter Your Email' required/>
          <label>Room No.:</label>
          <input type='text' value={roomno} onChange={(e)=>setroomno(e.target.value)} placeholder='Enter Your Room Number' required/>
          <label>Issue Type:</label>
          <select id='issue'  onChange={(e)=>setissue(e.target.value)}>
            <option>Cleanliness Issues</option>
            <option>Noise Disturbances</option>
            <option>Facilities and Maintenance</option>
            <option>Security Concerns</option>
            <option>Roommate Issues</option>
            <option>Health and Safety</option>
            <option>Amenities and Services</option>
          </select>

          <label>Description:</label>
          <input type='text' className='desc' value={description} onChange={(e)=>setdescription(e.target.value)} placeholder='Describe in Words' required/>

          <button type='submit'>Register Complaint</button>
        </form>

    </div>
  )
}

export default ComplaintRegister