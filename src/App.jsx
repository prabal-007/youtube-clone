import Appbar from "./componrnts/Appbar"
import Navbar from "./componrnts/Navbar"
import SearchTabs from "./componrnts/SearchTabs"
import { VideoGrid } from "./componrnts/VideoGrid"


function App() {

  return (
    <>
    <div className="bg-[#0f0f0f] text-white flex">
      <Navbar />
      <div>
        <Appbar />
        <SearchTabs className="md:hidden" />
      <VideoGrid />
      </div>
    </div>
    </>
  )
}

export default App
