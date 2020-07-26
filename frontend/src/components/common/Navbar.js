import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>To do app</h2>
      <nav>
        <ul>
          <li><Link to="/login">Log in</Link></li>
          <li><Link to="/signup">Sign up</Link></li>
        </ul>
        <span></span>
        <span></span>
        <span></span>
      </nav>
    </div>

  )
}

export default Navbar