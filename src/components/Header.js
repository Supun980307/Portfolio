import React from 'react';
import Logo from '../assets/supun-logo.png';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        
        <a href='#' >
          <img src={Logo} alt='' className='text-[20px]' id='Logo'/>
        </a>
        
        <button className='btn btn-sm btn-work'>Work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;
