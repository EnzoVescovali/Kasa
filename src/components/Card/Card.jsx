import React from 'react'
import "./Card.css"
import { NavLink } from 'react-router'

function Card( {id, image, title} ) {
  return (
    <>
        <NavLink to={`/logement/${id}`} className="cardLink">
          <article>
              <img src={image} />
              <h3> {title} </h3>
          </article>
        </NavLink>
        
    </>
  )
}

export default Card