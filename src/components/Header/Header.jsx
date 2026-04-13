import React from 'react'
import "./Header.css"

function Header( {variant, title} ) {
  return (
    <>
        {/* <h1 className='headerTitle'>Chez vous, partout et ailleurs</h1> */}
        <section className={`header ${variant}`}>
          {title && <h1> {title} </h1>}
        </section>
    </>
  )
}

export default Header