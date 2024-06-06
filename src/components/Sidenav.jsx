import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineBook, AiOutlineProject, AiOutlineContacts} from 'react-icons/ai'
import { RiGalleryLine } from "react-icons/ri";
const Sidenav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div>
          <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
          {
              nav ? (
                  <div className='fixed z-20 flex flex-col items-center justify-center w-full h-screen bg-white'>
                      <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-duration-200'>
                          <AiOutlineHome size={20} />
                          <span className='pl-4'>Home</span>
                      </a>

                      <a onClick={handleNav} href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-duration-200'>
                          <AiOutlineBook size={20} />
                          <span className='pl-4'>About</span>
                      </a>

                      <a onClick={handleNav} href="#gallery" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-duration-200'>
                          <RiGalleryLine size={20} />
                          <span className='pl-4'>Gallery</span>
                      </a>

                      <a onClick={handleNav} href="#project" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-duration-200'>
                          <AiOutlineProject size={20} />
                          <span className='pl-4'>Project</span>
                      </a>

                      <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-duration-200'>
                          <AiOutlineContacts size={20} />
                          <span className='pl-4'>Contact</span>
                      </a>
                  </div>
              )
                
              : (
                  ''  
                )
          }

          <div className='md:block hidden fixed top-[25%] z-10'>
              <div className='flex flex-col'>
                  <a href='#main' className='p-4 m-2 duration-300 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                      <AiOutlineHome size={20} />
                  </a>

                  <a href='#work' className='p-4 m-2 duration-300 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                      <AiOutlineBook size={20} />
                  </a>

                  <a href='#gallery' className='p-4 m-2 duration-300 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                      <RiGalleryLine size={20} />
                  </a>

                  <a href='#project' className='p-4 m-2 duration-300 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                      <AiOutlineProject size={20} />
                  </a>

                  <a href='#contact' className='p-4 m-2 duration-300 ease-in bg-gray-100 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                      <AiOutlineContacts size={20} />
                  </a>
              </div>
          </div>
    </div>
  )
}

export default Sidenav
