import React from 'react'
import "./Card.css"

function Card( {image, title} ) {
  return (
    <>
        <article>
            <img src={image} />
            <h3> {title} </h3>
        </article>
    </>
  )
}

export default Card