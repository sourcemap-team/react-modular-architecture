import * as React from 'react'
import { NavLink } from 'react-router-dom'

function TopMenu() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: 'underline'
  }

  let activeClassName = 'underline'

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="auth" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Auth
          </NavLink>
        </li>
        <li>
          <NavLink to="notfound" className={({ isActive }) => (isActive ? activeClassName : undefined)}>
            NotFound
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default TopMenu
