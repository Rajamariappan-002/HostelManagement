import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Register.css'
import Axios from 'axios'


const Register = () => {

    const [email, setemail] = useState('')
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')
    const [cnfpassword, setcnfpassword] = useState('')
    const [phonenumber, setphonenumber] = useState('')
    const [dateofbirth, setdateofbirth] = useState('')
    const [gender, setgender] = useState('Male')
    const [address, setaddress] =  useState('')

    const navigate = useNavigate()

    const handleregister = async (event) =>{
        event.preventDefault()
        if(password!==cnfpassword){
            alert('Password Mismatch')
        }else{
            Axios.post("http://localhost:3001/registeruser",{email,name,password, phonenumber, dateofbirth,gender, address }).then((response)=>{
                alert(response.data.message)
                navigate("/")
                
            }).catch((e)=>{
                console.log(e)
            })
        }

    }

  return (
    <div className='main-register'>
    <div className='register'>
        <h3>Student Registration Form</h3>
        <form onSubmit={handleregister}>
            <input type='text' placeholder = 'Enter Your Name' value={name} onChange={(e)=>setname(e.target.value)}  required/>
            <label htmlFor='dob'>Date of Birth:</label>
            <input type='date' name='dob' value={dateofbirth} onChange={(e)=>setdateofbirth(e.target.value)}/>
            <label htmlFor='gender'>Gender:</label>
            <select name='gender' onChange={(e)=>setgender(e.target.value)}>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
            </select>
            <label>Address:</label>
            <input type='text' placeholder='Enter Your Address' value={address} onChange={(e)=>setaddress(e.target.value)} required/>
            <label>Phone Number:</label>
            <input type='number' placeholder='000 0000 000' value={phonenumber} onChange={(e)=>setphonenumber(e.target.value)}/>
            <input type='email' placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)} value={email} required/>
            <div>
            <input type='password' placeholder='Enter Your Password' onChange={(e)=>setpassword(e.target.value)} value={password} required/>
            <input type='password' placeholder='Confirm Password' value={cnfpassword} onChange={(e)=>setcnfpassword(e.target.value)} required/>
            </div>
            <button type='submit'>Register</button>
        </form>
    </div>
    </div>
  )
}

export default Register