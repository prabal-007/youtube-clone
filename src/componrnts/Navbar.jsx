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
        <RxHamburgerMenu className='h-6 w-6 cursor-pointer'/>
        <MdHome className='h-6 w-6 cursor-pointer'/>
        <SiYoutubeshorts className='h-6 w-6 cursor-pointer'/>
        <MdOutlineSubscriptions className='h-6 w-6 cursor-pointer'/>
        <CgProfile className='h-6 w-6 cursor-pointer'/>
        <FaClockRotateLeft className='h-6 w-6 cursor-pointer'/>
    </div>
  )
}

export default Navbar
