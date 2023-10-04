import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { UserAuth } from '../context/AuthContext';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, logIn } = UserAuth();
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password);
      navigate('/')
     
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };
  return (
    <div className=''>
      <img className='w-full h-screen absolute object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
      <div className='bg-black/60 fixed top-0 left-0 bottom-0 w-full h-screen'></div>
      <div className='fixed z-50 px-4 w-full py-24'>
      <div onSubmit={handleSubmit}  className='bg-black/75 text-white max-w-[450px] mx-auto h-[550px]'>
           <form className='flex flex-col py-24 px-8'>
           <h1 className='font-bold text-2xl mb-4'>Sign In</h1>
           {error ? <p className='p-3 my-2 bg-red-500'>Invalid password or email</p> : null}
            <input onChange={(e)=>setEmail(e.target.value)} className=" bg-[#323848] outline-none border-none p-2" autoComplete='email' type="email" placeholder='Email'/>
            <input onChange={(e)=>setPassword(e.target.value)} className='mt-3 bg-[#323848] outline-none border-none p-2' type="password" placeholder='Password' />
            <button className='bg-[#C7382A] mt-3 rounded-sm py-2 '>Sign In</button>
            <div className='flex text-gray-600 mt-3 items-center justify-between'>
             <div className='flex gap-2 items-center'>
              <input type="checkbox" name="" id="" />
              <p>Remember me</p>
             </div>
             <p>Need help?</p>
            </div>
            <p className='mt-3 text-gray-600'>Don't have an account?<Link to="/signup" className='underline ml-1 text-white'>Sign Up</Link></p>
           </form>
      </div>
      </div>
    </div>
  )
}

export default LogIn


