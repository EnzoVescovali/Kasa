import React from 'react'
import "./CardsContainer.css"
import Card from '../Card/Card'
import image1 from "../../assets/images1.jpg";
import image2 from "../../assets/images2.jpg";
import image3 from "../../assets/images3.jpg";

const cards = [
    {
        id: 1,
        image: image1,
        title: "blabla1,"
    },
    {
        id: 2,
        image: image2,
        title: "blabla2,"
    },
    {
        id: 3,
        image: image3,
        title: "blabla3,"
    },


]

function CardsContainer() {
  return (
    <>
        <section>
            {cards.map((card) => (
                    <Card 
                        key={card.id}
                        title={card.title} 
                        image={card.image} 
                    />
                ))}
        </section>
    </>
  )
}

export default CardsContainer