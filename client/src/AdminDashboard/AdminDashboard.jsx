import React from 'react'
import {Link} from 'react-router-dom'
import './AdminDashboarc.css'

const AdminDashboard = () => {
  return (
    <div>
        <div>
          <nav className='adminnav'>
            <h3>Admin Dahsboard</h3>
          </nav>
        </div>
        <div className='admin-container'> 
        <div className='admin-dashboard'>
           <Link className='link' to='/dashboard/admin/addroom'> <div>Add Room</div></Link>
            <Link className='link' to='/dashboard/admin/viewcomplaints'><div>View complaints</div></Link>
            <Link className='link' to='/register'><div>Register a Student</div></Link>
            <div>View Student Details</div>
        </div>
        </div>
        
    </div>
  )
}

export default AdminDashboard