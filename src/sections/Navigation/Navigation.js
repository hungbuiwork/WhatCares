import React from 'react';
import PropTypes from 'prop-types';



const Navigation = () => (
  <div className=' z-10 sticky float py-4 h-24 top-0 gradient-nav px-2'>
<div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href='#mission'>Our Mission</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a>The Team</a></li>
        <li><a>How you can help</a></li>
      </ul>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>

    <a className="btn btn-ghost normal-case text-2xl">
      <h1>
      <span className = "font-bold text-blue-600">What</span>Cares
      </h1>
    </a>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1">
      <li class = "hover:border-blue-400 border-b-2 border-transparent duration-100"><a href='#mission'>Our Mission</a></li>
      <li class = "hover:border-blue-400 border-b-2 border-transparent duration-100"><a href='#projects'>Projects</a></li>
      <li class = "hover:border-blue-400 border-b-2 border-transparent duration-100"><a>The Team</a></li> 
    </ul>
  </div>
  <div className="navbar-end ">
    <a className="btn border-blue-400 border-2 hover:bg-blue-400 duration-200 bg-transparent">Contact Us</a>
  </div>
</div>
  </div>
);

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
