import React from 'react'


const Navbar = () => {
  return (
    <header class=" mx-auto px-4 ">
        <a class="text-red-500 text-3xl font-bold" href="">logo</a>
        <nav class=" flex justify-end space-x-4 text-gray-600 font-medium ">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">portifolio</a>
            <a href="">services</a>
            <a href="">contact  us</a>
        </nav>
    </header>
  )
}

export default Navbar