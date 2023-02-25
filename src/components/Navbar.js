
import React from 'react'
import { Link, Outlet } from "react-router-dom"
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <nav className="navigation--bar">
        <ul className='nav__list'>
          <li className='nav__item'>  <Link to="/home" className='nav__link'>home</Link>  </li>
          <li className='nav__item'>  <Link to='/home/profile' className='nav__link'>profile</Link>   </li>
        </ul>
        </nav>
<Outlet />

    </div>
  )
}

export default Navbar
