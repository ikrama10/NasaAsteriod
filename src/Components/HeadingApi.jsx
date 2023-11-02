import React from 'react'

const HeadingApi = () => {
  return (
    <>
    <div className=' bg-gray-100'>
    <div className='container mx-auto'>
        <div className='flex w-full justify-between items-center'>
            <h3 className='uppercase text-[#718096] text-bold'>id</h3>
            <h3 className='capitalize text-[#718096] text-bold'>name</h3>
            <h3  className='capitalize text-[#718096] text-bold'>date</h3>
            <h3 className='capitalize text-[#718096] text-bold'>time</h3>
            <h3 className='capitalize text-[#718096] text-bold'>ab magnitutde</h3>
            <div className='flex flex-row'>
                <h3 className='capitalize text-[#718096] text-bold'>Min - Max Est Diameter</h3>
                <select className='w-full text-black border' name="lilo" id="">
                    <option value="Kilo Meter">Kilo Meter</option>
                    <option value="Meters">Meters</option>
                    <option value="Miles">Miles</option>
                    <option value="Feet">Feet</option>
                </select>
            </div>
            <div className='flex flex-row'>
                <h3 className='capitalize text-[#718096] text-bold'>Relative Velocity</h3>
                <select className='w-full text-black border' name="km" id="">
                    <option value="KM/Sec">KM/Sec</option>
                    <option value="KM/hours">KM/hour</option>
                    <option value="Miles/hours">Miles/hours</option>
                </select>
            </div>
            <h3 className='capitalize text-[#718096] text-bold'>hazard </h3>
            <h3 className='capitalize text-[#718096] text-bold'>Add to favourite</h3>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default HeadingApi
