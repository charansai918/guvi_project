import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Profile() {

    let location=useLocation()
  return (
    <div className='profile'>
        <h2 className='text'>Name:   {location.state.name}</h2>
        <h2 className='text'>Age: {location.state.age}</h2>
        <h2 className='text'>Gender: {location.state.gender}</h2>
        <h2 className='text'>MobileNo: {location.state.mobileNo}</h2> 
        <Link to="/"> 
        <button className='profile-button' type='button'>Logout</button>   
        </Link>  
    </div>
  )
}

export default Profile