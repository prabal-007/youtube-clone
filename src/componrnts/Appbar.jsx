import React from 'react'
import { IoMdMic } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Appbar = () => {
    return (
        <div className='flex justify-between items-center py-3 px-4 bg-[#0f0f0f] text-white'>
            <img src="./logo.png" className='w-28 h-7' alt="" />
            <div className='flex h-10 w-[44%] gap-12 relative'>
                <input type="text" placeholder='Search' className='w-[90%] h-11 border-2 border-[#242323] bg-[#0f0f0f] rounded-l-full p-2 pl-4' />
                <button className='bg-[#242323] w-15 h-11 absolute left-[84%] p-1 px-3 rounded-r-full mb-1'><FiSearch className='h-8 w-6 ml-1' /></button>
                <button className='w-10 border-gray-400 bg-[#242323] rounded-full'><IoMdMic className='h-8 w-6 ml-2'/></button>
            </div>
            <div className='flex justify-around items-center w-40'>
            <HiOutlineDotsVertical />
            <button className='border border-gray-500 rounded-3xl w-28 p-1 px-2 flex justify-around items-center font-semibold'><CgProfile className='h-6 w-6'/>Sign in</button>
            </div>
        </div>
    )
}

export default Appbar
