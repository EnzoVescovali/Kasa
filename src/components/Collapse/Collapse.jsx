import React from 'react'
import "./Collapse.css"

function Collapse({title, content}) {
  return (
    <>
        <details>
                <summary>
                    <span> {title} </span>
                </summary>
                <p> {content} </p>
        </details>
    </>
  )
}

export default Collapse