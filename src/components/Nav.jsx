import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import { UserAuth } from '../context/AuthContext'
function Nav() {
   const {user,logOut}=UserAuth();
   const navigate=useNavigate();
  //  console.log(user)

  const handleLog =async()=>{
    try { 
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex items-center p-4 justify-between absolute w-full z-[100]'>
      <Link to="/">
      <h1 className='text-red-600 font-extrabold text-2xl md:text-3xl lg:text-4xl'>NETFLIX</h1>
      </Link>
    
    {user?.email ?(
            <div className='mr-2'>
            <Link to="/account">
            <button className='text-white font-bold pr-4'>Account</button>
            </Link>
            <Link to="/signup">
            <button onClick={handleLog} className='rounded px-6 py-2 font-bold text-white bg-red-600'>Logout</button>
            </Link>
          </div>
    ):(
      <div className='mr-2'>
      <Link to="/login">
      <button className='text-white font-bold pr-4'>Sign In</button>
      </Link>
      <Link to="/signup">
      <button className='rounded px-6 py-2 font-bold text-white bg-red-600'>Sign Up</button>
      </Link>
    </div>
    )}

    </div>
  )
}

export default Nav
