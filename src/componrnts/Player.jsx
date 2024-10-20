import Appbar from "./Appbar"
import Navbar from "./Navbar"

const Player = () => {
  return (
    <div className="bg-[#0f0f0f] text-white flex h-[100vh]">
      <Navbar />
      {/* <div> */}
        <Appbar />

      {/* </div> */}
    </div>
  )
}

export default Player
