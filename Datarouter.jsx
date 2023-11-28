import React from 'react'
import Tabledata from './Tabledata'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Deatilphone from './Deatilphone'
import Update from './Update'
import Edit from './Edit'
import Add from './Add'


function Datarouter() {
  const myrouter = createBrowserRouter([
    { path:'/', element: <><Tabledata/></>},
    { path:'/1/:phoneid', element: <><Deatilphone/></>},
    { path:'/edit', element: <><Edit/></>},
    { path:'/create', element: <><Update/></>},
    { path:'/c', element: <><Add/></>},

   
   
])
  return (
    <div>
        <RouterProvider router={myrouter}/>
    </div>
  )
}

export default Datarouter

