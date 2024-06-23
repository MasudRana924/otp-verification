import React from 'react';
import logo from '../assets/bkashLogo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between gap-4 items-center w-3/4 mx-auto'>
            <div>
           <Link to='/'>
           <img src={logo} alt="" className='w-24 h-16'/></Link>
            {/* <p className=' text-gray-900 '>Payment Gateway </p> */}
            </div>
            <div className='flex gap-4'>
                <Link to="/register"><button className='h-10 text-white font-roboto w-20' style={{backgroundColor:'#E2136E'}}>Register</button></Link>
                <Link to="/login"><button className='h-10 text-white font-roboto w-20' style={{backgroundColor:'#E2136E'}}>Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;