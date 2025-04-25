import React from 'react'
import { Outlet } from 'react-router-dom'
import {layouts} from 'react-router-dom'
const layouts = () => {
  return (
   <div>
    <Outlet/>
   </div>
  )
}

export default layouts