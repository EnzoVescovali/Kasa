import React from 'react'
import "./CardsContainer.css"
import Card from '../Card/Card'
import logement from "../../data/Data.json"

function CardsContainer() {
  return (
    <>
        <section>
            {logement.map((card) => (
                    <Card 
                        id={card.id}
                        title={card.title} 
                        image={card.cover} 
                    />
                ))}
        </section>
    </>
  )
}

export default CardsContainer