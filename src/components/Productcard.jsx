import React from 'react'

const Productcard = ({data}) => {
  return (
    <div className='mb-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
            {
                data.map((data)=>(
                    <div className='group' key={data.id}>
                        <div className='relative space-y-3'>
                            <img src={data.img} alt="" className='h-[180px] w-[260px] object-cover rounded-md' />

                            <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200'>
                            <button className='bg-primary text-white px-4 py-2 rounded-3xl'>Shop Now</button>
                            </div>

                        </div>

                        <div className='leading-7'>
                            <h2 className='font-semibold'>{data.title}</h2>
                            <h2 className='font-bold'>${data.price}</h2>
                        </div>

                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Productcard