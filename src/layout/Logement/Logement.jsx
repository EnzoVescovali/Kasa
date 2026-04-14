import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../../data/Data.json"
import Error from '../ErrorPage/Error'
import Caroussel from '../../components/Caroussel/Caroussel'
import './Logement.css'
import Collapse from '../../components/Collapse/Collapse'

function Logement() {
    const { id } = useParams()
    const logement = data.find((data) => data.id === id)

    if (logement === undefined) return (<Error />)

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

                <div className="logementRightContainer">
                    <div className="host">
                        <span>{logement.host.name}</span>
                        <img src={logement.host.picture} alt={logement.host.name} />
                    </div>

                    <div className='stars'>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={star <= Number(logement.rating) ? "star active" : "star"}
                            >
                                *
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="logementCollapses">
                <Collapse
                    title="Description"
                    content={logement.description}
                />

                <Collapse
                    title="Équipements"
                    content={logement.equipments.join("\n")}
                />
            </div>
        </>
    )
}

export default Logement