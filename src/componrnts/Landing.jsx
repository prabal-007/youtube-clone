import React from 'react'
import Navbar from './Navbar'
import Appbar from './Appbar'
import SearchTabs from './SearchTabs'
import { VideoGrid } from './VideoGrid'

const Landing = () => {
  return (
    <div className="bg-[#0f0f0f] text-white flex h-[100vh]">
      <Navbar />
      <div>
        <Appbar />
        <SearchTabs className="md:hidden" />
        <VideoGrid/>
      </div>
    </div>
  )
}

export default Landing
