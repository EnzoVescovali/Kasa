import React from 'react'
import logo from '../../assets/.LOGO.png'
import "./Navbar.css"
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <>
      <nav className="wrap">
        <div className="LeftSide">
                <img src={logo}/>
        </div>
        <ul className="RightSide">
          <li>
            <NavLink to="/">
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