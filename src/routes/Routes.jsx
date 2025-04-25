import React from 'react'
import { Navigate } from 'react-router-dom'

const routes = ([
  {
    path: "",
    element: <layouts/>,
    errorElement: <Navigate to="/404"/>,
    children:[
      {
        index:true,
        element:<Homepage/>,
      },
      {
        path:'/contact',
        element:<contact/>
      },
      {
      path:'/about',
      element:<contact/>,
     }
    ]
  }
])



export default routes