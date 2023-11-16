import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className=' border shadow-lg  z-10 mb-3 shadow-gray-300'>
      <div className='container mx-auto'>
        <div className='flex justify-between py-3 '>
            <h3 className='uppercase font-bold text-xl' >
                logo
            </h3>
            <p className='text-base text-[#718096]'>Hello! Ikrama Hayat <span className='px-2'>|</span> Logout</p>

        </div>
      </div>
      
      </div>
    </>
  )
}

export default Navbar
