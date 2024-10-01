import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser,faExclamationCircle, faGavel, faHome, faBook} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

import { useLocation } from 'react-router-dom'
import {Link} from 'react-router-dom'
import './Dashboard.css'
import ViewRooms from '../ViewRooms/ViewRooms'


const Dashboard = () => {

  const [isvisible, setisvisible] = useState(false)

  const location = useLocation() 

  const menutoggle = () =>{
   
    setisvisible(!isvisible)
  }

  const menuttoggle = () =>{
      if(isvisible == true){
        setisvisible(!isvisible)
      }
  }

  return (
   
    <div className='dashboard-div' onClick={menuttoggle}>
      <nav>
      <img src='./assets/menu-bar.png' alt='menu-bar' onClick={menutoggle}></img>
        <div className='stu-dashboard'><h3>Student Dashboard</h3></div>        
      </nav>

      <div className={`menu-bar ${isvisible?'visible':''}`}>

      <div className='loguser'>
         <h4>  <FontAwesomeIcon className='icon' icon={faUser}/>{location.state.id1.name}</h4>
      </div>

      <div className='navbar'>
        <Link to='/dashboard'  className='li'><FontAwesomeIcon className='icon' icon={faHome}/>Home</Link>
        <Link to='/dashboard/complaintregister' className='li'><FontAwesomeIcon className='icon' icon={faExclamationCircle}/>Register a Complaint</Link>
        <Link to='/' className='li'><FontAwesomeIcon className='icon' icon={faBook}/>Rules</Link>
        </div>
      </div>
      <div className='roomsview'>
        <ViewRooms/>
      </div>

    </div>
   
  )
}

export default Dashboard