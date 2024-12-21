import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";

const DropdownLinks=[
  {
    id: 1,
    name: "trending products",
    link: "/#"
  },
  {
    id: 2,
    name: "best selling",
    link: "/#"
  },
  {
    id: 3,
    name: "top rated",
    link: "/#"
  },
]

const Navbar = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-4'>
        <div className="container flex justify-between items-center">
          <div className='flex items-center gap-4'>
            <a href="#" className='text-primary font-semibold tracking-widest uppercase text-2xl sm:text-3xl'>
              Eshop
            </a>
            <div className=' lg:block'> 
              <ul className='flex items-center gap-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>
                <li><a href="#">home</a></li>
                <li><a href="#">shop</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">blog</a></li>

                <li className='relative cursor-pointer group'>
                    <a href="#" className='flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2'>Quick Links

                    <span>
                      <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                    </span> 

                    </a>

                      <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>
                        <ul className='space-y-2'>
                              {
                                DropdownLinks.map((data,index)=>(
                                  <li>
                                    <a 
                                    className='text-gray-500 hover:text-black dark:hover:text-white duration-200 hover:bg-gray-400'
                                    href={data.link}>{data.name}</a>
                                  </li>
                                ))
                              }
                        </ul>
                      </div>
                   
                </li>

              </ul>
            </div>
          </div>
          <div className='flex justify-between items-center gap-4'>
            <div className='relative group hidden sm:block'>
            <input type="text" placeholder='search' className='search-bar'/>
            <IoMdSearch  className='text-xl text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-primary'/>
          </div>



          <button>
          <FaShoppingCart className='text-xl text-gray-600 dark:text-gray-400'/>
          </button>
        </div>
      </div> 
    </div>
    </div>
  )
}

export default Navbar;