import React from 'react';
import PropTypes from 'prop-types';
import cover_image from '../../imgs/honduras2017/12.JPG';


const Intro = () => (
  <div class = "bg-white h-[100vh] mb-8">
    <div className='flex lg:flex-row flex-col'>
      <img src = {cover_image} className = "shadow-xl w-[100%] lg:w-[50%] h-[100vh] object-cover">
      </img>
      
      <div className = "hidden md:flex w-[100%] lg:w-[50%]  h-[100vh] justify-center flex-col  lg:static relative bottom-[100vh]">
        <div className='bg-white p-8 drop-shadow-dark lg:drop-shadow-none h-[60vh] w-[50vw] mx-auto mt-[60vh] lg:m-auto'>
        <h1 className = " font-extrabold text-4xl lg:text-6xl text-left">
          <span className=' text-blue-500'>W</span>orld <br></br>
          <span className=' text-blue-500'>H</span>ealthcare <br></br>
          <span className=' text-blue-500'>A</span>ccess <br></br>
          <span className=' text-blue-500'>T</span>eam</h1>
        <h1 className = " text-xl text-left">this, is a fancy slogan that I need to make up.</h1>
        </div>
      </div>

      <div className = "md:hidden  w-[100%] lg:w-[50%]  h-[100vh] flex justify-center flex-col  lg:static relative bottom-[100vh]">
        <div className=' p-8 drop-shadow-dark lg:drop-shadow-none h-[60vh] w-[90vw] mx-auto mt-[40vh] lg:m-auto'>
        <h1 className = " text-blue-500 drop-shadow-dark font-extrabold text-5xl text-left mb-8">
        <span className=' text-white'>W</span>orld <br></br>
          <span className=' text-white'>H</span>ealthcare <br></br>
          <span className=' text-white'>A</span>ccess <br></br>
          <span className=' text-white'>T</span>eam</h1>
        <h1 className = " text-blue-100 drop-shadow-dark text-xl text-left">this, is a fancy slogan that I need to make up.</h1>
        </div>
      </div>
    </div>
  </div>
);

Intro.propTypes = {};

Intro.defaultProps = {};

export default Intro;
