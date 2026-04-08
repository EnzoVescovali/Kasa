import React from 'react'
import "./CardsContainer.css"
import Card from '../Card/Card'
import image1 from "../../assets/images1.jpg";
import image2 from "../../assets/images2.jpg";
import image3 from "../../assets/images3.jpg";
import logement from "../../data/Data.json"

function CardsContainer() {
  return (
    <>
        <section>
            {logement.map((card) => (
                    <Card 
                        key={card.id}
                        title={card.title} 
                        image={card.cover} 
                    />
                ))}
        </section>
    </>
  )
}

export default CardsContainer