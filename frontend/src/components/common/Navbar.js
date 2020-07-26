import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/login">Log in</Link></li>
        <li><Link to="/signup">Sign up</Link></li>
      </ul>
      <span></span>
      <span></span>
      <span></span>
    </nav>
  )
}

export default Navbar