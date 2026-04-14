import React from 'react'
import { useParams } from 'react-router'
import data from "../../data/Data.json"
import Error from '../ErrorPage/Error'
import Caroussel from '../../components/Caroussel/Caroussel'
import './Logement.css'

function Logement() {
    const {id} = useParams()
    const logement = data.find((data)=> data.id === id)

    if(logement === undefined) return (<Error/>)
  return (
    <>
    <Caroussel pictures={logement.pictures} />
      <div className="logementContainer">
        <div className="logementLeftContainer">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>        
        </div>

        <div className="logementLeftContainer">
          <div className="host">
            <span>{logement.host.name}</span>
            <img src={logement.host.picture} />
          </div>
          <div className='stars'>
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={star <= Number(logement.rating) ? "star active" : "star"  }>
                *
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Logement