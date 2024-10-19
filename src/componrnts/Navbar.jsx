import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaClockRotateLeft } from "react-icons/fa6";


const Navbar = () => {
  return (
    <div className='w-20 grid grid-rows-12 justify-center p-6'>
        <RxHamburgerMenu className='h-6 w-6'/>
        <MdHome className='h-6 w-6'/>
        <SiYoutubeshorts className='h-6 w-6'/>
        <MdOutlineSubscriptions className='h-6 w-6'/>
        <CgProfile className='h-6 w-6'/>
        <FaClockRotateLeft className='h-6 w-6'/>
    </div>
  )
}

export default Navbar
