import React from 'react'
import Navbar from './components/Navbar'
import {  Router , Route , Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './app/About'
import Portifolio from './components/Portifolio'
const App = () => {
  return (
  <div>
        <Routes>
          <Route element={<Navbar/>}>
          <Route path="/"  element={<Home/>}/>
           <Route path="/About"  element={<About/>}/>
           <Route path="/portifolio"  element={<Portifolio/>}/>
          </Route>
        </Routes>
  </div>
  )
}

export default App