import React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';



const Navigation = () => (
  <div className=' z-10 sticky float py-4 h-36 top-0 gradient-nav px-2'>
<div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 bg-base-100 rounded-box w-52">
        <li><Link activeClass="active" to="mission" spy={true} smooth={true} offset={-36} duration={500}>Our Mission</Link></li>
        <li><Link activeClass="active" to="projects" spy={true} smooth={true} offset={-36} duration={500}>Projects</Link></li>
        <li><Link activeClass="active" to="team" spy={true} smooth={true} offset={-36} duration={500}>Team</Link></li>
        <li><Link activeClass="active" to="contribute" spy={true} smooth={true} offset={-36} duration={500}>Donate</Link></li>
        <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-36} duration={500}>Contact Us</Link></li>
      </ul>
    </div>
    <Link className=' cursor-pointer' activeClass="active" to="main" spy={true} smooth={true} offset={-36} duration={500}>
      <img src={require('../imgs/icons/logo.png')} className=' h-24 w-auto hidden md:block'></img>
    </Link>

    <a className="btn btn-ghost normal-case text-5xl" href='#main'>
      <h1 className=' hidden xl:inline'>
      <span className = "font-bold text-blue-600">What</span>Cares
      </h1>
    </a>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1 text-lg items-center">
      <li class = "hover:border-blue-400 border-b-2 border-transparent duration-100 text-gray-700"><Link activeClass="active" to="mission" spy={true} smooth={true} offset={-36} duration={500}>Our Mission</Link></li>
      <li class = "hover:border-blue-400 border-b-2 border-transparent duration-100 text-gray-700 "><Link activeClass="active" to="projects" spy={true} smooth={true} offset={-36} duration={500}>Projects</Link></li>
      <li class = "hover:border-blue-400 border-b-2 border-transparent duration-100 text-gray-700"><Link activeClass="active" to="team" spy={true} smooth={true} offset={-36} duration={500}>Team</Link></li>
      <li class = "hover:border-blue-400 border-b-2 border-transparent duration-100 text-gray-700"><Link activeClass="active" to="contribute" spy={true} smooth={true} offset={-36} duration={500}>Donate</Link></li> 
    </ul>
  </div>
  <div className="navbar-end">
    <Link className=' cursor-pointer' activeClass="active" to="main" spy={true} smooth={true} offset={-36} duration={500}>
    <img src={require('../imgs/icons/logo.png')} className=' h-32 w-auto block md:hidden'></img>
    </Link>
    
    <div className=' hidden md:block'>
      <Link className=' btn bg-transparent hover:bg-blue-600 hover:text-white text-blue-600 border-2 border-blue-600 hover:border-blue-600 duration-200' activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact Us</Link>
    </div>
  </div>
  
</div>
  </div>
);

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
