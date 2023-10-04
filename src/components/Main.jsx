import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from "axios"

function Main() {
    const [movies,setMovies]=useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(()=>{
      axios.get(requests.requestPopular).then((res)=>{
        setMovies(res.data.results)
      })
    },[])
    //  console.log(movie)
  return (
    <div className='w-full relative h-[700px]'>
      <div className='w-full h-full'>
        <div className='absolute from-black bg-gradient-to-r w-full h-[700px]'></div>
       <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}/>
      
      <div className='absolute text-white px-7 top-[40%]'>
       <p className='font-bold text-3xl'>{movie?.title}</p>
       <div className='mt-3'>
        <button className='bg-white px-5 py-2 rounded text-black outline-none'>Play</button>
        <button className='border-gray-400 ml-3 px-5 py-2 border text-gray-400'>Watch Later</button>
        </div> 
        <p className='mt-3 text-gray-400'>Released {movie?.release_date}</p>
        <p className='mt-3 w-full text-gray-300 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] '>{movie?.overview}</p>
      </div>
     
     
      </div>
    </div>
  )
}

export default Main
