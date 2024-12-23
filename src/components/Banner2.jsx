

import React from 'react'

const Banner = ({data2}) => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12'>
        <div  className="container">
             <div style={{backgroundColor: data2.bgColor}} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">

                <div className='p-6 sm:p-8'>
                    <p className='text-sm'>{data2.discount}</p>
                    <h1 className='uppercase text-4xl lg:text-7xl font-bold'>{data2.title}</h1>
                    <p className='text-sm'>{data2.date}</p>
                </div>

                <div className='h-full flex items-center'>
                    <img src={data2.image} alt="" className='scale-125 w-[250px] md:w-[340px] mx-auto deop-shadow-2xl object-cover' />
                </div>

                <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
                    <p className='font-bold text-xl'>{data2.title2}</p>
                    <p className='text-3xl sm:text-5xl font-bold'>{data2.title3}</p>
                    <p className='text-sm tracking-wide leading-5'>{data2.title4}</p>

                    <div>
                        <button className='bg-white text-primary px-4 py-2 rounded-3xl'>Shop Now</button>
                    </div>



                </div>

            </div>
        </div>
    </div>
  )
}

export default Banner