import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Main = () => {
  const roles = ['SOFTWARE ENGINEER', 'FRONTEND DEVELOPER', 'BACKEND DEVELOPER', 'FULLSTACK DEVELOPER', 'UI / UX DESIGNER', 'GRAPHIC DESIGNER'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-lect scale-x-[1]"
        src="https://images.unsplash.com/photo-1491484925566-336b202157a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt="bg"
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-white/10">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">I'm Pathum Lakshan</h1>
          <h2 className="flex pt-4 text-2xl text-gray-800 sm:text-3xl">
            I'm a&nbsp;
            {roles.map((role, index) => (
              <React.Fragment key={index}>
                {currentRoleIndex === index && (
                  <Typewriter
                    options={{
                      delay: 50,
                      deleteSpeed: 20,
                      cursor: ''
                    }}
                    onInit={(typewriter) => {
                      typewriter.typeString(role).start();
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </h2>

          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaFacebookF className="cursor-pointer" size={20} />
            <FaTwitter className="cursor-pointer" size={20} />
            <FaWhatsapp className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaLinkedin className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
