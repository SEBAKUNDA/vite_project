import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavLinks = [
  {
    title:"Home",
    target:"/"
  },
  {
    title:"About",
    target:"About",
  },
  {
    title:"contact",
    target:"Contact",
  },
];

const NavbarLink = () => {
  return (

    <div>
      <ul>
         {NavLinks.map((Link)=>(
        <li key={Link.title}>
         <NavLink 
         to = {Link.target}
         end
         >
       {Link.title}
         </NavLink>
        </li>
         ))}
      </ul>
    </div>
  )
}

export default NavbarLink