import React from 'react'
import image1 from "../assets/category/gaming.png"
import image2 from "../assets/category/vr.png"
import image3 from "../assets/category/speaker.png"


const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">


            <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-500 to-gray-200 rounded-3xl relative h-[320px ] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-30 mb-2'>Laptop</p>
                            <button className='bg-primary text-white px-4 py-2 rounded-full '>Browse</button>


                        </div>
                    </div>
                    <img src={image1} alt="" className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0' />
                </div>



                <div className='py-10 pl-5 bg-gradient-to-br bg-brandGreen text-white rounded-3xl relative h-[320px] flex items-end'>
    <div>
        <div className='mb-4'>
            <p className='mb-[2px] text-white'>Enjoy</p>
            <p className='text-2xl font-semibold mb-[2px]'>With</p>
            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
            <button className='bg-white text-brandGreen px-4 py-2 rounded-full hover:bg-red-600'>Browse</button>
        </div>
    </div>
    <img src={image2} alt="" className='w-[200px] absolute top-9 right-0 m-0 p-0' />
</div>

                <div className='py-10 pl-5 bg-brandBlue text-white rounded-3xl relative h-[320px ] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-30 mb-2'>Gadget</p>
                            <button className='bg-white text-brandBlue px-4 py-2 rounded-full hover:bg-red-600 '>Browse</button>


                        </div>
                    </div>
                    <img src={image3} alt="" className='w-[200px] absolute top-9 right-0 m-0 p-0' />
                </div>
              
              
            </div>

        </div>

    </div>
  )
}

export default Category