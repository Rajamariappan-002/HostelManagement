import React from 'react'
import Login from './Login/Login'
import Register from './Register/Register'
import Dashboard from './Dashboard/Dashboard'
import {Route,Routes} from 'react-router-dom'
import AdminDashboard from './AdminDashboard/AdminDashboard'
import AdminLogin from './AdminLogin/AdminLogin'
import AddRoom from './AddRoom/AddRoom'
import AllotRooms from './AllotRooms/AllotRooms'
import ViewRooms from './ViewRooms/ViewRooms'
import ComplaintRegister from './ComplaintRegister/ComplaintRegister'
import ViewComplaints from './ViewComplaints/ViewComplaints'

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element = {<Dashboard/>}/>
        <Route path='/dashboard/admin' element = {<AdminDashboard/>}/>
        <Route path='/adminlogin' element = {<AdminLogin/>}/>
        <Route path='/dashboard/admin/addroom' element = {<AddRoom/>}/>
        <Route path='/dashboard/admin/allotrooms' element ={<AllotRooms/>}/>
        <Route path='/dashboard/viewroom' element={<ViewRooms/>}/>
        <Route path='/dashboard/complaintregister' element={<ComplaintRegister/>}/>
        <Route path='/dashboard/admin/viewcomplaints' element={<ViewComplaints/>}/>
      </Routes>
    </div>
  )
}

export default App