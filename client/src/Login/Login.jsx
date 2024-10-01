import React, { useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,faLock} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Login.css'



const Login = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const history = useNavigate()

    const handlelogin = async (event) =>{
        event.preventDefault();

        axios.post("http://localhost:3001/loginuser",{email,password}).then((response)=>{
            if(response.data.status == 'success'){
              alert(response.data.message)
              history("/dashboard",{state:{id1:response.data.user}})
            }else if(response.data.status == 'failure'){
              alert(response.data.messsage)
            }
        }).catch((e)=>{
          console.log(e)
        })
    }

  return (
    <div className='main'>
    <div className='userlogin'>
        <h3>User Login</h3>
        <form onSubmit={handlelogin}>
            <FontAwesomeIcon className='user' icon={faUser}/>
            <input type='email' placeholder='Enter Your Email' value={email}  onChange={(e)=>setemail(e.target.value)} required></input>
            <FontAwesomeIcon className='password' icon={faLock}/>
            <input type='password' placeholder='Enter Your Password' value={password} onChange={(e)=>setpassword(e.target.value)} required/>
            <button type='submit'>Login</button>
        </form>

        <div>Don't have an account?   <Link to='/register' className='registerlink'>Register Now</Link></div>
        <Link to='/adminlogin'>Admin Login</Link>
    </div>
    </div>
  )
}

export default Login