import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,faLock} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import './AdminLogin.css'

const AdminLogin = () => {
    
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const history = useNavigate()

    const handlelogin = async (event) =>{
        event.preventDefault();

        axios.post("http://localhost:3001/loginadmin",{email,password}).then((response)=>{
            if(response.data.status == 'success'){
              alert(response.data.message)
              console.log(response)
              history("/dashboard/admin")
            }else if(response.data.status == 'failure'){
              alert(response.data.message)
            }
        }).catch((e)=>{
          console.log(e)
        })
    }
    
  return (

    <div className='adminmain'>
    <div className='userlogin'>
        <h3>Admin Login</h3>
        <form onSubmit={handlelogin}>
            <FontAwesomeIcon className='user' icon={faUser}/>
            <input type='email' placeholder='Enter Your Email' value={email} onChange={(e)=>setemail(e.target.value)} required/>
            <FontAwesomeIcon className='password' icon={faLock}/>
            <input type='password' placeholder='Enter Your Password' value={password} onChange={(e)=>setpassword(e.target.value)} required/>
            <button type='submit'>Login</button>
        </form>
    </div>
    </div>
  )
}

export default AdminLogin