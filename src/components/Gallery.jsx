import React from 'react'
import Galleryitem from './Galleryitem'
import Img1 from '../assets/1.jpg'
import Img2 from '../assets/2.jpg'
import Img3 from '../assets/3.jpg'
import Img4 from '../assets/4.jpg'

const Gallery = () => {
  return (
      <div id='gallery' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
          <h1 className='text-4xl font-bold mb-8 text-center'>Gallery</h1>
          <p className='text-center py-8'>  
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum.
          </p>
          <div className='grid sm:grid-cols-2 gap-12'>
              <Galleryitem img={Img1} title='App 1'/>
              <Galleryitem img={Img2} title='App 2'/>
              <Galleryitem img={Img3} title='App 3'/>
              <Galleryitem img={Img4} title='App 4'/>
          </div>
    </div>
  )
}

export default Gallery
