import React from 'react'
import { NavLink } from 'react-router-dom'

const VideoCard = (props) => {
    return (
        <div className='w-[460px] m-2 font-sans relative p-2 cursor-pointer'>
            <NavLink to="/player">
                <img src={`./${props.thumbnail}`} className='rounded-lg' alt="" />
                <span className='absolute text-white bg-black p-1 px-1 text-xs font-semibold rounded-md left-[416px] top-[224px]'>{props.duration}</span>
                <div className='flex'>
                    <img src={`./${props.channel}`} className='rounded-full h-11 w-11 m-1' alt="" />
                    <div>
                        <h5 className='font-semibold'>{props.title}</h5>
                        <div className='flex flex-col text-[12px] text-xs text-gray-300 font-semibold'>
                            <span>{props.singer}</span>
                            <span>
                                {props.views}
                            </span>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default VideoCard
