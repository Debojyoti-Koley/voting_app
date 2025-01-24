import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
    <ul>
        <li>
            <Link to="/">Logo</Link>
        </li>
        <li>
          <Link to="/signUp">Sign Up</Link>
        </li>
        <li>
        <Link to="/logIn">Log In</Link>
        </li>
    </ul>
</div>
  )
}

export default Navbar