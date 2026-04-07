import React from 'react'
import "./Footer.css"
import logo from "../../assets/.LOGO.png"

function Footer() {
  return (
    <>
        <footer>
            <img src={logo} alt="" />
            <p> &copy; 2020 Kasa. ALL rights reserved</p>
        </footer>
    </>
  )
}

export default Footer