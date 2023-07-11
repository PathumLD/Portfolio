import React from 'react'
import Typewriter from "typewriter-effect";
import {FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
          <img className='w-full h-screen object-cover object-lect scale-x-[-1]' src="https://images.unsplash.com/photo-1491484925566-336b202157a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="bg" />
          <div className='w-full h-screen absolute top-0 left-0 bg-white/20'>
              <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                  <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Pathum Lakshan</h1>
                  <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                      <Typewriter
 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("I'm a Proffessional Counsellor")
                        .pauseFor(1000)
                        .start();
                }}
                      />
                  </h2>
                  
                  <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                      <FaFacebookF className='cursor-pointer' size={20}/>
                      <FaTwitter className='cursor-pointer' size={20}/>
                      <FaWhatsapp className='cursor-pointer' size={20}/>
                      <FaInstagram className='cursor-pointer' size={20}/>
                      <FaLinkedin className='cursor-pointer' size={20}/>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Main
