import React, {useState,useEffect} from 'react'
import axios from 'axios'
import './ViewComplaints.css'

const ViewComplaints = () => {

    const [complaints,setcomplaints] = useState([])

   useEffect(()=>{
        axios.get("http://localhost:3001/getcomplaints").then((response)=>{
            setcomplaints(response.data.complaints)
        })
   },[])

   const HandleIssue = (e,value) =>{

        if(e.target.innerHTML == 'Resolved'){
            alert('Already resolved')
        }else{
            const id = value._id      
            axios.put("http://localhost:3001/updatecomplaint", {id}).then((response)=>{
                if(response.data.status == 'success'){
                        const button = e.target
                        button.style.backgroundColor = 'green'
                        button.innerHTML = 'Resolved'
                        alert("Issue Resolved")
                }
            })
        }
       
   }

  return (
    <div>
        <div className='viewcomplaints-div'>
            <h3>Complaints</h3>

            <div className='complaints-div'>
            {
                complaints.map((value,index)=>(
                    <div className='complaint-div' key={index}>
                        <div>
                            <label>Name:</label>
                            <div>{value.name}</div>
                        </div>
                        
                        <div>
                            <label>Email:</label>
                            <div>{value.email}</div> 
                        </div>
                        <div>
                            <label>Room Number:</label>
                            <div>{value.roomno}</div>
                        </div>
                        <div>
                            <label>Complaint Type:</label>
                            <div>{value.complainttype}</div>
                        </div>
                        
                        <div>
                            <label>Description</label>
                            <div>{value.description}</div>
                        </div>
                        
                        <button key={index} onClick={(e)=>HandleIssue(e,value)}>Resolve issue</button>

                    </div>
                ))
            }

            </div>
        </div>
    </div>
  )
}

export default ViewComplaints