import React from 'react'
import './Caroussel.css'
import { useState } from 'react'

function Caroussel({pictures}) {
    const [index, setIndex] = useState(0)

     if (!pictures || pictures.length === 0) {
        return null;
    }
  return (
    <>
        <div className="caroussel">
        {pictures.length > 1 && (
            <button
              type="button"
              onClick={() =>
                setIndex(index === 0 ? pictures.length - 1 : index - 1)}
            >
              {"<"}
            </button>
        )}

            <img src={pictures[index]} />
            
        {pictures.length > 1 && (
            <button
              type="button"
              onClick={() =>
                setIndex(index === pictures.length - 1 ? 0 : index + 1)}
            >
              {">"}
            </button>
        )}   

            {pictures.length > 1 && (
        <p>
          {index + 1}/{pictures.length}
        </p>
      )}
        </div>
    </>
  )
}

export default Caroussel