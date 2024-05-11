import React from 'react'
import { GoSearch } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return (
    <header className='fiexd w-[100%] z-[1000] bg-white shadow-md'>
      <div className='flex items-center justify-between mx-auto h-[12] w-[80%]'>
        <div className='font-logo text-emerald-500 text-[28px] cursor-pointer mb-2'>
          <sapn className="text-[40px] md:text-[50px] text-indigo-600">E-</sapn>
          Shop
        </div>

        <div className="hidden lg:flex items-center justify-between w-full max-w-sm border rounded-full focus-within:shadow pl-2">
          <input type="text" placeholder='Product Search here...' className='w-full outline-none' />
          <div className='flex items-center justify-center text-lg bg-emerald-600 min-w-[50px] h-8 rounded-r-full text-white'>
            <GoSearch />
          </div>
        </div>

        <div className='flex items-center gap-7'>
          <div className='text-3xl cursor-pointer'>
            <FaRegCircleUser />
          </div>

          <div className='text-2xl relative'>
          <span><FaShoppingCart /></span>
            <div className='flex items-center rounded-full justify-center w-5 h-5 p-1 bg-red-600 text-white absolute -top-2 -right-3'>
              <p className='text-sm'>0</p>
            </div>
          </div>

          <div>
            <button className='px-3 py-1 rounded-full bg-blue-400 text-white hover:bg-blue-800'>Login</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;