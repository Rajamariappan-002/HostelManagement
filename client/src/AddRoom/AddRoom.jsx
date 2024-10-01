import React, {useState} from 'react'
import './AddRoom.css'
import axios from 'axios'

const AddRoom = () => {

    const [roomno, setroomno] = useState('')
    const [roomcapacity, setcapacity] = useState('')
    const [roomtype, setroomtype] = useState('Ac')
    const [description, setdescription] = useState('')

    const handlesubmit = async (event) =>{
        event.preventDefault();

        const isconfirmed = window.confirm("Are you Sure You want to add this room?")
        if(isconfirmed){
            const seatavailability = roomcapacity

            axios.post("http://localhost:3001/addroom",{roomno, roomcapacity, roomtype, seatavailability, description}).then((response)=>{
                    alert(response.data.message)
            })
        }
        setroomno('')
        setcapacity('')
        setdescription('')
    }
 
    
  return (
    <div className='addroom-container'>
        <h3>Add Room</h3>
        <form onSubmit={handlesubmit}>

            <label>Room Number:</label>    
            <input type='text' value={roomno} placeholder='Enter Room no.' onChange={(e)=>setroomno(e.target.value)}required/>
            <label>Room Capacity:</label>
            <input type='text' value={roomcapacity} placeholder='Enter Room Capacity' onChange={(e)=>setcapacity(e.target.value)}required/>
            <label>Room type:</label>
            <select id='roomtype'  onChange={(e)=>setroomtype(e.target.value)} required>
                <option value='Ac'>Ac</option>
                <option value='Non-Ac'>Non-Ac</option>
            </select>
            <label>Description:</label>
            <input type='text' value={description} className='desc' placeholder='Description' onChange={(e)=>setdescription(e.target.value)}></input>
            <button type='submit'>Add Room</button>
        </form>
    </div>
  )
}

export default AddRoom