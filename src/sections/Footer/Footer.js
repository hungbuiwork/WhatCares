import React from 'react'
import {FaMailBulk, FaPhone, FaLocationArrow} from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className=' py-8 bg-blue-500 flex justify-evenly text-white flex-wrap'>
      <div className=' mx-6 my-2'>
        <p>
          <a href='https://www.google.com/maps?q=4901+Centennial+Plaza+Way+Bakersfield,+CA+93312' target='_blank'>
            <FaLocationArrow className='inline'></FaLocationArrow>
          : 4901 Centennial Plaza Way <br></br>Bakersfield, CA 93312
          </a>
        </p>
      </div>

      <div className=' mx-6 my-2'>
        <p>
          <a href = "tel:+6613878333">
          <FaPhone className = "inline"></FaPhone>
          : (661)387-8333
          </a>
        </p>
      </div>

      <div className=' mx-6 my-2'>
        <p>
          <a href='mailto:info@whatcares.org'>
          <FaMailBulk className=' inline'></FaMailBulk>
          : info@whatcares.org
          </a>
        </p>
      </div>


    </div>
  )
}
