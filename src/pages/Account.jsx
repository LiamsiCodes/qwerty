import React from 'react';

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img
          className='w-full h-[400px] object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='/'
        />
        <div className='bg-black/50 fixed top-0 bottom-0 left-0 w-full h-[400px]'></div>
        <div className='absolute  top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>Netflix Plans:</h1>
        </div>
      </div>

      <div className='mt-3 text-white relative  grid md:grid-cols-3 text-center grid-cols-1'>
      
        <div className='flex p-3 flex-col'>
         <h1 className='font-bold text-[#CA1224] text-3xl'>Basic</h1>

         <div className='flex items-center justify-center'>
          <hr className='w-36 mt-2' />
         </div>

         <p className='font-bold p-2'>HD quality</p>
         <p className='font-bold p-2'>Access only for 2 devices</p>
         <p className='font-bold p-2'>No access for the latest hot movies</p>
         <p className='font-bold p-2'>Limited series and movies</p>
         <p className='font-bold p-2'><span className='text-3xl'>12$</span>/mo</p>
        </div>

        <div className='flex flex-col'>
         <h1 className='font-bold text-[#CA1224] text-3xl'>Standard</h1>

         <div className='flex items-center justify-center'>
          <hr className='w-36 mt-2' />
         </div>

         <p className='font-bold p-2'>4K quality</p>
         <p className='font-bold p-2'>Access for 3 devices</p>
         <p className='font-bold p-2'>No access for the latest hot movies</p>
         <p className='font-bold p-2'>Unlimited series and movies</p>
         <p className='font-bold p-2'><span className='text-3xl'>22$</span>/mo</p>
        </div>

        <div className='flex flex-col '>
         <h1 className='font-bold text-[#CA1224] text-3xl'>Premuim</h1>
        
         <div className='flex items-center justify-center'>
          <hr className='w-36 mt-2' />
         </div>
        
         <p className='font-bold p-2'>8k quality</p>
         <p className='font-bold p-2'>Access only for 6 devices</p>
         <p className='font-bold p-2'>Access for the latest hot movies</p>
         <p className='font-bold p-2'>Unlimited series and movies</p>
         <p className='font-bold p-2'><span className='text-3xl'>32$</span>/mo</p>
        </div>

      </div>
    </>
  );
};

export default Account;