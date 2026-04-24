import React from 'react'
import logo from '../../assets/.LOGO.png'
import "./Navbar.css"
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <>
      <nav className="wrap">
        <NavLink to="/" className="LeftSide">
                <img src={logo}/>
        </NavLink>
        <ul className="RightSide">
          <li>
            <NavLink to="/" end>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/a-propos">
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar