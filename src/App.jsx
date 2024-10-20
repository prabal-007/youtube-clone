import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Landing from "./componrnts/Landing"
import Player from "./componrnts/Player"


function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Landing />
    }, 
    {
      path: "/player",
      element: <Player />
    }
  ])

  return (
    <>
    <RouterProvider router={route} />
    </>
  )
}

export default App
