import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import './ViewRooms.css'


const ViewRooms = () => {

    const [Rooms, setRooms] = useState([])
    const [acrooms, setacrooms] = useState([])
    const [nonacrooms, setnonacrooms] = useState([])

  
    const location = useLocation()
    const email = location.state.id1.email
    console.log(email)


    useEffect(()=>{
        
        axios.get("http://localhost:3001/viewrooms").then((response)=>{
                try{
                    setRooms(response.data.Rooms)
                    
                }catch(e){
                    console.log(e)
                }              

        }).catch((e)=>{
            console.log(e)
        })
    }, [])


    useEffect(()=>{
        const filteredrooms = Rooms.filter(room=>room.roomtype == 'Ac')
        setacrooms(filteredrooms)

        const nonacfilteredrooms = Rooms.filter(room=>room.roomtype == "Non-Ac")
        setnonacrooms(nonacfilteredrooms)   
    },[Rooms])

    const BookRoom = (value) =>{

        const isconfirmed = window.confirm("Are Your sure you want to Book this room?")
        if(isconfirmed){
            const roomno = value.roomno
        axios.post("http://localhost:3001/bookroom", {email,roomno}).then((response)=>{
            alert(response.data.message)
        })
        }else{
            alert("Booking Cancelled")
        }
        
    }

   

  return (
    <div className='viewroom-div'>
        <h3>Air Conditioned Rooms</h3>
        <h5>Air-conditioned rooms in a hostel provide enhanced comfort with controlled temperature settings, ensuring a pleasant stay regardless of external weather conditions.</h5>
        <div className='viewroom'>
            
         {
            acrooms.map((value, index)=>(
                 <div key={index}>
                    <img src='./assets/room-image.jpg' alt='room img'></img>
                   
                        <h4>Room No.:{value.roomno}</h4>
                        <h5>Seats Available :{value.seatavailability}</h5>
                        <p>{value.description}</p> 
                        <button onClick={()=>BookRoom(value)}>Book Room</button>
                </div>
            ))
         }

        </div>

        <h3>Non Ac Rooms</h3>
        <h5>Experience comfort without the chill - our hostel's non-AC rooms provide a cozy stay, perfect for those who prefer natural ventilation.</h5>
        <div className='viewroom'>
            
         {
            nonacrooms.map((value, index)=>(
                 <div key={index}>
                    <img src='./assets/nonac.jpg' alt='room img'></img>
                   
                        <h4>Room No.:{value.roomno}</h4>
                        <h5>Seats Available :{value.seatavailability}</h5>
                        <p>{value.description}</p> 
                        <button onClick={BookRoom}>Book Room</button>   
                </div>
            ))
         }

        </div>
        
        
    </div>
  )
}

export default ViewRooms